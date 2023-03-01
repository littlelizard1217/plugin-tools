"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7896),a=(n(2784),n(876));const o={id:"backend",title:"Backend"},i=void 0,l={unversionedId:"backend",id:"backend",title:"Backend",description:"The backend part of a Grafana plugin is written in Go. To keep the Grafana plugin SDK for Go up to date:",source:"@site/../docs/backend.md",sourceDirName:".",slug:"/backend",permalink:"/plugin-tools/docs/backend",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/backend.md",tags:[],version:"current",frontMatter:{id:"backend",title:"Backend"},sidebar:"docs",previous:{title:"Frontend",permalink:"/plugin-tools/docs/frontend"},next:{title:"Docker Development Environment",permalink:"/plugin-tools/docs/docker"}},c={},p=[{value:"<code>mage -v</code>",id:"mage--v",level:2},{value:"Options",id:"options",level:3},{value:"<code>mage -l</code>",id:"mage--l",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The backend part of a Grafana plugin is written in Go. To keep the ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/"},"Grafana plugin SDK for Go")," up to date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/grafana/grafana-plugin-sdk-go\ngo mod tidy\n")),(0,a.kt)("h2",{id:"mage--v"},(0,a.kt)("inlineCode",{parentName:"h2"},"mage -v")),(0,a.kt)("p",null,"Build backend plugin binaries for Linux, Windows and Darwin."),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"build:[arch]")),(0,a.kt)("td",{parentName:"tr",align:null},"Builds a binary for a specific architecture."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"mage -v build:Linux"))))),(0,a.kt)("h2",{id:"mage--l"},(0,a.kt)("inlineCode",{parentName:"h2"},"mage -l")),(0,a.kt)("p",null,"List all available Mage targets for additional commands."))}u.isMDXComponent=!0}}]);