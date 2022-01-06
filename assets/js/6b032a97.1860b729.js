"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[490],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){return function(n){var t=u(n.components);return i.createElement(e,o({},n,{components:t}))}},u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,p=s["".concat(a,".").concat(m)]||s[m]||f[m]||o;return t?i.createElement(p,l(l({ref:n},d),{},{components:t})):i.createElement(p,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return a},EO:function(){return l},Rr:function(){return c}});var i,r=t(67294),o=t(44256);function a(e){return r.createElement("a",{href:i+e.file},e.file)}function l(e){return r.createElement("a",{href:i+e.file},e.children)}i=(0,o.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var c=function(e){e.children;var n=e.internal,t=e.external;return(0,o.fbContent)({internal:r.createElement("code",null,n),external:r.createElement("code",null,t)})}},40988:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=t(44256),l=t(12038),c=["components"],d={id:"running",title:"Running the Tools",sidebar_label:"Running the Tools"},s=void 0,u={unversionedId:"running",id:"running",isDocsHomePage:!1,title:"Running the Tools",description:"Configuration files",source:"@site/docs/running.md",sourceDirName:".",slug:"/running",permalink:"/docs/running",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/running.md",tags:[],version:"current",frontMatter:{id:"running",title:"Running the Tools",sidebar_label:"Running the Tools"},sidebar:"someSidebar",previous:{title:"Writing data to Glean",permalink:"/docs/write"},next:{title:"Using the Shell",permalink:"/docs/shell"}},m=[{value:"Configuration files",id:"configuration-files",children:[],level:2},{value:"Common options",id:"common-options",children:[{value:"Connecting to a remote server",id:"connecting-to-a-remote-server",children:[],level:3},{value:"Using local databases",id:"using-local-databases",children:[],level:3},{value:"Testing options",id:"testing-options",children:[],level:3}],level:2}],f={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.mdx)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"configuration-files"},"Configuration files"),(0,o.mdx)("p",null,"Glean tools use some configuration files. Mostly these are optional,\nif you don't provide the file then a set of defaults will be assumed."),(0,o.mdx)("p",null,"Config files are represented as JSON-encoded Thrift values. Each\nconfiguration file has a corresponding Thrift definition file, which\nwe'll link to in the docs below."),(0,o.mdx)("p",null,"The location of a config file is specified by a command line\noption, e.g. Glean clients have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"--client-config")," option:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"--client-config (file:PATH | config:PATH)\n")),(0,o.mdx)("p",null,"the alternatives are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Omit the flag: default values will be used."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--client-config file:PATH")," means the config is read, once, from ",(0,o.mdx)("inlineCode",{parentName:"li"},"PATH"),".")),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--client-config config:PATH")," means the config is read from ",(0,o.mdx)("inlineCode",{parentName:"li"},"PATH"),"\nin configerator."))),(0,o.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--client-config config:PATH")," means the config is read from ",(0,o.mdx)("inlineCode",{parentName:"li"},"DIR/PATH"),"\nwhere ",(0,o.mdx)("inlineCode",{parentName:"li"},"DIR")," defaults to ",(0,o.mdx)("inlineCode",{parentName:"li"},"$HOME/.config/glean")," but can be changed with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"--config-dir DIR")," flag. Additionally, changes in the file are picked up without restarting the tool. (this is particularly useful for the server)")),(0,o.mdx)("p",null,"The idea is that if you're running a fleet of Glean servers, you can\nhave a set of configuration files that you sync to all the hosts in\nyour fleet using whatever mechanism you want, and set ",(0,o.mdx)("inlineCode",{parentName:"p"},"--config-dir"),"\nto point to the location of the files.  If this isn't sufficient, then\nyou can implement your own ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigProvider")," instance to support\nwhatever method you need for accessing config files.")),(0,o.mdx)("h2",{id:"common-options"},"Common options"),(0,o.mdx)("p",null,"All the Glean tools (",(0,o.mdx)("inlineCode",{parentName:"p"},"glean"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"glean-server"),") accept\nthe following options."),(0,o.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--config-dir DIR"),(0,o.mdx)("br",null),"\nThe base directory where ",(0,o.mdx)("a",{parentName:"li",href:"#configuration-files"},"configuration files")," are read from."))),(0,o.mdx)("h3",{id:"connecting-to-a-remote-server"},"Connecting to a remote server"),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--service TIER or HOST:PORT"),(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"li"},"Default:")," taken from ",(0,o.mdx)("inlineCode",{parentName:"li"},"--client-config"),(0,o.mdx)("br",null),"\nSpecifies the Glean server to connect to.  ",(0,o.mdx)("inlineCode",{parentName:"li"},"TIER")," is\nimplementation-dependent (not supported in the open-source build\ncurrently)."))),(0,o.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--service HOST:PORT"),(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"li"},"Default:")," taken from ",(0,o.mdx)("inlineCode",{parentName:"li"},"--client-config"),(0,o.mdx)("br",null),"\nSpecifies the Glean server to connect to."))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--client-config (file:PATH | config:PATH)"),(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"li"},"Default:"),(0,o.mdx)(l.Rr,{internal:"config:glean/client/client",external:"config:client",mdxType:"Alt"})," or use default values if missing",(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"li"},"Thrift file:")," ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookincubator/Glean/blob/master/glean/config/client/client_config.thrift"},"client-config.thrift"),(0,o.mdx)("br",null),"\nThe location of the client configuration file, which specifies the\ndefault Glean server to connect to, amongst other things.")),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--use-shards yes|no|fallback"),(0,o.mdx)("br",null),"\nFB-only: whether to use shards when connecting to a host in the tier."))),(0,o.mdx)("h3",{id:"using-local-databases"},"Using local databases"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--db-root DIR"),(0,o.mdx)("br",null),"\nThe path where Glean databases are stored.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--schema (file:FILE | dir:DIR | config:PATH | DIR)"),(0,o.mdx)("br",null),"\n",(0,o.mdx)("strong",{parentName:"p"},"Default"),": ",(0,o.mdx)(l.Rr,{internal:"config:glean/schema/all",external:"config:schema",mdxType:"Alt"}),(0,o.mdx)("br",null),"\nThe location of the schema definition. This can either be:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dir:DIR")," or just ",(0,o.mdx)("inlineCode",{parentName:"li"},"DIR"),(0,o.mdx)("br",null),"\nAll the files with the extension ",(0,o.mdx)("inlineCode",{parentName:"li"},".angle")," under ",(0,o.mdx)("inlineCode",{parentName:"li"},"DIR")," (or in\nsubdirectories) will be read."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"file:FILE")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"config:PATH"),(0,o.mdx)("br",null),"\nA single file, which can be created from the source files in ",(0,o.mdx)("inlineCode",{parentName:"li"},"DIR")," by running ",(0,o.mdx)("inlineCode",{parentName:"li"},"gen-schema --dir DIR --source FILE"),(0,o.mdx)("br",null),"\nIf you are running a fleet of Glean servers, you would normally\nsync schema changes across the fleet by putting the schema\nin ",(0,o.mdx)("inlineCode",{parentName:"li"},"config:schema"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--schema-version VERSION"),(0,o.mdx)("br",null)))),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--recipe-config (file:PATH | config:PATH)"),(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"li"},"Default:")," ",(0,o.mdx)(l.Rr,{internal:"config:glean/recipes/recipes",external:"config:recipes",mdxType:"Alt"})," or use default values if missing",(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"li"},"Thrift file:")," ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookincubator/Glean/blob/master/glean/config/recipes/recipes.thrift"},"recipe-config.thrift"),(0,o.mdx)("br",null),"\nThe location of the recipes config file. This is used by certain\nindexers to specify the indexing steps and dependencies between them."))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--server-config (file:PATH | config:PATH)"),(0,o.mdx)("br",null),"\n",(0,o.mdx)("strong",{parentName:"p"},"Default"),": ",(0,o.mdx)(l.Rr,{internal:"config:glean/server",external:"config:server",mdxType:"Alt"}),(0,o.mdx)("br",null),"\n",(0,o.mdx)("strong",{parentName:"p"},"Thrift file:")," ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/glean/config/server/server_config.thrift"},"server-config.thrift"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--tier TIER"),(0,o.mdx)("br",null),"\nEquivalent to ",(0,o.mdx)(l.Rr,{internal:"--server-config config:glean/server/TIER",external:"--server-config config:server/TIER",mdxType:"Alt"}),(0,o.mdx)("br",null),"\nCan be handy when you have fleet-wide configuration files but you\nwant certain servers to have different configs.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--db-read-only"),(0,o.mdx)("br",null),"\nDisable writing to databases. This is useful if you have servers that only\nserve queries, and should not be creating or writing databases."))),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--enable-logging"),(0,o.mdx)("br",null),"\nEnable logging of all operations to Scuba."))),(0,o.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--enable-logging"),(0,o.mdx)("br",null),"\nEnable logging of all operations. (Note that there is currently no\nlogging backend implemented for the open-source build of Glean, so\nthis doesn't do anything yet)."))),(0,o.mdx)("h3",{id:"testing-options"},"Testing options"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--db-schema-override"),(0,o.mdx)("br",null),"\nThe current schema will override the schema in the\ndatabase. Normally you don't want this, because the schema stored in\nthe database is the one that was active at the time when the DB was\ncreated, so it is likely to be a correct description of the data in\nthe database.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--storage (rocksdb | memory)"),(0,o.mdx)("br",null),"\n",(0,o.mdx)("strong",{parentName:"p"},"Default:"),": ",(0,o.mdx)("inlineCode",{parentName:"p"},"rocksdb"),(0,o.mdx)("br",null))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"--db-mock-writes"),(0,o.mdx)("br",null),"\nAllow write operations, but discard the data and don't write it to the DB."))))}p.isMDXComponent=!0},47596:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(n){o(n)}}function l(e){try{c(i.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(11737);n.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(n){o(n)}}function l(e){try{c(i.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let i=!1,r=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=r++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),t}))}},24855:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(n){o(n)}}function l(e){try{c(i.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const r=t(11737);n.reportContentCopied=function(e){return i(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return i(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(i){}}))}},44256:function(e,n,t){var i=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t),Object.defineProperty(e,i,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const a=["internal","external"];function l(e){return d(e),s()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=d,n.isInternal=s,n.FbInternalOnly=function(e){return s()?e.children:null},n.OssOnly=function(e){return s()?null:e.children}},27312:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(n){o(n)}}function l(e){try{c(i.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const r=t(11737);n.submitDiff=function(e){return i(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:i}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(n){o(n)}}function l(e){try{c(i.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const r=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return i(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:i}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:i}})}))}}}]);