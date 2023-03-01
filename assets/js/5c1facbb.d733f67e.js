"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[691],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7896),r=(n(2784),n(876));const o={id:"ci",title:"Continuous Integration"},a=void 0,l={unversionedId:"ci",id:"ci",title:"Continuous Integration",description:"@grafana/create-plugin comes with several GitHub workflows that help automate the plugin development process.",source:"@site/../docs/ci.md",sourceDirName:".",slug:"/ci",permalink:"/plugin-tools/docs/ci",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/ci.md",tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"docs",previous:{title:"Docker Development Environment",permalink:"/plugin-tools/docs/docker"},next:{title:"Distributing Your Plugin",permalink:"/plugin-tools/docs/distributing-your-plugin"}},s={},p=[{value:"Continuous Integration (<code>ci.yml</code>)",id:"continuous-integration-ciyml",level:2},{value:"Release (<code>release.yml</code>)",id:"release-releaseyml",level:2},{value:"Compatibility Check (<code>is-compatible.yml</code>)",id:"compatibility-check-is-compatibleyml",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"@grafana/create-plugin comes with several GitHub workflows that help automate the plugin development process."),(0,r.kt)("h2",{id:"continuous-integration-ciyml"},"Continuous Integration (",(0,r.kt)("inlineCode",{parentName:"h2"},"ci.yml"),")"),(0,r.kt)("p",null,"The Continuous Integration (",(0,r.kt)("inlineCode",{parentName:"p"},"ci.yml"),") workflow is designed to lint, type check, build the frontend and backend, and run tests on your plugin every time you push changes to your repository. This helps catch any issues early in the development process, before they become bigger problems."),(0,r.kt)("h2",{id:"release-releaseyml"},"Release (",(0,r.kt)("inlineCode",{parentName:"h2"},"release.yml"),")"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This workflow requires a Grafana Cloud API key. Follow the instructions for ",(0,r.kt)("a",{parentName:"p",href:"/plugin-tools/docs/distributing-your-plugin#initial-steps"},"distributing your plugin")," first.")),(0,r.kt)("p",null,"The Release (",(0,r.kt)("inlineCode",{parentName:"p"},"release.yml"),") workflow is designed to create a new release of your plugin whenever you're ready to publish a new version. This automates the process of creating releases in GitHub and provides instructions for submitting the plugin to the Grafana plugins catalog."),(0,r.kt)("p",null,"To trigger the release workflow push a git tag for the plugin version you want to release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git tag v1.0.0\ngit push origin v1.0.0\n")),(0,r.kt)("h2",{id:"compatibility-check-is-compatibleyml"},"Compatibility Check (",(0,r.kt)("inlineCode",{parentName:"h2"},"is-compatible.yml"),")"),(0,r.kt)("p",null,"The Compatibility Check (",(0,r.kt)("inlineCode",{parentName:"p"},"is-compatible.yml"),") workflow is designed to check the Grafana API compatibility of your plugin every time you push changes to your repository. This helps catch potential frontend runtime issues by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Finding ",(0,r.kt)("inlineCode",{parentName:"li"},"@grafana")," npm packages in your plugin."),(0,r.kt)("li",{parentName:"ol"},"Extracting the exported types of the specified version."),(0,r.kt)("li",{parentName:"ol"},"Comparing the differences between that version and the latest version."),(0,r.kt)("li",{parentName:"ol"},"Looking for usages of those changed APIs inside your plugin."),(0,r.kt)("li",{parentName:"ol"},"Reporting any potential incompatibilities.")))}u.isMDXComponent=!0}}]);