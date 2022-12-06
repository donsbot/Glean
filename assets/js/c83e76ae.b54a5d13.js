"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9607],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){return function(n){var t=s(n.components);return r.createElement(e,o({},n,{components:t}))}},s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{EO:function(){return c},O1:function(){return a},Rr:function(){return l}});var r,i=t(67294),o=t(44256);function a(e){return i.createElement("a",{href:r+e.file},e.file)}function c(e){return i.createElement("a",{href:r+e.file},e.children)}r=(0,o.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var l=function(e){e.children;var n=e.internal,t=e.external;return(0,o.fbContent)({internal:i.createElement("code",null,n),external:i.createElement("code",null,t)})}},18958:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=(t(44256),t(12038)),c=["components"],l={id:"hack",title:"Hack",sidebar_label:"Hack"},u=void 0,d={unversionedId:"indexer/hack",id:"indexer/hack",title:"Hack",description:"The Hack indexer is built into the Hack typechecker. Stable and nightly binaries of the Hack indexer are available.",source:"@site/docs/indexer/hack.md",sourceDirName:"indexer",slug:"/indexer/hack",permalink:"/docs/indexer/hack",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/indexer/hack.md",tags:[],version:"current",frontMatter:{id:"hack",title:"Hack",sidebar_label:"Hack"},sidebar:"someSidebar",previous:{title:"JavaScript (Flow)",permalink:"/docs/indexer/flow"},next:{title:"Haskell",permalink:"/docs/indexer/haskell"}},s={},f=[{value:"Run the indexer",id:"run-the-indexer",level:2},{value:"In the shell",id:"in-the-shell",level:2},{value:"Run the indexer (manually)",id:"run-the-indexer-manually",level:2},{value:"Derived predicates",id:"derived-predicates",level:2},{value:"Schema",id:"schema",level:2}],p={toc:f};function m(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://hacklang.org/"},"Hack")," indexer is built into the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/hhvm/tree/master/hphp/hack"},"Hack typechecker"),". Stable and nightly binaries of the Hack indexer ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.hhvm.com/hhvm/installation/linux"},"are available"),"."),(0,o.mdx)("h2",{id:"run-the-indexer"},"Run the indexer"),(0,o.mdx)("p",null,"The indexer is run via the main ",(0,o.mdx)("inlineCode",{parentName:"p"},"glean")," CLI tool."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"> cabal build exe:glean\n")),(0,o.mdx)("p",null,"And index your Hack repository with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"glean index hack DIR --db NAME/INSTANCE\n")),(0,o.mdx)("p",null,"where"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the Hack project (with ",(0,o.mdx)("inlineCode",{parentName:"li"},".hhconfig"),")"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"name/hash")," is the name of the repository to create")),(0,o.mdx)("p",null,"Provide the usual ",(0,o.mdx)("inlineCode",{parentName:"p"},"--db-root")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"--schema")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"--service")," arguments\nto ",(0,o.mdx)("inlineCode",{parentName:"p"},"glean")),(0,o.mdx)("h2",{id:"in-the-shell"},"In the shell"),(0,o.mdx)("p",null,"Hack source can also be indexed directly from the Glean shell:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},":index hack DIR\n")),(0,o.mdx)("h2",{id:"run-the-indexer-manually"},"Run the indexer (manually)"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"hh_server DIR --write-symbol-info JSON \\\n  --config symbol_write_include_hhi=false \\\n  --config symbolindex_search_provider=NoIndex \\\n  --config lazy_decl=true \\\n  --config lazy_parse=true \\\n  --config lazy_init2=true \\\n  --config enable_enum_classes=true \\\n  --config enable_enum_supertyping=true\n")),(0,o.mdx)("p",null,"where"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the ",(0,o.mdx)("inlineCode",{parentName:"li"},".php")," files"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"JSON")," is the directory in which to write the output ",(0,o.mdx)("inlineCode",{parentName:"li"},".json")," files"),(0,o.mdx)("li",{parentName:"ul"},"We need several config flags to instantiate hh_server for indexing")),(0,o.mdx)("p",null,"The generated files can be ingested into a Glean database using ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli#glean-create"},(0,o.mdx)("inlineCode",{parentName:"a"},"glean create")),"."),(0,o.mdx)("h2",{id:"derived-predicates"},"Derived predicates"),(0,o.mdx)("p",null,"Several predicates should be derived after indexing. For each ",(0,o.mdx)("inlineCode",{parentName:"p"},"stored")," predicate in the ",(0,o.mdx)("a",{parentName:"p",href:"#schema"},"schema")," you should ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli#glean-derive"},(0,o.mdx)("inlineCode",{parentName:"a"},"glean derive"))," the predicate."),(0,o.mdx)("h2",{id:"schema"},"Schema"),(0,o.mdx)("p",null,"The schema is in ",(0,o.mdx)(a.O1,{file:"glean/schema/source/hack.angle",mdxType:"SrcFile"})))}m.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const a=["internal","external"];function c(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function s(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.hasEphemeralDiffNumber=function(){return Boolean(s())},n.getEphemeralDiffNumber=s,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:o}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:o}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);