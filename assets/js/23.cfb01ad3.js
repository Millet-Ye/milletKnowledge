(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{241:function(e,n,t){"use strict";var o=function(){var e=0,n=document.createElement("div");function t(e){return n.appendChild(e.dom),e}function a(t){for(var o=0;o<n.children.length;o++)n.children[o].style.display=o===t?"block":"none";e=t}n.style.cssText="position:absolute;top:0;left:0;cursor:pointer;opacity:0.9;z-index:19",n.addEventListener("click",(function(t){t.preventDefault(),a(++e%n.children.length)}),!1);var i=(performance||Date).now(),d=i,l=0,c=t(new o.Panel("FPS","#0ff","#002")),s=t(new o.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var r=t(new o.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:n,addPanel:t,showPanel:a,begin:function(){i=(performance||Date).now()},end:function(){l++;var e=(performance||Date).now();if(s.update(e-i,200),e>=d+1e3&&(c.update(1e3*l/(e-d),100),d=e,l=0,r)){var n=performance.memory;r.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:n,setMode:a}};o.Panel=function(e,n,t){var o=1/0,a=0,i=Math.round,d=i(window.devicePixelRatio||1),l=80*d,c=48*d,s=3*d,r=2*d,f=3*d,u=15*d,p=74*d,h=30*d,m=document.createElement("canvas");m.width=l,m.height=c,m.style.cssText="width:80px;height:48px";var w=m.getContext("2d");return w.font="bold "+9*d+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=t,w.fillRect(0,0,l,c),w.fillStyle=n,w.fillText(e,s,r),w.fillRect(f,u,p,h),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(f,u,p,h),{dom:m,update:function(c,v){o=Math.min(o,c),a=Math.max(a,c),w.fillStyle=t,w.globalAlpha=1,w.fillRect(0,0,l,u),w.fillStyle=n,w.fillText(i(c)+" "+e+" ("+i(o)+"-"+i(a)+")",s,r),w.drawImage(m,f+d,u,p-d,h,f,u,p-d,h),w.fillRect(f+p-d,u,d,h),w.fillStyle=t,w.globalAlpha=.9,w.fillRect(f+p-d,u,d,i((1-c/v)*h))}}},n.a=o},285:function(e,n,t){},333:function(e,n,t){"use strict";t(285)},364:function(e,n,t){"use strict";t.r(n);t(45);var o=t(240),a=t(245),i=t(241),d=t(282);let l,c,s,r,f,u,p,h,m;const w=[];let v,b,g,E,S,x,y,C,L=!1,A=0;function P(){l=document.getElementById("three1"),r=new o.jb(45,l.clientWidth/l.clientHeight,1,100),r.position.set(1,2,-3),r.lookAt(0,1,0),m=new o.o,c=new o.xb,c.background=new o.p(10526880),c.fog=new o.x(10526880,10,50);const e=new o.A(16777215,4473924);e.position.set(0,20,0),c.add(e);const n=new o.s(16777215);n.position.set(-3,10,-10),n.castShadow=!0,n.shadow.camera.top=2,n.shadow.camera.bottom=-2,n.shadow.camera.left=-2,n.shadow.camera.right=2,n.shadow.camera.near=.1,n.shadow.camera.far=40,c.add(n);const t=new o.V(new o.lb(100,100),new o.Y({color:10066329,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,c.add(t);(new d.a).load("/daodao-knowledge/models/gltf/Soldier.glb",(function(e){u=e.scene,c.add(u),u.traverse((function(e){e.isMesh&&(e.castShadow=!0)})),p=new o.Ab(u),p.visible=!1,c.add(p),function(){const e=new a.GUI({width:310},l),n=e.addFolder("显示隐藏"),t=e.addFolder("动画/停止"),o=e.addFolder("暂停/单步"),i=e.addFolder("Crossfading"),d=e.addFolder("权重"),c=e.addFolder("General Speed");C={"显示模型":!0,"显示骨架":!1,"停止所有动画":k,"启动所有动画":D,"暂停/继续":W,"单步动画":T,"单步步幅时间":.05,"从走动到静止":function(){H(b,v,1)},"从静止到走动":function(){H(v,b,.5)},"从走动到跑步":function(){H(b,g,2.5)},"从跑步到走路":function(){H(g,b,5)},"使用默认间隔时间":!0,"用户设定间隔时间":3.5,"静止动画权重":0,"走路动画权重":1,"跑步动画权重":0,"时间比例":1},n.add(C,"显示模型").onChange(R),n.add(C,"显示骨架").onChange(F),t.add(C,"停止所有动画"),t.add(C,"启动所有动画"),o.add(C,"暂停/继续"),o.add(C,"单步动画"),o.add(C,"单步步幅时间",.01,.1,.001),w.push(i.add(C,"从走动到静止")),w.push(i.add(C,"从静止到走动")),w.push(i.add(C,"从走动到跑步")),w.push(i.add(C,"从跑步到走路")),i.add(C,"使用默认间隔时间"),i.add(C,"用户设定间隔时间",0,10,.01),d.add(C,"静止动画权重",0,1,.01).listen().onChange((function(e){j(v,e)})),d.add(C,"走路动画权重",0,1,.01).listen().onChange((function(e){j(b,e)})),d.add(C,"跑步动画权重",0,1,.01).listen().onChange((function(e){j(g,e)})),c.add(C,"时间比例",0,1.5,.01).onChange(M),n.open(),t.open(),o.open(),i.open(),d.open(),c.open(),w.forEach((function(e){e.classList1=e.domElement.parentElement.parentElement.classList,e.classList2=e.domElement.previousElementSibling.classList,e.setDisabled=function(){e.classList1.add("no-pointer-events"),e.classList2.add("control-disabled")},e.setEnabled=function(){e.classList1.remove("no-pointer-events"),e.classList2.remove("control-disabled")}}))}();const n=e.animations;h=new o.d(u),v=h.clipAction(n[0]),b=h.clipAction(n[3]),g=h.clipAction(n[1]),y=[v,b,g],D(),B()})),s=new o.Vb({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(l.clientWidth,l.clientHeight),s.outputEncoding=o.Wb,s.shadowMap.enabled=!0,l.appendChild(s.domElement),f=new i.a(0,l),l.appendChild(f.dom)}function R(e){u.visible=e}function F(e){p.visible=e}function M(e){h.timeScale=e}function k(){y.forEach((function(e){e.stop()}))}function D(){j(v,C["静止动画权重"]),j(b,C["走路动画权重"]),j(g,C["跑步动画权重"]),y.forEach((function(e){e.play()}))}function W(){L?(L=!1,I()):v.paused?I():y.forEach((function(e){e.paused=!0}))}function I(){y.forEach((function(e){e.paused=!1}))}function T(){I(),L=!0,A=C["单步步幅时间"]}function H(e,n,t){const o=function(e){return C["使用默认间隔时间"]?e:C["用户设定间隔时间"]}(t);L=!1,I(),e===v?z(e,n,o):function(e,n,t){h.addEventListener("loop",(function o(a){a.action===e&&(h.removeEventListener("loop",o),z(e,n,t))}))}(e,n,o)}function z(e,n,t){j(n,1),n.time=0,e.crossFadeTo(n,t,!0)}function j(e,n){e.enabled=!0,e.setEffectiveTimeScale(1),e.setEffectiveWeight(n)}function B(){requestAnimationFrame(B),E=v.getEffectiveWeight(),S=b.getEffectiveWeight(),x=g.getEffectiveWeight(),C["静止动画权重"]=E,C["走路动画权重"]=S,C["跑步动画权重"]=x,w.forEach((function(e){e.setDisabled()})),1===E&&0===S&&0===x&&w[1].setEnabled(),0===E&&1===S&&0===x&&(w[0].setEnabled(),w[2].setEnabled()),0===E&&0===S&&1===x&&w[3].setEnabled();let e=m.getDelta();L&&(e=A,A=0),h.update(e),f.update(),s.render(c,r)}var J={mounted(){P()}},V=(t(333),t(14)),G=Object(V.a)(J,(function(){var e=this._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[[e("div",{attrs:{id:"three1"}})]],2)}),[],!1,null,"27b1a72a",null);n.default=G.exports}}]);