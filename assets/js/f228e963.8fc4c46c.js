"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5622],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){return function(n){var r=m(n.components);return t.createElement(e,a({},n,{components:r}))}},m=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=m(r),p=i,f=u["".concat(l,".").concat(p)]||u[p]||s[p]||a;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12038:function(e,n,r){r.d(n,{EO:function(){return o},O1:function(){return l},Rr:function(){return d}});var t,i=r(67294),a=r(44256);function l(e){return i.createElement("a",{href:t+e.file},e.file)}function o(e){return i.createElement("a",{href:t+e.file},e.children)}t=(0,a.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var d=function(e){e.children;var n=e.internal,r=e.external;return(0,a.fbContent)({internal:i.createElement("code",null,n),external:i.createElement("code",null,r)})}},37578:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var t=r(87462),i=r(63366),a=(r(67294),r(3905)),l=(r(44256),r(12038)),o=["components"],d={id:"flow",title:"JavaScript (Flow)",sidebar_label:"JavaScript (Flow)"},c=void 0,u={unversionedId:"indexer/flow",id:"indexer/flow",isDocsHomePage:!1,title:"JavaScript (Flow)",description:"The JavaScript/Flow indexer is built into the",source:"@site/docs/indexer/flow.md",sourceDirName:"indexer",slug:"/indexer/flow",permalink:"/docs/indexer/flow",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/indexer/flow.md",tags:[],version:"current",frontMatter:{id:"flow",title:"JavaScript (Flow)",sidebar_label:"JavaScript (Flow)"},sidebar:"someSidebar",previous:{title:"C++ and C",permalink:"/docs/indexer/cxx"},next:{title:"Hack",permalink:"/docs/indexer/hack"}},m=[{value:"Run the indexer",id:"run-the-indexer",children:[],level:2},{value:"Run the indexer (manually)",id:"run-the-indexer-manually",children:[],level:2},{value:"Derived predicates",id:"derived-predicates",children:[],level:2},{value:"In the shell",id:"in-the-shell",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],p={toc:m};function s(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The JavaScript/Flow indexer is built into the\n",(0,a.mdx)("a",{parentName:"p",href:"https://flow.org/"},"Flow")," system.  It's also included\nin the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/trying"},"Glean demo Docker image")," to try out."),(0,a.mdx)("h2",{id:"run-the-indexer"},"Run the indexer"),(0,a.mdx)("p",null,"The indexer is run via the main ",(0,a.mdx)("inlineCode",{parentName:"p"},"glean")," CLI tool."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"> cabal build exe:glean\n")),(0,a.mdx)("p",null,"And index your Flow repository with:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean index flow DIR --repo name/hash\n")),(0,a.mdx)("p",null,"where"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the Flow project (with ",(0,a.mdx)("inlineCode",{parentName:"li"},".flowconfig"),")"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"name/hash")," is the name of the repository to create")),(0,a.mdx)("p",null,"Provide the usual ",(0,a.mdx)("inlineCode",{parentName:"p"},"--db-root")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"--schema")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"--service")," arguments\nto ",(0,a.mdx)("inlineCode",{parentName:"p"},"glean")),(0,a.mdx)("h2",{id:"run-the-indexer-manually"},"Run the indexer (manually)"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"flow glean DIR --output-dir JSON --write-root PREFIX\n")),(0,a.mdx)("p",null,"where"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the JavaScript/Flow files"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"JSON")," is the directory in which to write the output ",(0,a.mdx)("inlineCode",{parentName:"li"},".json")," files"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"PREFIX")," is a prefix to add to the files in the Glean index (this\ncan be empty if you don't need a prefix)")),(0,a.mdx)("p",null,"The generated files can be ingested into a Glean database using ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli#glean-create"},(0,a.mdx)("inlineCode",{parentName:"a"},"glean create")),"."),(0,a.mdx)("h2",{id:"derived-predicates"},"Derived predicates"),(0,a.mdx)("p",null,"Several predicates should be derived after indexing. For each ",(0,a.mdx)("inlineCode",{parentName:"p"},"stored")," predicate in the ",(0,a.mdx)("a",{parentName:"p",href:"#schema"},"schema")," you should ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli#glean-derive"},(0,a.mdx)("inlineCode",{parentName:"a"},"glean derive"))," the predicate."),(0,a.mdx)("h2",{id:"in-the-shell"},"In the shell"),(0,a.mdx)("p",null,"Flow source can also be indexed directly from the Glean shell:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},":index flow DIR\n")),(0,a.mdx)("h2",{id:"schema"},"Schema"),(0,a.mdx)("p",null,"The schema is in ",(0,a.mdx)(l.O1,{file:"glean/schema/source/flow.angle",mdxType:"SrcFile"})))}s.isMDXComponent=!0}}]);