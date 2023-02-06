"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[3241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={title:"GitHub Actions\u306eworkflow\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u9ad8\u901f\u5316\u3059\u308b"},a=void 0,c={unversionedId:"tips/GitHub/github-actions-cache",id:"tips/GitHub/github-actions-cache",title:"GitHub Actions\u306eworkflow\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u9ad8\u901f\u5316\u3059\u308b",description:"GitHub Actions \u4e0a\u3067 web \u30b5\u30a4\u30c8\u3092 build \u3057\u3066 GitHub Pages \u306a\u3069\u3078\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u3001\u5b9f\u884c\u3059\u308b\u3054\u3068\u306b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 fetch \u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5b9f\u884c\u6642\u9593\u304c\u4f38\u3073\u308b\u50be\u5411\u306b\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/tips/GitHub/github-actions-cache.md",sourceDirName:"tips/GitHub",slug:"/tips/GitHub/github-actions-cache",permalink:"/documents/docs/tips/GitHub/github-actions-cache",draft:!1,editUrl:"https://github.com/keyaki-fes/documents/tree/main/docs/tips/GitHub/github-actions-cache.md",tags:[],version:"current",frontMatter:{title:"GitHub Actions\u306eworkflow\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u9ad8\u901f\u5316\u3059\u308b"},sidebar:"tutorialSidebar",previous:{title:"template",permalink:"/documents/docs/tips/template/"},next:{title:"Google Drive \u3067\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u5fc5\u8981\u3067\u3059\u3068\u8868\u793a\u3055\u308c\u308b",permalink:"/documents/docs/tips/GoogleDrive/google-drive-cannot-view"}},l={},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u63a1\u7528\u4f8b",id:"\u63a1\u7528\u4f8b",level:2}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GitHub Actions \u4e0a\u3067 web \u30b5\u30a4\u30c8\u3092 build \u3057\u3066 GitHub Pages \u306a\u3069\u3078\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u3001\u5b9f\u884c\u3059\u308b\u3054\u3068\u306b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 fetch \u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5b9f\u884c\u6642\u9593\u304c\u4f38\u3073\u308b\u50be\u5411\u306b\u3042\u308a\u307e\u3059\u3002\n\u4eca\u56de\u306f GitHub Actions \u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057 workflow \u3092\u9ad8\u901f\u5316\u3059\u308b\u624b\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"jobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [18.x]\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node-version }}\n          cache: yarn\n          cache-dependency-path: ./package-lock.json\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile --prefer-offline\n      - name: Build website\n        run: yarn build\n")),(0,o.kt)("p",null,"\u307e\u305a",(0,o.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2"),"\u4ee5\u964d\uff08\u4e0a\u8a18\u3067\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"@v3"),"\u3092\u4f7f\u7528\uff09\u306b\u306f\u4f9d\u5b58\u95a2\u4fc2\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u305f\u308a\u5fa9\u5143\u3057\u305f\u308a\u3059\u308b\u6a5f\u80fd\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u306e\u3067\u3053\u3061\u3089\u3092\u5229\u7528\u3057\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u3068\u3057\u3066",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\u3092\u6307\u5b9a\u3057\u3001\u4f9d\u5b58\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\u3092\u6307\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u3046\u3059\u308b\u3053\u3068\u3067",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\u3078\u5909\u66f4\u304c\u3042\u3063\u305f\u6642\u4ee5\u5916\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u6b21\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"\u306b",(0,o.kt)("inlineCode",{parentName:"p"},"--prefer-offline"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u3053\u308c\u306f\u3001\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4e2d\u306b\u53ef\u80fd\u306a\u9650\u308a\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\uff08\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308b\uff09\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u63a1\u7528\u4f8b"},"\u63a1\u7528\u4f8b"),(0,o.kt)("p",null,"\u5b9f\u969b\u306b\u4e0a\u8a18\u306e workflow \u306f\u3053\u306e\u30b5\u30a4\u30c8\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306b\u4f7f\u7528\u3055\u308c\u3066\u304a\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u5229\u7528\u3059\u308b\u524d\u3068\u5f8c\u3067\u306f\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306b\u8981\u3059\u308b\u6642\u9593\u304c\u304a\u3088\u305d 1/3 \u306b\u307e\u3067\u6e1b\u5c11\u3057\u307e\u3057\u305f\u3002\uff0835 \u79d2 \u2192 11 \u79d2\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2268).Z,width:"2616",height:"510"}),"\n",(0,o.kt)("img",{src:n(5613).Z,width:"2580",height:"500"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keyaki-fes/documents/blob/80c65e01f61de30c383dfb61a04aed8c05243e7f/.github/workflows/deploy.yml"},"\u5b9f\u88c5\u4f8b")))}u.isMDXComponent=!0},5613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/after-07bc9a6404aac43962dff2a9e0360b74.png"},2268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/before-55c651a1f93049e05d6a24ac536b5a6a.png"}}]);