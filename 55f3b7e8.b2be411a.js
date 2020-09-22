(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),c=(n(0),n(103)),o=n.p+"assets/images/lab_ui_edit_ubuntu-40a49cc4e9df04c46817cc60b312f295.png",s={id:"using",title:"Using KD"},i={unversionedId:"kd-user/using",id:"kd-user/using",isDocsHomePage:!1,title:"Using KD",description:"Deploying KD clusters",source:"@site/docs/kd-user/using.md",slug:"/kd-user/using",permalink:"/learn-kubedirector/docs/kd-user/using",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-user/using.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/learn-kubedirector/docs/kd-user/intro"},next:{title:"Using Storage",permalink:"/learn-kubedirector/docs/kd-user/storage"}},b=[{value:"Deploying KD clusters",id:"deploying-kd-clusters",children:[]},{value:"Listing KD clusters",id:"listing-kd-clusters",children:[]},{value:"View KD cluster details",id:"view-kd-cluster-details",children:[]},{value:"View KD cluster services",id:"view-kd-cluster-services",children:[]},{value:"Delete KD cluster",id:"delete-kd-cluster",children:[]}],u={rightToc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"deploying-kd-clusters"},"Deploying KD clusters"),Object(c.b)("p",null,"We will start by deploying a Ubuntu cluster.  "),Object(c.b)("p",null,"First we need to reduce the memory of the cluster so that it runs easily in our lab VM."),Object(c.b)("p",null,"Using the LAB UI file browser, open ",Object(c.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-ubuntu18.04.yaml")),Object(c.b)("p",null,"Change the definition of to change both instances of ",Object(c.b)("inlineCode",{parentName:"p"},'memory: "4Gi"')," to ",Object(c.b)("inlineCode",{parentName:"p"},'memory: "1Gi"'),":"),Object(c.b)("img",{src:o}),Object(c.b)("p",null,"In the Lab Browser UI open a new terminal and run: "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04.yaml\n")),Object(c.b)("p",null,"This should report the following:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubedirectorcluster.kubedirector.hpe.com/ubuntu18.04 created\n")),Object(c.b)("h2",{id:"listing-kd-clusters"},"Listing KD clusters"),Object(c.b)("p",null,"We can run the following to list the KubeDirector clusters:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get KubeDirectorCluster\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Use your TAB!")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"kubectl has been set up to have TAB completion - use it!\nTAB completion will save you a lot of typing. For example:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get k<<TAB>>\nkubectl get kubedirector<<TAB>><<TAB>>\nkubedirectorapps.kubedirector.hpe.com      kubedirectorclusters.kubedirector.hpe.com  kubedirectorconfigs.kubedirector.hpe.com\nkubectl get kubedirectorcl<<TAB>>\nkubectl get kubedirectorclusters.kubedirector.hpe.com<<ENTER>>\n")))),Object(c.b)("p",null,"Which should return something like the following:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME          AGE\nubuntu18.04   0m\n")),Object(c.b)("h2",{id:"view-kd-cluster-details"},"View KD cluster details"),Object(c.b)("p",null,"We can retrieve the cluster details using the kubectl describe command.\nFor example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe KubeDirectorClusters ubuntu18.04\n")),Object(c.b)("p",null,"This shows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Name:         ubuntu18.04\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  kubedirector.hpe.com/v1beta1\nKind:         KubeDirectorCluster\nMetadata:\n... \n{some attributes removed from output for breivity}\n...\nSpec:\n  App:          ubuntu18x\n  App Catalog:  local\n  Connections:\n  Roles:\n    Id:       vanilla_ubuntu\n    Members:  1\n    Resources:\n      Limits:\n        Cpu:     1\n        Memory:  1Gi\n      Requests:\n        Cpu:     1\n        Memory:  1Gi\n  Service Type:  LoadBalancer\nStatus:\n  Cluster Service:       kdhs-q6nb9\n  Generation UID:        b87ef697-0ed5-44a6-ba10-655a89de84c0\n  Last Connection Hash:  d41d8cd98f00b204e9800998ecf8427e\n  Last Node ID:          1\n  Member State Rollup:\n    Config Errors:         false\n    Members Down:          false\n    Members Initializing:  false\n    Members Restarting:    false\n    Members Waiting:       false\n    Membership Changing:   false\n  Roles:\n    Id:  vanilla_ubuntu\n    Members:\n      Node ID:  1\n      Pod:      kdss-gpdft-0\n      Service:  s-kdss-gpdft-0\n      State:    configured\n      State Detail:\n        Last Configured Container:   docker://8805e3d3de5f4a1af797f1310720de1424c31c10f489a53ab3f7d33e9ef05589\n        Last Known Container State:  running\n    Stateful Set:                    kdss-gpdft\n  Spec Generation To Process:        1\n  State:                             configured\nEvents:                              <none>\n")),Object(c.b)("h2",{id:"view-kd-cluster-services"},"View KD cluster services"),Object(c.b)("p",null,"You can query the KubeDirector cluster services with the following:  ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl get services -l kubedirector.hpe.com/kdcluster=CLUSTERNAME")),Object(c.b)("p",null,"For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get services -l kubedirector.hpe.com/kdcluster=ubuntu18.04\nNAME             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nkdhs-q6nb9       ClusterIP      None            <none>        8888/TCP       4h49m\ns-kdss-gpdft-0   LoadBalancer   10.101.174.78   <pending>     22:44823/TCP   4h49m\n")),Object(c.b)("p",null,"Because we are running on Minikube, the LoadBalancer type makes the Service accessible through the ",Object(c.b)("inlineCode",{parentName:"p"},"minikube service")," command."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ minikube service s-kdss-gpdft-0\n|-----------|----------------|----------------|------------------------|\n| NAMESPACE |      NAME      |  TARGET PORT   |          URL           |\n|-----------|----------------|----------------|------------------------|\n| default   | s-kdss-gpdft-0 | generic-ssh/22 | http://10.0.2.15:44823 |\n|-----------|----------------|----------------|------------------------|\n\ud83c\udf89  Opening service default/s-kdss-gpdft-0 in default browser...\n\ud83d\udc49  http://10.0.2.15:44823\n")),Object(c.b)("p",null,"We can now access the ssh service:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ssh 10.0.2.15 -p 44823\nThe authenticity of host '[10.0.2.15]:44823 ([10.0.2.15]:44823)' can't be established.\nECDSA key fingerprint is SHA256:Dn6oo2QkGVHPKuyxZ4IsppQ5pdydwkJoWmtojnDC5Qo.\nECDSA key fingerprint is MD5:2d:de:32:8e:da:4a:bc:c7:76:f3:77:8b:99:38:15:53.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '[10.0.2.15]:44823' (ECDSA) to the list of known hosts.\nvagrant@10.0.2.15's password:\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"no user for ssh")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Note that we can't login yet because we haven't created a ssh user inside the container.\nWe will do that next."))),Object(c.b)("p",null,"Let's create a user inside the container:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nkdss-gpdft-0                    1/1     Running   0          5h8m\nkubedirector-7f9d95c9d5-mpw22   1/1     Running   0          5h8m\n")),Object(c.b)("p",null,"Pod ",Object(c.b)("inlineCode",{parentName:"p"},"kdss-gpdft-0")," looks like it is our pod, let's check:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"[vagrant@control-plane kubedirector]$ kubectl describe pods kdss-gpdft-0 \nName:         kdss-gpdft-0\nNamespace:    default\nPriority:     0\nNode:         localhost.localdomain/10.0.2.15\nStart Time:   Wed, 09 Sep 2020 15:43:45 +0000\nLabels:       controller-revision-hash=kdss-gpdft-646b7c67d5\n              kubedirector.hpe.com/appCatalog=local\n              kubedirector.hpe.com/headless=ubuntu18.04\n              kubedirector.hpe.com/kdapp=ubuntu18x\n              kubedirector.hpe.com/kdcluster=ubuntu18.04\n              kubedirector.hpe.com/role=vanilla_ubuntu\n              statefulset.kubernetes.io/pod-name=kdss-gpdft-0\nAnnotations:  kubedirector.hpe.com/kdapp-prettyName: Ubuntu 18.04\nStatus:       Running\nIP:           172.17.0.4\nIPs:\n  IP:           172.17.0.4\nControlled By:  StatefulSet/kdss-gpdft\nContainers:\n...\n")),Object(c.b)("p",null,"We can see the label ",Object(c.b)("inlineCode",{parentName:"p"},"kubedirector.hpe.com/kdcluster=ubuntu18.04"),".",Object(c.b)("br",{parentName:"p"}),"\n","Our kdcluster ID (Name) is ",Object(c.b)("inlineCode",{parentName:"p"},"ubuntu18.04")," so we know that ",Object(c.b)("inlineCode",{parentName:"p"},"kdss-gpdft-0")," is our ubuntu18.04 pod."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"find pod directly")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"As a shortcut in the future, we can find the pod for our kdcluster by name using:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pods -l kubedirector.hpe.com/kdcluster=ubuntu18.04\n")),Object(c.b)("p",{parentName:"div"},"Here we specify the name of our kdcluster: ",Object(c.b)("inlineCode",{parentName:"p"},"ubuntu18.04")))),Object(c.b)("p",null,"Let's login to the container using kubectl:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl exec -it kdss-gpdft-0 -- /bin/bash\nroot@kdss-gpdft-0:/# \n")),Object(c.b)("p",null,"Let's create a user account:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"root@kdss-gpdft-0:/# useradd demouser\nroot@kdss-gpdft-0:/# passwd demouser\nCurrent Kerberos password: <Just press Enter key>\nNew password: P@55w0rd12345\nRetype new password: P@55w0rd12345\n...\nYou can now choose the new password or passphrase.\n<Output truncated for brevity>\n...\nNew password: P@55w0rd12345\nRetype new password: P@55w0rd12345\nCurrent Kerberos password: <Just press Enter key>\n")),Object(c.b)("p",null,"We can now exit the ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl exec")," session, and ssh in as the ",Object(c.b)("inlineCode",{parentName:"p"},"demouser"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ssh demouser@10.0.2.15 -p 44823\ndemouser@10.0.2.15's password: P@55w0rd12345\n")),Object(c.b)("p",null,"You can now exit the SSH session."),Object(c.b)("h2",{id:"delete-kd-cluster"},"Delete KD cluster"),Object(c.b)("p",null,"We are finished with this exercise, so let's delete the cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'$ kubectl delete  KubeDirectorCluster ubuntu18.0\nkubedirectorcluster.kubedirector.hpe.com "ubuntu18.04" deleted\n')))}l.isMDXComponent=!0},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=u(n),p=r,m=l["".concat(o,".").concat(p)]||l[p]||d[p]||c;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);