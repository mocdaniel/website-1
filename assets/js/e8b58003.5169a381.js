"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[2553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:0,description:"integrate with localstack for building locally against AWS",title:"Local Stack",index:1},o=void 0,l={unversionedId:"reference-implementation/integrations/localstack",id:"reference-implementation/integrations/localstack",title:"Local Stack",description:"integrate with localstack for building locally against AWS",source:"@site/docs/reference-implementation/integrations/localstack.md",sourceDirName:"reference-implementation/integrations",slug:"/reference-implementation/integrations/localstack",permalink:"/docs/reference-implementation/integrations/localstack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/integrations/localstack.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"integrate with localstack for building locally against AWS",title:"Local Stack",index:1},sidebar:"tutorialSidebar",previous:{title:"Reference Implementation",permalink:"/docs/reference-implementation/integrations/reference-impl"},next:{title:"Terraform Modules",permalink:"/docs/reference-implementation/integrations/terraform/"}},c={},s=[{value:"Enable the Integration",id:"enable-the-integration",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"enable-the-integration"},"Enable the Integration"),(0,a.kt)("p",null,"Please use the below command to deploy an IDP reference implementation with an Argo application that adds Localstack, as well as integrating with Crossplane."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create \\\n  --use-path-routing \\\n  --package-dir examples/ref-implementation \\\n  --package-dir examples/localstack-integration\n")),(0,a.kt)("p",null,"As you see above, this add-on to ",(0,a.kt)("inlineCode",{parentName:"p"},"idpbuilder")," has a dependency on the ",(0,a.kt)("a",{parentName:"p",href:"reference-impl"},"reference implementation"),". This command primarily does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installs ",(0,a.kt)("inlineCode",{parentName:"li"},"localstack")," helmchart as an ",(0,a.kt)("inlineCode",{parentName:"li"},"argo")," application."),(0,a.kt)("li",{parentName:"ol"},"Adds localstack crossplane ProviderConfig, targeting localstack")),(0,a.kt)("p",null,"Once the custom package is installed, localstack can be used from the backstage template ",(0,a.kt)("inlineCode",{parentName:"p"},"app-with-aws-resources"),", by changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"providerConfigName")," during the bucket configuration page from ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"localstack"),"."))}m.isMDXComponent=!0}}]);