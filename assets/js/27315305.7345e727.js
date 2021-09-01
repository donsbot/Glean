"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[910],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(t),f=o,m=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return i},EO:function(){return l},Rr:function(){return c}});var r,o=t(67294),a=t(44256);function i(e){return o.createElement("a",{href:r+e.file},e.file)}function l(e){return o.createElement("a",{href:r+e.file},e.children)}r=(0,a.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var c=function(e){e.children;var n=e.internal,t=e.external;return(0,a.fbContent)({internal:o.createElement("code",null,n),external:o.createElement("code",null,t)})}},82193:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return p},default:function(){return y}});var r,o=t(87462),a=t(63366),i=(t(67294),t(3905)),l=t(44256),c=t(12038),u=["components"],s={id:"intro",title:"Querying Glean",sidebar_label:"Overview"},d=void 0,f={unversionedId:"query/intro",id:"query/intro",isDocsHomePage:!1,title:"Querying Glean",description:"Glean's query language is called Angle.  Read the [Angle",source:"@site/docs/query/intro.md",sourceDirName:"query",slug:"/query/intro",permalink:"/docs/query/intro",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/query/intro.md",version:"current",frontMatter:{id:"intro",title:"Querying Glean",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Thrift and JSON",permalink:"/docs/schema/thrift"},next:{title:"Introduction",permalink:"/docs/angle/intro"}},p=[{value:"Query APIs",id:"query-apis",children:[{value:"Thrift",id:"thrift",children:[]}]},{value:"VS Code syntax highlighter",id:"vs-code-syntax-highlighter",children:[]}],m=(r="Daiquery",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),h={toc:p};function y(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.mdx)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Glean's query language is called ",(0,i.mdx)("strong",{parentName:"p"},"Angle"),".  Read the ",(0,i.mdx)("a",{parentName:"p",href:"../angle/guide"},"Angle\nGuide")," to learn about how to write Angle queries."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"../shell"},"shell")," can be used for testing queries and schema\nchanges, and exploring the data."),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"To run the REPL to try queries interactively:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"buck run glean/shell:shell\n")),(0,i.mdx)("p",null,"To make a single query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"buck run glean/shell:shell -- <query>\n"))),(0,i.mdx)(m,{mdxType:"Daiquery"}),(0,i.mdx)("h2",{id:"query-apis"},"Query APIs"),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"There are APIs in ",(0,i.mdx)("a",{parentName:"p",href:"api/fb/hack.md"},"Hack"),", ",(0,i.mdx)("a",{parentName:"p",href:"api/fb/python.md"},"Python"),",\n",(0,i.mdx)("a",{parentName:"p",href:"api/fb/rust.md"},"Rust"),", and ",(0,i.mdx)("a",{parentName:"p",href:"/docs/query/api/haskell"},"Haskell"),".")),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"There is currently only a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/query/api/haskell"},"Haskell")," API; APIs in other\nlanguages are coming soon.")),(0,i.mdx)("p",null,"All client layers are wrappers around the ",(0,i.mdx)("a",{parentName:"p",href:"#thrift"},"Thrift API"),"."),(0,i.mdx)("p",null,"The results of queries will be returned as instances of the Thrift\ntypes in ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean/schema/thrift")," that are generated automatically from\nthe ",(0,i.mdx)("a",{parentName:"p",href:"/docs/schema/basic"},"schema"),"."),(0,i.mdx)("p",null,"The client layers provide a few useful things over the raw Thrift API:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Connecting to the most recent database for a given repository;"),(0,i.mdx)("li",{parentName:"ul"},"Sharding to ensure we connect to a suitable server for that database;"),(0,i.mdx)("li",{parentName:"ul"},"In some cases, an API for building queries programmatically.")),(0,i.mdx)("h3",{id:"thrift"},"Thrift"),(0,i.mdx)("p",null,"Glean exposes a ",(0,i.mdx)(c.EO,{file:"glean/if/glean.thrift",mdxType:"SrcFileLink"},"Thrift\nAPI"),"."),(0,i.mdx)("p",null,"The two methods for querying are"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"userQuery")," - general queries returning an arbitrary number of results"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"userQueryFacts")," - fetch the definition of a single fact given its ID")),(0,i.mdx)("p",null,"Queries are in Angle syntax, and results are encoded as JSON or Thrift\ncompact which you can encode/decode into the Thrift types."),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("h2",{id:"vs-code-syntax-highlighter"},"VS Code syntax highlighter"),(0,i.mdx)("p",null,"We have a VS Code plugin for Angle syntax highlighting in VS Code: ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/fb-vscode/marketplace/extension/nuclide.fb-glean/overview?leftNavTab=manage"},"Glean development Support")," the code lives ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/code/fbsource/%5Bmaster%5D/xplat/vscode/vscode-extensions/fb-glean/"},"here"))))}y.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const a={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in a||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?a[n].resolve(e.data.response):a[n].reject(new Error(e.data.error)),delete a[n]})));const n=o++,t=new Promise(((e,t)=>{a[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=a(t(47596)),n.uidocs=a(t(17483)),n.feedback=a(t(24855)),n.inpageeditor=a(t(27312));const i=["internal","external"];function l(e){return u(e),s()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=s,n.FbInternalOnly=function(e){return s()?e.children:null},n.OssOnly=function(e){return s()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);