(function(){var n={121:function(){document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelectorAll(".navbar-burger");n.forEach((n=>{n.addEventListener("click",(()=>{const a=n.dataset.target,s=document.getElementById(a);n.classList.toggle("is-active"),s&&s.classList.toggle("is-active")}))}));const a=document.querySelectorAll(".dropdown");a.forEach((n=>{n.addEventListener("click",(a=>{a.stopPropagation(),n.classList.toggle("is-active")}))})),document.addEventListener("click",(n=>{const s=n.target.matches(".dropdown, .dropdown *");s||a.forEach((n=>{n.classList.remove("is-active")}))}))}))},212:function(n,a,s){"use strict";var e=s(751),t=s(641);function r(n,a,s,e,r,i){const o=(0,t.g2)("NavBar"),c=(0,t.g2)("FooterPage");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(o),((0,t.uX)(),(0,t.Wv)((0,t.$y)(e.currentView))),(0,t.bF)(c)],64)}var i=s(953);const o=(0,t.Lk)("div",{class:"container is-widescreen"},[(0,t.Lk)("nav",{class:"navbar is-transparent"},[(0,t.Lk)("div",{class:"navbar-brand"},[(0,t.Lk)("a",{class:"navbar-item",href:"#/"},[(0,t.Lk)("img",{src:"img/logonoso.svg",alt:"Logo"}),(0,t.eW)(" NosoExplorer ")]),(0,t.Lk)("div",{class:"navbar-burger js-burger","data-target":"navbarExampleTransparentExample"},[(0,t.Lk)("span"),(0,t.Lk)("span"),(0,t.Lk)("span"),(0,t.Lk)("span")])]),(0,t.Lk)("div",{id:"navbarExampleTransparentExample",class:"navbar-menu"},[(0,t.Lk)("div",{class:"navbar-item has-dropdown is-hoverable"},[(0,t.Lk)("a",{class:"navbar-link"}," Blockchain "),(0,t.Lk)("div",{class:"navbar-dropdown"},[(0,t.Lk)("a",{class:"navbar-item",href:"#/blocks"}," Blocks "),(0,t.Lk)("a",{class:"navbar-item",href:"#/transactions"}," Transactions "),(0,t.Lk)("a",{class:"navbar-item"}," Masternodes "),(0,t.Lk)("hr",{class:"navbar-divider"}),(0,t.Lk)("a",{class:"navbar-item"}," Top Accounts "),(0,t.Lk)("a",{class:"navbar-item"}," Statistics ")])]),(0,t.Lk)("div",{class:"navbar-item has-dropdown is-hoverable"},[(0,t.Lk)("a",{class:"navbar-link"}," Resources "),(0,t.Lk)("div",{class:"navbar-dropdown"},[(0,t.Lk)("a",{class:"navbar-item"}," Wallets "),(0,t.Lk)("a",{class:"navbar-item"}," Exchanges ")])]),(0,t.Lk)("div",{class:"navbar-end"},[(0,t.Lk)("div",{class:"navbar-item"},[(0,t.Lk)("div",{class:"field is-grouped"},[(0,t.Lk)("div",{class:"field has-addons"},[(0,t.Lk)("div",{class:"control has-icons-left"},[(0,t.Lk)("input",{class:"input",type:"text",placeholder:"Address / Tx ID / Block ID"}),(0,t.Lk)("span",{class:"icon is-small is-left"},[(0,t.Lk)("i",{class:"fas fa-search fa-xs"})])])]),(0,t.Lk)("div",{class:"dropdown"},[(0,t.Lk)("div",{class:"dropdown-trigger"},[(0,t.Lk)("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu3"},[(0,t.Lk)("span",null,"Mainnet"),(0,t.Lk)("span",{class:"icon is-small"},[(0,t.Lk)("i",{class:"fas fa-angle-down","aria-hidden":"true"})])])]),(0,t.Lk)("div",{class:"dropdown-menu",id:"dropdown-menu3",role:"menu"},[(0,t.Lk)("div",{class:"dropdown-content"},[(0,t.Lk)("a",{href:"#",class:"dropdown-item"}," Testnet ")])])])])])])])])],-1),c=(0,t.Lk)("br",null,null,-1);function l(n,a,s,e,r,i){return(0,t.uX)(),(0,t.CE)(t.FK,null,[o,c],64)}var d=s(121),u=s.n(d),v=s(262);const p=(0,v.A)(u(),[["render",l]]);var f=p;const k={class:"container is-widescreen"},m=(0,t.Fv)('<section class="section"><div class="container"><div class="content has-text-left"><p><span class="has-text-weight-semibold">2024© Made with ♥ </span><a class="is-underlined has-text-link-light" href="https://github.com/pasichDev">pasichDev (Noso)</a><span class="has-text-weight-semibold"> | All rights reserved</span></p></div></div></section>',1),b=[m];function L(n,a,s,e,r,i){return(0,t.uX)(),(0,t.CE)("div",k,b)}var h={name:"FooterPage"};const g=(0,v.A)(h,[["render",L]]);var w=g;const E={class:"container is-widescreen"},x=(0,t.Lk)("section",{class:"section"},[(0,t.Lk)("div",{class:"container"}," Blocks ")],-1),y=[x];function A(n,a,s,e,r,i){return(0,t.uX)(),(0,t.CE)("div",E,y)}var O={name:"BlocksPage"};const C=(0,v.A)(O,[["render",A]]);var F=C;const P={class:"container is-widescreen"},B=(0,t.Lk)("section",{class:"section"},[(0,t.Lk)("div",{class:"container"}," MainPage ")],-1),T=[B];function M(n,a,s,e,r,i){return(0,t.uX)(),(0,t.CE)("div",P,T)}var j={name:"MainPage"};const X=(0,v.A)(j,[["render",M]]);var D=X;const N={class:"container is-widescreen"},W=(0,t.Fv)('<div class="card has-background-black-ter"><div class="card-content"><div class="content"> Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. </div></div></div><br><div class="tabs is-toggle"><ul><li class="is-active"><a><span>Transactions</span></a></li><li><a><span>Blocks</span></a></li></ul></div>',3),_=[W];function q(n,a,s,e,r,i){return(0,t.uX)(),(0,t.CE)("div",N,_)}var I={name:"MainPage"};const K=(0,v.A)(I,[["render",q]]);var S=K,R={name:"App",components:{NavBar:f,FooterPage:w},setup(){const n={"/":S,"/blocks":F},a=(0,i.KR)(window.location.hash.slice(1)||"/");window.addEventListener("hashchange",(()=>{a.value=window.location.hash.slice(1)||"/"}));const s=(0,t.EW)((()=>n[a.value]||D));return{currentView:s}}};const V=(0,v.A)(R,[["render",r]]);var $=V;(0,e.Ef)($).mount("#app")}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,s),r.exports}s.m=n,function(){var n=[];s.O=function(a,e,t,r){if(!e){var i=1/0;for(d=0;d<n.length;d++){e=n[d][0],t=n[d][1],r=n[d][2];for(var o=!0,c=0;c<e.length;c++)(!1&r||i>=r)&&Object.keys(s.O).every((function(n){return s.O[n](e[c])}))?e.splice(c--,1):(o=!1,r<i&&(i=r));if(o){n.splice(d--,1);var l=t();void 0!==l&&(a=l)}}return a}r=r||0;for(var d=n.length;d>0&&n[d-1][2]>r;d--)n[d]=n[d-1];n[d]=[e,t,r]}}(),function(){s.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(a,{a:a}),a}}(),function(){s.d=function(n,a){for(var e in a)s.o(a,e)&&!s.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:a[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){s.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)}}(),function(){var n={524:0};s.O.j=function(a){return 0===n[a]};var a=function(a,e){var t,r,i=e[0],o=e[1],c=e[2],l=0;if(i.some((function(a){return 0!==n[a]}))){for(t in o)s.o(o,t)&&(s.m[t]=o[t]);if(c)var d=c(s)}for(a&&a(e);l<i.length;l++)r=i[l],s.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return s.O(d)},e=self["webpackChunknoso_explorer"]=self["webpackChunknoso_explorer"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[504],(function(){return s(212)}));e=s.O(e)})();
//# sourceMappingURL=app.e5ffb12a.js.map