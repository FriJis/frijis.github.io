!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.addEventListener("load",(function(){document.querySelector(".loader").classList.add("disable")})),window.curSection=1;var o=document.querySelectorAll("section");window.countSections=o.length;var c=function(){o.forEach((function(e){e.classList.remove("active")})),document.querySelectorAll(".dots .dot").forEach((function(e){e.classList.remove("active")})),document.querySelector("section.el_".concat(curSection)).classList.add("active"),document.querySelector('.dots .dot[page="'.concat(curSection,'"]')).classList.add("active")};window.deltaTime={minTime:400,setTime:function(){this.cur=new Date},delta:function(){return new Date-this.cur>this.minTime&&(this.setTime(),!0)}},document.addEventListener("wheel",(function(e){e.deltaY<0&&curSection>1&&deltaTime.delta()&&(curSection-=1),e.deltaY>0&&curSection<countSections&&deltaTime.delta()&&(curSection+=1),c()})),document.addEventListener("keydown",(function(e){"ArrowUp"==e.code&&curSection>1&&(curSection-=1),"ArrowDown"==e.code&&curSection<countSections&&(curSection+=1),c()})),function(){var e=document.createElement("div");e.classList.add("dots");for(var t=1;t<=countSections;t++){var n=document.createElement("div");n.classList.add("dot"),n.setAttribute("page",t),e.append(n)}document.body.append(e),document.querySelectorAll(".dots .dot").forEach((function(e){e.addEventListener("click",(function(e){curSection=parseInt(e.target.getAttribute("page")),c()}))}))}(),c(),deltaTime.setTime()},function(e,t,n){}]);