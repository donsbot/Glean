"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9607],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),u=function(e){return function(n){var r=m(n.components);return t.createElement(e,i({},n,{components:r}))}},m=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=m(r),p=a,s=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return r?t.createElement(s,o(o({ref:n},d),{},{components:r})):t.createElement(s,o({ref:n},d))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},12038:function(e,n,r){r.d(n,{EO:function(){return o},O1:function(){return l},Rr:function(){return c}});var t,a=r(67294),i=r(44256);function l(e){return a.createElement("a",{href:t+e.file},e.file)}function o(e){return a.createElement("a",{href:t+e.file},e.children)}t=(0,i.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var c=function(e){e.children;var n=e.internal,r=e.external;return(0,i.fbContent)({internal:a.createElement("code",null,n),external:a.createElement("code",null,r)})}},18958:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),l=(r(44256),r(12038)),o=["components"],c={id:"hack",title:"Hack",sidebar_label:"Hack"},d=void 0,u={unversionedId:"indexer/hack",id:"indexer/hack",isDocsHomePage:!1,title:"Hack",description:"The Hack indexer is built into the Hack typechecker. Stable and nightly binaries of the Hack indexer are available.",source:"@site/docs/indexer/hack.md",sourceDirName:"indexer",slug:"/indexer/hack",permalink:"/docs/indexer/hack",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/indexer/hack.md",tags:[],version:"current",frontMatter:{id:"hack",title:"Hack",sidebar_label:"Hack"},sidebar:"someSidebar",previous:{title:"JavaScript (Flow)",permalink:"/docs/indexer/flow"},next:{title:"Haskell",permalink:"/docs/indexer/haskell"}},m=[{value:"Run the indexer",id:"run-the-indexer",children:[],level:2},{value:"In the shell",id:"in-the-shell",children:[],level:2},{value:"Run the indexer (manually)",id:"run-the-indexer-manually",children:[],level:2},{value:"Derived predicates",id:"derived-predicates",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],p={toc:m};function h(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://hacklang.org/"},"Hack")," indexer is built into the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/hhvm/tree/master/hphp/hack"},"Hack typechecker"),". Stable and nightly binaries of the Hack indexer ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.hhvm.com/hhvm/installation/linux"},"are available"),"."),(0,i.mdx)("h2",{id:"run-the-indexer"},"Run the indexer"),(0,i.mdx)("p",null,"The indexer is run via the main ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean")," CLI tool."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"> cabal build exe:glean\n")),(0,i.mdx)("p",null,"And index your Hack repository with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"glean index hack DIR --repo name/hash\n")),(0,i.mdx)("p",null,"where"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the Hack project (with ",(0,i.mdx)("inlineCode",{parentName:"li"},".hhconfig"),")"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"name/hash")," is the name of the repository to create")),(0,i.mdx)("p",null,"Provide the usual ",(0,i.mdx)("inlineCode",{parentName:"p"},"--db-root")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"--schema")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--service")," arguments\nto ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean")),(0,i.mdx)("h2",{id:"in-the-shell"},"In the shell"),(0,i.mdx)("p",null,"Hack source can also be indexed directly from the Glean shell:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},":index hack DIR\n")),(0,i.mdx)("h2",{id:"run-the-indexer-manually"},"Run the indexer (manually)"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"hh_server DIR --write-symbol-info JSON \\\n  --config symbol_write_include_hhi=false \\\n  --config symbolindex_search_provider=NoIndex \\\n  --config lazy_decl=true \\\n  --config lazy_parse=true \\\n  --config lazy_init2=true \\\n  --config enable_enum_classes=true \\\n  --config enable_enum_supertyping=true\n")),(0,i.mdx)("p",null,"where"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the ",(0,i.mdx)("inlineCode",{parentName:"li"},".php")," files"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"JSON")," is the directory in which to write the output ",(0,i.mdx)("inlineCode",{parentName:"li"},".json")," files"),(0,i.mdx)("li",{parentName:"ul"},"We need several config flags to instantiate hh_server for indexing")),(0,i.mdx)("p",null,"The generated files can be ingested into a Glean database using ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#glean-create"},(0,i.mdx)("inlineCode",{parentName:"a"},"glean create")),"."),(0,i.mdx)("h2",{id:"derived-predicates"},"Derived predicates"),(0,i.mdx)("p",null,"Several predicates should be derived after indexing. For each ",(0,i.mdx)("inlineCode",{parentName:"p"},"stored")," predicate in the ",(0,i.mdx)("a",{parentName:"p",href:"#schema"},"schema")," you should ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#glean-derive"},(0,i.mdx)("inlineCode",{parentName:"a"},"glean derive"))," the predicate."),(0,i.mdx)("h2",{id:"schema"},"Schema"),(0,i.mdx)("p",null,"The schema is in ",(0,i.mdx)(l.O1,{file:"glean/schema/source/hack.angle",mdxType:"SrcFile"})))}h.isMDXComponent=!0}}]);