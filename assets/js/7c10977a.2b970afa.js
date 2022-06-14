"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3627],{3905:function(e,a,n){n.r(a),n.d(a,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return o}});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),o=function(e){return function(a){var n=p(a.components);return t.createElement(e,l({},a,{components:n}))}},p=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(d.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),o=p(n),c=i,u=o["".concat(r,".").concat(c)]||o[c]||h[c]||l;return n?t.createElement(u,m(m({ref:a},d),{},{components:n})):t.createElement(u,m({ref:a},d))}));function x(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var m={};for(var s in a)hasOwnProperty.call(a,s)&&(m[s]=a[s]);m.originalType=e,m.mdxType="string"==typeof e?e:i,r[1]=m;for(var d=2;d<l;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93107:function(e,a,n){n.r(a),n.d(a,{contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var t=n(87462),i=n(63366),l=(n(67294),n(3905)),r=n(44256),m=["components"],s={id:"guide",title:"Angle Guide",sidebar_label:"Guide"},d=void 0,o={unversionedId:"angle/guide",id:"angle/guide",isDocsHomePage:!1,title:"Angle Guide",description:"The following guide will explain Angle from first principles, leading you through from simple queries to more complex ones.",source:"@site/docs/angle/guide.md",sourceDirName:"angle",slug:"/angle/guide",permalink:"/docs/angle/guide",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/angle/guide.md",tags:[],version:"current",frontMatter:{id:"guide",title:"Angle Guide",sidebar_label:"Guide"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/angle/intro"},next:{title:"Query Efficiency",permalink:"/docs/angle/efficiency"}},p=[{value:"Just the facts",id:"just-the-facts",children:[],level:2},{value:"Matching nested facts",id:"matching-nested-facts",children:[],level:2},{value:"Union types",id:"union-types",children:[],level:2},{value:"Maybe",id:"maybe",children:[],level:2},{value:"Or-patterns",id:"or-patterns",children:[],level:2},{value:"If-patterns",id:"if-patterns",children:[],level:2},{value:"More complex queries",id:"more-complex-queries",children:[],level:2},{value:"Statements",id:"statements",children:[],level:2},{value:"Arrays",id:"arrays",children:[],level:2},{value:"String prefix",id:"string-prefix",children:[],level:2},{value:"Tuples",id:"tuples",children:[],level:2},{value:"Enums and bool",id:"enums-and-bool",children:[],level:2},{value:"Negation",id:"negation",children:[],level:2}],c={toc:p};function h(e){var a=e.components,n=(0,i.Z)(e,m);return(0,l.mdx)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"The following guide will explain Angle from first principles, leading you through from simple queries to more complex ones."),(0,l.mdx)("p",null,"If you want to try the examples for yourself, or experiment with\nchanges to the example schema, you should first follow the\ninstructions in ",(0,l.mdx)("a",{parentName:"p",href:"/docs/walkthrough"},"Walkthrough")," to get set up."),(0,l.mdx)(r.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)("p",null,"There are also ",(0,l.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Glean/Query/Angle/Angle_examples/"},"examples of using Angle")," to query real data.")),(0,l.mdx)("h2",{id:"just-the-facts"},"Just the facts"),(0,l.mdx)("p",null,"Data in Glean is described by a ",(0,l.mdx)("em",{parentName:"p"},"schema"),", which we normally put in a file with the extension ",(0,l.mdx)("inlineCode",{parentName:"p"},"angle"),". For the purposes of this guide we\u2019ll use the example schema in ",(0,l.mdx)("inlineCode",{parentName:"p"},"example.angle"),". Full details about defining schemas can be found in ",(0,l.mdx)("a",{parentName:"p",href:"/docs/schema/basic"},"Schemas"),". The ",(0,l.mdx)("inlineCode",{parentName:"p"},"example.angle")," file contains a schema definition like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"schema example.1 {\n\n# definitions go here\n\n}\n")),(0,l.mdx)("p",null,"This says we\u2019re defining a schema called ",(0,l.mdx)("inlineCode",{parentName:"p"},"example"),", with version 1."),(0,l.mdx)("p",null,"The schema contains definitions for ",(0,l.mdx)("em",{parentName:"p"},"predicates"),". A predicate is the type of ",(0,l.mdx)("em",{parentName:"p"},"facts"),", which are the individual pieces of information that Glean stores.  Our example schema models a simplified class hierarchy for an object-oriented language, starting with a predicate for a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Class"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Class :\n  {\n     name : string,\n     line : nat,\n  }\n")),(0,l.mdx)("p",null,"This says that the facts of ",(0,l.mdx)("inlineCode",{parentName:"p"},"Class")," are records with two fields, a ",(0,l.mdx)("inlineCode",{parentName:"p"},"name")," field which contains a ",(0,l.mdx)("inlineCode",{parentName:"p"},"string"),", and a ",(0,l.mdx)("inlineCode",{parentName:"p"},"line")," field which contains a ",(0,l.mdx)("inlineCode",{parentName:"p"},"nat")," (\u201cnat\u201d is short for \u201cnatural number\u201d, which is limited to 64 bits in Glean)."),(0,l.mdx)("p",null,"The simplest type of Angle query is one that just selects facts from\nthe database that match a pattern.  For our first Angle query, let\u2019s\nfind a class by its name:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'facts> example.Class { name = "Pet" }\n{ "id": 1024, "key": { "name": "Pet", "line": 10 } }\n\n1 results, 1 facts, 4.61ms, 117632 bytes, 677 compiled bytes\n')),(0,l.mdx)("p",null,"(The last line contains statistics about query performance from Glean; I\u2019ll leave this out in the rest of the examples.)"),(0,l.mdx)("p",null,"What\u2019s going on here?"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The query consists of the ",(0,l.mdx)("em",{parentName:"li"},"predicate name")," ",(0,l.mdx)("inlineCode",{parentName:"li"},"example.Class")," followed by a ",(0,l.mdx)("em",{parentName:"li"},"pattern")," ",(0,l.mdx)("inlineCode",{parentName:"li"},'{ name = "Pet" }')),(0,l.mdx)("li",{parentName:"ul"},"Note that when we refer to a predicate in a query, the name is ",(0,l.mdx)("em",{parentName:"li"},"qualified")," by prefixing the schema name, so it\u2019s ",(0,l.mdx)("inlineCode",{parentName:"li"},"example.Class")," rather than just ",(0,l.mdx)("inlineCode",{parentName:"li"},"Class"),"."),(0,l.mdx)("li",{parentName:"ul"},"The query returns all the facts of ",(0,l.mdx)("inlineCode",{parentName:"li"},"example.Class")," that match the pattern")),(0,l.mdx)("p",null,"The shell shows results in JSON format. When you\u2019re making Glean\nqueries from code, the results will normally be decoded into native\ndata types that you can manipulate directly in whatever language\nyou\u2019re using; for more details see ",(0,l.mdx)("a",{parentName:"p",href:"/docs/schema/thrift"},"Thrift and\nJSON"),"."),(0,l.mdx)("p",null,"Note that each fact has a unique ",(0,l.mdx)("inlineCode",{parentName:"p"},"id"),". This is how Glean identifies facts in its database. As a user you normally won\u2019t have to worry about fact ",(0,l.mdx)("inlineCode",{parentName:"p"},"id"),"s; you can think of them like memory addresses."),(0,l.mdx)("p",null,"The pattern specifies which facts to return. In the example above, our pattern is matching a record type and specifying a subset of the fields: just the ",(0,l.mdx)("inlineCode",{parentName:"p"},"name")," field. We could match the ",(0,l.mdx)("inlineCode",{parentName:"p"},"line")," field instead:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=sh"},'facts> example.Class { line = 20 }\n{ "id": 1025, "key": { "name": "Lizard", "line": 20 } }\n')),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Your patterns should normally match fields at the ",(0,l.mdx)("em",{parentName:"p"},"beginning")," of the\nrecord, because facts in the database are indexed by a prefix of the\nfields. Matching a field in the middle of the record works by scanning\nall the facts, which could be expensive. We\u2019ll get into this in more\ndetail in ",(0,l.mdx)("a",{parentName:"p",href:"/docs/angle/efficiency"},"Query Efficiency"),"."))),(0,l.mdx)("p",null,'What other kinds of patterns can we use? Well, the simplest patterns are the wildcard, \u201c_\u201d, which matches anything, and "never", which always fails to match.'),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Class _\n{ "id": 1026, "key": { "name": "Fish", "line": 30 } }\n{ "id": 1027, "key": { "name": "Goldfish", "line": 40 } }\n{ "id": 1025, "key": { "name": "Lizard", "line": 20 } }\n{ "id": 1024, "key": { "name": "Pet", "line": 10 } }\nfacts> example.Class never\n(no results)\n')),(0,l.mdx)("p",null,"We\u2019ll introduce more kinds of pattern in the following sections. The full list of patterns can be found in ",(0,l.mdx)("a",{parentName:"p",href:"/docs/angle/reference"},"Angle Reference"),"."),(0,l.mdx)("h2",{id:"matching-nested-facts"},"Matching nested facts"),(0,l.mdx)("p",null,"The real power of Glean comes from relationships between facts. Facts can refer directly to other facts, and we can write queries that directly match on these connections."),(0,l.mdx)("p",null,"Our example schema has a predicate that expresses the inheritance relationship between classes:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Parent :\n  {\n     child : Class,\n     parent : Class,\n  }\n")),(0,l.mdx)("p",null,"Let\u2019s find what ",(0,l.mdx)("inlineCode",{parentName:"p"},"Fish")," inherits from:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Parent { child = { name = "Fish" }}\n{\n  "id": 1029,\n  "key": { "child": { "id": 1026, "key": { "name": "Fish", "line": 30 } }, "parent": { "id": 1024, "key": { "name": "Pet", "line": 10 } } }\n}\n')),(0,l.mdx)("p",null,"Let\u2019s break this down."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},'{ child = { name = "Fish" }}')," is a pattern that matches the key type of ",(0,l.mdx)("inlineCode",{parentName:"li"},"Parent")),(0,l.mdx)("li",{parentName:"ul"},"So, looking at the schema, ",(0,l.mdx)("inlineCode",{parentName:"li"},'{ name = "Fish" }')," is a pattern that should match the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Class")," in the field ",(0,l.mdx)("inlineCode",{parentName:"li"},"child"),".")),(0,l.mdx)("p",null,"By default Angle queries recursively expand facts in the results.  We can see in the above result that the ",(0,l.mdx)("inlineCode",{parentName:"p"},"child")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"parent")," fields contain the full facts they point to.  If we want the result to be \u201cshallow\u201d, meaning it contains just the facts that match and not the nested facts, we can ask Glean to not expand the content of those references. In the shell this is done by running the command ",(0,l.mdx)("inlineCode",{parentName:"p"},":expand off"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> :expand off\nfacts> example.Parent { child = { name = "Fish" }}\n{ "id": 1029, "key": { "child": { "id": 1026 }, "parent": { "id": 1024 } } }\n')),(0,l.mdx)("p",null,"We can of course go the other way and find all the children of a class:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Parent { parent = { name = "Pet" }}\n{\n  "id": 1028,\n  "key": {\n    "child": { "id": 1025, "key": { "name": "Lizard", "line": 20 } },\n    "parent": { "id": 1024, "key": { "name": "Pet", "line": 10 } }\n  }\n}\n{\n  "id": 1029,\n  "key": {\n    "child": { "id": 1026, "key": { "name": "Fish", "line": 30 } },\n    "parent": { "id": 1024, "key": { "name": "Pet", "line": 10 } }\n  }\n}\n')),(0,l.mdx)("p",null,"But as before, note that this would be an inefficient query if we had a lot of data because the pattern is matching on the second field of ",(0,l.mdx)("inlineCode",{parentName:"p"},"Parent")," (namely ",(0,l.mdx)("inlineCode",{parentName:"p"},"parent"),"). Later we\u2019ll see how to make these queries more efficient using a derived predicate."),(0,l.mdx)("h2",{id:"union-types"},"Union types"),(0,l.mdx)("p",null,"Our examples so far have dealt with record types. Glean also supports ",(0,l.mdx)("em",{parentName:"p"},"union types"),", also called ",(0,l.mdx)("em",{parentName:"p"},"sum types"),", which are used to express multiple alternatives. For example, let\u2019s expand our schema to include class members which can be either a method or a variable:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Has :\n  {\n    class_ : Class,\n    has : Member,\n    access : enum { Public | Private },\n  }\n\npredicate Member :\n  {\n    method : { name : string, doc : maybe string } |\n    variable : { name : string }\n  }\n}\n")),(0,l.mdx)("p",null,"The predicate ",(0,l.mdx)("inlineCode",{parentName:"p"},"Has")," maps a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Class")," to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Member")," (with a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Public")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"Private")," annotation), and a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Member")," is either ",(0,l.mdx)("inlineCode",{parentName:"p"},"method")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"variable"),", with some associated data. Note that a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Class")," might have more than one ",(0,l.mdx)("inlineCode",{parentName:"p"},"Member"),", which is fine: there can be multiple ",(0,l.mdx)("inlineCode",{parentName:"p"},"Has")," facts for a given ",(0,l.mdx)("inlineCode",{parentName:"p"},"Class"),"."),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"The schema uses ",(0,l.mdx)("inlineCode",{parentName:"p"},"class_")," rather than ",(0,l.mdx)("inlineCode",{parentName:"p"},"class")," as a field name, because ",(0,l.mdx)("inlineCode",{parentName:"p"},"class")," is a reserved word in Angle. There are many such reserved words, which are reserved not because Angle uses them, but because they cause problems for code that is automatically generated from the schema. To avoid having too many ad-hoc language-specific naming rules, Glean prevents certain problematic names from being used in the schema. The Angle compiler will tell you if you try to use a reserved word."))),(0,l.mdx)("p",null,"Let\u2019s find classes that have a variable called ",(0,l.mdx)("inlineCode",{parentName:"p"},"fins"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Has { has = { variable = { name = "fins" }}}\n{\n  "id": 1036,\n  "key": {\n    "class_": { "id": 1026, "key": { "name": "Fish", "line": 30 } },\n    "has": { "id": 1035, "key": { "variable": { "name": "fins" } } },\n    "access": 1\n  }\n}\n')),(0,l.mdx)("p",null,"The key thing here is that we matched on ",(0,l.mdx)("inlineCode",{parentName:"p"},"Member")," which is a union type, using the pattern ",(0,l.mdx)("inlineCode",{parentName:"p"},'{ variable = { name = "fins" }}'),". A pattern to match a union type looks very much like a record pattern, but it can have only a single field, in this case either ",(0,l.mdx)("inlineCode",{parentName:"p"},"variable")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"method"),"."),(0,l.mdx)("h2",{id:"maybe"},"Maybe"),(0,l.mdx)("p",null,"Glean has one built-in union type called ",(0,l.mdx)("inlineCode",{parentName:"p"},"maybe"),", which is useful when we want to have optional values in the data. It's used in our example schema to attach optional documentation to a class member:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Member :\n  {\n    method : { name : string, doc : maybe string } |\n    variable : { name : string }\n  }\n")),(0,l.mdx)("p",null,"The type ",(0,l.mdx)("inlineCode",{parentName:"p"},"maybe string")," behaves exactly as if it were defined as the union type ",(0,l.mdx)("inlineCode",{parentName:"p"},"{ nothing | just : string }"),".  That means we can write a pattern that matches it, exactly as we would write a pattern for ",(0,l.mdx)("inlineCode",{parentName:"p"},"{ nothing | just : string }"),":"),(0,l.mdx)("p",null,"Methods without documentation:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"facts> example.Member { method = { doc = nothing } }\n")),(0,l.mdx)("p",null,"Methods with documentation:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"facts> example.Member { method = { doc = {  just = _ }}}\n")),(0,l.mdx)("h2",{id:"or-patterns"},"Or-patterns"),(0,l.mdx)("p",null,"In a pattern we can express multiple alternatives by separating patterns with a vertical bar ",(0,l.mdx)("inlineCode",{parentName:"p"},"|"),"."),(0,l.mdx)("p",null,"For example, we can find classes on lines 20 or 30:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Class { line = 20 | 30 }\n{ "id": 1025, "key": { "name": "Lizard", "line": 20 } }\n{ "id": 1026, "key": { "name": "Fish", "line": 30 } }\n')),(0,l.mdx)("p",null,"Or we can find all the classes that have either a ",(0,l.mdx)("inlineCode",{parentName:"p"},"method")," called ",(0,l.mdx)("inlineCode",{parentName:"p"},"feed")," or a ",(0,l.mdx)("inlineCode",{parentName:"p"},"variable")," with any name:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Has { has = { method = { name = "feed" }} | { variable = _ }}\n\n(results omitted)\n')),(0,l.mdx)("h2",{id:"if-patterns"},"If-patterns"),(0,l.mdx)("p",null,"We can conditionally match patterns using ",(0,l.mdx)("inlineCode",{parentName:"p"},"if then else"),"."),(0,l.mdx)("p",null,"Variables matched in the condition will be available in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"then")," branch."),(0,l.mdx)("p",null,"Whilst an or-pattern will always evaluate both of its branches, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"else")," branch of an if-pattern will\nnever be evaluated if the condition succeeds at least once."),(0,l.mdx)("p",null,"For example, we could get all child classes if inheritance is being used in the codebase, or\nretrieve all classes if it isn't."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'facts > if (example.Parent { child = X }) then X else example.Class _\n  { "id": 1025, "key": { "name": "Lizard", "line": 20 } }\n  { "id": 1026, "key": { "name": "Fish", "line": 30 } }\n  { "id": 1027, "key": { "name": "Goldfish", "line": 40 } }\n')),(0,l.mdx)("p",null,"Please note that if-patterns cannot be used in stored derived predicates. This\nis the case because they require the use of negation, which is disallowed in\nstored predicates."),(0,l.mdx)("h2",{id:"more-complex-queries"},"More complex queries"),(0,l.mdx)("p",null,"So far we\u2019ve seen how to query for facts by matching patterns, including matching nested facts.  In this section we\u2019ll see how to construct more complex queries that combine matching facts from multiple predicates."),(0,l.mdx)("p",null,"Suppose we want to find all the parents of classes that have a variable called ",(0,l.mdx)("inlineCode",{parentName:"p"},"fins"),". We need to build a query that will"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"find the classes with a variable called ",(0,l.mdx)("inlineCode",{parentName:"li"},"fins")," using ",(0,l.mdx)("inlineCode",{parentName:"li"},"example.Has")," as we did above"),(0,l.mdx)("li",{parentName:"ul"},"find their parents using ",(0,l.mdx)("inlineCode",{parentName:"li"},"example.Parent"))),(0,l.mdx)("p",null,"We can combine these two as follows:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'example.Has\n  {\n    class_ = C,\n    has = { variable = { name = "fins" }}\n  };\nexample.Parent { child = C }\n')),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"I\u2019ve written this on several lines with indentation to illustrate it\nbetter, to do this in the shell you will need to use the ",(0,l.mdx)("inlineCode",{parentName:"p"},":edit"),"\ncommand to put the query in a temporary file."))),(0,l.mdx)("p",null,"The key thing here is that we used a ",(0,l.mdx)("em",{parentName:"p"},"variable")," ",(0,l.mdx)("inlineCode",{parentName:"p"},"C")," to stand for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"class_")," field when matching facts of ",(0,l.mdx)("inlineCode",{parentName:"p"},"example.Has"),", and then we searched for ",(0,l.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts with the same value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"C")," for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"child")," field."),(0,l.mdx)("p",null,"Note that variables must ",(0,l.mdx)("em",{parentName:"p"},"always")," begin with an upper-case letter, while schema names (",(0,l.mdx)("inlineCode",{parentName:"p"},"example)")," and field names (",(0,l.mdx)("inlineCode",{parentName:"p"},"child"),") begin with a lower-case letter."),(0,l.mdx)("p",null,"The semicolon separates multiple ",(0,l.mdx)("em",{parentName:"p"},"statements")," in a query. When there are multiple statements the results of the query are the facts that match the last statement, in this case the ",(0,l.mdx)("inlineCode",{parentName:"p"},"example.Parent"),".  Let\u2019s try it:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Has { class_ = C, has = { variable = { name = "fins" }}}; example.Parent { child = C }\n{\n  "id": 1029,\n  "key": {\n    "child": { "id": 1026, "key": { "name": "Fish", "line": 30 } },\n    "parent": { "id": 1024, "key": { "name": "Pet", "line": 10 } }\n  }\n}\n')),(0,l.mdx)("p",null," Suppose we don\u2019t care too much about the child here, we only care about getting a list of the parents. We can avoid returning the redundant information by specifying explicitly what it is we want to return from the query:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'P where\n    example.Has\n      {\n        class_ = C,\n        has = { variable = { name = "fins" }}\n      };\n    example.Parent { child = C, parent = P }\n')),(0,l.mdx)("p",null,"The general form of the query is ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"em"},"expression"))," ",(0,l.mdx)("inlineCode",{parentName:"p"},"where")," ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"em"},"statements")),", where ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"em"},"expression"))," is an arbitrary expression and each statement is a pattern that matches some facts. The results of the query are the distinct values of ",(0,l.mdx)("em",{parentName:"p"},(0,l.mdx)("inlineCode",{parentName:"em"},"expression"))," for which all the statements match facts in the database."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> P where example.Has { class_ = C, has = { variable = { name = "fins" }}}; example.Parent { child = C, parent = P }\n{ "id": 1024, "key": { "name": "Pet", "line": 10 } }\n')),(0,l.mdx)("h2",{id:"statements"},"Statements"),(0,l.mdx)("p",null,"In general, a statement can be of the form ",(0,l.mdx)("em",{parentName:"p"},"A = B.")," For example, if we write"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'C = example.Class { name = "Fish" };\nexample.Parent { child = C }\n')),(0,l.mdx)("p",null,"that\u2019s the same as"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'example.Parent { child = { name = "Fish" }}\n')),(0,l.mdx)("p",null,"A statement can have a pattern on either side, for example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'C where\n  C = example.Class { name = N };\n  N = "Fish" | "Goldfish"\n')),(0,l.mdx)("p",null,"A statement can itself be a set of alternatives separated by a vertical bar ",(0,l.mdx)("inlineCode",{parentName:"p"},"|"),". For example, we can find classes that are either a parent of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Goldfish")," or have a ",(0,l.mdx)("inlineCode",{parentName:"p"},"feed")," method:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'C where\n  example.Parent { child = { name = "Goldfish" }, parent = C } |\n  example.Has { class_ = C, has = { method = { name = "feed" }}}\n')),(0,l.mdx)("h2",{id:"arrays"},"Arrays"),(0,l.mdx)("p",null,"When the schema uses an array, we need to be able to write queries that traverse the elements of the array. For example, a common use of an array is to represent the list of declarations in a source file. Our example schema defines the ",(0,l.mdx)("inlineCode",{parentName:"p"},"FileClasses")," predicate:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate FileClasses :\n  {\n    file : string,\n    classes : [Class]\n  }\n")),(0,l.mdx)("p",null,"The goal here is to map efficiently from a filename to the list of classes defined in that file. Suppose we want to write a query that finds all the classes called ",(0,l.mdx)("inlineCode",{parentName:"p"},"Goldfish")," in the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"petshop.example"),", we could do it like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'example.FileClasses { file = "petshop.example", classes = Cs };\n{ name = "Goldfish" } = Cs[..]\n')),(0,l.mdx)("p",null,"The second line is the interesting one: ",(0,l.mdx)("inlineCode",{parentName:"p"},'{ name = "Goldfish" } = Cs[..]')," means"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"on the right-hand side, ",(0,l.mdx)("inlineCode",{parentName:"li"},"Cs[..]")," means \u201ceach element of the array ",(0,l.mdx)("inlineCode",{parentName:"li"},"Cs"),"\u201d"),(0,l.mdx)("li",{parentName:"ul"},"the left-hand side is a pattern, filtering only those ",(0,l.mdx)("inlineCode",{parentName:"li"},"Class")," facts that match ",(0,l.mdx)("inlineCode",{parentName:"li"},'{ name = "Goldfish" }'))),(0,l.mdx)("p",null,"We can also match the whole array with a pattern of the form ",(0,l.mdx)("inlineCode",{parentName:"p"},"[ p1, p2, ... ]")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> X where [_,X,_] = [1,2,3]\n{ "id": 1040, "key": 2 }\n')),(0,l.mdx)("p",null,"Or if we don't care about the length of the array:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> X where [_,X, ..] = [1,2,3]\n{ "id": 1040, "key": 2 }\n')),(0,l.mdx)("h2",{id:"string-prefix"},"String prefix"),(0,l.mdx)("p",null,"We\u2019ve seen many examples of patterns that match strings. Glean also supports matching strings by ",(0,l.mdx)("em",{parentName:"p"},"prefix"),"; for example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Class { name = "F".. }\n{ "id": 1026, "key": { "name": "Fish", "line": 30 } }\n')),(0,l.mdx)("p",null,"The syntax ",(0,l.mdx)("inlineCode",{parentName:"p"},'"F"..')," means ",(0,l.mdx)("em",{parentName:"p"},"strings beginning with the prefix")," ",(0,l.mdx)("inlineCode",{parentName:"p"},'\u201dF"'),"."),(0,l.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Why only prefix and not substring matching in general? Prefix matching can be supported efficiently by Glean\u2019s prefix-tree representation of the fact database. Other kinds of string matching could be supported, but they wouldn\u2019t be able to exploit the database representation so there\u2019s little advantage to implementing them in Angle compared with filtering on the client-side."))),(0,l.mdx)("h2",{id:"tuples"},"Tuples"),(0,l.mdx)("p",null,"A ",(0,l.mdx)("em",{parentName:"p"},"tuple")," is just a a way of writing a record without the field names.  So for example, instead of"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"example.Parent { child = C }\n")),(0,l.mdx)("p",null,"we could write"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"example.Parent { C, _ }\n")),(0,l.mdx)("p",null,"When using a tuple you have to list ",(0,l.mdx)("em",{parentName:"p"},"all")," the fields, in the same order as they are declared in the schema.  That's why ",(0,l.mdx)("inlineCode",{parentName:"p"},"{ child = C }")," becomes ",(0,l.mdx)("inlineCode",{parentName:"p"},"{ C, _ }")," when written as a tuple."),(0,l.mdx)("p",null,"There are upsides and downsides to using the tuple notation:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Pro: more concise"),(0,l.mdx)("li",{parentName:"ul"},"Con: brittle and sensitive to changes in the schema. If we add a field, then tuple patterns will break whereas record patterns won't.")),(0,l.mdx)("p",null,'As a rule of thumb we tend to use tuple syntax in cases where the predicate is "obviously" a relation, such as ',(0,l.mdx)("inlineCode",{parentName:"p"},"example.Parent"),", but we wouldn't use tuple syntax for more complex records."),(0,l.mdx)("h2",{id:"enums-and-bool"},"Enums and bool"),(0,l.mdx)("p",null,"An ",(0,l.mdx)("inlineCode",{parentName:"p"},"enum")," type is a set of named constants. In the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Has")," predicate we used an ",(0,l.mdx)("inlineCode",{parentName:"p"},"enum")," type to indicate whether a class member is ",(0,l.mdx)("inlineCode",{parentName:"p"},"Public")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"Private"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Has :\n  {\n    class_ : Class,\n    has : Member,\n    access : enum { Public | Private },\n  }\n")),(0,l.mdx)("p",null,"To match an ",(0,l.mdx)("inlineCode",{parentName:"p"},"enum")," we just use the appropriate identifier, in this case ",(0,l.mdx)("inlineCode",{parentName:"p"},"Public")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"Private"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> example.Has { access = Private }\n{ "id": 1036, "key": { "class_": { "id": 1026 }, "has": { "id": 1035 }, "access": 1 } }\n')),(0,l.mdx)("p",null,"Note that in the JSON format results, an ",(0,l.mdx)("inlineCode",{parentName:"p"},"enum")," is represented by an integer. When you make queries in code, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"enum")," will be represented by an appropriate type, such as a ",(0,l.mdx)("inlineCode",{parentName:"p"},"data")," type in Haskell."),(0,l.mdx)("p",null,"The boolean type ",(0,l.mdx)("inlineCode",{parentName:"p"},"bool")," is a special case of an ",(0,l.mdx)("inlineCode",{parentName:"p"},"enum"),", defined like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"type bool = enum { false | true }\n")),(0,l.mdx)("h2",{id:"negation"},"Negation"),(0,l.mdx)("p",null,"If we want results that do not match a certain criterion, we can use ",(0,l.mdx)("inlineCode",{parentName:"p"},"!")," to\nspecify a subquery that should fail. A subquery fails if it doesn't return any\nresult."),(0,l.mdx)("p",null,"For example, we can find classes that don't have methods"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> C where C = example.Class _; !(example.Has { class_ = C, has = { method = _ } })\n{ "id": 1026, "key": { "name": "Fish", "line": 30 } }\n{ "id": 1027, "key": { "name": "Goldfish", "line": 40 } }\n{ "id": 1025, "key": { "name": "Lizard", "line": 20 } }\n')),(0,l.mdx)("p",null,"Or we could find the maximum element in an array"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'facts> X where Values = [5,1,2,3]; X = Values[..]; !(Y = Values[..]; Y > X);\n{ "id": 1091, "key": 5 }\n')),(0,l.mdx)("p",null,"The query asks for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"X")," for which given all values of ",(0,l.mdx)("inlineCode",{parentName:"p"},"Y")," ",(0,l.mdx)("em",{parentName:"p"},"none")," is greater\nthan it.  If ",(0,l.mdx)("inlineCode",{parentName:"p"},"Y = Values[..]")," were outside of the negation, the meaning would\nbe give me all ",(0,l.mdx)("inlineCode",{parentName:"p"},"X")," for which there is ",(0,l.mdx)("em",{parentName:"p"},"at least one")," ",(0,l.mdx)("inlineCode",{parentName:"p"},"Y")," that is not greater\nthan it. The answer to that would be all elements."))}h.isMDXComponent=!0}}]);