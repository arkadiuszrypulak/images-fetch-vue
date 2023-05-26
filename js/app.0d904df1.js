(function(){"use strict";var t={5841:function(t,n,e){var r=e(9242),o=e(3396);function i(t,n,e,r,i,a){const c=(0,o.up)("FetchImageComponent");return(0,o.wg)(),(0,o.j4)(c)}var a=e(7139);const c=t=>((0,o.dD)("data-v-77916855"),t=t(),(0,o.Cn)(),t),u=c((()=>(0,o._)("h1",null,"Gallery",-1))),s={key:1,class:"gallery"},l={class:"container-content"},f=["src","alt"],d={class:"author"};function g(t,n,e,r,i,c){const g=(0,o.up)("v-progress-circular");return(0,o.wg)(),(0,o.iD)("div",null,[i.isLoading?((0,o.wg)(),(0,o.j4)(g,{key:0,indeterminate:"",color:"primary",size:"64"})):(0,o.kq)("",!0),u,i.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.images,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"image-container",key:t.id},[(0,o._)("div",l,[(0,o._)("img",{src:t.download_url,alt:t.author,class:"image"},null,8,f),(0,o._)("div",d,(0,a.zw)(t.author),1)])])))),128))]))])}var h=e(4161),p={data(){return{isLoading:!0,images:[]}},mounted(){this.fetchImages(),this.setPageTitle("Fetch images")},methods:{setPageTitle(t){document.title=t},fetchImages(){const t="https://picsum.photos/v2/list?page=1&limit=20";h.Z.get(t).then((t=>{this.images=t.data.sort(((t,n)=>t.author.localeCompare(n.author)))})).catch((t=>{console.error(t)})).finally((()=>{this.isLoading=!1}))}}},v=e(89);const m=(0,v.Z)(p,[["render",g],["__scopeId","data-v-77916855"]]);var w=m,y={name:"App",components:{FetchImageComponent:w}};const b=(0,v.Z)(y,[["render",i]]);var O=b;(0,r.ri)(O).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(n){return 0!==t[n]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(u)var l=u(e)}for(n&&n(r);s<a.length;s++)i=a[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkfetch_images"]=self["webpackChunkfetch_images"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5841)}));r=e.O(r)})();
//# sourceMappingURL=app.0d904df1.js.map