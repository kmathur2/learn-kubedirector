(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=(n(0),n(107)),o=n.p+"assets/images/harbor_projects-d1eb6238d5e6589b72d416332786beb8.png",i=n.p+"assets/images/harbor_ca_cert-28c1270b1fa58f70dc47e764bbe3e986.png",l=n.p+"assets/images/harbor_tag_push-c2b2a3167d90f79b3f466a0e301927c9.png",s={id:"hpecp_kd_app",title:"HPE Ezmeral CP (optional)"},p={unversionedId:"kd-img-dev/hpecp_kd_app",id:"kd-img-dev/hpecp_kd_app",isDocsHomePage:!1,title:"HPE Ezmeral CP (optional)",description:"This document is a work-in-progress.",source:"@site/docs/kd-img-dev/hpecp_kd_app.md",slug:"/kd-img-dev/hpecp_kd_app",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/hpecp_kd_app.md",version:"current",sidebar:"someSidebar",previous:{title:"Config CLI",permalink:"/learn-kubedirector/docs/kd-img-dev/configcli"},next:{title:"Creating a NiFi Application",permalink:"/learn-kubedirector/docs/kd-img-dev/nifi"}},b=[{value:"Create a Kubernetes Cluster",id:"create-a-kubernetes-cluster",children:[]},{value:"Create a Tenant",id:"create-a-tenant",children:[]},{value:"Ensure Harbor addon is enabled",id:"ensure-harbor-addon-is-enabled",children:[]},{value:"Retrieve the Harbor url",id:"retrieve-the-harbor-url",children:[]},{value:"Login to Harbor",id:"login-to-harbor",children:[]},{value:"Download the registry certificate",id:"download-the-registry-certificate",children:[]},{value:"Copy certificate to HPE CP nodes",id:"copy-certificate-to-hpe-cp-nodes",children:[]},{value:"Create a basic config package",id:"create-a-basic-config-package",children:[]},{value:"Retrieve the tag and push commands",id:"retrieve-the-tag-and-push-commands",children:[]},{value:"Build and Push image",id:"build-and-push-image",children:[]},{value:"Copy the KD app image definition",id:"copy-the-kd-app-image-definition",children:[]},{value:"Update the KD app image",id:"update-the-kd-app-image",children:[]},{value:"Deploy the KD app image",id:"deploy-the-kd-app-image",children:[]},{value:"Deploy the KD Cluster",id:"deploy-the-kd-cluster",children:[]}],d={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This document is a work-in-progress."))),Object(c.b)("p",null,"In this section we apply the concepts learned in the previous lesson and\nwe deploy our custom application to the HPE Ezmeral Container Platform."),Object(c.b)("p",null,"Previously we deployed a docker registry in our lab environment and pushed the docker image for our KD application there.\nFor deploying our KD application to Ezmeral Container Platform we will enable\nHarbor as the registry. "),Object(c.b)("h2",{id:"create-a-kubernetes-cluster"},"Create a Kubernetes Cluster"),Object(c.b)("p",null,"Using the HPE Ezmeral Container Platform user interface create a Kubernetes cluster."),Object(c.b)("h2",{id:"create-a-tenant"},"Create a Tenant"),Object(c.b)("p",null,"Using the HPE Ezmeral Container Platform user interface create a tenant for your Kubernetes cluster."),Object(c.b)("h2",{id:"ensure-harbor-addon-is-enabled"},"Ensure Harbor addon is enabled"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This step uses the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/hpecp/"}),"hpecp")," CLI.  You can install it with:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"pip3 install hpecp\n")),Object(c.b)("p",{parentName:"div"},"After installing, configure with:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"hpecp configure-cli\n")),Object(c.b)("p",{parentName:"div"},"If the above command fails, ensure your PATH contains the output from the following command:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"echo $(python3 -m site --user-base)/bin\n")),Object(c.b)("p",{parentName:"div"},"You can test the CLI is set up correctly with the following command which connects to the HPE Ezmeral cluster and retrieves it's build version."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"hpecp config get --query 'objects.[bds_global_version]' --output text\n")))),Object(c.b)("p",null,"First we want to list the K8S clusters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," hpecp k8scluster list\n")),Object(c.b)("p",null," This will return something like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"+----------------------+------+-------------+-------------+--------+\n|          id          | name | description | k8s_version | status |\n+----------------------+------+-------------+-------------+--------+\n| /api/v2/k8scluster/1 |  c1  |             |   1.17.9    | ready  |\n+----------------------+------+-------------+-------------+--------+\n")),Object(c.b)("p",null,"We can then get the details for the cluster we are interested in - in this particular case ",Object(c.b)("inlineCode",{parentName:"p"},"/api/v2/k8scluster/1"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"hpecp k8scluster get /api/v2/k8scluster/1\n")),Object(c.b)("p",null,"This will returns something like the following:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"_links:\n  self:\n    href: /api/v2/k8scluster/1\naddons:\n- harbor\n...\nharbor_endpoint_access: https://ip-10-1-0-108.eu-west-3.compute.internal:10004\n...\nk8shosts_config:\n- node: /api/v2/worker/k8shost/3\n  role: master\n- node: /api/v2/worker/k8shost/4\n  role: worker\n...\n")),Object(c.b)("p",null,"You can see that harbor addon is enabled.  If the harbor is not enabled, you can enable it like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"hpecp k8scluster add-addons --id /api/v2/k8scluster/1 --addons [harbor]\n")),Object(c.b)("h2",{id:"retrieve-the-harbor-url"},"Retrieve the Harbor url"),Object(c.b)("p",null,"In the output from ",Object(c.b)("inlineCode",{parentName:"p"},"hpecp k8scluster get /api/v2/k8scluster/1"),", above you can see that\nmy harbor endpoint is: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"https://ip-10-1-0-108.eu-west-3.compute.internal:10004"))),Object(c.b)("h2",{id:"login-to-harbor"},"Login to Harbor"),Object(c.b)("p",null,"Open a browser to the harbor endpoint and login with:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Username ",Object(c.b)("inlineCode",{parentName:"li"},"admin")," "),Object(c.b)("li",{parentName:"ul"},"Password ",Object(c.b)("inlineCode",{parentName:"li"},"Harbor12345"))),Object(c.b)("h2",{id:"download-the-registry-certificate"},"Download the registry certificate"),Object(c.b)("p",null,"Click the ",Object(c.b)("strong",{parentName:"p"},"Projects")," link:"),Object(c.b)("img",{src:o}),Object(c.b)("p",null,"Next click on the link that corresponds to your HPE Container Platform tenant (in my case ",Object(c.b)("inlineCode",{parentName:"p"},"k8s_tenant_1"),")\nand then select the ",Object(c.b)("strong",{parentName:"p"},"Repositories")," tab. "),Object(c.b)("p",null,"Click on ",Object(c.b)("strong",{parentName:"p"},"REGISTRY CERTIFICATE")," to download it:"),Object(c.b)("img",{src:i}),Object(c.b)("h2",{id:"copy-certificate-to-hpe-cp-nodes"},"Copy certificate to HPE CP nodes"),Object(c.b)("p",null,"In this step, we will copy the ",Object(c.b)("inlineCode",{parentName:"p"},"ca.crt")," downloaded from the previous step to the k8s hosts."),Object(c.b)("p",null,"Retrieve the IP addresses of your k8s worker hosts."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Retrieve K8S host IP addresses")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You can use the HPE Ezmeral Container Platform UI or the CLI to find the IP addresses."),Object(c.b)("p",{parentName:"div"},"The CLI can be used like this:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"hpecp k8scluster list --columns ['id','name','description','k8shosts_config']\n\n# match the host IDs above to find the IPs below\nhpecp k8sworker list\n")))),Object(c.b)("p",null,"For CENTOS/RHEL 7x:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Copy ca.crt to each worker and master in the folder: ",Object(c.b)("inlineCode",{parentName:"li"},"/etc/pki/ca-trust/source/anchors/")),Object(c.b)("li",{parentName:"ul"},"Run ",Object(c.b)("inlineCode",{parentName:"li"},"update-ca-trust"),"on each host after adding the ca.crt")),Object(c.b)("h2",{id:"create-a-basic-config-package"},"Create a basic config package"),Object(c.b)("p",null,"In this section we modify the centos application to log the action inside the container."),Object(c.b)("p",null,"Create a directory on the master: e.g. ",Object(c.b)("inlineCode",{parentName:"p"},"/home/centos/deploy/example_catalog/mycentos"),".  Inside that directory,\ncreate another directory ",Object(c.b)("inlineCode",{parentName:"p"},"appconfig")," and inside that folder, create a new file named ",Object(c.b)("inlineCode",{parentName:"p"},"startscript")," with the contents:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/env bash\n### Error for wrong option handled ###\nif [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then\n  echo "Valid values. So execute the later code"\nelse\n  echo "ERROR: Unknown command line option(s): \'$@\'"\n  exit 10\nfi\n\necho "Starting configuration with option \'$1\' on node"\n')),Object(c.b)("p",null,"Open a terminal and change into the folder ",Object(c.b)("inlineCode",{parentName:"p"},"/home/centos/deploy/example_catalog/mycentos"),"."),Object(c.b)("p",null,"Create a tar file with the appconfig:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"chmod +x appconfig/startscript\ntar cvzf appconfig.tgz appconfig/\n")),Object(c.b)("p",null,"Update the Dockerfile so that it now contains:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile"}),"FROM bluedata/centos7:4.1\n\nRUN ! test -d /opt/configscripts || mkdir /opt/configscripts/\n\nCOPY appconfig.tgz /opt/configscripts/\n")),Object(c.b)("h2",{id:"retrieve-the-tag-and-push-commands"},"Retrieve the tag and push commands"),Object(c.b)("img",{src:l}),Object(c.b)("p",null,"E.g."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"docker tag SOURCE_IMAGE[:TAG] ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1/IMAGE[:TAG]")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"docker push ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1/IMAGE[:TAG]"))),Object(c.b)("p",null,"You will use these commands below."),Object(c.b)("h2",{id:"build-and-push-image"},"Build and Push image"),Object(c.b)("p",null,"In the terminal, change to the ",Object(c.b)("inlineCode",{parentName:"p"},"mycentos")," folder and build your custom image and push it to the local registry:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# set MY_REPO for your environment\nMY_REPO="ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1"\n\ndocker build --tag mycentos:1.0 .\n\ndocker tag mycentos:1.0 ${MY_REPO}/mycentos:1.0\n')),Object(c.b)("p",null,"Next we push the image to our local registry:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker push ${MY_REPO}/mycentos:1.0\n")),Object(c.b)("h2",{id:"copy-the-kd-app-image-definition"},"Copy the KD app image definition"),Object(c.b)("p",null,"Create a file ",Object(c.b)("inlineCode",{parentName:"p"},"/home/centos/deploy/example_catalog/cr-app-centos7-custom.json")," with the contents:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "apiVersion": "kubedirector.hpe.com/v1beta1",\n    "kind": "KubeDirectorApp",\n    "metadata": {\n        "name" : "centos7x"\n    },\n\n    "spec" : {\n        "systemdRequired": true,\n        "defaultPersistDirs" : ["/home"],\n        "defaultEventList" : ["configure", "addnodes", "delnodes"],\n        "config": {\n            "roleServices": [\n                {\n                    "serviceIDs": [\n                        "ssh"\n                    ],\n                    "roleID": "vanilla_centos"\n                }\n            ],\n            "selectedRoles": [\n                "vanilla_centos"\n            ]\n        },\n        "label": {\n            "name": "CentOS 7.5",\n            "description": "CentOS 7.5.1804 with no preinstalled apps"\n        },\n        "distroID": "bluedata/centos7x",\n        "version": "1.1",\n        "configSchemaVersion": 7,\n        "services": [\n            {\n                "endpoint": {\n                    "port": 22,\n                    "isDashboard": false\n                },\n                "id": "ssh",\n                "label": {\n                    "name": "SSH"\n                }\n            }\n        ],\n        "defaultImageRepoTag": "docker.io/bluedata/centos7:4.1",\n        "defaultConfigPackage": null,\n        "roles": [\n            {\n                "cardinality": "1+",\n                "id": "vanilla_centos"\n            }\n        ]\n    }\n}\n')),Object(c.b)("p",null,"Rename:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "name" : "centos7x"\n    ...\n}\n')),Object(c.b)("p",null,"to"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "name" : "centos7x-custom"\n    ...\n}\n')),Object(c.b)("h2",{id:"update-the-kd-app-image"},"Update the KD app image"),Object(c.b)("p",null,"Ensure ",Object(c.b)("inlineCode",{parentName:"p"},"defaultConfigPackage")," in the file ",Object(c.b)("inlineCode",{parentName:"p"},"/home/centos/deploy/example_catalog/cr-app-centos7-custom.json")," is set to:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "defaultConfigPackage":  {\n        "packageURL": "file:///opt/configscripts/appconfig.tgz"\n    },\n    ...\n}\n')),Object(c.b)("p",null,"and ",Object(c.b)("inlineCode",{parentName:"p"},"defaultImageRepoTag")," is:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "defaultImageRepoTag": "{{YOUR_REPO}}/mycentos:1.0"\n    ...\n}\n')),Object(c.b)("p",null,"Replace ",Object(c.b)("inlineCode",{parentName:"p"},"{{YOUR_REPO}}")," with your repo url.  Mine was ",Object(c.b)("inlineCode",{parentName:"p"},"ip-10-1-0-108.eu-west-3.compute.internal:10004/k8s_tenant_1"),"."),Object(c.b)("h2",{id:"deploy-the-kd-app-image"},"Deploy the KD app image"),Object(c.b)("p",null,"Deploy the new Centos KD application with your changes:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f ../cr-app-centos7-custom.json\n")),Object(c.b)("p",null,"Check the deployment was successful:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get kubedirectorapps.kubedirector.hpe.com\n")),Object(c.b)("p",null,"You can see my image has only just been deployed:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                     AGE\n...\ntensorflow-gpu-jupyter   18h\ntraining-engine          18h\ncentos7x-custom          5s\n")),Object(c.b)("h2",{id:"deploy-the-kd-cluster"},"Deploy the KD Cluster"),Object(c.b)("p",null,"First create a file ",Object(c.b)("inlineCode",{parentName:"p"},"/home/centos/deploy/example_clusters/cr-cluster-centos7-custom.yaml")," with the contents:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'piVersion: "kubedirector.hpe.com/v1beta1"\nkind: "KubeDirectorCluster"\nmetadata:\n  name: "centos7-custom"\nspec:\n  app: centos7x-custom\n  roles:\n  - id: vanilla_centos\n    members: 1\n    resources:\n      requests:\n        memory: "1Gi"\n        cpu: "1"\n      limits:\n        memory: "1Gi"\n        cpu: "1"\n')),Object(c.b)("p",null,"Next we can deploy the KD Cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f ../../example_clusters/cr-cluster-centos7-custom.yaml\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl describe kubedirectorclusters.kubedirector.hpe.com centos7-custom\n")),Object(c.b)("p",null,"You may need to run the above command several times until the Cluster is ",Object(c.b)("inlineCode",{parentName:"p"},"stable"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Events:\n  Type    Reason   Age                From          Message\n  ----    ------   ----               ----          -------\n  Normal  Cluster  31s                kubedirector  new\n  Normal  Role     31s                kubedirector  creating role{vanilla_centos}\n  Normal  Role     31s                kubedirector  changing replicas count for role{vanilla_centos}: 0 -> 1\n  Normal  Role     31s (x3 over 31s)  kubedirector  waiting for replicas count for role{vanilla_centos}: 0 -> 1\n  Normal  Member   1s                 kubedirector  initial config skipped for member{kdss-4p8kt-0} in role{vanilla_centos}\n  Normal  Role     1s                 kubedirector  notify skipped for members in role{vanilla_centos}\n  Normal  Cluster  1s                 kubedirector  stable\n")),Object(c.b)("p",null,"You should see a new pod:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nkdss-kzbwq-0                    1/1     Running   0          105s\nkubedirector-7f9d95c9d5-wjm2j   1/1     Running   0          47h\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"$ kubectl exec -it kdss-kzbwq-0 -- /bin/bash\n[root@kdss-kzbwq-0 /]# ls /opt/\nconfigscripts\n")),Object(c.b)("p",null,"Wait a few seconds and try ",Object(c.b)("inlineCode",{parentName:"p"},"ls /opt")," again - keep trying until you see a ",Object(c.b)("inlineCode",{parentName:"p"},"guestconfig")," folder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@kdss-kzbwq-0 /]# ls /opt/\nconfigscripts  guestconfig\n[root@kdss-kzbwq-0 /]# ls /opt/guestconfig/\nappconfig/        configure.status  configure.stderr  configure.stdout\n")),Object(c.b)("p",null,"If we cat ",Object(c.b)("inlineCode",{parentName:"p"},"configure.stdout")," we should see the output from our startscript:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@kdss-kzbwq-0 /]# cat /opt/guestconfig/configure.stdout \nValid values. So execute the later code\nStarting configuration with option '--configure' on node\n")))}u.isMDXComponent=!0}}]);