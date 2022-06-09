"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[988],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){return function(n){var t=s(n.components);return r.createElement(e,o({},n,{components:t}))}},s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},59794:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=(t(44256),["components"]),i={id:"walkthrough",title:"Walkthrough",sidebar_label:"Walkthrough"},c=void 0,u={unversionedId:"walkthrough",id:"walkthrough",isDocsHomePage:!1,title:"Walkthrough",description:"We can play with Glean using the shell. You can do this",source:"@site/docs/walkthrough.md",sourceDirName:".",slug:"/walkthrough",permalink:"/docs/walkthrough",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/walkthrough.md",tags:[],version:"current",frontMatter:{id:"walkthrough",title:"Walkthrough",sidebar_label:"Walkthrough"},sidebar:"someSidebar",previous:{title:"Building Glean",permalink:"/docs/building"},next:{title:"Basic Concepts",permalink:"/docs/schema/basic"}},p=[],s={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"We can play with Glean using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/shell"},"shell"),". You can do this\ndirectly from the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/trying"},"Docker image")," if you want, or ",(0,o.mdx)("a",{parentName:"p",href:"/docs/building"},"Build Glean\nfrom source")," first."),(0,o.mdx)("p",null,"To try experiments we can work with a local schema definition and\nlocal database (as opposed to connecting to a Glean server).  If you\nwant to play along with the examples, you can do so as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=sh"},"mkdir /tmp/glean\nmkdir /tmp/glean/db\nmkdir /tmp/glean/schema\nglean shell --db-root /tmp/glean/db --schema /tmp/glean/schema\n")),(0,o.mdx)("p",null,"Put the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/glean/example/schema/example.angle"},"example\nschema"),"\nin ",(0,o.mdx)("inlineCode",{parentName:"p"},"/tmp/glean/schema/example.angle")," and the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/glean/example/facts.glean"},"example\ndata"),"\nin ",(0,o.mdx)("inlineCode",{parentName:"p"},"/tmp/glean/facts.glean"),". Then create a database from the example\ndata using ",(0,o.mdx)("inlineCode",{parentName:"p"},":load <file>")," in the shell:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=sh"},"> :load /tmp/glean/facts.glean\nfacts>\n")),(0,o.mdx)("p",null,"Now head over to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/angle/guide"},"Angle Guide")," to try some example\nqueries and learn about how the query language works."))}m.isMDXComponent=!0}}]);