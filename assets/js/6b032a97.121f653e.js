"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8490],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return x},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){return function(n){var t=c(n.components);return i.createElement(e,l({},n,{components:t}))}},c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,f=s["".concat(a,".").concat(u)]||s[u]||p[u]||l;return t?i.createElement(f,o(o({ref:n},d),{},{components:t})):i.createElement(f,o({ref:n},d))}));function x(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=f;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{EO:function(){return o},O1:function(){return a},Rr:function(){return m}});var i,r=t(67294),l=t(44256);function a(e){return r.createElement("a",{href:i+e.file},e.file)}function o(e){return r.createElement("a",{href:i+e.file},e.children)}i=(0,l.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var m=function(e){e.children;var n=e.internal,t=e.external;return(0,l.fbContent)({internal:r.createElement("code",null,n),external:r.createElement("code",null,t)})}},40988:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var i=t(87462),r=t(63366),l=(t(67294),t(3905)),a=t(44256),o=t(12038),m=["components"],d={id:"running",title:"Running the Tools",sidebar_label:"Running the Tools"},s=void 0,c={unversionedId:"running",id:"running",isDocsHomePage:!1,title:"Running the Tools",description:"Configuration files",source:"@site/docs/running.md",sourceDirName:".",slug:"/running",permalink:"/docs/running",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/running.md",tags:[],version:"current",frontMatter:{id:"running",title:"Running the Tools",sidebar_label:"Running the Tools"},sidebar:"someSidebar",previous:{title:"Writing data to Glean",permalink:"/docs/write"},next:{title:"Using the Shell",permalink:"/docs/shell"}},u=[{value:"Configuration files",id:"configuration-files",children:[],level:2},{value:"Common options",id:"common-options",children:[{value:"Connecting to a remote server",id:"connecting-to-a-remote-server",children:[],level:3},{value:"Using local databases",id:"using-local-databases",children:[],level:3},{value:"Testing options",id:"testing-options",children:[],level:3}],level:2}],p={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,m);return(0,l.mdx)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"configuration-files"},"Configuration files"),(0,l.mdx)("p",null,"Glean tools use some configuration files. Mostly these are optional,\nif you don't provide the file then a set of defaults will be assumed."),(0,l.mdx)("p",null,"Config files are represented as JSON-encoded Thrift values. Each\nconfiguration file has a corresponding Thrift definition file, which\nwe'll link to in the docs below."),(0,l.mdx)("p",null,"The location of a config file is specified by a command line\noption, e.g. Glean clients have a ",(0,l.mdx)("inlineCode",{parentName:"p"},"--client-config")," option:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--client-config (file:PATH | config:PATH)\n")),(0,l.mdx)("p",null,"the alternatives are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Omit the flag: default values will be used."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--client-config file:PATH")," means the config is read, once, from ",(0,l.mdx)("inlineCode",{parentName:"li"},"PATH"),".")),(0,l.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--client-config config:PATH")," means the config is read from ",(0,l.mdx)("inlineCode",{parentName:"li"},"PATH"),"\nin configerator."))),(0,l.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--client-config config:PATH")," means the config is read from ",(0,l.mdx)("inlineCode",{parentName:"li"},"DIR/PATH"),"\nwhere ",(0,l.mdx)("inlineCode",{parentName:"li"},"DIR")," defaults to ",(0,l.mdx)("inlineCode",{parentName:"li"},"$HOME/.config/glean")," but can be changed with the ",(0,l.mdx)("inlineCode",{parentName:"li"},"--config-dir DIR")," flag. Additionally, changes in the file are picked up without restarting the tool. (this is particularly useful for the server)")),(0,l.mdx)("p",null,"The idea is that if you're running a fleet of Glean servers, you can\nhave a set of configuration files that you sync to all the hosts in\nyour fleet using whatever mechanism you want, and set ",(0,l.mdx)("inlineCode",{parentName:"p"},"--config-dir"),"\nto point to the location of the files.  If this isn't sufficient, then\nyou can implement your own ",(0,l.mdx)("inlineCode",{parentName:"p"},"ConfigProvider")," instance to support\nwhatever method you need for accessing config files.")),(0,l.mdx)("h2",{id:"common-options"},"Common options"),(0,l.mdx)("p",null,"All the Glean tools (",(0,l.mdx)("inlineCode",{parentName:"p"},"glean"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"glean-server"),") accept\nthe following options."),(0,l.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--config-dir DIR"),(0,l.mdx)("br",null),"\nThe base directory where ",(0,l.mdx)("a",{parentName:"li",href:"#configuration-files"},"configuration files")," are read from."))),(0,l.mdx)("h3",{id:"connecting-to-a-remote-server"},"Connecting to a remote server"),(0,l.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--service TIER or HOST:PORT"),(0,l.mdx)("br",null),(0,l.mdx)("strong",{parentName:"li"},"Default:")," taken from ",(0,l.mdx)("inlineCode",{parentName:"li"},"--client-config"),(0,l.mdx)("br",null),"\nSpecifies the Glean server to connect to.  ",(0,l.mdx)("inlineCode",{parentName:"li"},"TIER")," is\nimplementation-dependent (not supported in the open-source build\ncurrently)."))),(0,l.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--service HOST:PORT"),(0,l.mdx)("br",null),(0,l.mdx)("strong",{parentName:"li"},"Default:")," taken from ",(0,l.mdx)("inlineCode",{parentName:"li"},"--client-config"),(0,l.mdx)("br",null),"\nSpecifies the Glean server to connect to."))),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--client-config (file:PATH | config:PATH)"),(0,l.mdx)("br",null),(0,l.mdx)("strong",{parentName:"li"},"Default:"),(0,l.mdx)(o.Rr,{internal:"config:glean/client/client",external:"config:client",mdxType:"Alt"})," or use default values if missing",(0,l.mdx)("br",null),(0,l.mdx)("strong",{parentName:"li"},"Thrift file:")," ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebookincubator/Glean/blob/master/glean/config/client/client_config.thrift"},"client-config.thrift"),(0,l.mdx)("br",null),"\nThe location of the client configuration file, which specifies the\ndefault Glean server to connect to, amongst other things.")),(0,l.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--use-shards yes|no|fallback"),(0,l.mdx)("br",null),"\nFB-only: whether to use shards when connecting to a host in the tier."))),(0,l.mdx)("h3",{id:"using-local-databases"},"Using local databases"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--db-root DIR"),(0,l.mdx)("br",null),"\nThe path where Glean databases are stored.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--schema (file:FILE | dir:DIR | config:PATH | DIR)"),(0,l.mdx)("br",null),"\n",(0,l.mdx)("strong",{parentName:"p"},"Default"),": ",(0,l.mdx)(o.Rr,{internal:"config:glean/schema/all",external:"config:schema",mdxType:"Alt"}),(0,l.mdx)("br",null),"\nThe location of the schema definition. This can either be:"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"dir:DIR")," or just ",(0,l.mdx)("inlineCode",{parentName:"li"},"DIR"),(0,l.mdx)("br",null),"\nAll the files with the extension ",(0,l.mdx)("inlineCode",{parentName:"li"},".angle")," under ",(0,l.mdx)("inlineCode",{parentName:"li"},"DIR")," (or in\nsubdirectories) will be read."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"file:FILE")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"config:PATH"),(0,l.mdx)("br",null),"\nA single file, which can be created from the source files in ",(0,l.mdx)("inlineCode",{parentName:"li"},"DIR")," by running ",(0,l.mdx)("inlineCode",{parentName:"li"},"gen-schema --dir DIR --source FILE"),(0,l.mdx)("br",null),"\nIf you are running a fleet of Glean servers, you would normally\nsync schema changes across the fleet by putting the schema\nin ",(0,l.mdx)("inlineCode",{parentName:"li"},"config:schema"),"."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--schema-version VERSION"),(0,l.mdx)("br",null)))),(0,l.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--recipe-config (file:PATH | config:PATH)"),(0,l.mdx)("br",null),(0,l.mdx)("strong",{parentName:"li"},"Default:")," ",(0,l.mdx)(o.Rr,{internal:"config:glean/recipes/recipes",external:"config:recipes",mdxType:"Alt"})," or use default values if missing",(0,l.mdx)("br",null),(0,l.mdx)("strong",{parentName:"li"},"Thrift file:")," ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebookincubator/Glean/blob/master/glean/config/recipes/recipes.thrift"},"recipe-config.thrift"),(0,l.mdx)("br",null),"\nThe location of the recipes config file. This is used by certain\nindexers to specify the indexing steps and dependencies between them."))),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--server-config (file:PATH | config:PATH)"),(0,l.mdx)("br",null),"\n",(0,l.mdx)("strong",{parentName:"p"},"Default"),": ",(0,l.mdx)(o.Rr,{internal:"config:glean/server",external:"config:server",mdxType:"Alt"}),(0,l.mdx)("br",null),"\n",(0,l.mdx)("strong",{parentName:"p"},"Thrift file:")," ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/glean/config/server/server_config.thrift"},"server-config.thrift"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--tier TIER"),(0,l.mdx)("br",null),"\nEquivalent to ",(0,l.mdx)(o.Rr,{internal:"--server-config config:glean/server/TIER",external:"--server-config config:server/TIER",mdxType:"Alt"}),(0,l.mdx)("br",null),"\nCan be handy when you have fleet-wide configuration files but you\nwant certain servers to have different configs.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--db-read-only"),(0,l.mdx)("br",null),"\nDisable writing to databases. This is useful if you have servers that only\nserve queries, and should not be creating or writing databases."))),(0,l.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--enable-logging"),(0,l.mdx)("br",null),"\nEnable logging of all operations to Scuba."))),(0,l.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--enable-logging"),(0,l.mdx)("br",null),"\nEnable logging of all operations. (Note that there is currently no\nlogging backend implemented for the open-source build of Glean, so\nthis doesn't do anything yet)."))),(0,l.mdx)("h3",{id:"testing-options"},"Testing options"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--db-schema-override"),(0,l.mdx)("br",null),"\nThe current schema will override the schema in the\ndatabase. Normally you don't want this, because the schema stored in\nthe database is the one that was active at the time when the DB was\ncreated, so it is likely to be a correct description of the data in\nthe database.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--storage (rocksdb | memory)"),(0,l.mdx)("br",null),"\n",(0,l.mdx)("strong",{parentName:"p"},"Default:"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"rocksdb"),(0,l.mdx)("br",null))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--db-mock-writes"),(0,l.mdx)("br",null),"\nAllow write operations, but discard the data and don't write it to the DB."))))}f.isMDXComponent=!0}}]);