# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List, Dict, TypeVar
from thrift.py3 import Struct
import ast
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, angle_for, R, Just, InnerGleanSchemaPredicate
from glean.schema.py.src import *


from glean.schema.lsif.types import (
    Range,
    MonikerSymbolKind,
    Name,
    Document,
    ToSrcRange,
    PackageInformation,
    Definition,
    Project,
    DefinitionKind,
    SearchByMoniker,
    DefinitionMoniker,
    MonikerScheme,
    MonikerId,
    HoverText,
    Reference,
    SearchByExactLocation,
    SearchNonLocalByLocation,
    NameDefinition,
    ProjectDocument,
    SearchByName,
    ResolveLocation,
    FileEntityXRefLocation,
    DefinitionLocation,
    NameLowerCase,
    Declaration,
    TagDefinition,
    HoverContent,
    SearchByExactLocationAndName,
    DefinitionUse,
    EntityDefinition,
    EntityLocation,
    Metadata,
    MonikerDefinition,
    EntityUses,
    EntityKind,
    DefinitionHover,
    Moniker,
    ToolInfo,
    Location,
    LanguageId,
    SomeEntity,
    SymbolKind,
    Entity,
    RangeSpan,
    MonikerKind,
)


class LsifRange(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], range: ast.Expr, fullRange: ast.Expr, text: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Range.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, range, 'range'), angle_for(__env, fullRange, 'fullRange'), angle_for(__env, text, 'text')])) or '_' } }}", Range

  @staticmethod
  def angle_query(*, range: Optional["LsifRangeSpan"] = None, fullRange: Optional[Union[Just["LsifRangeSpan"], Just[None]]] = None, text: Optional["LsifName"] = None) -> "LsifRange":
    raise Exception("this function can only be called from @angle_query")



class LsifMonikerSymbolKind(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], moniker: ast.Expr, kind: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.MonikerSymbolKind.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, moniker, 'moniker'), angle_for(__env, kind, 'kind')])) or '_' } }}", MonikerSymbolKind

  @staticmethod
  def angle_query(*, moniker: Optional["LsifMoniker"] = None, kind: Optional["LsifSymbolKind"] = None) -> "LsifMonikerSymbolKind":
    raise Exception("this function can only be called from @angle_query")



class LsifName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Name.2 { angle_for(__env, arg, None) or '_' }", Name

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "LsifName":
    raise Exception("this function can only be called from @angle_query")



class LsifDocument(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, language: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Document.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, language, 'language')])) or '_' } }}", Document

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, language: Optional["LsifLanguageId"] = None) -> "LsifDocument":
    raise Exception("this function can only be called from @angle_query")



class LsifToSrcRange(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, lsif: ast.Expr, range: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.ToSrcRange.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, lsif, 'lsif'), angle_for(__env, range, 'range')])) or '_' } }}", ToSrcRange

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, lsif: Optional["LsifRangeSpan"] = None, range: Optional["SrcRange"] = None) -> "LsifToSrcRange":
    raise Exception("this function can only be called from @angle_query")



class LsifPackageInformation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], name: ast.Expr, manager: ast.Expr, version: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.PackageInformation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, name, 'name'), angle_for(__env, manager, 'manager'), angle_for(__env, version, 'version')])) or '_' } }}", PackageInformation

  @staticmethod
  def angle_query(*, name: Optional[str] = None, manager: Optional[str] = None, version: Optional[str] = None) -> "LsifPackageInformation":
    raise Exception("this function can only be called from @angle_query")



class LsifDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, range: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Definition.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, range, 'range')])) or '_' } }}", Definition

  @staticmethod
  def angle_query(*, file: Optional["LsifDocument"] = None, range: Optional["LsifRange"] = None) -> "LsifDefinition":
    raise Exception("this function can only be called from @angle_query")



class LsifProject(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], kind: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Project.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, kind, 'kind')])) or '_' } }}", Project

  @staticmethod
  def angle_query(*, kind: Optional["LsifLanguageId"] = None) -> "LsifProject":
    raise Exception("this function can only be called from @angle_query")



