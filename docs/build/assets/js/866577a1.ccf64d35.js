"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7558],{5318:(e,a,n)=>{n.d(a,{Zo:()=>h,kt:()=>k});var t=n(7378);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),p=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},h=function(e){var a=p(e.components);return t.createElement(d.Provider,{value:a},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(d,".").concat(m)]||c[m]||o[m]||l;return n?t.createElement(k,r(r({ref:a},h),{},{components:n})):t.createElement(k,r({ref:a},h))}));function k(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3619:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=n(5773),i=(n(7378),n(5318));const l={id:"chains.SqlDatabaseChain",title:"Class: SqlDatabaseChain",sidebar_label:"chains.SqlDatabaseChain",custom_edit_url:null},r=void 0,s={unversionedId:"api/classes/chains.SqlDatabaseChain",id:"api/classes/chains.SqlDatabaseChain",title:"Class: SqlDatabaseChain",description:"chains.SqlDatabaseChain",source:"@site/docs/api/classes/chains.SqlDatabaseChain.md",sourceDirName:"api/classes",slug:"/api/classes/chains.SqlDatabaseChain",permalink:"/langchainjs/docs/api/classes/chains.SqlDatabaseChain",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"chains.SqlDatabaseChain",title:"Class: SqlDatabaseChain",sidebar_label:"chains.SqlDatabaseChain",custom_edit_url:null},sidebar:"sidebar",previous:{title:"chains.RetrievalQAChain",permalink:"/langchainjs/docs/api/classes/chains.RetrievalQAChain"},next:{title:"chains.StuffDocumentsChain",permalink:"/langchainjs/docs/api/classes/chains.StuffDocumentsChain"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"callbackManager",id:"callbackmanager",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"database",id:"database",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"inputKey",id:"inputkey",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"llm",id:"llm",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"memory",id:"memory",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"outputKey",id:"outputkey",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"prompt",id:"prompt",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"returnDirect",id:"returndirect",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"topK",id:"topk",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"verbose",id:"verbose",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Accessors",id:"accessors",level:2},{value:"inputKeys",id:"inputkeys",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Methods",id:"methods",level:2},{value:"_call",id:"_call",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"_chainType",id:"_chaintype",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"apply",id:"apply",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"call",id:"call",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"run",id:"run",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"serialize",id:"serialize",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"deserialize",id:"deserialize",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-18",level:4}],h={toc:p},c="wrapper";function o(e){let{components:a,...n}=e;return(0,i.kt)(c,(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains"},"chains"),".SqlDatabaseChain"),(0,i.kt)("p",null,"Base interface that all chains must implement."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseChain"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"SqlDatabaseChain"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SqlDatabaseChain"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.database")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/sql_db.SqlDatabase"},(0,i.kt)("inlineCode",{parentName:"a"},"SqlDatabase")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.inputKey?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.llm")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.memory?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/classes/memory.BaseMemory"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseMemory")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fields.outputKey?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L33"},"langchain/src/chains/sql_db/sql_db_chain.ts:33")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"callbackmanager"},"callbackManager"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"callbackManager"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/callbacks.CallbackManager"},(0,i.kt)("inlineCode",{parentName:"a"},"CallbackManager"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#callbackmanager"},"callbackManager")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L25"},"langchain/src/chains/base.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"database"},"database"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"database"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/sql_db.SqlDatabase"},(0,i.kt)("inlineCode",{parentName:"a"},"SqlDatabase"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L18"},"langchain/src/chains/sql_db/sql_db_chain.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputkey"},"inputKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"query"')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L26"},"langchain/src/chains/sql_db/sql_db_chain.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"llm"},"llm"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"llm"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/base_language.BaseLanguageModel"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseLanguageModel"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L15"},"langchain/src/chains/sql_db/sql_db_chain.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"memory"},"memory"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"memory"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/memory.BaseMemory"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseMemory"))),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#memory"},"memory")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L21"},"langchain/src/chains/base.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outputkey"},"outputKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"outputKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"result"')),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L28"},"langchain/src/chains/sql_db/sql_db_chain.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prompt"},"prompt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"prompt"),": ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},(0,i.kt)("inlineCode",{parentName:"a"},"PromptTemplate"))," = ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_SQL_DATABASE_PROMPT")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L21"},"langchain/src/chains/sql_db/sql_db_chain.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"returndirect"},"returnDirect"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"returnDirect"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L31"},"langchain/src/chains/sql_db/sql_db_chain.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topk"},"topK"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"topK"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"5")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L24"},"langchain/src/chains/sql_db/sql_db_chain.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbose"},"verbose"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"verbose"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#verbose"},"verbose")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L23"},"langchain/src/chains/base.ts:23")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"inputkeys"},"inputKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"inputKeys"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,"BaseChain.inputKeys"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L100"},"langchain/src/chains/sql_db/sql_db_chain.ts:100")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"_call"},"_","call"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_call"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("p",null,"Run the core logic of this chain and return the output"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#_call"},"_call")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L48"},"langchain/src/chains/sql_db/sql_db_chain.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_chaintype"},"_","chainType"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_chainType"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},'"sql_database_chain"')),(0,i.kt)("p",null,"Return the string type key uniquely identifying this class of chain."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"sql_database_chain"')),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#_chaintype"},"_chainType")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L96"},"langchain/src/chains/sql_db/sql_db_chain.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"apply"},"apply"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"apply"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("p",null,"Call the chain on all inputs in the list"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inputs")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),"[]")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#apply"},"apply")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L109"},"langchain/src/chains/base.ts:109")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"call"},"call"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"call"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"values"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("p",null,"Run the core logic of this chain and add to output if desired."),(0,i.kt)("p",null,"Wraps ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.SqlDatabaseChain#_call"},"_call")," and handles memory."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"values")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/schema#chainvalues"},(0,i.kt)("inlineCode",{parentName:"a"},"ChainValues")),">"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#call"},"call")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L79"},"langchain/src/chains/base.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"run"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#run"},"run")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/base.ts#L55"},"langchain/src/chains/base.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serialize"},"serialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"serialize"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedsqldatabasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedSqlDatabaseChain"))),(0,i.kt)("p",null,"Return a json-like object representing this chain."),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/chains#serializedsqldatabasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedSqlDatabaseChain"))),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#serialize"},"serialize")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L123"},"langchain/src/chains/sql_db/sql_db_chain.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deserialize"},"deserialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.SqlDatabaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"SqlDatabaseChain")),">"),(0,i.kt)("p",null,"Load a chain from a json-like object describing it."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/langchainjs/docs/api/modules/chains#serializedsqldatabasechain"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedSqlDatabaseChain")))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.SqlDatabaseChain"},(0,i.kt)("inlineCode",{parentName:"a"},"SqlDatabaseChain")),">"),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain"},"BaseChain"),".",(0,i.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/chains.BaseChain#deserialize"},"deserialize")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/chains/sql_db/sql_db_chain.ts#L104"},"langchain/src/chains/sql_db/sql_db_chain.ts:104")))}o.isMDXComponent=!0}}]);