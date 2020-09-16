(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(97)),i={id:"overview",title:"Overview"},c={unversionedId:"kd-img-dev/overview",id:"kd-img-dev/overview",isDocsHomePage:!1,title:"Overview",description:"We are going to modify an existing KubeDirector application to learn KubeDirector application developement.",source:"@site/docs/kd-img-dev/overview.md",slug:"/kd-img-dev/overview",permalink:"/learn-kubedirector/docs/kd-img-dev/overview",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Reference",permalink:"/learn-kubedirector/docs/kd-user/ref"},next:{title:"Overview",permalink:"/learn-kubedirector/docs/kd-dev/overview"}},l=[{value:"Basic tutorial",id:"basic-tutorial",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are going to modify an existing KubeDirector application to learn KubeDirector application developement."),Object(o.b)("p",null,"We will work with the ",Object(o.b)("inlineCode",{parentName:"p"},"ubuntu18.04")," KD application that we have used in the previous lessions."),Object(o.b)("h2",{id:"basic-tutorial"},"Basic tutorial"),Object(o.b)("p",null,"In this section, we are going to "),Object(o.b)("p",null,"Open the file ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-ubuntu18.04.json")," and add ",Object(o.b)("inlineCode",{parentName:"p"},"/var")," to ",Object(o.b)("inlineCode",{parentName:"p"},"defaultPersistDirs"),"."),Object(o.b)("p",null,"The full yaml should now look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'{\n    "apiVersion": "kubedirector.hpe.com/v1beta1",\n    "kind": "KubeDirectorApp",\n    "metadata": {\n        "name" : "ubuntu18x"\n    },\n\n    "spec" : {\n        "systemdRequired": true,\n        "defaultPersistDirs" : ["/home", "/var"],\n        "config": {\n            "roleServices": [\n                {\n                    "serviceIDs": [\n                        "ssh"\n                    ],\n                    "roleID": "vanilla_ubuntu"\n                }\n            ],\n            "selectedRoles": [\n                "vanilla_ubuntu"\n            ]\n        },\n        "label": {\n            "name": "Ubuntu 18.04",\n            "description": "Ubuntu 18.04 with no preinstalled apps"\n        },\n        "distroID": "bluedata/ubuntu18x",\n        "version": "1.1",\n        "configSchemaVersion": 8,\n        "services": [\n            {\n                "endpoint": {\n                    "port": 22,\n                    "isDashboard": false\n                },\n                "id": "ssh",\n                "label": {\n                    "name": "SSH"\n                }\n            }\n        ],\n        "defaultImageRepoTag": "bluedata/ubuntu18.04:1.1",\n        "defaultConfigPackage": null,\n        "roles": [\n            {\n                "cardinality": "1+",\n                "id": "vanilla_ubuntu"\n            }\n        ]\n    }\n}\n')),Object(o.b)("p",null,"We need to delete the old ",Object(o.b)("inlineCode",{parentName:"p"},"cr-app-ubuntu18.04.json")," application definition from our Kubernetes environment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ kubectl delete -f deploy/example_catalog/cr-app-ubuntu18.04.json \nkubedirectorapp.kubedirector.hpe.com "ubuntu18x" deleted\n')),Object(o.b)("p",null,"We can now deploy our updated application definition:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl create -f deploy/example_catalog/cr-app-ubuntu18.04.json \nkubedirectorapp.kubedirector.hpe.com/ubuntu18x created\n")),Object(o.b)("p",null,"Next, deploy a cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml \nkubedirectorcluster.kubedirector.hpe.com/ubuntu18.04-persistent created\n")),Object(o.b)("p",null,"We want to check that ",Object(o.b)("inlineCode",{parentName:"p"},"/vars")," is now persisted, let's find the ",Object(o.b)("inlineCode",{parentName:"p"},"PersistentVolume")," for our ubuntu virtual cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pv\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM                    STORAGECLASS   REASON   AGE\npvc-df7da24a-e609-4e32-b574-db579fbb0cda   40Gi       RWO            Delete           Bound      default/p-kdss-qtl4d-0   standard                20s\n")),Object(o.b)("p",null,"We can use ",Object(o.b)("inlineCode",{parentName:"p"},"describe pv")," to find the storage location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl describe pv pvc-df7da24a-e609-4e32-b574-db579fbb0cda\n...\nSource:\n    Type:          HostPath (bare host directory volume)\n    Path:          /tmp/hostpath-provisioner/p-kdss-qtl4d-0\n    HostPathType:  \n...\n")),Object(o.b)("p",null,"Finally, we can use ls to check what folders are persisted:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ls /tmp/hostpath-provisioner/p-kdss-qtl4d-0\netc  home  var\n")),Object(o.b)("p",null,"In this lesson we have seen how we can modify "),Object(o.b)("hr",null),Object(o.b)("p",null,"More coming soon..."))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);