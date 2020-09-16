(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(97)),i={id:"configuring",title:"Configuring KD"},c={unversionedId:"kd-user/configuring",id:"kd-user/configuring",isDocsHomePage:!1,title:"Configuring KD",description:"Before creating any virtual clusters, you may wish to configure KubeDirector to change some default settings. If so, then you can create (in the same K8s namespace as KubeDirector itself) a KubeDirectorConfig object that has the name kd-global-config.",source:"@site/docs/kd-user/configuring.md",slug:"/kd-user/configuring",permalink:"/learn-kubedirector/docs/kd-user/configuring",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-user/configuring.md",version:"current",sidebar:"someSidebar",previous:{title:"Using Storage",permalink:"/learn-kubedirector/docs/kd-user/storage"},next:{title:"Reference",permalink:"/learn-kubedirector/docs/kd-user/ref"}},u=[],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before creating any virtual clusters, you may wish to configure KubeDirector to change some default settings. If so, then you can create (in the same K8s namespace as KubeDirector itself) a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/wiki/KubeDirectorConfig-Definition"}),"KubeDirectorConfig")," object that has the name ",Object(a.b)("inlineCode",{parentName:"p"},"kd-global-config"),"."),Object(a.b)("p",null,"When using KubeDirector in a standard deployment of Google Kubernetes Engine, DigitalOcean Kubernetes, or Amazon Elastic Container Service for Kubernetes, then no change to the KubeDirector configuration should be necessary. You can still take a look at the KubeDirectorConfig definition to see what configuration properties are available."),Object(a.b)("p",null,"If the default ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/wiki/KubeDirectorConfig-Definition"}),"KubeDirectorConfig")," property values look correct for your purposes, then you do not need to create a config object."),Object(a.b)("p",null,"However if you are using KubeDirector on a local K8s installation that you have installed on top of RHEL/CentOS, you may need to change the values for the defaultServiceType and/or nativeSystemdSupport config properties. See the ",Object(a.b)("inlineCode",{parentName:"p"},"deploy/example_configs/cr-config-onprem.yaml")," file and particularly the comments at the top of that file. If you want to apply these config values to your deployment, you can use kubectl to create that config resource:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create -f deploy/example_configs/cr-config-onprem.yaml\n")),Object(a.b)("p",null,"Another common reason you may wish to change the KubeDirector configuration is if you want your clusters to use a persistent storage class that is not the K8s default storage class. You can do this by specifying a value for the defaultStorageClassName property in the config resource."),Object(a.b)("p",null,"If you have created a KubeDirectorConfig object and later want to change it, you can edit the config file and use ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl apply")," to apply the changes. Keep in mind that the values specified in this config are only referenced at the time a virtual cluster is created; changing this config will not retroactively affect any existing virtual clusters."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl create -f deploy/example_configs/cr-config-onprem.yaml\nkubedirectorconfig.kubedirector.hpe.com/kd-global-config created\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get KubeDirectorConfig\nNAME               AGE\nkd-global-config   4s\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl describe KubeDirectorConfig\n")),Object(a.b)("p",null,"Which outputs:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'Name:         kd-global-config\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  kubedirector.hpe.com/v1beta1\nKind:         KubeDirectorConfig\nMetadata:\n  Creation Timestamp:  2020-09-16T09:51:23Z\n  Finalizers:\n    kubedirector.hpe.com/cleanup\n  Generation:  1\n  Managed Fields:\n    API Version:  kubedirector.hpe.com/v1beta1\n    Fields Type:  FieldsV1\n    fieldsV1:\n      f:spec:\n        .:\n        f:clusterSvcDomainBase:\n        f:defaultServiceType:\n        f:nativeSystemdSupport:\n    Manager:      kubectl-create\n    Operation:    Update\n    Time:         2020-09-16T09:51:23Z\n    API Version:  kubedirector.hpe.com/v1beta1\n    Fields Type:  FieldsV1\n    fieldsV1:\n      f:metadata:\n        f:finalizers:\n          .:\n          v:"kubedirector.hpe.com/cleanup":\n    Manager:         kubedirector\n    Operation:       Update\n    Time:            2020-09-16T09:51:23Z\n  Resource Version:  166394\n  Self Link:         /apis/kubedirector.hpe.com/v1beta1/namespaces/default/kubedirectorconfigs/kd-global-config\n  UID:               afbc6283-b192-4913-813f-32f411a9317f\nSpec:\n  Cluster Svc Domain Base:  .svc.cluster.local\n  Default Service Type:     NodePort\n  Native Systemd Support:   true\nStatus:\n  Generation UID:  e181ecff-b75f-4c35-9d1e-86d7e7eac368\n  State:           ready\nEvents:\n  Type    Reason  Age   From          Message\n  ----    ------  ----  ----          -------\n  Normal  Config  49s   kubedirector  new\n  Normal  Config  49s   kubedirector  stable\n')))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);