class LsifDefinitionKind(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], defn: ast.Expr, kind: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.DefinitionKind.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, defn, 'defn'), angle_for(__env, kind, 'kind')])) or '_' } }}", DefinitionKind

  @staticmethod
  def angle_query(*, defn: Optional["LsifDefinition"] = None, kind: Optional["LsifSymbolKind"] = None) -> "LsifDefinitionKind":
    raise Exception("this function can only be called from @angle_query")



class LsifSearchByMoniker(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], ident: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SearchByMoniker.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, ident, 'ident'), angle_for(__env, entity, 'entity')])) or '_' } }}", SearchByMoniker

  @staticmethod
  def angle_query(*, ident: Optional["LsifMonikerId"] = None, entity: Optional["LsifEntity"] = None) -> "LsifSearchByMoniker":
    raise Exception("this function can only be called from @angle_query")



class LsifDefinitionMoniker(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], defn: ast.Expr, moniker: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.DefinitionMoniker.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, defn, 'defn'), angle_for(__env, moniker, 'moniker')])) or '_' } }}", DefinitionMoniker

  @staticmethod
  def angle_query(*, defn: Optional["LsifDefinition"] = None, moniker: Optional[Union[Just["LsifMoniker"], Just[None]]] = None) -> "LsifDefinitionMoniker":
    raise Exception("this function can only be called from @angle_query")



class LsifMonikerScheme(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.MonikerScheme.2 { angle_for(__env, arg, None) or '_' }", MonikerScheme

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "LsifMonikerScheme":
    raise Exception("this function can only be called from @angle_query")



class LsifMonikerId(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.MonikerId.2 { angle_for(__env, arg, None) or '_' }", MonikerId

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "LsifMonikerId":
    raise Exception("this function can only be called from @angle_query")



class LsifHoverText(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.HoverText.2 { angle_for(__env, arg, None) or '_' }", HoverText

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "LsifHoverText":
    raise Exception("this function can only be called from @angle_query")



class LsifReference(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, range: ast.Expr, target: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Reference.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, range, 'range'), angle_for(__env, target, 'target')])) or '_' } }}", Reference

  @staticmethod
  def angle_query(*, file: Optional["LsifDocument"] = None, range: Optional["LsifRange"] = None, target: Optional["LsifDefinition"] = None) -> "LsifReference":
    raise Exception("this function can only be called from @angle_query")



class LsifSearchByExactLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, span: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SearchByExactLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, span, 'span'), angle_for(__env, entity, 'entity')])) or '_' } }}", SearchByExactLocation

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, span: Optional["LsifRangeSpan"] = None, entity: Optional["LsifEntity"] = None) -> "LsifSearchByExactLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifSearchNonLocalByLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, name: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SearchNonLocalByLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, name, 'name'), angle_for(__env, entity, 'entity')])) or '_' } }}", SearchNonLocalByLocation

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, name: Optional["LsifName"] = None, entity: Optional["LsifEntity"] = None) -> "LsifSearchNonLocalByLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifNameDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], name: ast.Expr, defn: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.NameDefinition.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, name, 'name'), angle_for(__env, defn, 'defn')])) or '_' } }}", NameDefinition

  @staticmethod
  def angle_query(*, name: Optional["LsifName"] = None, defn: Optional["LsifDefinitionMoniker"] = None) -> "LsifNameDefinition":
    raise Exception("this function can only be called from @angle_query")



class LsifProjectDocument(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, project: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.ProjectDocument.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, project, 'project')])) or '_' } }}", ProjectDocument

  @staticmethod
  def angle_query(*, file: Optional["LsifDocument"] = None, project: Optional["LsifProject"] = None) -> "LsifProjectDocument":
    raise Exception("this function can only be called from @angle_query")



