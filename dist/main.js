!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.curSection=1;const o=document.querySelectorAll("section");window.countSections=o.length;const r=()=>{o.forEach(e=>{e.classList.remove("active")}),document.querySelectorAll(".dots .dot").forEach(e=>{e.classList.remove("active")}),document.querySelector("section.el_"+curSection).classList.add("active"),document.querySelector(`.dots .dot[page="${curSection}"]`).classList.add("active")};document.addEventListener("wheel",e=>{e.deltaY<0&&curSection>1?curSection-=1:e.deltaY>0&&curSection<countSections&&(curSection+=1),r()}),(()=>{let e=document.createElement("div");e.classList.add("dots");for(let t=1;t<=countSections;t++){let n=document.createElement("div");n.classList.add("dot"),n.setAttribute("page",t),e.append(n)}document.body.append(e),document.querySelectorAll(".dots .dot").forEach(e=>{e.addEventListener("click",e=>{curSection=parseInt(e.target.getAttribute("page")),r()})})})(),r()},function(e,t,n){}]);