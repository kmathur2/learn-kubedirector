(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(a,".").concat(f)]||s[f]||d[f]||o;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nifi_tile-b5230eebb2bf467aed140d3e305532c8.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(107)),a={id:"nifi",title:"Creating a NiFi image"},c={unversionedId:"kd-img-dev/nifi",id:"kd-img-dev/nifi",isDocsHomePage:!1,title:"Creating a NiFi image",description:"In this session we will create a basic Apache NiFi image and deploy it to container platform.",source:"@site/docs/kd-img-dev/nifi.md",slug:"/kd-img-dev/nifi",permalink:"/learn-kubedirector/docs/kd-img-dev/nifi",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/nifi.md",version:"current",sidebar:"someSidebar",previous:{title:"HPE Ezmeral CP (optional)",permalink:"/learn-kubedirector/docs/kd-img-dev/hpecp_kd_app"},next:{title:"More coming soon",permalink:"/learn-kubedirector/docs/kd-img-dev/more"}},l=[],p={rightToc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this session we will create a basic Apache NiFi image and deploy it to container platform."),Object(o.b)("p",null,"We do NOT need the kubedirector-lab in this session."),Object(o.b)("p",null,"After following this lesson you will have a NiFi tile in your list of Applications:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"NiFi Tile",src:n(145).default})))}u.isMDXComponent=!0}}]);