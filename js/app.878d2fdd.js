(function(){"use strict";var n={9465:function(n,i,e){var t=e(9242),o=e(3396),r=e(7139);const a={class:"container"},u=(0,o._)("h1",{class:"mb-3"},"Bedroom Clock",-1),s={id:"device-info",class:"mb-3"},c=(0,o._)("h2",null,"Device Info",-1),l=(0,o.Uk)("version: "),f={class:"value"},v=(0,o.Uk)("device ID: "),d={class:"value"},p=(0,o.Uk)(" wifi signal: "),h={class:"value"},m=(0,o._)("div",null,[(0,o.Uk)("time: "),(0,o._)("span",{class:"value"},"n.a.")],-1),w=(0,o.Uk)(" uptime: "),b={class:"value"};function _(n,i,e,t,_,y){return(0,o.wg)(),(0,o.iD)("div",a,[u,(0,o._)("section",s,[c,(0,o._)("div",null,[l,(0,o._)("span",f,(0,r.zw)(_.version),1)]),(0,o._)("div",null,[v,(0,o._)("strong",d,(0,r.zw)(_.deviceId),1)]),(0,o._)("div",null,[p,(0,o._)("span",h,(0,r.zw)(_.wifiQuality)+"%",1)]),m,(0,o._)("div",null,[w,(0,o._)("span",b,(0,r.zw)(_.uptime),1)])])])}var y=e(3925),k=e.n(y),g={name:"App",components:{},data(){return{version:void 0,deviceId:void 0,wifiQuality:void 0,uptime:void 0,timer:void 0}},methods:{async loadData(){const n=await fetch("/api/info"),i=await n.json(),{system:e,network:t}=i;this.version=i.version,this.deviceId=e.deviceId,this.wifiQuality=t.wifiQuality,this.uptime=k()(1e3*e.uptime)}},beforeMount(){this.timer=setInterval((async()=>{await this.loadData()}),3e4),this.loadData()},beforeUnmount(){clearInterval(this.timer)}},O=e(89);const I=(0,O.Z)(g,[["render",_]]);var j=I;(0,t.ri)(j).mount("#app")}},i={};function e(t){var o=i[t];if(void 0!==o)return o.exports;var r=i[t]={exports:{}};return n[t](r,r.exports,e),r.exports}e.m=n,function(){var n=[];e.O=function(i,t,o,r){if(!t){var a=1/0;for(l=0;l<n.length;l++){t=n[l][0],o=n[l][1],r=n[l][2];for(var u=!0,s=0;s<t.length;s++)(!1&r||a>=r)&&Object.keys(e.O).every((function(n){return e.O[n](t[s])}))?t.splice(s--,1):(u=!1,r<a&&(a=r));if(u){n.splice(l--,1);var c=o();void 0!==c&&(i=c)}}return i}r=r||0;for(var l=n.length;l>0&&n[l-1][2]>r;l--)n[l]=n[l-1];n[l]=[t,o,r]}}(),function(){e.n=function(n){var i=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(i,{a:i}),i}}(),function(){e.d=function(n,i){for(var t in i)e.o(i,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:i[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)}}(),function(){var n={143:0};e.O.j=function(i){return 0===n[i]};var i=function(i,t){var o,r,a=t[0],u=t[1],s=t[2],c=0;if(a.some((function(i){return 0!==n[i]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(s)var l=s(e)}for(i&&i(t);c<a.length;c++)r=a[c],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(l)},t=self["webpackChunkbedroom_clock_dashboard"]=self["webpackChunkbedroom_clock_dashboard"]||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(9465)}));t=e.O(t)})();
//# sourceMappingURL=app.878d2fdd.js.map