"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8325],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,l({},t,{components:n}))}},p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,y=u["".concat(o,".").concat(c)]||u[c]||s[c]||l;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},95969:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"types",title:"Built-in Types",sidebar_label:"Built-in Types"},m=void 0,d={unversionedId:"schema/types",id:"schema/types",isDocsHomePage:!1,title:"Built-in Types",description:"Built-in Types",source:"@site/docs/schema/types.md",sourceDirName:"schema",slug:"/schema/types",permalink:"/docs/schema/types",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/schema/types.md",tags:[],version:"current",frontMatter:{id:"types",title:"Built-in Types",sidebar_label:"Built-in Types"},sidebar:"someSidebar",previous:{title:"Basic Concepts",permalink:"/docs/schema/basic"},next:{title:"Syntax",permalink:"/docs/schema/syntax"}},u=[{value:"Built-in Types",id:"built-in-types",children:[],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"built-in-types"},"Built-in Types"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"nat")),(0,l.mdx)("td",{parentName:"tr",align:null},"64-bit natural numbers")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"byte")),(0,l.mdx)("td",{parentName:"tr",align:null},"8-bit natural numbers")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"UTF-8 encoded strings")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"[T]")),(0,l.mdx)("td",{parentName:"tr",align:null},"lists of elements of type T")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"{ field\u2081 : T\u2081, ..., field\u2099 : T\u2099 }")),(0,l.mdx)("td",{parentName:"tr",align:null},"a record with zero or more named fields")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"{ field\u2081 : T\u2081 ","|"," ... ","|"," field\u2099 : T\u2099 }")),(0,l.mdx)("td",{parentName:"tr",align:null},"a sum (union) type with one or more named alternatives")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"P")),(0,l.mdx)("td",{parentName:"tr",align:null},"a reference to a fact of predicate P")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"bool")),(0,l.mdx)("td",{parentName:"tr",align:null},"the boolean type with values ",(0,l.mdx)("strong",{parentName:"td"},"true")," or ",(0,l.mdx)("strong",{parentName:"td"},"false"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"maybe T")),(0,l.mdx)("td",{parentName:"tr",align:null},"an optional value of type T")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("code",null,"enum { name\u2081 ","|"," ... ","|"," name\u2099 }")),(0,l.mdx)("td",{parentName:"tr",align:null},"exactly one of the symbols name\u2081..name\u2099")))))}c.isMDXComponent=!0}}]);