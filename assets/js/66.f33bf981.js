/*! For license information please see 66.f33bf981.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66],{39960:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(80102),o=t(67294),u=t(73727),i=t(52263),a=t(13919),c=t(10412),l=(0,o.createContext)({collectLink:function(){}}),s=t(44996),f=t(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,P=(0,r.Z)(e,d),E=(0,i.default)().siteConfig,S=E.trailingSlash,_=E.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,O=(0,o.useContext)(l),L=p||g,D=(0,a.Z)(L),x=null==L?void 0:L.replace("pathname://",""),A=void 0!==x?(t=x,w&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0;A&&D&&(A=(0,f.applyTrailingSlash)(A,{trailingSlash:S,baseUrl:_}));var k=(0,o.useRef)(!1),R=v?u.OL:u.rU,j=c.default.canUseIntersectionObserver,T=(0,o.useRef)();(0,o.useEffect)((function(){return!j&&D&&null!=A&&window.docusaurus.prefetch(A),function(){j&&T.current&&T.current.disconnect()}}),[T,A,j,D]);var V=null!==(n=null==A?void 0:A.startsWith("#"))&&void 0!==n&&n,M=!A||!D||V;return A&&D&&!V&&!y&&O.collectLink(A),M?o.createElement("a",Object.assign({href:A},L&&!D&&{target:"_blank",rel:"noopener noreferrer"},P)):o.createElement(R,Object.assign({},P,{onMouseEnter:function(){k.current||null==A||(window.docusaurus.preload(A),k.current=!0)},innerRef:function(e){var n,t;j&&e&&D&&(n=e,t=function(){null!=A&&window.docusaurus.prefetch(A)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(n),T.current.disconnect(),t())}))})),T.current.observe(n))},to:A||""},v&&{isActive:h,activeClassName:m}))}},95999:function(e,n,t){t.r(n),t.d(n,{default:function(){return s},translate:function(){return l}});var r=t(67294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(57529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function l(e,n){return i(c({message:e.message,id:e.id}),n)}function s(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(c({message:n,id:t}),r)}},29935:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},13919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},28143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(73727)},44996:function(e,n,t){t.r(n),t.d(n,{useBaseUrlUtils:function(){return u},default:function(){return i}});var r=t(52263),o=t(13919);function u(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,u=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(u,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(e,n)}},28084:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},useAllPluginInstancesData:function(){return i},usePluginData:function(){return a}});var r=t(52263),o=t(29935);function u(){var e=(0,r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=u()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},72389:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(67294),o=t(9913);function u(){return(0,r.useContext)(o._)}},48408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(28143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=(0,n.getActiveVersion)(e,t),a=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},96730:function(e,n,t){Object.defineProperty(n,"X$",{value:!0}),n.Jo=n.Iw=n.zu=n.yW=n.gB=n.WS=n.gA=n.zh=n._r=void 0;var r=t(70655),o=t(28143),u=(0,r.__importStar)(t(28084)),i=t(48408),a={};n._r=function(){var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,u.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.WS=function(e){void 0===e&&(e={});var t=(0,n.gA)(e),r=(0,o.useLocation)().pathname;if(t)return{activePlugin:t,activeVersion:(0,i.getActiveVersion)(t.pluginData,r)}};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},41217:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var r=t(67294),o=t(12859),u=t(89521),i=t(44996);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,l=e.children,s=(0,u.useTitleFormatter)(n),f=(0,i.useBaseUrlUtils)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,n&&r.createElement("title",null,s),n&&r.createElement("meta",{property:"og:title",content:s}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),l)}},80907:function(e,n,t){t.r(n),t.d(n,{__esModule:function(){return r.X$},useActiveDocContext:function(){return r.Iw},useActivePlugin:function(){return r.gA},useActivePluginAndVersion:function(){return r.WS},useActiveVersion:function(){return r.zu},useAllDocsData:function(){return r._r},useDocVersionSuggestions:function(){return r.Jo},useDocsData:function(){return r.zh},useLatestVersion:function(){return r.yW},useVersions:function(){return r.gB}});var r=t(96730)},89521:function(e,n,t){t.r(n),t.d(n,{AnnouncementBarProvider:function(){return Ee},Collapsible:function(){return z},DEFAULT_SEARCH_TAG:function(){return g},Details:function(){return K},DocsPreferredVersionContextProvider:function(){return le},MobileSecondaryMenuFiller:function(){return re},MobileSecondaryMenuProvider:function(){return ee},ScrollControllerProvider:function(){return Me},ThemeClassNames:function(){return me},createStorageSlot:function(){return l},docVersionSearchTag:function(){return m},duplicates:function(){return ge},isDocsPluginEnabled:function(){return y},isRegexpStringMatch:function(){return He},isSamePath:function(){return b},listStorageKeys:function(){return s},listTagsByLetters:function(){return Le},parseCodeBlockTitle:function(){return p},translateTagsPageTitle:function(){return Oe},useAlternatePageUtils:function(){return d},useAnnouncementBar:function(){return Se},useCollapsible:function(){return V},useDocsPreferredVersion:function(){return ve},useDocsPreferredVersionByPluginId:function(){return pe},useDynamicCallback:function(){return D},useHistoryPopHandler:function(){return De},useIsomorphicLayoutEffect:function(){return L},useLocalPathname:function(){return _e},useLocationChange:function(){return A},useMobileSecondaryMenuRenderer:function(){return te},usePluralForm:function(){return O},usePrevious:function(){return x},useScrollController:function(){return Ie},useScrollPosition:function(){return Ue},useScrollPositionBlocker:function(){return Ne},useTOCFilter:function(){return Te},useTOCHighlight:function(){return Re},useThemeConfig:function(){return o},useTitleFormatter:function(){return w}});var r=t(52263);function o(){return(0,r.default)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(76775);function d(){var e=(0,r.default)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,l=a===i?t:t.replace("/"+a+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+l:""+l+e+"/"}(n)+s}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function m(e,n){return"docs-"+e+"-"+n}var h=t(80907),y=!!h.useAllDocsData,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.default)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},P=t(67294),E=["zero","one","two","few","many","other"];function S(e){return E.filter((function(n){return e.includes(n)}))}var _={locale:"en",pluralForms:S(["one","other"]),select:function(e){return 1===e?"one":"other"}};function C(){var e=(0,r.default)().i18n.currentLocale;return(0,P.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),_;try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:S(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),_}var n,t}),[e])}function O(){var e=C();return{selectMessage:function(n,t){return function(e,n,t){var r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=t.select(n),u=t.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(t,n,e)}}}var L="undefined"!=typeof window?P.useLayoutEffect:P.useEffect;function D(e){var n=(0,P.useRef)(e);return L((function(){n.current=e}),[e]),(0,P.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function x(e){var n=(0,P.useRef)();return L((function(){n.current=e})),n.current}function A(e){var n=(0,f.TH)(),t=x(n),r=D(e);(0,P.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var k=t(80102),R=t(10412),j=["collapsed"],T=["lazy"];function V(e){var n=e.initialState,t=(0,P.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,P.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var M={display:"none",overflow:"hidden",height:"0px"},I={display:"block",overflow:"visible",height:"auto"};function B(e,n){var t=n?M:I;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function U(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,P.useRef)(!1);(0,P.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return B(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=M.height,u.style.overflow=M.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function N(e){if(!R.default.canUseDOM)return e?M:I}function H(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,P.useRef)(null);return U({collapsibleRef:l,collapsed:r,animation:u}),P.createElement(t,{ref:l,style:c?void 0:N(r),onTransitionEnd:function(e){"height"===e.propertyName&&(B(l.current,r),null==i||i(r))},className:a},o)}function F(e){var n=e.collapsed,t=(0,k.Z)(e,j),r=(0,P.useState)(!n),o=r[0],u=r[1];(0,P.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,P.useState)(n),a=i[0],c=i[1];return(0,P.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?P.createElement(H,Object.assign({},t,{collapsed:a})):null}function z(e){var n=e.lazy,t=(0,k.Z)(e,T),r=n?F:H;return P.createElement(r,Object.assign({},t))}var W=t(72389),Z=t(86010),q="details_2Ziz",G="isBrowser_2j9b",X="collapsibleContent_3OHp",J=["summary","children"];function Y(e){return!!e&&("SUMMARY"===e.tagName||Y(e.parentElement))}function $(e,n){return!!e&&(e===n||$(e.parentElement,n))}var K=function(e){var n,t=e.summary,r=e.children,o=(0,k.Z)(e,J),u=(0,W.default)(),i=(0,P.useRef)(null),a=V({initialState:!o.open}),c=a.collapsed,l=a.setCollapsed,s=(0,P.useState)(o.open),f=s[0],d=s[1];return P.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,Z.default)(q,(n={},n[G]=u,n),o.className),onMouseDown:function(e){Y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;Y(n)&&$(n,i.current)&&(e.preventDefault(),c?(l(!1),d(!0)):l(!0))}}),t,P.createElement(z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){l(e),d(!e)}},P.createElement("div",{className:X},r)))};var Q=(0,P.createContext)(null);function ee(e){var n=e.children;return P.createElement(Q.Provider,{value:(0,P.useState)(null)},n)}function ne(){var e=(0,P.useContext)(Q);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function te(){var e=ne()[0];if(e){var n=e.component;return function(t){return P.createElement(n,Object.assign({},e.props,t))}}return function(){}}function re(e){var n,t=e.component,r=e.props,o=ne()[1],u=(n=r,(0,P.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,P.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,P.useEffect)((function(){return function(){return o(null)}}),[o]),null}var oe=function(e){return"docs-preferred-version-"+e},ue={save:function(e,n,t){l(oe(e),{persistence:n}).set(t)},read:function(e,n){return l(oe(e),{persistence:n}).get()},clear:function(e,n){l(oe(e),{persistence:n}).del()}};function ie(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ue.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ue.clear(e,t),{preferredVersionName:null})}(e)})),o}function ae(){var e=(0,h.useAllDocsData)(),n=o().docs.versionPersistence,t=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,P.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,P.useEffect)((function(){i(ie({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,t){ue.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var ce=(0,P.createContext)(null);function le(e){var n=e.children;return y?P.createElement(se,null,n):P.createElement(P.Fragment,null,n)}function se(e){var n=e.children,t=ae();return P.createElement(ce.Provider,{value:t},n)}function fe(){var e=(0,P.useContext)(ce);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}var de=t(29935);function ve(e){void 0===e&&(e=de.m);var n=(0,h.useDocsData)(e),t=fe(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,P.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}function pe(){var e=(0,h.useAllDocsData)(),n=fe()[0];var t=Object.keys(e),r={};return t.forEach((function(t){r[t]=function(t){var r=e[t],o=n[t].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(t)})),r}function ge(e,n){return void 0===n&&(n=function(e,n){return e===n}),e.filter((function(t,r){return e.findIndex((function(e){return n(e,t)}))!==r}))}var me={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},he=l("docusaurus.announcement.dismiss"),ye=l("docusaurus.announcement.id"),be=function(){return"true"===he.get()},we=function(e){return he.set(String(e))},Pe=(0,P.createContext)(null),Ee=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,W.default)(),t=(0,P.useState)((function(){return!!n&&be()})),r=t[0],u=t[1];(0,P.useEffect)((function(){u(be())}),[]);var i=(0,P.useCallback)((function(){we(!0),u(!0)}),[]);return(0,P.useEffect)((function(){if(e){var n=e.id,t=ye.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;ye.set(n),r&&we(!1),!r&&be()||u(!1)}}),[e]),(0,P.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return P.createElement(Pe.Provider,{value:t},n)},Se=function(){var e=(0,P.useContext)(Pe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function _e(){var e=(0,r.default)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var Ce=t(95999),Oe=function(){return(0,Ce.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function Le(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function De(e){!function(e){var n=(0,f.k6)().block,t=(0,P.useRef)(e);(0,P.useEffect)((function(){t.current=e}),[e]),(0,P.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function xe(e){var n=e.getBoundingClientRect();return n.top===n.bottom?xe(e.parentNode):n}function Ae(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return xe(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(xe(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function ke(){var e=(0,P.useRef)(0),n=o().navbar.hideOnScroll;return(0,P.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var Re=function(e){var n=(0,P.useRef)(void 0),t=ke();(0,P.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,i=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),c=Ae(a,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function je(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=je({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Te(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,P.useMemo)((function(){return je({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var Ve=(0,P.createContext)(void 0);function Me(e){var n,t=e.children;return P.createElement(Ve.Provider,{value:(n=(0,P.useRef)(!0),(0,P.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Ie(){var e=(0,P.useContext)(Ve);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Be=function(){return R.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function Ue(e,n){void 0===n&&(n=[]);var t=Ie().scrollEventsEnabledRef,r=(0,P.useRef)(Be()),o=D(e);(0,P.useEffect)((function(){var e=function(){if(t.current){var e=Be();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}function Ne(){var e,n,t,r=Ie(),o=(e=(0,P.useRef)({elem:null,top:0}),n=(0,P.useCallback)((function(n){e.current={elem:n,top:n.getBoundingClientRect().top}}),[]),t=(0,P.useCallback)((function(){var n=e.current,t=n.elem,r=n.top;if(!t)return{restored:!1};var o=t.getBoundingClientRect().top-r;return o&&window.scrollBy({left:0,top:o}),e.current={elem:null,top:0},{restored:0!==o}}),[]),(0,P.useMemo)((function(){return{save:n,restore:t}}),[t,n])),u=(0,P.useRef)(void 0),i=(0,P.useCallback)((function(e){o.save(e),r.disableScrollEvents(),u.current=function(){var e=o.restore().restored;if(u.current=void 0,e){window.addEventListener("scroll",(function e(){r.enableScrollEvents(),window.removeEventListener("scroll",e)}))}else r.enableScrollEvents()}}),[r,o]);return(0,P.useLayoutEffect)((function(){var e;null===(e=u.current)||void 0===e||e.call(u)})),{blockElementScrollPositionUntilNextRender:i}}function He(e,n){return void 0!==e&&void 0!==n&&new RegExp(e,"gi").test(n)}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(o=u,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(u,i)}},18780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var u=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(u).default}})},29964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},86010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.r(n),t.d(n,{default:function(){return o}})},70655:function(e,n,t){t.r(n),t.d(n,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return l},__awaiter:function(){return s},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return g},__spread:function(){return m},__spreadArrays:function(){return h},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return P},__asyncValues:function(){return E},__makeTemplateObject:function(){return S},__importStar:function(){return C},__importDefault:function(){return O},__classPrivateFieldGet:function(){return L},__classPrivateFieldSet:function(){return D}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function a(e,n,t,r){var o,u=arguments.length,i=u<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(n,t,i):o(n,t))||i);return u>3&&i&&Object.defineProperty(n,t,i),i}function c(e,n){return function(t,r){n(t,r,e)}}function l(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function s(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}c((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(a){u=[6,a],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function v(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(g(arguments[n]));return e}function h(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var u=arguments[n],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){u.push([e,n,t,r])>1||a(e,n)}))})}function a(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,l):s(u[0][2],t)}catch(r){s(u[0][3],r)}var t}function c(e){a("next",e)}function l(e){a("throw",e)}function s(e,n){e(n),u.shift(),u.length&&a(u[0][0],u[0][1])}}function P(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function S(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var _=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function C(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return _(n,e),n}function O(e){return e&&e.__esModule?e:{default:e}}function L(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function D(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);