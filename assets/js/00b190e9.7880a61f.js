"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[492],{876:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>c});var a=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,m=d["".concat(u,".").concat(c)]||d[c]||s[c]||r;return t?a.createElement(m,l(l({ref:n},g),{},{components:t})):a.createElement(m,l({ref:n},g))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7896),i=(t(2784),t(876));const r={id:"signing-your-plugin",title:"Signing Your Plugin"},l=void 0,o={unversionedId:"signing-your-plugin",id:"signing-your-plugin",title:"Signing Your Plugin",description:"Signing a plugin allows Grafana to verify the authenticity of the plugin with signature verification. This gives users a way to make sure plugins haven't been tampered with. All Grafana Labs-authored backend plugins, including Enterprise plugins, are signed.",source:"@site/../docs/signing-your-plugin.md",sourceDirName:".",slug:"/signing-your-plugin",permalink:"/plugin-tools/docs/signing-your-plugin",draft:!1,editUrl:"https://github.com/grafana/plugin-tools/edit/main/docusaurus/website/../docs/signing-your-plugin.md",tags:[],version:"current",frontMatter:{id:"signing-your-plugin",title:"Signing Your Plugin"},sidebar:"docs",previous:{title:"Distributing Your Plugin",permalink:"/plugin-tools/docs/distributing-your-plugin"},next:{title:"Advanced Configuration",permalink:"/plugin-tools/docs/advanced-configuration"}},u={},p=[{value:"Generate an API key",id:"generate-an-api-key",level:2},{value:"Sign a public plugin",id:"sign-a-public-plugin",level:2},{value:"Sign a private plugin",id:"sign-a-private-plugin",level:2},{value:"Plugin signature levels",id:"plugin-signature-levels",level:2},{value:"Plugin manifest",id:"plugin-manifest",level:2},{value:"Troubleshooting issues while signing your plugin",id:"troubleshooting-issues-while-signing-your-plugin",level:2},{value:"Why am I getting a &quot;Modified signature&quot; in Grafana?",id:"why-am-i-getting-a-modified-signature-in-grafana",level:3},{value:"Error signing manifest: Field is required: rootUrls",id:"error-signing-manifest-field-is-required-rooturls",level:3}],g={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"robots",content:"noindex"})),(0,i.kt)("p",null,"Signing a plugin allows Grafana to verify the authenticity of the plugin with signature verification. This gives users a way to make sure plugins haven't been tampered with. All Grafana Labs-authored backend plugins, including Enterprise plugins, are signed."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," Future versions of Grafana will require all plugins to be signed.")),(0,i.kt)("p",null,"Before you can sign your plugin, you need to decide whether you want to sign it as a ",(0,i.kt)("em",{parentName:"p"},"public")," or a ",(0,i.kt)("em",{parentName:"p"},"private")," plugin."),(0,i.kt)("p",null,"If you want to make your plugin publicly available outside of your organization, you need to sign your plugin under a ",(0,i.kt)("em",{parentName:"p"},"community")," or ",(0,i.kt)("em",{parentName:"p"},"commercial")," ",(0,i.kt)("a",{parentName:"p",href:"#plugin-signature-levels"},"signature level"),". Public plugins are available from ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/plugins"},"grafana.com/plugins")," and can be installed by anyone."),(0,i.kt)("p",null,"If you intend to only use the plugin within your organization, you can sign it under a ",(0,i.kt)("em",{parentName:"p"},"private")," ",(0,i.kt)("a",{parentName:"p",href:"#plugin-signature-levels"},"signature level"),"."),(0,i.kt)("h2",{id:"generate-an-api-key"},"Generate an API key"),(0,i.kt)("p",null,"To verify ownership of your plugin, you need to generate an API key that you'll use every time you need to sign a new version of your plugin."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/signup"},"Create a Grafana Cloud account"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure that the first part of the plugin ID matches the slug of your Grafana Cloud account."),(0,i.kt)("p",{parentName:"li"},"You can find the plugin ID in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.json")," file inside your plugin directory. For example, if your account slug is ",(0,i.kt)("inlineCode",{parentName:"p"},"acmecorp"),", you need to prefix the plugin ID with ",(0,i.kt)("inlineCode",{parentName:"p"},"acmecorp-"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana-cloud/reference/create-api-key/"},"Create a Grafana Cloud API key")," with the ",(0,i.kt)("strong",{parentName:"p"},"PluginPublisher")," role."))),(0,i.kt)("h2",{id:"sign-a-public-plugin"},"Sign a public plugin"),(0,i.kt)("p",null,"Public plugins need to be reviewed by the Grafana team before you can sign them."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit your plugin for review")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When your plugin is approved, you're granted a plugin signature level. ",(0,i.kt)("strong",{parentName:"p"},"Without a plugin signature level, you won't be able to sign your plugin"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your plugin directory, sign the plugin with the API key you just created. Grafana Sign Plugin creates a ",(0,i.kt)("a",{parentName:"p",href:"#plugin-manifest"},"MANIFEST.txt")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," directory of your plugin."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export GRAFANA_API_KEY=<YOUR_API_KEY>\nnpx @grafana/sign-plugin\n")))),(0,i.kt)("h2",{id:"sign-a-private-plugin"},"Sign a private plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your plugin directory, sign the plugin with the API key you just created. Grafana Sign Plugin creates a ",(0,i.kt)("a",{parentName:"p",href:"#plugin-manifest"},"MANIFEST.txt")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," directory of your plugin."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rootUrls")," flag accepts a comma-separated list of URLs to the Grafana instances where you intend to install the plugin."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export GRAFANA_API_KEY=<YOUR_API_KEY>\nnpx @grafana/sign-plugin --rootUrls https://example.com/grafana\n")))),(0,i.kt)("h2",{id:"plugin-signature-levels"},"Plugin signature levels"),(0,i.kt)("p",null,"To sign a plugin, you need to decide the ",(0,i.kt)("em",{parentName:"p"},"signature level")," you want to sign it under. The signature level of your plugin determines how you can distribute it."),(0,i.kt)("p",null,"You can sign your plugin under three different ",(0,i.kt)("em",{parentName:"p"},"signature levels"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Plugin Level")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Paid Subscription Required?")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Private"),(0,i.kt)("td",{parentName:"tr",align:null},"No;Free of charge"),(0,i.kt)("td",{parentName:"tr",align:null},"You can create and sign a Private Plugin for any technology at no charge.Private Plugins are for use on your own Grafana. They may not be distributed to the Grafana community, and are not published in the Grafana catalog.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Community"),(0,i.kt)("td",{parentName:"tr",align:null},"No;Free of charge"),(0,i.kt)("td",{parentName:"tr",align:null},"You can create, sign and distribute plugins at no charge, provided that all dependent technologies are open source and not for profit.Community Plugins are published in the official Grafana catalog, and are available to the Grafana community.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Commercial"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes;Commercial Plugin Subscription required"),(0,i.kt)("td",{parentName:"tr",align:null},"You can create, sign and distribute plugins with dependent technologies that are closed source or commercially backed, by entering into a Commercial Plugin Subscription with Grafana Labs.Commercial Plugins are published on the official Grafana catalog, and are available to the Grafana community.")))),(0,i.kt)("p",null,"For instructions on how to sign a plugin under the Community and Commercial signature level, refer to ",(0,i.kt)("a",{parentName:"p",href:"#sign-a-public-plugin"},"Sign a public plugin"),"."),(0,i.kt)("p",null,"For instructions on how to sign a plugin under the Private signature level, refer to ",(0,i.kt)("a",{parentName:"p",href:"#sign-a-private-plugin"},"Sign a private plugin"),"."),(0,i.kt)("h2",{id:"plugin-manifest"},"Plugin manifest"),(0,i.kt)("p",null,"For Grafana to verify the digital signature of a plugin, the plugin must include a signed manifest file, ",(0,i.kt)("em",{parentName:"p"},"MANIFEST.txt"),". The signed manifest file contains two sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signed message -")," The signed message contains plugin metadata and plugin files with their respective checksums (SHA256)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Digital signature -")," The digital signature is created by encrypting the signed message using a private key. Grafana has a public key built-in that can be used to verify that the digital signature have been encrypted using expected private key.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example manifest file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA512\n\n{\n  "manifestVersion": "2.0.0",\n  "signatureType": "community",\n  "signedByOrg": "myorgid",\n  "signedByOrgName": "My Org",\n  "plugin": "myorgid-simple-panel",\n  "version": "1.0.0",\n  "time": 1602753404133,\n  "keyId": "7e4d0c6a708866e7",\n  "files": {\n    "LICENSE": "12ab7a0961275f5ce7a428e662279cf49bab887d12b2ff7bfde738346178c28c",\n    "module.js.LICENSE.txt": "0d8f66cd4afb566cb5b7e1540c68f43b939d3eba12ace290f18abc4f4cb53ed0",\n    "module.js.map": "8a4ede5b5847dec1c6c30008d07bef8a049408d2b1e862841e30357f82e0fa19",\n    "plugin.json": "13be5f2fd55bee787c5413b5ba6a1fae2dfe8d2df6c867dadc4657b98f821f90",\n    "README.md": "2d90145b28f22348d4f50a81695e888c68ebd4f8baec731fdf2d79c8b187a27f",\n    "module.js": "b4b6945bbf3332b08e5e1cb214a5b85c82557b292577eb58c8eb1703bc8e4577"\n  }\n}\n-----BEGIN PGP SIGNATURE-----\nVersion: OpenPGP.js v4.10.1\nComment: https://openpgpjs.org\n\nwqEEARMKAAYFAl+IE3wACgkQfk0ManCIZudpdwIHTCqjVzfm7DechTa7BTbd\n+dNIQtwh8Tv2Q9HksgN6c6M9nbQTP0xNHwxSxHOI8EL3euz/OagzWoiIWulG\n7AQo7FYCCQGucaLPPK3tsWaeFqVKy+JtQhrJJui23DAZLSYQYZlKQ+nFqc9x\nT6scfmuhWC/TOcm83EVoCzIV3R5dOTKHqkjIUg==\n=GdNq\n-----END PGP SIGNATURE-----\n')),(0,i.kt)("h2",{id:"troubleshooting-issues-while-signing-your-plugin"},"Troubleshooting issues while signing your plugin"),(0,i.kt)("h3",{id:"why-am-i-getting-a-modified-signature-in-grafana"},'Why am I getting a "Modified signature" in Grafana?'),(0,i.kt)("p",null,"Due to an issue when signing the plugin on Windows, in some cases an invalid MANIFEST.txt is being generated. You can fix this by replacing all double backslashes, ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\"),", with a forward slash, ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," in the MANIFEST.txt file. You need to do this every time you sign your plugin."),(0,i.kt)("h3",{id:"error-signing-manifest-field-is-required-rooturls"},"Error signing manifest: Field is required: rootUrls"),(0,i.kt)("p",null,"If you're trying to sign a ",(0,i.kt)("strong",{parentName:"p"},"public")," plugin, this means that your plugin doesn't have a plugin signature level assigned to it yet. A Grafana team member will assign a signature level to your plugin once it has been reviewed and approved. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"#sign-a-public-plugin"},"Sign a public plugin"),"."),(0,i.kt)("p",null,"If you're trying to sign a ",(0,i.kt)("strong",{parentName:"p"},"private")," plugin, this means that you need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"rootUrls")," flag to the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin:sign")," command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"rootUrls")," must match the root_url configuration. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"#sign-a-private-plugin"},"Sign a private plugin"),"."),(0,i.kt)("p",null,"If you still get this error, make sure that the API key was generated by a Grafana Cloud account that matches the first part of the plugin ID."))}s.isMDXComponent=!0}}]);