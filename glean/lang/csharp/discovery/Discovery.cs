/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

using Facebook.SocialVR.Packages;
using Microsoft.Build.Construction;
using Serilog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace Glean.Discovery;

public static class Discovery
{
    public static void DiscoverUnity(string repoRoot, string outputPath)
    {
        var packageResolver = new PackageResolver();
        var ovrsourceRoot = Package.GetOvrsourcePath();

        var workItems = Package
            .GetAllPackages(packageResolver, ovrsourceRoot)
            .Select(package =>
            {
                var absoluteManifestPath = Path.Combine(ovrsourceRoot, Common.CONFIGS[package.type].path, package.name, "MANIFEST");
                var relativeManifestPath = Path.GetRelativePath(repoRoot, absoluteManifestPath);

                Log.Information($"Discovered Unity package {package.fullName}");
                return new WorkItem.UnityPackage(package.type, package.name, relativeManifestPath);
            })
            .Cast<WorkItem>()
            .ToList();

        WriteWorkItems(workItems, outputPath);
    }

    public static void DiscoverMSBuild(string repoRoot, string outputPath)
    {
        HashSet<string> projectPaths = new ();
        HashSet<string> solutionPaths = new ();

        using (StreamReader reader = new StreamReader(Console.OpenStandardInput()))
        {
            while (!reader.EndOfStream)
            {
                var line = reader.ReadLine();
                var repoRelativePath = line.Trim();
                switch (Path.GetExtension(repoRelativePath))
                {
                    case ".csproj":
                        projectPaths.Add(repoRelativePath);
                        continue;
                    case ".sln":
                        solutionPaths.Add(repoRelativePath);
                        continue;
                    default:
                        continue;
                }
            }
        }

        List<WorkItem> workItems = new();
        foreach (var solutionPath in solutionPaths)
        {
            try
            {
                var solution = SolutionFile.Parse(Path.Combine(repoRoot, solutionPath));

                var projectPathsInSolution = solution
                    .ProjectsInOrder
                    .Select(project => Path.GetRelativePath(repoRoot, project.AbsolutePath))
                    .Where(path => Path.GetExtension(path) == ".csproj")
                    .ToList();

                projectPaths.ExceptWith(projectPathsInSolution);

                if (projectPathsInSolution.Any())
                {
                    Log.Information($"Discovered solution {solutionPath} ({projectPathsInSolution.Count()} project(s))");
                    workItems.Add(new WorkItem.MSBuildSolution(solutionPath, projectPathsInSolution.ToArray()));
                }
                else
                {
                    Log.Information($"{solutionPath} does not contain any C# projects");
                }
            }
            catch (Exception)
            {
                Log.Error($"Failed to parse {solutionPath}");
            }
        }

        workItems.AddRange(projectPaths.Select(projectPath => new WorkItem.MSBuildProject(projectPath)));

        WriteWorkItems(workItems, outputPath);
    }

    private static void WriteWorkItems(IEnumerable<WorkItem> workItems, string outputPath)
    {
        Log.Information($"Wrote work items to {Path.GetFullPath(outputPath)}");
        var options = new JsonSerializerOptions { WriteIndented = true };
        File.WriteAllText(outputPath, JsonSerializer.Serialize(workItems, options));
    }

    public static void Materialize(string unityProjectTemplatePath, string outputPath)
    {
        var encodedWork = Console.In.ReadToEnd();
        var workItems = JsonSerializer.Deserialize<WorkItem[]>(encodedWork);
        List<MaterializedWorkItem> materializedWorkItems = new ();
        foreach (var workItem in workItems)
        {
            switch (workItem)
            {
                case WorkItem.MSBuildProject msbuildProjectWorkItem:
                    MaterializeMSBuildProject(materializedWorkItems, msbuildProjectWorkItem);
                    break;
                case WorkItem.MSBuildSolution msbuildSolutionWorkItem:
                    MaterializeMSBuildSolution(materializedWorkItems, msbuildSolutionWorkItem);
                    break;
                case WorkItem.UnityPackage unityWorkItem:
                    MaterializeUnity(materializedWorkItems, unityProjectTemplatePath, unityWorkItem);
                    break;
                case WorkItem.BuckBuildTarget buckBuildTargetWorkItem:
                    throw new NotImplementedException();
                    break;
            }
        }

        var options = new JsonSerializerOptions { WriteIndented = true };
        File.WriteAllText(outputPath, JsonSerializer.Serialize(materializedWorkItems, options));
        Log.Information($"Wrote materialized work items to {outputPath}");
    }

    private static void MaterializeUnity(List<MaterializedWorkItem> materializedWorkItems, string unityProjectTemplatePath, WorkItem.UnityPackage unityWorkItem)
    {
        throw new NotImplementedException();
    }

    private static void MaterializeMSBuildProject(List<MaterializedWorkItem> materializedWorkItems, WorkItem.MSBuildProject msbuildProjectWorkItem)
    {
        var absoluteProjectPath = Path.GetFullPath(msbuildProjectWorkItem.ProjectPath);
        var materializedWorkItem = new MaterializedWorkItem.MSBuildProject(
            absoluteProjectPath
        );
        materializedWorkItems.Add(materializedWorkItem);
    }

    private static void MaterializeMSBuildSolution(List<MaterializedWorkItem> materializedWorkItems, WorkItem.MSBuildSolution msbuildSolutionWorkItem)
    {
        var absoluteSolutionPath = Path.GetFullPath(msbuildSolutionWorkItem.SolutionPath);
        var absoluteProjectPaths = msbuildSolutionWorkItem
            .ProjectPaths
            .Select(Path.GetFullPath)
            .ToArray();
        var materializedWorkItem = new MaterializedWorkItem.MSBuildSolution(
            absoluteSolutionPath,
            absoluteProjectPaths
        );
        materializedWorkItems.Add(materializedWorkItem);
    }
}
