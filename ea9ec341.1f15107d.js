(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(106)),i={id:"configcli",title:"Config CLI"},o={unversionedId:"kd-img-dev/configcli",id:"kd-img-dev/configcli",isDocsHomePage:!1,title:"Config CLI",description:"When the startscript gets executed for a lifecycle event it will usually need to retrieve metadata about the environment so that it can react to the event.",source:"@site/docs/kd-img-dev/configcli.md",slug:"/kd-img-dev/configcli",permalink:"/learn-kubedirector/docs/kd-img-dev/configcli",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/configcli.md",version:"current",sidebar:"someSidebar",previous:{title:"Config Package",permalink:"/learn-kubedirector/docs/kd-img-dev/configpackage"},next:{title:"HPE Ezmeral CP (optional)",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app"}},l=[{value:"Exploring the Config CLI",id:"exploring-the-config-cli",children:[]},{value:"Using the Config CLI from shell scripts",id:"using-the-config-cli-from-shell-scripts",children:[]},{value:"Exercise",id:"exercise",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When the ",Object(c.b)("inlineCode",{parentName:"p"},"startscript")," gets executed for a lifecycle event it will usually need to retrieve metadata about the environment so that it can react to the event."),Object(c.b)("p",null,"The Config CLI allows you to retrieve metadata."),Object(c.b)("h2",{id:"exploring-the-config-cli"},"Exploring the Config CLI"),Object(c.b)("p",null,"I wasn't able to find documentation on the Config CLI so let's do some exploring."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Config CLI")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Config CLI is installed automatically in containers that have a config package."),Object(c.b)("p",{parentName:"div"},"If this exercise we use the Centos 7 KubeDirectorCluster running from the previous ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./configpackage"}),"lesson")," that has a config package defined:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    ...\n    "defaultConfigPackage":  {\n        "packageURL": "file:///opt/configscripts/appconfig.tgz"\n    },\n    ...\n}\n')))),Object(c.b)("p",null,"You should still have your ",Object(c.b)("inlineCode",{parentName:"p"},"KubeDirectorCluster")," running from the previous ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./configpackage"}),"lesson")," if not, start it now."),Object(c.b)("p",null,"Next open a shell session on the cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl exec -it your-pod-name -- /bin/bash\n")),Object(c.b)("p",null,"Now execute the configcli application:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@kdss-xkdsh-0 /]# configcli \nConfiguration CLI 1.0.\n\nccli> \n")),Object(c.b)("p",null,"From here you can explore the help:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"ccli> help\n\nDocumented commands (type help <topic>):\n________________________________________\nEOF  baseimg  ccli  exit  help  macro  namespace\n")),Object(c.b)("p",null,"And ..."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"ccli> help namespace\nusage: namespace [-h]\n                 {node,version,cluster,distros,services,tenant,auth,platform}\n                 ...\n\nAccess to all available configuration namespaces.\n\noptional arguments:\n  -h, --help            show this help message and exit\n\nSubcommands:\n  {node,version,cluster,distros,services,tenant,auth,platform}\n    node                The node namespace from the application configuration\n                        metadata\n    version             The version namespace from the application\n                        configuration metadata\n    cluster             The node namespace from the application configuration\n                        metadata\n    distros             The distros namespace from the application\n                        configuration metadata.\n    services            The services namespace from the application\n                        configuration metadata.\n    tenant              The tenant namespace from the application\n                        configuration metadata.\n    auth                The auth namespace from the application configuration\n                        metadata.\n    platform            The platform namespace from the application\n                        configuration metadata.\n")),Object(c.b)("p",null,"You can then retrieve specific information:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"ccli> namespace distros\nbluedata/centos7x\n")),Object(c.b)("p",null,"When we are done we can exit:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"ccli> exit\n\n\n[root@kdss-xkdsh-0 /]#\n")),Object(c.b)("h2",{id:"using-the-config-cli-from-shell-scripts"},"Using the Config CLI from shell scripts"),Object(c.b)("p",null,"From a shell script (e.g. startscript) you can call the configcli directly, e.g."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@kdss-xkdsh-0 /]# echo $(configcli namespace distros)\nbluedata/centos7x\n")),Object(c.b)("h2",{id:"exercise"},"Exercise"),Object(c.b)("p",null,"Update the startscript from the previous ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./configpackage"}),"lesson")," to use the configcli in some way."))}s.isMDXComponent=!0}}]);