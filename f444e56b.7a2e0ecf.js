(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(9),o=(n(0),n(186)),l={id:"fasthttp-example",title:"Fasthttp"},c={id:"examples/fasthttp/fasthttp-example",isDocsHomePage:!1,title:"Fasthttp",description:"A sample Fasthttp app for KintoHub",source:"@site/docs/examples/fasthttp/README.md",permalink:"/examples/fasthttp/fasthttp-example",sidebar:"someSidebar",previous:{title:"Koa",permalink:"/examples/koa/koa-example"},next:{title:"Beego",permalink:"/examples/beego/beego-example"}},p=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\u26a1 API Call",id:"-api-call",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],b={rightToc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A sample Fasthttp app for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com"}),"KintoHub")),Object(o.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Service Type:")," Backend API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repo:")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub/kintohub"}),"https://github.com/kintohub/kintohub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Branch:")," master"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language:")," Go"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language version:")," 1.13"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"go build -o main .")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Start Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"./main")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Subfolder Path:")," ",Object(o.b)("inlineCode",{parentName:"li"},"./examples/fasthttp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Port:")," 80")),Object(o.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pre-requisites:")," Go v1.13"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/kintohub/kintohub\n\n$ cd kintohub/examples/fasthttp\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Build the app")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ go build -o main .\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To start the app ")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ./main\n")),Object(o.b)("h2",{id:"-api-call"},"\u26a1 API Call"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Local:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -X GET http://localhost/hello/world\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"On KintoHub:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -X GET http://<KintohubHostURL>/hello/world\n")),Object(o.b)("h4",{id:"response"},"Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "Hello world"\n}\n')),Object(o.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Contact us:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"https://www.kintohub.com/contact-us")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discord:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://discordapp.com/invite/E2CMjKP"}),"https://discordapp.com/invite/E2CMjKP")))}i.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<o;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);