class LsifSearchByName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], name: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SearchByName.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, name, 'name'), angle_for(__env, entity, 'entity')])) or '_' } }}", SearchByName

  @staticmethod
  def angle_query(*, name: Optional["LsifName"] = None, entity: Optional["LsifEntity"] = None) -> "LsifSearchByName":
    raise Exception("this function can only be called from @angle_query")



class LsifResolveLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], location: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.ResolveLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, location, 'location'), angle_for(__env, entity, 'entity')])) or '_' } }}", ResolveLocation

  @staticmethod
  def angle_query(*, location: Optional["LsifLocation"] = None, entity: Optional["LsifEntity"] = None) -> "LsifResolveLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifFileEntityXRefLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, source: ast.Expr, target: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.FileEntityXRefLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, source, 'source'), angle_for(__env, target, 'target'), angle_for(__env, entity, 'entity')])) or '_' } }}", FileEntityXRefLocation

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, source: Optional["SrcRange"] = None, target: Optional["LsifLocation"] = None, entity: Optional["LsifEntity"] = None) -> "LsifFileEntityXRefLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifDefinitionLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], defn: ast.Expr, location: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.DefinitionLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, defn, 'defn'), angle_for(__env, location, 'location')])) or '_' } }}", DefinitionLocation

  @staticmethod
  def angle_query(*, defn: Optional["LsifDefinition"] = None, location: Optional["LsifLocation"] = None) -> "LsifDefinitionLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifNameLowerCase(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], nameLowerCase: ast.Expr, name: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.NameLowerCase.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, nameLowerCase, 'nameLowerCase'), angle_for(__env, name, 'name')])) or '_' } }}", NameLowerCase

  @staticmethod
  def angle_query(*, nameLowerCase: Optional[str] = None, name: Optional["LsifName"] = None) -> "LsifNameLowerCase":
    raise Exception("this function can only be called from @angle_query")



class LsifDeclaration(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, range: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Declaration.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, range, 'range')])) or '_' } }}", Declaration

  @staticmethod
  def angle_query(*, file: Optional["LsifDocument"] = None, range: Optional["LsifRange"] = None) -> "LsifDeclaration":
    raise Exception("this function can only be called from @angle_query")



class LsifTagDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], language: ast.Expr, defn: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.TagDefinition.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, language, 'language'), angle_for(__env, defn, 'defn'), angle_for(__env, entity, 'entity')])) or '_' } }}", TagDefinition

  @staticmethod
  def angle_query(*, language: Optional["LsifLanguageId"] = None, defn: Optional["LsifDefinitionMoniker"] = None, entity: Optional["LsifEntity"] = None) -> "LsifTagDefinition":
    raise Exception("this function can only be called from @angle_query")



class LsifHoverContent(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], text: ast.Expr, language: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.HoverContent.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, text, 'text'), angle_for(__env, language, 'language')])) or '_' } }}", HoverContent

  @staticmethod
  def angle_query(*, text: Optional["LsifHoverText"] = None, language: Optional["LsifLanguageId"] = None) -> "LsifHoverContent":
    raise Exception("this function can only be called from @angle_query")



class LsifSearchByExactLocationAndName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, name: ast.Expr, span: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SearchByExactLocationAndName.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, name, 'name'), angle_for(__env, span, 'span'), angle_for(__env, entity, 'entity')])) or '_' } }}", SearchByExactLocationAndName

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, name: Optional["LsifName"] = None, span: Optional["LsifRangeSpan"] = None, entity: Optional["LsifEntity"] = None) -> "LsifSearchByExactLocationAndName":
    raise Exception("this function can only be called from @angle_query")



class LsifDefinitionUse(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, file: ast.Expr, range: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.DefinitionUse.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, target, 'target'), angle_for(__env, file, 'file'), angle_for(__env, range, 'range')])) or '_' } }}", DefinitionUse

  @staticmethod
  def angle_query(*, target: Optional["LsifDefinition"] = None, file: Optional["LsifDocument"] = None, range: Optional["LsifRange"] = None) -> "LsifDefinitionUse":
    raise Exception("this function can only be called from @angle_query")



class LsifEntityDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, defn: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.EntityDefinition.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, defn, 'defn')])) or '_' } }}", EntityDefinition

  @staticmethod
  def angle_query(*, entity: Optional["LsifEntity"] = None, defn: Optional["LsifDefinitionMoniker"] = None) -> "LsifEntityDefinition":
    raise Exception("this function can only be called from @angle_query")



class LsifEntityLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, location: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.EntityLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, location, 'location')])) or '_' } }}", EntityLocation

  @staticmethod
  def angle_query(*, entity: Optional["LsifEntity"] = None, location: Optional["LsifLocation"] = None) -> "LsifEntityLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifMetadata(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], lsifVersion: ast.Expr, positionEncoding: ast.Expr, toolInfo: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Metadata.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, lsifVersion, 'lsifVersion'), angle_for(__env, positionEncoding, 'positionEncoding'), angle_for(__env, toolInfo, 'toolInfo')])) or '_' } }}", Metadata

  @staticmethod
  def angle_query(*, lsifVersion: Optional[str] = None, positionEncoding: Optional[str] = None, toolInfo: Optional[Union[Just["LsifToolInfo"], Just[None]]] = None) -> "LsifMetadata":
    raise Exception("this function can only be called from @angle_query")



class LsifMonikerDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], ident: ast.Expr, moniker: ast.Expr, defn: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.MonikerDefinition.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, ident, 'ident'), angle_for(__env, moniker, 'moniker'), angle_for(__env, defn, 'defn')])) or '_' } }}", MonikerDefinition

  @staticmethod
  def angle_query(*, ident: Optional["LsifMonikerId"] = None, moniker: Optional["LsifMoniker"] = None, defn: Optional["LsifDefinition"] = None) -> "LsifMonikerDefinition":
    raise Exception("this function can only be called from @angle_query")



class LsifEntityUses(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, file: ast.Expr, range: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.EntityUses.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, target, 'target'), angle_for(__env, file, 'file'), angle_for(__env, range, 'range')])) or '_' } }}", EntityUses

  @staticmethod
  def angle_query(*, target: Optional["LsifEntity"] = None, file: Optional["SrcFile"] = None, range: Optional["SrcRange"] = None) -> "LsifEntityUses":
    raise Exception("this function can only be called from @angle_query")



class LsifEntityKind(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, kind: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.EntityKind.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, kind, 'kind')])) or '_' } }}", EntityKind

  @staticmethod
  def angle_query(*, entity: Optional["LsifEntity"] = None, kind: Optional["LsifSymbolKind"] = None) -> "LsifEntityKind":
    raise Exception("this function can only be called from @angle_query")



class LsifDefinitionHover(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], defn: ast.Expr, hover: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.DefinitionHover.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, defn, 'defn'), angle_for(__env, hover, 'hover')])) or '_' } }}", DefinitionHover

  @staticmethod
  def angle_query(*, defn: Optional["LsifDefinition"] = None, hover: Optional["LsifHoverContent"] = None) -> "LsifDefinitionHover":
    raise Exception("this function can only be called from @angle_query")



class LsifMoniker(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], kind: ast.Expr, scheme: ast.Expr, ident: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Moniker.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, kind, 'kind'), angle_for(__env, scheme, 'scheme'), angle_for(__env, ident, 'ident')])) or '_' } }}", Moniker

  @staticmethod
  def angle_query(*, kind: Optional["LsifMonikerKind"] = None, scheme: Optional["LsifMonikerScheme"] = None, ident: Optional["LsifMonikerId"] = None) -> "LsifMoniker":
    raise Exception("this function can only be called from @angle_query")





