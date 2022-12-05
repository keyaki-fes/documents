"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),u=n(7392),s=n(7094),i=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:o,values:m,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,u.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[T,N]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=d){const e=v[d];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(w(t),N(a),null!=d&&y(d,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},b)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:E},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const u={slug:"first-blog-post",title:"Hello,Docusaurus!!",authors:"eno1220",tags:["introduction"]},s=void 0,i={permalink:"/documents/blog/first-blog-post",editUrl:"https://github.com/keyaki-fes/documents/tree/main/blog/2022-12-05-first-blog-post.mdx",source:"@site/blog/2022-12-05-first-blog-post.mdx",title:"Hello,Docusaurus!!",description:"\u306f\u3058\u3081\u306b",date:"2022-12-05T00:00:00.000Z",formattedDate:"2022\u5e7412\u67085\u65e5",tags:[{label:"introduction",permalink:"/documents/blog/tags/introduction"}],readingTime:2.265,hasTruncateMarker:!1,authors:[{name:"eno1220",title:"sub leader of IT management department",url:"https://github.com/eno1220",imageURL:"https://github.com/eno1220.png",key:"eno1220"}],frontMatter:{slug:"first-blog-post",title:"Hello,Docusaurus!!",authors:"eno1220",tags:["introduction"]}},c={authorsImageUrls:[void 0]},p=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u7de8\u96c6\u65b9\u6cd5",id:"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u7de8\u96c6\u65b9\u6cd5",level:2},{value:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6d3b\u7528\u65b9\u91dd\u306b\u95a2\u3057\u3066",id:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6d3b\u7528\u65b9\u91dd\u306b\u95a2\u3057\u3066",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,r.kt)("p",null,"\u3053\u3093\u306b\u3061\u306f\u3001IT \u7ba1\u7406\u90e8\u526f\u90e8\u9577\u306e ",(0,r.kt)("strong",{parentName:"p"},"eno1220")," \u3067\u3059\u3002\u3053\u306e\u305f\u3073\u3001Docusaurus \u3068\u3044\u3046 Meta \u793e\u306e OSS \u3092\u4f7f\u7528\u3057\u3066\u3001IT \u7ba1\u7406\u90e8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3068\u3057\u307e\u3057\u305f\u3002\nReact \u30d9\u30fc\u30b9\u3067\u958b\u767a\u3055\u308c\u3066\u304a\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"node")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," \u306a\u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306e\u307f\u3067\u4f7f\u7528\u3067\u304d\u308b\u305f\u3081\u3001\u63a1\u7528\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("h2",{id:"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u7de8\u96c6\u65b9\u6cd5"},"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u7de8\u96c6\u65b9\u6cd5"),(0,r.kt)("p",null,"\u306f\u3058\u3081\u306b\u3001\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u7ba1\u7406\u3057\u3066\u3044\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089 clone \u3057\u307e\u3059\u3002\u306a\u304a\u3001\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u5fc5\u8981\u3067\u3059\u306e\u3067\u3001\u304a\u6301\u3061\u3067\u306a\u3044\u5834\u5408\u306f\u3001admin \u307e\u3067\u9023\u7d61\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:keyaki-fes/documents.git\ncd documents\n")),(0,r.kt)("p",null,"clone \u3057\u3066\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u305f\u3089\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")))),(0,r.kt)("p",null,"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3089\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"localhost://3000")," \u3067\u30d7\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start\n")))),(0,r.kt)("h2",{id:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6d3b\u7528\u65b9\u91dd\u306b\u95a2\u3057\u3066"},"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u6d3b\u7528\u65b9\u91dd\u306b\u95a2\u3057\u3066"),(0,r.kt)("p",null,"\u73fe\u5728\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6d3b\u7528\u304c\u3067\u304d\u308b\u3068\u3044\u3044\u306a\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5916\u3067\u4f5c\u6210\u3057\u305f\u66f8\u985e\u30fb\u30dd\u30b9\u30bf\u30fc\u7b49\u306e\u4e00\u89a7"),(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30f3\u30d0\u30fc\u80b2\u6210\u306b\u4f7f\u7528\u3057\u305f\u6559\u6750"),(0,r.kt)("li",{parentName:"ul"},"\u5404\u8a00\u8a9e\u306e\u30ce\u30a6\u30cf\u30a6\u5171\u6709"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u5316\u796d\u904b\u55b6\u306e\u30ce\u30a6\u30cf\u30a6\u5171\u6709")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u3001\u500b\u4eba\u60c5\u5831\u306a\u3069\u306e\u30bb\u30f3\u30b7\u30c6\u30a3\u30d6\u306a\u60c5\u5831\u3092\u63b2\u8f09\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\n\u307e\u305f\u3001IT \u7ba1\u7406\u90e8\u5171\u901a\u306e\u30eb\u30fc\u30eb\u306f Discord \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"#rules")," \u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u3042\u308a\u307e\u3059\u306e\u3067\u4e00\u8aad\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u306a\u304a\u3001\u3055\u3089\u306a\u308b\u8a73\u7d30\u306f\u3001\u4ee5\u4e0b\u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304b\u3089\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u306a\u304a\u3001\u968f\u6642\u4f7f\u7528\u65b9\u6cd5\u7b49\u3092\u8ffd\u8a18\u3057\u3066\u3044\u304f\u4e88\u5b9a\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")))}d.isMDXComponent=!0}}]);