(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(186)),l={id:"hapi-example",title:"Hapi"},p={id:"examples/hapi/hapi-example",isDocsHomePage:!1,title:"Hapi",description:"A sample Hapi app for KintoHub",source:"@site/docs/examples/hapi/README.md",permalink:"/examples/hapi/hapi-example",sidebar:"someSidebar",previous:{title:"Gin",permalink:"/examples/gin/gin-example"},next:{title:"Koa",permalink:"/examples/koa/koa-example"}},c=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\u26a1 API Call",id:"-api-call",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],i={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A sample Hapi app for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com"}),"KintoHub")),Object(o.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Service Type:")," Backend API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repo:")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub/kintohub"}),"https://github.com/kintohub/kintohub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Branch:")," master"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language:")," NodeJS"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language version:")," 12"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Start Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"npm start")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Subfolder Path:")," ",Object(o.b)("inlineCode",{parentName:"li"},"./examples/hapi")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Port:")," 80")),Object(o.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pre-requisites:")," NodeJS v12+"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/kintohub/kintohub\n\n$ cd kintohub/examples/hapi\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install the dependencies")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To start the app ")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm start\n")),Object(o.b)("h2",{id:"-api-call"},"\u26a1 API Call"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Local:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -X GET http://localhost/hello/world\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"On KintoHub:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -X GET http://<KintohubHostURL>/hello/world\n")),Object(o.b)("h4",{id:"response"},"Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "Hello world"\n}\n')),Object(o.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Contact us:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"https://www.kintohub.com/contact-us")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discord:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://discordapp.com/invite/E2CMjKP"}),"https://discordapp.com/invite/E2CMjKP")))}b.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,O=u["".concat(l,".").concat(s)]||u[s]||m[s]||o;return n?a.a.createElement(O,p(p({ref:t},i),{},{components:n})):a.a.createElement(O,p({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);