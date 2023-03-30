"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9352],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(5773),r=(n(7378),n(5318));const i={id:"schema.ChatResult",title:"Interface: ChatResult",sidebar_label:"schema.ChatResult",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/schema.ChatResult",id:"api/interfaces/schema.ChatResult",title:"Interface: ChatResult",description:"schema.ChatResult",source:"@site/docs/api/interfaces/schema.ChatResult.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/schema.ChatResult",permalink:"/langchainjs/docs/api/interfaces/schema.ChatResult",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"schema.ChatResult",title:"Interface: ChatResult",sidebar_label:"schema.ChatResult",custom_edit_url:null},sidebar:"sidebar",previous:{title:"schema.ChatGeneration",permalink:"/langchainjs/docs/api/interfaces/schema.ChatGeneration"},next:{title:"schema.Generation",permalink:"/langchainjs/docs/api/interfaces/schema.Generation"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"generations",id:"generations",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"llmOutput",id:"llmoutput",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:o},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema"},"schema"),".ChatResult"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"generations"},"generations"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"generations"),": ",(0,r.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/interfaces/schema.ChatGeneration"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatGeneration")),"[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/schema/index.ts#L93"},"langchain/src/schema/index.ts:93")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"llmoutput"},"llmOutput"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"llmOutput"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/schema/index.ts#L96"},"langchain/src/schema/index.ts:96")))}h.isMDXComponent=!0}}]);