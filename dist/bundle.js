(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(426),t.b),p=a()(r()),f=s()(l);p.push([n.id,`@font-face {\n    font-family: 'bebas';\n    src: url(${f});\n    font-weight: 900;\n    font-style: bold;\n}\n\nbody:not(.loaded) .name,\nbody:not(.loaded) .header-left,\nbody:not(.loaded) .header-right{\n    animation: none; \n}\n\n\n\n\n*{\n    padding: 0;\n    margin: 0;\n    font-family: 'bebas';\n}\n\n.header {\n    min-height: 100vh;\n    background: linear-gradient(170deg, #0b3954 75%, white 25%);\n}\n\n.header-left{\n    float: left;\n    margin-left: 10rem;\n    margin-top: 5rem;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    position: relative;\n    /* background-color: black; */\n    width: 32%;\n    animation: header-img-anim 2s;\n    z-index: 2;\n\n}\n\n@keyframes header-img-anim {\n    from{\n        opacity: 0;\n        transform: translateY(-10%);\n\n    }\n    20%{\n        opacity: 1;\n    }\n    to{\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n}\n\n\n.top > img{\n    height: 80%;\n    width: auto;\n}\n\n\n.profile{\n    width: 100%;\n    min-width: 250px;\n    display: block;\n}\n\n.name{\n    position: absolute;\n    bottom: 2%;\n    left: 50%;\n    transform: translateX(-30%);\n    font-size: 6vw;\n    width: 90%;\n    font-weight: 100;\n    color: #fef9ff;\n    text-shadow: 6px 6px 0px rgba(0,0,0,0.2);\n    animation: name-animation 2s  ;\n\n}\n\n@keyframes name-animation {\n    from{\n        opacity: 0;\n        bottom:-8%;\n    }\n\n    to{\n        opacity: 1;\n        bottom: 2%;\n    }\n}\n\n\n\n.header-right h2{\n    color: #000500;\n}\n.header-right{\n    background-color: white;\n    color: #8d9499;\n    margin-top: 7%;\n    font-size: 2.2vw;\n    margin-left: calc(10rem + 32%);\n    margin-right: 10rem;\n    padding: 5rem 2rem 1rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    animation: aboutme-anim 2s;\n}\n\n@keyframes aboutme-anim {\n    from{\n        opacity: 0;\n        transform: translateY(40%);\n    }\n    20%{\n        opacity: 1;\n    }\n    to{\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n}\n\n\n\n.icons-container{\n    margin-left: auto;\n    max-width: 50%;\n}\n.icons{\n    display: flex;\n    list-style: none;\n    gap:4%;\n    justify-content: flex-end;\n    color: #000500;\n    height: 2.5vw;\n}\n\n.resume-icon > img  {\n    height: 100%;\n    width: auto;\n}\n\n\n\n.projects{\n    margin-top: 5%;\n    font-size: 2.5vw;\n    padding: 2% 5% 8% 5%;\n}\n\n.projects-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n    grid-gap: 2em;\n    margin-top: 2%;\n    /* row-gap: 6.667%; */\n}\n\n.project-card{\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    height: 65vh;\n    transition: transform 0.3s ease-in-out;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.project-card:hover{\n    transform: scale(1.02);\n}\n\n.top{\n    height: 60%;\n    background-color: #0b3954;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #f2e8cf;\n    font-size: 3rem;\n    text-align: center;\n}\n\n.details{\n    margin:2%  10% ;\n    /* height: 40%; */\n    overflow:auto;\n\n}\n\n.details-title{\n    display: flex;\n    font-weight: 100;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.details-text{\n    margin-top: 10%;\n    font-size:x-large;\n    color: #8d9499;\n}\n\n.icons-list{\n    flex: 1;\n    list-style: none;\n    display: flex;\n    justify-content: flex-end;\n    gap: 10%;\n}\n\n.icons-list > li{\n    line-height: 0;\n    transition: all 0.3s ease-in-out;\n}\n.icons-list > li:hover{\n    transform: scale(1.2);\n}\n\n.icons-list  a {\n    text-decoration: none;\n}\n\n\n\n\n\n\nfooter{\n    background-color: #0b3954;\n    padding:2% 10%;\n    padding-left: 2%;\n    display: flex;\n    color: #f2e8cf;\n    align-items: center;\n    gap: 4vw;\n    justify-content: center;\n}\n\n/* footer > *{\n    outline: solid black\n} */\n\n.footer-heading{\n    font-size: 4vw;\n    text-align: left;\n}\n\n.footer-left{    \n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.5vw;\n    margin-right: 10%;\n    margin-left: 10%;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n\n.footer-left  a{\n    text-decoration: none !important; \n    color: #f2e8cf;\n}\n\n.footer-right{\n    flex: 1;\n    text-align: center;\n    align-items: center;\n    font-size: 2vw;\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n}\n\n.footer-icons{\n    display: flex;\n    list-style: none;\n    gap:4rem;\n    /* color: #000500; */\n    color: #f2e8cf;\n    font-size: 4rem;\n    align-items: center;\n    \n}\n\n\n.footer-connect-icons{\n    fill: #f2e8cf;\n    height:2.5rem;\n    transform: translateY(30%);\n    padding-right: 0.6rem;\n}\n.footer-icons > li *{\n    font-size: 3rem;\n}\n\n\n.footer-resume-icon > img{\n    height: 3rem;\n}\n\n@media only screen and (max-width: 1200px) {\n    .header{\n        min-height: 70vh;\n    }\n    .header-right{\n        margin-right: 5%;\n        margin-top: 12rem;\n        margin-left: 16rem;\n        padding-top: 10%;\n    }\n\n    .header-left{\n        margin-right: 1rem;\n        margin-left: 5%;\n        width: 40%;\n        z-index: 3;\n    }\n\n    .name{\n        top:3rem;\n        left: 120%;\n    }\n\n\n    @keyframes name-animation {\n        from{\n            opacity: 0;\n            left:100%;\n        }\n        to{\n            opacity: 1;\n            left:120%;\n        }\n    }\n\n\n    .projects-container{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(350px, 0.8fr));\n        grid-gap: 2em;\n        margin-top: 2%;\n        justify-content: center;\n    }\n\n    .footer-right > img{\n        height: 100%;\n        object-fit: cover;\n    }\n\n    h2{\n        font-size: 6vw;\n    }\n\n    .footer-left{\n        font-size: 2vw;\n        margin-right: 10%;\n\n    }\n    .footer{\n        padding-left: 5%;\n        padding-right: 5%;\n    }\n\n\n    .footer-icons{\n        font-size: 4vw;\n        gap:2rem;\n    }\n\n\n    .footer-right > h2{\n        font-size: 2vw;\n    }\n\n    .footer-connect-icons{\n        display: none;\n    }\n\n  }\n\n  /* For mobile phones */\n  @media only screen and (max-width: 600px) {\n\n    .icons{\n        height: 8vw\n    }\n\n    .icons> li > i{\n        font-size: 8vw !important;\n    }\n\n    .header{\n        padding: 2rem;\n        background: linear-gradient(160deg, #0b3954 45%, white 10%);\n        overflow-x: hidden;\n\n    }\n    .header-left{\n        float: none;\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        height: 70vh;\n    }\n    .profile{\n        height: 100%;\n        object-fit: cover;\n    }\n    .name{\n        all: unset;\n        color: #dec3be;\n        text-shadow: 6px 6px 0px rgba(0,0,0,0.2);\n        position: absolute;\n        bottom: 2%;\n        left: 50%;\n        transform: translateX(-30%);\n        font-size: 4rem;\n        width: 100%;\n        font-weight: 100;\n        animation: name-animation 2s  ;\n\n    }\n\n    @keyframes name-animation {\n        from{\n            opacity: 0;\n            bottom:-8%;\n        }\n        to{\n            opacity: 1;\n            bottom: 2%;\n        }\n    }\n    .header-right{\n        all: unset;\n        background-color: white;\n        color: #8d9499;\n        font-size: 1.5rem;\n        margin: 0;\n        padding: 0;\n    }\n\n    .header-right > h2{\n        text-align: center;\n    }\n    .icons-container{\n        max-width: 100%;\n    }\n    .icons{\n        padding-top: 5%;\n        justify-content: center;\n        font-size: 2.5rem;\n        gap:6%;\n    }\n\n\n    .projects-title{\n        font-size: 2.3rem;\n        text-align: center;\n    }\n\n    .top{\n        font-size: 2.3rem;\n    }\n    .details-title{\n        padding-top: 5%;\n        font-size: 2rem;\n    }\n    footer{\n        flex-direction: column;\n        padding-left: 5%;\n        padding-right: 5%;\n    }\n\n    .footer-left{\n        font-size: 1.5rem;\n        margin-right: 0;\n        margin-left: 0;\n        \n        align-items: center;\n    }\n    .footer-right > h2{\n        font-size: 1.5rem;\n    }\n\n    .footer-heading{\n        font-size: 3rem !important;\n        text-align: center;\n    }\n    .footer-connect-icons{\n        display: none;\n    }\n\n    .footer-icons-container{\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    .footer-icons{\n        font-size: 2.8rem;\n        padding-bottom: 10%;\n    }\n  }`,""]);const d=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],p=i[l]||0,f="".concat(l," ").concat(p);i[l]=p+1;var d=t(f),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(m);else{var g=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:f,updater:g,references:1})}a.push(f)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},426:(n,e,t)=>{n.exports=t.p+"12e3683f9192436a7be8.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),p=t.n(l),f=t(589),d=t.n(f),m=t(28),g={};g.styleTagTransform=d(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const u=t.p+"f0b5a3c450e9cccaf7ad.jpg",h=t.p+"179f1ed3eac7ef5231e7.png",x=t.p+"aa6420651074c7beb3d8.png",y=t.p+"2c192296e30a3e43034e.png",b=t.p+"342ac71d40f60a163c1f.png",v=t.p+"e7dbf06d6f1ee058e92e.png",w=t.p+"58ad8902d04d50246571.png",z=document.querySelector(".profile"),j=document.querySelector(".battleship-image-container"),k=document.querySelector(".weather-image-container"),S=document.querySelector(".todoList-image-container"),T=document.querySelector(".dash-image-container"),q=document.querySelector(".top-image-container"),E=document.querySelector(".fcc-image-container");j.src=h,z.src=u,k.src=x,S.src=y,T.src=b,q.src=v,E.src=w,document.querySelectorAll(".project-card").forEach((n=>{n.addEventListener("click",(e=>{if(e.target.classList.contains("repo-link"))return;const t=n.getElementsByClassName("link")[0].href;window.open(t,"_blank")}))})),window.onload=()=>{document.querySelector(".loader").style.display="none",document.body.classList.add("loaded"),document.querySelector(".content").style.display="block"}})()})();