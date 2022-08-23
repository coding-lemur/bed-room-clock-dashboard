(function(){"use strict";var t={7311:function(t,e,n){var i=n(9242),s=n(3396),o=n(7139);const r={class:"container"},a=(0,s._)("h1",{class:"mb-3"},"Bedroom Clock",-1),l={id:"device-info",class:"mb-3"},c=(0,s._)("h2",null,"Device Info",-1),f={class:"list-group"},u={class:"list-group-item"},d={class:"list-group-item"},m={class:"list-group-item"},h={class:"list-group-item"},p={class:"list-group-item"},g={id:"sensor-values",class:"mb-3"},v=(0,s._)("h2",null,"Sensor Values",-1),b={class:"list-group"},w={class:"list-group-item"},y={class:"list-group-item"},_={id:"settings"},k=(0,s._)("h2",null,"Settings",-1),S=(0,s._)("label",{for:"brightness",class:"form-label"},"brightness",-1),O=["value"],T={id:"admin-actions",class:"mb-3"},U=(0,s._)("h2",null,"Admin Stuff",-1),I=["disabled"];function j(t,e,n,j,z,C){const W=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("div",r,[a,(0,s._)("section",l,[c,(0,s._)("ul",f,[(0,s._)("li",u,[(0,s.Wm)(W,{icon:"fa-solid fa-code-branch"}),(0,s.Uk)(" "+(0,o.zw)(z.info?.version??"n.a."),1)]),(0,s._)("li",d,[(0,s.Wm)(W,{icon:"fa-solid fa-barcode"}),(0,s.Uk)(" "+(0,o.zw)(z.info?.system?.deviceId??"n.a."),1)]),(0,s._)("li",m,[(0,s.Wm)(W,{icon:"fa-solid fa-clock"}),(0,s.Uk)(" "+(0,o.zw)(C.formatedTime??"n.a."),1)]),(0,s._)("li",h,[(0,s.Wm)(W,{icon:"fa-solid fa-wifi"}),(0,s.Uk)(" "+(0,o.zw)(z.info?.network?.wifiQuality??"n.a.")+" % ",1)]),(0,s._)("li",p,[(0,s.Wm)(W,{icon:"fa-solid fa-hourglass"}),(0,s.Uk)(" "+(0,o.zw)(C.formatedUptime),1)])])]),(0,s._)("section",g,[v,(0,s._)("ul",b,[(0,s._)("li",w,[(0,s.Wm)(W,{icon:"fa-solid fa-temperature-half"}),(0,s.Uk)(" "+(0,o.zw)(z.info?.values?.temperature??"n.a.")+" °C ",1)]),(0,s._)("li",y,[(0,s.Wm)(W,{icon:"fa-solid fa-droplet"}),(0,s.Uk)(" "+(0,o.zw)(z.info?.values?.humidity??"n.a.")+" % ",1)])])]),(0,s._)("section",_,[k,(0,s.wy)((0,s._)("div",null,[S,(0,s._)("input",{type:"range",class:"form-range",id:"brightness",min:"0",max:"255",value:this.settings?.brightness,onInput:e[0]||(e[0]=t=>this.settings.brightness=t.target.value)},null,40,O)],512),[[i.F8,z.settings?.brightness]])]),(0,s._)("section",T,[U,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...t)=>C.saveSettings&&C.saveSettings(...t)),disabled:!z.settings},"Save Settings",8,I),(0,s._)("button",{type:"button",class:"btn btn-danger ms-2",onClick:e[2]||(e[2]=(...t)=>C.hardReset&&C.hardReset(...t))},"Hard Reset")])])}var z=n(3925),C=n.n(z),W={name:"App",components:{},data(){return{info:void 0,settings:void 0,dataTimer:void 0,refreshTimer:void 0}},computed:{formatedUptime(){return this.info?.system?.uptime?C()(1e3*this.info.system.uptime):"n.a."},formatedTime(){if(!this.info?.system?.time)return"n.a.";const t=new Date(1e3*this.info.system.time);return t.toLocaleString()}},methods:{async loadInfo(){const t=await fetch("/api/info");this.info=await t.json()},async loadSettings(){const t=await fetch("/api/settings");t.ok&&(this.settings=await t.json())},async saveSettings(){const t=await fetch("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.settings)});t.ok||console.error("save settings fail")},refreshUptime(){this.info?.system?.uptime&&this.info.system.uptime++},async hardReset(){const t=await fetch("/api/hard-reset",{method:"POST"});t.ok||console.error("hard-reset fail")}},beforeMount(){this.dataTimer=setInterval((async()=>{await this.loadInfo()}),3e4),this.refreshTimer=setInterval(this.refreshUptime,1e3),this.loadInfo(),this.loadSettings()},beforeUnmount(){clearInterval(this.refreshTimer),clearInterval(this.dataTimer)}},x=n(89);const D=(0,x.Z)(W,[["render",j]]);var P=D,R=n(8125),A=n(8321),Z=n(7749);R.vI.add([A.mh3,A.VdD,A.SZw,A.$Aj,A.DH$,A.ccn,A.Zkk]),(0,i.ri)(P).component("font-awesome-icon",Z.GN).mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,o){if(!i){var r=1/0;for(f=0;f<t.length;f++){i=t[f][0],s=t[f][1],o=t[f][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<r&&(r=o));if(a){t.splice(f--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[i,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,r=i[0],a=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var f=l(n)}for(e&&e(i);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(f)},i=self["webpackChunkbedroom_clock_dashboard"]=self["webpackChunkbedroom_clock_dashboard"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7311)}));i=n.O(i)})();
//# sourceMappingURL=app.b16ed721.js.map