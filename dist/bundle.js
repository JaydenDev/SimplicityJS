!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.brackets=t():e.brackets=t()}(self,(()=>{return e={579:function(e){"undefined"!=typeof $&&console.log("A conflicting library has been loaded.");var t={version:"v1.4.0",debug:!0,createElem:(e,t,n,r,l,o)=>{let s=document.createElement(e);return n&&(s.id=n),r&&(s.className=r),l&&(s.innerHTML=l),t&&(parent=document.getElementById(t),parent.appendChild(s)),"a"==e&&(s.href=o),s},removeLinks:()=>{let e=document.getElementsByTagName("link");for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])},swapStyles:e=>{if(!e.endsWith(".css"))return new Error(`BracketsJS: ${e} is not a valid CSS file`);this.removeLinks(),this.loadCSSFile(e)},addScript:(e,t)=>{if(e.endsWith(".js")){let t=document.createElement("script");return t.src=e,void document.body.appendChild(t)}{let n=!1;if("fileName"==t&&(console.warn("BracketsJS: fileName bypass is being used, this is not recommended."),n=!0),!n)return new Error(`BracketsJS: ${e} is not a valid javascript file.`);{let t=document.createElement("script");t.src=e,document.body.appendChild(t)}}this.removeLinks(),this.loadCSSFile(style)},removeElem:e=>{var t=get(e);t.parentNode.removeChild(t)},loadCSSFile:e=>{if(!e.endsWith(".css"))return new Error(`BracketsJS: ${e} is not a valid CSS file`);{let t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}},swapFavicon:e=>{let t=document.querySelector('link[rel*="icon"]')||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.head.appendChild(t)},toggleElemVisibility:e=>{let t=document.getElementsById(e);"block"==t.style.display?t.style.display="none":t.style.display="block"},toggleClass:(e,t)=>{let n=document.getElementById(e);n.classList.includes(t)?n.classList.remove(t):n.classList.add(t)},detectURIArgs:()=>{let e=window.location.href.split("?")[1].split("&"),t={};for(let n=0;n<e.length;n++){let r=e[n].split("=");t[r[0]]=r[1]}return console.log(t),t},getScripts:()=>{let e=[];for(var t=0;t<document.scripts.length;t++)e.push(document.scripts[t].src);console.log(`DEBUG: Scripts Loaded ${e}`)}};e.exports=t}},t={},function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(579);var e,t}));
//# sourceMappingURL=bundle.js.map