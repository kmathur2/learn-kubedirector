(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(105)),l={id:"customdockerimage2",title:"Custom Docker Images (2)"},c={unversionedId:"kd-img-dev/customdockerimage2",id:"kd-img-dev/customdockerimage2",isDocsHomePage:!1,title:"Custom Docker Images (2)",description:"In this section, we will use a third party docker image//github.com/paulbouwer/hello-kubernetes",source:"@site/docs/kd-img-dev/customdockerimage2.md",slug:"/kd-img-dev/customdockerimage2",permalink:"/learn-kubedirector/docs/kd-img-dev/customdockerimage2",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/customdockerimage2.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom Docker Images",permalink:"/learn-kubedirector/docs/kd-img-dev/customdockerimage"},next:{title:"Config Package",permalink:"/learn-kubedirector/docs/kd-img-dev/configpackage"}},i=[{value:"Third Party Docker Image",id:"third-party-docker-image",children:[]},{value:"Apply application defintion",id:"apply-application-defintion",children:[]},{value:"Create Cluster yaml",id:"create-cluster-yaml",children:[]},{value:"Create a cluster",id:"create-a-cluster",children:[]},{value:"Crashloopback",id:"crashloopback",children:[]},{value:"Custom image requirements",id:"custom-image-requirements",children:[]},{value:"Update custom app image",id:"update-custom-app-image",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we will use a third party docker image: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paulbouwer/hello-kubernetes"}),"https://github.com/paulbouwer/hello-kubernetes")),Object(o.b)("h2",{id:"third-party-docker-image"},"Third Party Docker Image"),Object(o.b)("p",null,"Copy the KD catalog definition ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-centos7.json")," to  ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-hello-world.json")," and modify it so that it looks as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "apiVersion": "kubedirector.hpe.com/v1beta1",\n    "kind": "KubeDirectorApp",\n    "metadata": {\n        "name" : "hellok8s-paulbouwer"\n    },\n\n    "spec" : {\n        "systemdRequired": true,\n        "defaultEventList" : ["configure", "addnodes", "delnodes"],\n        "config": {\n            "roleServices": [\n                {\n                    "serviceIDs": [\n                        "http"\n                    ],\n                    "roleID": "hello-kubernetes"\n                }\n            ],\n            "selectedRoles": [\n                "hello-kubernetes"\n            ]\n        },\n        "label": {\n            "name": "hello kubernetes",\n            "description": "hello kubernetes services"\n        },\n        "distroID": "paulbouwer/hello-kubernetes:1.8",\n        "version": "1.8",\n        "configSchemaVersion": 7,\n        "services": [\n            {\n                "endpoint": {\n                    "port": 8080,\n                    "isDashboard": false\n                },\n                "id": "http",\n                "label": {\n                    "name": "HTTP"\n                }\n            }\n        ],\n        "defaultImageRepoTag": "paulbouwer/hello-kubernetes:1.8",\n        "defaultConfigPackage": null,\n        "roles": [\n            {\n                "cardinality": "1+",\n                "id": "hello-kubernetes"\n            }\n        ]\n    }\n}\n')),Object(o.b)("p",null,"Note: The hello world image runs a node service on port 8080 so we are exposing that."),Object(o.b)("h2",{id:"apply-application-defintion"},"Apply application defintion"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl apply -f deploy/example_catalog/cr-app-hello-world.json\n")),Object(o.b)("h2",{id:"create-cluster-yaml"},"Create Cluster yaml"),Object(o.b)("p",null,"Copy the KD catalog definition ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-centos7.yaml")," to ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-hello-world.yaml")," and modify so that it contains the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata:\n  name: "hellok8s-paulbouwer"\nspec:\n  app: hellok8s-paulbouwer\n  roles:\n  - id: hello-kubernetes\n    members: 1\n    resources:\n      requests:\n        memory: "1Gi"\n        cpu: "1"\n      limits:\n        memory: "1Gi"\n        cpu: "1"\n')),Object(o.b)("h2",{id:"create-a-cluster"},"Create a cluster"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl apply -f deploy/example_clusters/cr-cluster-hello-world.yaml\n")),Object(o.b)("h2",{id:"crashloopback"},"Crashloopback"),Object(o.b)("p",null,"If you wait for a few minutes, you will see your pod with status ",Object(o.b)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl get pods\n")),Object(o.b)("p",null,"Which for me shows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"NAME                            READY   STATUS             RESTARTS   AGE\nkdss-w97td-0                    0/1     CrashLoopBackOff   6          12m\n")),Object(o.b)("p",null,"Let's debug:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"kubectl describe pod kdss-w97td-0\n")),Object(o.b)("p",null,"For me this returns:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),'Events:\n  Type     Reason               Age                   From                            Message\n  ----     ------               ----                  ----                            -------\n  Normal   Scheduled            13m                   default-scheduler               Successfully assigned default/kdss-w97td-0 to localhost.localdomain\n  Normal   Pulling              13m                   kubelet, localhost.localdomain  Pulling image "paulbouwer/hello-kubernetes:1.8"\n  Normal   Pulled               13m                   kubelet, localhost.localdomain  Successfully pulled image "paulbouwer/hello-kubernetes:1.8"\n  Warning  FailedPostStartHook  11m (x3 over 13m)     kubelet, localhost.localdomain  Exec lifecycle hook ([/bin/bash -c exec 2>>/tmp/kd-postcluster.log; set -x;Retries=60; while [[ $Retries && ! -s /etc/resolv.conf ]]; do sleep 1; Retries=$(expr $Retries - 1); done; sed "s/^search \\([^ ]\\+\\)/search kdhs-mj4sm.\\1 \\1/" /etc/resolv.conf > /tmp/resolv.conf.new && cat /tmp/resolv.conf.new > /etc/resolv.conf;rm /tmp/resolv.conf.new;chmod 755 /run;exit 0]) for Container "app" in Pod "kdss-w97td-0_default(153573ba-1e94-4ded-a447-7377c8d49490)" failed - error: command \'/bin/bash -c exec 2>>/tmp/kd-postcluster.log; set -x;Retries=60; while [[ $Retries && ! -s /etc/resolv.conf ]]; do sleep 1; Retries=$(expr $Retries - 1); done; sed "s/^search \\([^ ]\\+\\)/search kdhs-mj4sm.\\1 \\1/" /etc/resolv.conf > /tmp/resolv.conf.new && cat /tmp/resolv.conf.new > /etc/resolv.conf;rm /tmp/resolv.conf.new;chmod 755 /run;exit 0\' exited with 126: , message: "OCI runtime exec failed: exec failed: container_linux.go:349: starting container process caused \\"exec: \\\\\\"/bin/bash\\\\\\": stat /bin/bash: no such file or directory\\": unknown\\r\\n"\n  Normal   Created              10m (x4 over 13m)     kubelet, localhost.localdomain  Created container app\n  Normal   Started              10m (x4 over 13m)     kubelet, localhost.localdomain  Started container app\n  Normal   Killing              10m (x4 over 13m)     kubelet, localhost.localdomain  FailedPostStartHook\n  Normal   Pulled               10m (x3 over 12m)     kubelet, localhost.localdomain  Container image "paulbouwer/hello-kubernetes:1.8" already present on machine\n  Warning  BackOff              2m58s (x37 over 12m)  kubelet, localhost.localdomain  Back-off restarting failed container\n')),Object(o.b)("p",null,"Observe the first warning event.  At the end of the message we see:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"stat /bin/bash: no such file or directory\n")),Object(o.b)("h2",{id:"custom-image-requirements"},"Custom image requirements"),Object(o.b)("p",null,"If the KubeDirector App Image Authoring ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/wiki/App-Definition-Authoring-for-KubeDirector"}),"wiki page")," we can find:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Images must have the following utilities installed and available in the standard executables path for the container user: python2, curl, and tar.")),Object(o.b)("p",null,"It appears that app images also require ",Object(o.b)("inlineCode",{parentName:"p"},"bash")," - an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/issues/430"}),"issue")," has been raised for this."),Object(o.b)("h2",{id:"update-custom-app-image"},"Update custom app image"),Object(o.b)("p",null,"The solution for me was to fork the github project ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paulbouwer/hello-kubernetes"}),"paulbouwer/hello-kubernetes")," and update the dockerfile to add these dependencies.  "),Object(o.b)("p",null,"The original Dockerfile is based on alpine:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"FROM node:13.6.0-alpine\n")),Object(o.b)("p",null,"So we need to run alpine commands to install the required packages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile"}),'FROM paulbouwer/hello-kubernetes:1.8\n\nUSER root\n\nRUN apk update && apk upgrade && apk add bash python2 tar curl\n\nUSER node\nCMD [ "npm", "start" ]\n')))}u.isMDXComponent=!0}}]);