class LsifToolInfo(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], toolName: ast.Expr, toolArgs: ast.Expr, version: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.ToolInfo.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, toolName, 'toolName'), angle_for(__env, toolArgs, 'toolArgs'), angle_for(__env, version, 'version')])) or '_' } }}", ToolInfo

  @staticmethod
  def angle_query(*, toolName: Optional[str] = None, toolArgs: Optional[List[str]] = None, version: Optional[Union[Just[str], Just[None]]] = None) -> "LsifToolInfo":
    raise Exception("this function can only be called from @angle_query")



class LsifLocation(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], name: ast.Expr, file: ast.Expr, location: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Location.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, name, 'name'), angle_for(__env, file, 'file'), angle_for(__env, location, 'location')])) or '_' } }}", Location

  @staticmethod
  def angle_query(*, name: Optional[str] = None, file: Optional["SrcFile"] = None, location: Optional["SrcRange"] = None) -> "LsifLocation":
    raise Exception("this function can only be called from @angle_query")



class LsifLanguageId(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.LanguageId.2 { angle_for(__env, arg, None) or '_' }", LanguageId

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "LsifLanguageId":
    raise Exception("this function can only be called from @angle_query")



class LsifSomeEntity(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], decl: ast.Expr, defn: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SomeEntity.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, decl, 'decl'), angle_for(__env, defn, 'defn')])) or '_' } }}", SomeEntity

  @staticmethod
  def angle_query_decl(*, decl: "LsifDeclaration") -> "LsifSomeEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_defn(*, defn: "LsifDefinitionMoniker") -> "LsifSomeEntity":
    raise Exception("this function can only be called from @angle_query")




class LsifSymbolKind(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.SymbolKind.2 { angle_for(__env, arg, None) or '_' }", SymbolKind

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "LsifSymbolKind":
    raise Exception("this function can only be called from @angle_query")



class LsifEntity(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], erlang: ast.Expr, fsharp: ast.Expr, go: ast.Expr, haskell: ast.Expr, java: ast.Expr, kotlin: ast.Expr, ocaml: ast.Expr, python: ast.Expr, rust: ast.Expr, scala: ast.Expr, swift: ast.Expr, typescript: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.Entity.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, erlang, 'erlang'), angle_for(__env, fsharp, 'fsharp'), angle_for(__env, go, 'go'), angle_for(__env, haskell, 'haskell'), angle_for(__env, java, 'java'), angle_for(__env, kotlin, 'kotlin'), angle_for(__env, ocaml, 'ocaml'), angle_for(__env, python, 'python'), angle_for(__env, rust, 'rust'), angle_for(__env, scala, 'scala'), angle_for(__env, swift, 'swift'), angle_for(__env, typescript, 'typescript')])) or '_' } }}", Entity

  @staticmethod
  def angle_query_erlang(*, erlang: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_fsharp(*, fsharp: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_go(*, go: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_haskell(*, haskell: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_java(*, java: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_kotlin(*, kotlin: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_ocaml(*, ocaml: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_python(*, python: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_rust(*, rust: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_scala(*, scala: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_swift(*, swift: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")

  @staticmethod
  def angle_query_typescript(*, typescript: "LsifSomeEntity") -> "LsifEntity":
    raise Exception("this function can only be called from @angle_query")




class LsifRangeSpan(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], lineBegin: ast.Expr, columnBegin: ast.Expr, lineEnd: ast.Expr, columnEnd: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.RangeSpan.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, lineBegin, 'lineBegin'), angle_for(__env, columnBegin, 'columnBegin'), angle_for(__env, lineEnd, 'lineEnd'), angle_for(__env, columnEnd, 'columnEnd')])) or '_' } }}", RangeSpan

  @staticmethod
  def angle_query(*, lineBegin: Optional[int] = None, columnBegin: Optional[int] = None, lineEnd: Optional[int] = None, columnEnd: Optional[int] = None) -> "LsifRangeSpan":
    raise Exception("this function can only be called from @angle_query")



class LsifMonikerKind(InnerGleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"lsif.MonikerKind.2 { angle_for(__env, arg, None) or '_' }", MonikerKind

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "LsifMonikerKind":
    raise Exception("this function can only be called from @angle_query")




