"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[2068],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:4,description:"Backstage template generation for CRDs",title:"Deploy Example Application"},s="Deploy an Example Application",r={unversionedId:"reference-implementation/installations/app-idp-xp",id:"reference-implementation/installations/app-idp-xp",title:"Deploy Example Application",description:"Backstage template generation for CRDs",source:"@site/docs/reference-implementation/installations/app-idp-xp.md",sourceDirName:"reference-implementation/installations",slug:"/reference-implementation/installations/app-idp-xp",permalink:"/docs/reference-implementation/installations/app-idp-xp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/installations/app-idp-xp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Backstage template generation for CRDs",title:"Deploy Example Application"},sidebar:"tutorialSidebar",previous:{title:"Data & Analytics IDP",permalink:"/docs/reference-implementation/installations/data-idp"},next:{title:"Configurations",permalink:"/docs/category/configurations"}},l={},p=[{value:"Template Generation",id:"template-generation",level:2},{value:"Background",id:"background",level:3},{value:"Generate",id:"generate",level:3},{value:"Provision Resources",id:"provision-resources",level:3},{value:"ArgoCD",id:"argocd",level:4},{value:"Backstage",id:"backstage",level:4},{value:"Final notes",id:"final-notes",level:3},{value:"Clean up",id:"clean-up",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-an-example-application"},"Deploy an Example Application"),(0,i.kt)("p",null,"In this document, we will walk you through the process of using the template generation capability with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.crossplane.io/master/concepts/composite-resource-definitions/"},"Crossplane XRDs")," to deploy an example application with its AWS infrastructure dependencies."),(0,i.kt)("h2",{id:"template-generation"},"Template Generation"),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"We start with a skeleton template ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/backstage-templates-on-eks/blob/main/crossplane/skeleton.yaml"},"available here"),". "),(0,i.kt)("p",null,"This template has most everything you may need to bootstrap a new Go application. For example, the steps in the template creates a GitHub repository, creates some essential go files such as ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go"),". The requirements for these files typically do not change from an application to application. Even though these files are common, applications themselves may need different supporting infrastructures such as DynamoDB table and S3 buckets."),(0,i.kt)("p",null,"We would like to give the template the ability to define and provision AWS resources as part of the application bootstrapping steps. To accomplish this, we will use Crossplane, ArgoCD, and Backstage scaffolding."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.crossplane.io/"},"Crossplane")," is a CNCF project that allows you to define your own APIs from many different APIs using a mechanism called Compositions. Compositions allows you to define multiple interconnected API objects, then make it available for end users by exposing only a small subset of configuration options. For example,  you can create a composition that creates a Kubernetes service account and an IAM role just by specifying the name of the service account in a standard Kubernetes manifest. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.crossplane.io/"},"this link")," for more information."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/"},"ArgoCD")," is a GitOps solution that continuously syncs Kubernetes manifests into a target cluster."),(0,i.kt)("h3",{id:"generate"},"Generate"),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/crossplane-on-eks"},"Crossplane on EKS")," repository as the source of compositions and its schemas. Our goal is to import all compositions available into the skeleton template."),(0,i.kt)("p",null,"First, clone the repositories"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/crossplane-on-eks.git /tmp/crossplane-on-eks\n\ngit clone https://github.com/awslabs/backstage-templates-on-eks.git /tmp/backstage-templates-on-eks\n")),(0,i.kt)("p",null,"Now we have everything we need to generate input fields in the template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /tmp/backstage-templates-on-eks\nmkdir demo\ncnoe template crd -i /tmp/crossplane-on-eks/compositions/upbound-aws-provider/ \\\n  -t crossplane/skeleton.yaml -o demo  -c true\n")),(0,i.kt)("p",null,"In the above command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specified where the composition definition files live (",(0,i.kt)("inlineCode",{parentName:"li"},"-i"),")"),(0,i.kt)("li",{parentName:"ul"},"Specified the skeleton template file (",(0,i.kt)("inlineCode",{parentName:"li"},"-t"),")"),(0,i.kt)("li",{parentName:"ul"},"Specified the output directory (",(0,i.kt)("inlineCode",{parentName:"li"},"-o"),")"),(0,i.kt)("li",{parentName:"ul"},"Asked the CLI to put everything into one template (",(0,i.kt)("inlineCode",{parentName:"li"},"-c"),")")),(0,i.kt)("p",null,"As a result of the command you should now have a new template file and a directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," containing other yaml files. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lh\n\ntotal 32\ndrwxr-xr-x  15 staff  staff   480B Oct  2 16:24 resources\n-rw-r--r--   1 staff  staff   4.4K Oct  2 19:34 template.yaml\n\nls -lh resources\n\ntotal 320\n-rw-r--r--  1 staff  staff   1.0K Oct  2 19:34 awsblueprints.io.encryptionkey.yaml\n-rw-r--r--  1 staff  staff   1.5K Oct  2 19:34 awsblueprints.io.eventsourcemapping.yaml\n-rw-r--r--  1 staff  staff   1.0K Oct  2 19:34 awsblueprints.io.fanout.yaml\n-rw-r--r--  1 staff  staff   1.7K Oct  2 19:34 awsblueprints.io.firehoseapp.yaml\n-rw-r--r--  1 staff  staff   1.4K Oct  2 19:34 awsblueprints.io.iampolicy.yaml\n-rw-r--r--  1 staff  staff   1.7K Oct  2 19:34 awsblueprints.io.irsa.yaml\n-rw-r--r--  1 staff  staff   1.4K Oct  2 19:34 awsblueprints.io.lambdafunction.yaml\n-rw-r--r--  1 staff  staff   1.0K Oct  2 19:34 awsblueprints.io.notification.yaml\n-rw-r--r--  1 staff  staff   1.4K Oct  2 19:34 awsblueprints.io.objectstorage.yaml\n-rw-r--r--  1 staff  staff   1.0K Oct  2 19:34 awsblueprints.io.queue.yaml\n-rw-r--r--  1 staff  staff   1.3K Oct  2 19:34 awsblueprints.io.serverlessapp.yaml\n-rw-r--r--  1 staff  staff   8.4K Oct  2 19:34 awsblueprints.io.subscriptionfilter.yaml\n-rw-r--r--  1 staff  staff   101K Oct  2 19:34 awsblueprints.io.xkinesisfirehose.yaml\n")),(0,i.kt)("p",null,"The files in the resources directory are referenced in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"template.yaml")," file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"$yaml")," ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format/#substitutions-in-the-descriptor-format"},"special YAML parser key")," that Backstage supports."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- $yaml: resources/awsblueprints.io.subscriptionfilter.yaml\n")),(0,i.kt)("p",null,"This particular line tells Backstage to include the file available at ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/awsblueprints.io.subscriptionfilter.yaml"),"  when rendering this template in the UI."),(0,i.kt)("p",null,"You may also noticed it added more fields like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    - dependencies:\n        resources:\n          oneOf:\n            - $yaml: resources/awsblueprints.io.subscriptionfilter.yaml\n            - $yaml: resources/awsblueprints.io.eventsourcemapping.yaml\n      properties:\n        name:\n          description: name of this resource. This will be the name of K8s object.\n          type: string\n        resources:\n          enum:\n            - awsblueprints.io.subscriptionfilter\n            - awsblueprints.io.eventsourcemapping\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"resources.enum")," fields are used to define dependencies and additional schemas based on user inputs. For example, if the end user selects ",(0,i.kt)("inlineCode",{parentName:"p"},"awsblueprints.io.eventsourcemapping")," from the enum list, the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/awsblueprints.io.eventsourcemapping.yaml")," is rendered. If you'd like to learn more, checkout the ",(0,i.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/docs/"},"json schema react form documentation"),"."),(0,i.kt)("h3",{id:"provision-resources"},"Provision Resources"),(0,i.kt)("p",null,"Once the input fields are generated, it is ready to use. You can register it in your Backstage instance. The ready-to-use version of the template is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/backstage-templates-on-eks/blob/main/crossplane/template.yaml"},"available here")," if you prefer."),(0,i.kt)("h4",{id:"argocd"},"ArgoCD"),(0,i.kt)("p",null,"Before we continue, a little bit about the ArgoCD setup. In the reference implementation, ArgoCD is setup as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A GitHub token is available for ArgoCD.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ArgoCD is configure to look for repositories in the specified organization with two conditions:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The GitHub repository name must start with ",(0,i.kt)("inlineCode",{parentName:"li"},"demo")),(0,i.kt)("li",{parentName:"ul"},"There must be a path available at ",(0,i.kt)("inlineCode",{parentName:"li"},"kustomize/dev"))),(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/reference-implementation-aws/blob/main/setups/argocd/application-set.yaml"},"this file")," for more information."))),(0,i.kt)("p",null,"To bridge the gap between Backstage and ArgoCD, what we want to do in Backstage is to create a repository named ",(0,i.kt)("inlineCode",{parentName:"p"},"demo-*"),", then ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize/dev")," path exists. All these are handled in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/backstage-templates-on-eks/blob/c94cb7f70410bc2a48523d78440f8a39630c0bc8/crossplane/template.yaml#L86-L123"},"the template steps"),"."),(0,i.kt)("h4",{id:"backstage"},"Backstage"),(0,i.kt)("p",null,"When you open the template in Backstage, the template input fields will be rendered in Backstage like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select",src:a(2516).Z,width:"1722",height:"972"})),(0,i.kt)("p",null,"For this example, let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectStorage")," kind. The source for this composition is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/crossplane-on-eks/tree/main/compositions/upbound-aws-provider/s3"},"here"),". In essence, this composition will:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a S3 bucket. "),(0,i.kt)("li",{parentName:"ol"},"Enable default Server Side Encryption for the bucket."),(0,i.kt)("li",{parentName:"ol"},"Block all public access.")),(0,i.kt)("p",null,"To take advantage of this composition, you just have to create a yaml file like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: awsblueprints.io/v1alpha1\nkind: ObjectStorage\nmetadata:\n  name: test-bucket-awsblueprint-123456789\nspec:\n  resourceConfig:\n    providerConfigName: aws-provider-config\n    region: us-west-2\n")),(0,i.kt)("p",null,"This yaml file is created in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/awslabs/backstage-templates-on-eks/blob/c94cb7f70410bc2a48523d78440f8a39630c0bc8/crossplane/template.yaml#L102-L116"},"these steps")," in the template."),(0,i.kt)("p",null,"Let's fill out the template form we just created. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"template1",src:a(650).Z,width:"1635",height:"1149"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The application name must start with ",(0,i.kt)("inlineCode",{parentName:"li"},"demo-")),(0,i.kt)("li",{parentName:"ol"},"Set the owner to be your organization name. e.g. for ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/cnoe-io"),", organization name should be ",(0,i.kt)("inlineCode",{parentName:"li"},"cnoe-io"),"."),(0,i.kt)("li",{parentName:"ol"},"The repository name need to match the application name. e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"demo-<replaceme>")),(0,i.kt)("li",{parentName:"ol"},"Click Next.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:a(5851).Z,width:"1614",height:"1310"})),(0,i.kt)("p",null,"In the next page. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"awsblueprints.io.objectstorage")),(0,i.kt)("li",{parentName:"ol"},"Set Deletion policy to ",(0,i.kt)("inlineCode",{parentName:"li"},"Delete"),"."),(0,i.kt)("li",{parentName:"ol"},"Name can be anything."),(0,i.kt)("li",{parentName:"ol"},"Provider Config Name needs to be ",(0,i.kt)("inlineCode",{parentName:"li"},"provider-aws-config")),(0,i.kt)("li",{parentName:"ol"},"Choose a correct region for your setup. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"us-west-2"))),(0,i.kt)("p",null,"Once you submit the task, a new repository with a single nginx deployment and composition claim file is created. After a few minutes, ArgoCD should pick it up. Log in to your ArgoCD instance, then click on the newly created application. It should look something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:a(7237).Z,width:"1570",height:"797"})),(0,i.kt)("p",null,"As you can see, a single Kubernetes object of kind ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectStorage")," created multiple object in Kubernetes. These objects corresponds to AWS API objects. If you open your AWS S3 console, you should have a new S3 bucket with configuration we discussed above."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt text",src:a(6434).Z,width:"1672",height:"943"})),(0,i.kt)("h3",{id:"final-notes"},"Final notes"),(0,i.kt)("p",null,"In this example, we provisioned a S3 bucket, but you can provision any API resources as long as underlying controllers support it. For example, you can provision a DynamoDB table and a Vault secrets."),(0,i.kt)("p",null,"You do not need to use Crossplane to use this pattern. You can also use ACK or any other operators that work on CRDs."),(0,i.kt)("h2",{id:"clean-up"},"Clean up"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unregister the entity from Backstage."),(0,i.kt)("li",{parentName:"ol"},"Delete the newly created repository."),(0,i.kt)("li",{parentName:"ol"},"Wait for ArgoCD to delete resources. This is important because Kubernetes resources are now tied to an external entity.")))}u.isMDXComponent=!0},7237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application-idp-argocd-f9fbad056601e2b99168a86d6280e4b1.png"},6434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application-idp-s3-bff2a637977330a78e21ee00c57fd0de.png"},2516:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application-idp-select-13b2657fb4cccac7783b31302b7c40aa.gif"},650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application-idp-template1-973a196a57da93cc3bb843f6ca1ac275.png"},5851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/application-idp-template2-afb9740f346da13239cfb3068cc47ccc.png"}}]);