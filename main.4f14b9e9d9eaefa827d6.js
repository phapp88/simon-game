(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o,i,r,u,d,l,a,s,f,m,g={blue:n.p+"60f3cc7d5750955854a536d996f5b08b.mp3",green:n.p+"be139b4b99ec2b2fae15c4c7be96b46f.mp3",red:n.p+"1eb5aa4cd41771f654062b51a6775db4.mp3",yellow:n.p+"3d5f915659a6055e6377a06055f0e1f7.mp3"},v=function e(t){if("all"===t){["blue","green","red","yellow"].forEach(e)}var n=new Audio(g[t]);n.currentTime=0,n.play()},h=!1,E=[],y=250,b=600,p=!1,_=[],L=null,B=[],I=!1,w=function(e,t){return _.push(setTimeout(e,t))},D=function(){return h},T=function(){return p},k=function(){E=[],b=600,a(),r(),c(),w(l,1e3);var e=2*E.length*b;w(m,1e3+e)};c=function(){var e=["blue","green","red","yellow"],t=e[Math.floor(Math.random()*e.length)];E.push(t),5!==E.length&&9!==E.length&&13!==E.length||(b-=100)},o=function(){Array.from(document.getElementById("device").children).slice(0,4).forEach((function(e){return e.classList.remove("device__button--on")})),h=!1},i=function(){Array.from(document.getElementById("device").children).slice(0,4).forEach((function(e){return e.classList.add("device__button--on")})),h=!0},r=function(){for(var e=document.getElementById("countDiv"),t=0;t<4;t++)w((function(){return e.classList.toggle("device-center__count-display--on")}),t*y)},u=function(){if(document.getElementById("countDiv").textContent="!!",o(),v("all"),I)k();else{var e=2*E.length*b;r(),w(l,1e3),w(m,1e3+e)}},d=function(e){var t=document.getElementById("countDiv");t.textContent="**";for(var n=0;n<6;n++)w((function(){v(e),t.classList.toggle("device-center__count-display--on")}),n*y);w((function(){t.textContent="--"}),6e3)},l=function(){document.getElementById("countDiv").textContent=E.length,B=[],E.forEach((function(e,t){var n=document.getElementById(e),c="device__button--".concat(e,"-on");w((function(){n.classList.add(c),v(e)}),(2*t+1)*b),w((function(){return n.classList.remove(c)}),(2*t+2)*b)}))},a=function(){["blue","green","red","yellow"].forEach((function(e){document.getElementById(e).classList.remove("device__button--".concat(e,"-on"))})),o(),document.getElementById("countDiv").textContent="--",_.forEach((function(e){return clearTimeout(e)})),_=[]},s=function(){return E.length===B.length&&E.every((function(e,t){return e===B[t]}))},f=function(){L=setTimeout(u,5*b),_.push(L)},m=function(){i(),f()};n(0);var x=function(e){var t,n;e.preventDefault(),D()&&(t=e.target.id,(n=document.getElementById(t)).classList.add("device__button--".concat(t,"-on")),clearTimeout(L),v(t),B.push(t),t!==E[B.length-1]&&(n.classList.remove("device__button--".concat(t,"-on")),u()))},A=function(e){e.preventDefault(),D()&&function(e){if(document.getElementById(e).classList.remove("device__button--".concat(e,"-on")),s())if(o(),20===E.length)d(e);else{c(),w(l,750);var t=2*E.length*b;w(m,750+t)}else f()}(e.target.id)};Array.from(document.getElementById("device").children).slice(0,4).forEach((function(e){e.addEventListener("touchstart",x),e.addEventListener("touchend",A),e.addEventListener("mousedown",x),e.addEventListener("mouseup",A)})),document.getElementById("onOffBtn").addEventListener("click",(function(e){var t=document.getElementById("countDiv"),n=Array.from(e.currentTarget.children);this.blur(),t.classList.toggle("device-center__count-display--on"),n.forEach((function(e){return e.classList.toggle("hidden")})),T()?(p=!1,I&&document.getElementById("strictLight").classList.remove("device-center__strict-light--on"),a()):p=!0})),document.getElementById("startBtn").addEventListener("click",(function(){this.blur(),T()&&k()})),document.getElementById("strictBtn").addEventListener("click",(function(){this.blur(),T()&&(document.getElementById("strictLight").classList.toggle("device-center__strict-light--on"),I=!I)}))}],[[1,1]]]);