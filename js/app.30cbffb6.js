(function(){"use strict";var t={7288:function(t,n,e){var s=e(9242),i=e(3396),a=e(7139);const o={class:"container"},r=(0,i._)("h1",{class:"mb-3"},"Bedroom Clock",-1),c={id:"device-info",class:"mb-3"},l=(0,i._)("h2",null,"Device Info",-1),u={class:"list-group"},d={class:"list-group-item"},f={class:"list-group-item"},m={class:"list-group-item"},p={class:"list-group-item"},h={class:"list-group-item"},b={id:"sensor-values",class:"mb-3"},g=(0,i._)("h2",null,"Sensor Values",-1),v={class:"list-group"},_={class:"list-group-item"},y={class:"list-group-item"},w={id:"settings"},k=(0,i._)("h2",null,"Settings",-1),O=(0,i._)("label",{for:"brightness",class:"form-label"},"brightness",-1),S=["value"],I={class:"input-group mb-3"},x=(0,i._)("span",{class:"input-group-text"},"screen on distance",-1),T=["value"],U=(0,i._)("span",{class:"input-group-text",id:"basic-addon2"},"cm",-1),j={class:"input-group mb-3"},z=(0,i._)("span",{class:"input-group-text"},"screen on interval",-1),C=["value"],W=(0,i._)("span",{class:"input-group-text",id:"basic-addon2"},"ms",-1),D={id:"admin-actions",class:"mb-3"},P=(0,i._)("h2",null,"Admin Stuff",-1),R=["disabled"],A={class:"mt-5"},Z=(0,i.Uk)(),F=(0,i._)("a",{href:"https://github.com/coding-lemur/bed-room-clock-dashboard",target:"_blank"},"bed-room-clock-dashboard",-1);function M(t,n,e,s,M,N){const V=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",o,[r,(0,i._)("section",c,[l,(0,i._)("ul",u,[(0,i._)("li",d,[(0,i.Wm)(V,{icon:"fa-solid fa-code-branch"}),(0,i.Uk)(" "+(0,a.zw)(M.info?.version??"n.a."),1)]),(0,i._)("li",f,[(0,i.Wm)(V,{icon:"fa-solid fa-barcode"}),(0,i.Uk)(" "+(0,a.zw)(M.info?.system?.deviceId??"n.a."),1)]),(0,i._)("li",m,[(0,i.Wm)(V,{icon:"fa-solid fa-clock"}),(0,i.Uk)(" "+(0,a.zw)(N.formatedTime??"n.a."),1)]),(0,i._)("li",p,[(0,i.Wm)(V,{icon:"fa-solid fa-wifi"}),(0,i.Uk)(" "+(0,a.zw)(M.info?.network?.wifiQuality??"n.a.")+" % ",1)]),(0,i._)("li",h,[(0,i.Wm)(V,{icon:"fa-solid fa-hourglass"}),(0,i.Uk)(" "+(0,a.zw)(N.formatedUptime),1)])])]),(0,i._)("section",b,[g,(0,i._)("ul",v,[(0,i._)("li",_,[(0,i.Wm)(V,{icon:"fa-solid fa-temperature-half"}),(0,i.Uk)(" "+(0,a.zw)(M.info?.values?.temp??"n.a.")+" °C ",1)]),(0,i._)("li",y,[(0,i.Wm)(V,{icon:"fa-solid fa-droplet"}),(0,i.Uk)(" "+(0,a.zw)(M.info?.values?.humidity??"n.a.")+" % ",1)])])]),(0,i._)("section",w,[k,(0,i._)("div",null,[O,(0,i._)("input",{type:"range",class:"form-range",id:"brightness",min:"0",max:"255",value:this.settings?.brightness,onInput:n[0]||(n[0]=t=>this.settings.brightness=t.target.value)},null,40,S)]),(0,i._)("div",I,[x,(0,i._)("input",{type:"number",min:"0",max:"255",class:"form-control",value:this.settings?.screenOnDistance,onInput:n[1]||(n[1]=t=>this.settings.screenOnDistance=t.target.value),"aria-label":"screen on distance","aria-describedby":"basic-addon2"},null,40,T),U]),(0,i._)("div",j,[z,(0,i._)("input",{type:"number",min:"0",max:"300000",class:"form-control",value:this.settings?.screenOnInterval,onInput:n[2]||(n[2]=t=>this.settings.screenOnInterval=t.target.value),"aria-label":"screen on interval","aria-describedby":"basic-addon2"},null,40,C),W])]),(0,i._)("section",D,[P,(0,i._)("button",{type:"button",class:"btn btn-primary",onClick:n[3]||(n[3]=(...t)=>N.saveSettings&&N.saveSettings(...t)),disabled:!M.settings},"Save Settings",8,R),(0,i._)("button",{type:"button",class:"btn btn-secondary ms-2",onClick:n[4]||(n[4]=(...t)=>N.restart&&N.restart(...t))},"Restart"),(0,i._)("button",{type:"button",class:"btn btn-danger ms-2",onClick:n[5]||(n[5]=(...t)=>N.hardReset&&N.hardReset(...t))},"Factory reset")]),(0,i._)("section",A,[(0,i.Wm)(V,{icon:"fa-brands fa-github"}),Z,F])])}var N=e(3925),V=e.n(N),$={name:"App",components:{},data(){return{info:void 0,settings:void 0,dataTimer:void 0}},computed:{formatedUptime(){if(!this.info?.system?.uptime)return"n.a.";const t=1e3*this.info.system.uptime,n={units:["y","mo","w","d","h","m"],round:!0};return V()(t,n)},formatedTime(){if(!this.info?.system?.time)return"n.a.";const t=new Date(1e3*this.info.system.time);return t.toLocaleString()}},methods:{async loadInfo(){const t=await fetch("/api/info");t.ok&&(this.info=await t.json())},async loadSettings(){const t=await fetch("/api/settings");t.ok&&(this.settings=await t.json())},async saveSettings(){const t=await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.settings)});t.ok||console.error("save settings fail")},async hardReset(){const t=await fetch("/api/hard-reset",{method:"POST"});t.ok||console.error("hard-reset fail")},async restart(){const t=await fetch("/api/restart",{method:"POST"});t.ok||console.error("restart fail")}},beforeMount(){this.dataTimer=setInterval((async()=>{await this.loadInfo()}),3e4),this.loadInfo(),this.loadSettings()},beforeUnmount(){clearInterval(this.dataTimer)}},B=e(89);const E=(0,B.Z)($,[["render",M]]);var G=E,H=e(3494),J=e(8539),L=e(4551),Q=e(7749);H.vI.add([J.mh3,J.VdD,J.SZw,J.$Aj,J.DH$,J.ccn,J.Zkk,L.zhw]),(0,s.ri)(G).component("font-awesome-icon",Q.GN).mount("#app")}},n={};function e(s){var i=n[s];if(void 0!==i)return i.exports;var a=n[s]={exports:{}};return t[s](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,s,i,a){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var r=!0,c=0;c<s.length;c++)(!1&a||o>=a)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(r=!1,a<o&&(o=a));if(r){t.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,s){var i,a,o=s[0],r=s[1],c=s[2],l=0;if(o.some((function(n){return 0!==t[n]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(c)var u=c(e)}for(n&&n(s);l<o.length;l++)a=o[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},s=self["webpackChunkbedroom_clock_dashboard"]=self["webpackChunkbedroom_clock_dashboard"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(7288)}));s=e.O(s)})();
//# sourceMappingURL=app.30cbffb6.js.map