(function(t){function e(e){for(var n,s,a=e[0],l=e[1],v=e[2],c=0,u=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(u.length)u.shift()();return o.push.apply(o,v||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},o=[];function s(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c85731c8"}[t]+".js"}function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(t){var e=[],i=r[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=s(t);var v=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var i=r[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",v.name="ChunkLoadError",v.type=n,v.request=o,i[1](v)}r[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],v=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var m=v;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-img",{staticClass:"px-3",attrs:{src:"harpur-hill.jpg",gradient:"to bottom, rgba(203,58,250,.3), rgba(0, 0, 0,.6)"}},[i("v-row",{attrs:{"no-gutters":""}},[i("Me"),i("History")],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mt-3 mx-auto",attrs:{"max-width":"375px",width:"100%"}},[i("v-img",{staticClass:"pt-16",attrs:{src:"me.jpg",height:"350px",gradient:"to bottom, rgba(203,58,250,.1), rgba(250,80,58,.4)"}},[i("v-row",{staticClass:"fill-height pa-4 pt-16"},[i("v-card-title",{staticClass:"white--text pt-16"},[i("div",{staticClass:"pt-16"},[i("span",{staticClass:"display-1 font-weight-bold"},[t._v(" Adam Cornforth ")]),i("br"),i("span",{staticClass:"text-overline font-wieght-medium"},[t._v(" Software Engineer ")])])])],1)],1),i("v-list",{staticClass:"pa-0"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{attrs:{align:"center"}},[i("strong",[t._v("About")])])],1)],1),i("v-divider"),i("v-list-item",{attrs:{href:"adam-cornforth-cv.pdf",target:"_blank"}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-file ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("View CV")])],1)],1),i("v-list-item",{attrs:{href:"https://github.com/adamcornforth",target:"_blank"}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-github ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Github")])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{attrs:{align:"center"}},[i("strong",[t._v("Contact")])])],1)],1),i("v-divider"),i("v-list-item",{attrs:{href:"mailto:adam@apcdesigner.com",target:"_blank"}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-email ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Email")])],1)],1),i("v-list-item",{attrs:{href:"https://www.linkedin.com/in/adam-cornforth-25124759",target:"_blank"}},[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-linkedin ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("LinkedIn")])],1)],1)],1)],1)},a=[],l=n["a"].extend({name:"Me"}),v=l,c=i("2877"),m=i("6544"),u=i.n(m),d=i("b0af"),p=i("99d9"),f=i("ce7e"),h=i("132d"),b=i("adda"),g=i("8860"),_=i("da13"),y=i("5d23"),w=i("34c3"),x=i("0fd9"),C=Object(c["a"])(v,s,a,!1,null,null,null),j=C.exports;u()(C,{VCard:d["a"],VCardTitle:p["a"],VDivider:f["a"],VIcon:h["a"],VImg:b["a"],VList:g["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VListItemTitle:y["c"],VRow:x["a"]});var V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto mt-3"},[i("v-list",{staticClass:"pa-0"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{attrs:{align:"center"}},[i("strong",[t._v("Job History")])])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-map-marker ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v("Manchester")])]),i("v-list-item-subtitle",[t._v(" 2020 - Current ")])],1)],1),i("v-list-item",[i("v-list-item-icon"),i("v-list-item-content",[i("v-list-item-title",[t._v("Full Stack Developer")]),i("v-list-item-subtitle",[t._v(" Tui Interactive Media, London (full remote) ")])],1)],1),i("v-list-item",[i("v-list-item-icon"),i("v-list-item-content",[i("v-list-item-title",[t._v("Senior PHP Developer")]),i("v-list-item-subtitle",[t._v(" Street Group, Manchester ")])],1)],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-map-marker ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v(" London ")])]),i("v-list-item-subtitle",[t._v(" 2017 - 2020 ")])],1)],1),i("v-list-item",[i("v-list-item-icon"),i("v-list-item-content",[i("v-list-item-title",[t._v("PHP Developer")]),i("v-list-item-subtitle",[t._v(" Tui Interactive Media, London ")])],1)],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-map-marker ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v(" Manchester ")])]),i("v-list-item-subtitle",[t._v(" 2011 - 2016 ")])],1)],1),i("v-list-item",[i("v-list-item-icon"),i("v-list-item-content",[i("v-list-item-title",[t._v("PHP Developer")]),i("v-list-item-subtitle",[t._v(" Mojofuel, Manchester ")])],1)],1),i("v-list-item",[i("v-list-item-icon"),i("v-list-item-content",[i("v-list-item-title",[t._v("Freelance Web Developer")]),i("v-list-item-subtitle",[t._v(" The Paper Cup Company, Clitheroe ")]),i("v-list-item-subtitle",[t._v(" Rocoru Creative, Manchester ")])],1)],1),i("v-list-item",[i("v-list-item-icon"),i("v-list-item-content",[i("v-list-item-title",[t._v("Web Developer")]),i("v-list-item-subtitle",[t._v(" Workhouse Marketing, Ribchester ")])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{attrs:{align:"center"}},[i("strong",[t._v("Education")])])],1)],1),i("v-divider"),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{attrs:{color:"#FA503A"}},[t._v(" mdi-school ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Lancaster")]),i("v-list-item-subtitle",[t._v("Software Engineering, First Class Honours")])],1)],1)],1)],1)},A=[],k=n["a"].extend({name:"History"}),L=k,I=Object(c["a"])(L,V,A,!1,null,null,null),M=I.exports;u()(I,{VCard:d["a"],VDivider:f["a"],VIcon:h["a"],VList:g["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"]});var O=n["a"].extend({name:"App",components:{Me:j,History:M},data:function(){return{}}}),P=O,E=i("7496"),S=Object(c["a"])(P,r,o,!1,null,null,null),F=S.exports;u()(S,{VApp:E["a"],VImg:b["a"],VRow:x["a"]});i("d3b7"),i("3ca3"),i("ddb0");var T=i("8c4f"),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"})},D=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container")},q=[],R=n["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),W=R,J=i("a523"),G=Object(c["a"])(W,$,q,!1,null,null,null);G.exports;u()(G,{VContainer:J["a"]});var N={name:"Home",components:{}},Q=N,z=Object(c["a"])(Q,H,D,!1,null,null,null),B=z.exports;n["a"].use(T["a"]);var K=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],U=new T["a"]({mode:"history",base:"/",routes:K}),X=U,Y=i("2f62");n["a"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=i("f309");n["a"].use(tt["a"]);var et=new tt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:X,store:Z,vuetify:et,render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.75eec8e6.js.map