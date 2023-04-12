(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{243:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(240);const a={type:"change"},i={type:"start"},s={type:"end"};class r extends o.u{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Sb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.R.ROTATE,MIDDLE:o.R.DOLLY,RIGHT:o.R.PAN},this.touches={ONE:o.Jb.ROTATE,TWO:o.Jb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",W),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=r.NONE},this.update=function(){const t=new o.Sb,i=(new o.rb).setFromUnitVectors(e.up,new o.Sb(0,1,0)),s=i.clone().invert(),b=new o.Sb,E=new o.rb,f=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),d.setFromVector3(t),n.autoRotate&&c===r.NONE&&L(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(d.theta+=p.theta*n.dampingFactor,d.phi+=p.phi*n.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=f:o>Math.PI&&(o-=f),g<-Math.PI?g+=f:g>Math.PI&&(g-=f),d.theta=o<=g?Math.max(o,Math.min(g,d.theta)):d.theta>(o+g)/2?Math.max(o,d.theta):Math.min(g,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=m,d.radius=Math.max(n.minDistance,Math.min(n.maxDistance,d.radius)),!0===n.enableDamping?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),t.setFromSpherical(d),t.applyQuaternion(s),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),u.set(0,0,0)),m=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-E.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),E.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",X),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",V),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",U),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",W)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=r.NONE;const l=1e-6,d=new o.Fb,p=new o.Fb;let m=1;const u=new o.Sb;let h=!1;const b=new o.Rb,E=new o.Rb,f=new o.Rb,g=new o.Rb,w=new o.Rb,y=new o.Rb,O=new o.Rb,T=new o.Rb,v=new o.Rb,P=[],R={};function A(){return Math.pow(.95,n.zoomSpeed)}function L(e){p.theta-=e}function j(e){p.phi-=e}const N=function(){const e=new o.Sb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),u.add(e)}}(),S=function(){const e=new o.Sb;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),u.add(e)}}(),k=function(){const e=new o.Sb;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),N(2*t*s/a.clientHeight,n.object.matrix),S(2*o*s/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),S(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function x(e){n.object.isPerspectiveCamera?m/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera?m*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(e){b.set(e.clientX,e.clientY)}function D(e){g.set(e.clientX,e.clientY)}function I(){if(1===P.length)b.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);b.set(e,t)}}function C(){if(1===P.length)g.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);g.set(e,t)}}function H(){const e=P[0].pageX-P[1].pageX,t=P[0].pageY-P[1].pageY,n=Math.sqrt(e*e+t*t);O.set(0,n)}function _(e){if(1==P.length)E.set(e.pageX,e.pageY);else{const t=q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;L(2*Math.PI*f.x/t.clientHeight),j(2*Math.PI*f.y/t.clientHeight),b.copy(E)}function z(e){if(1===P.length)w.set(e.pageX,e.pageY);else{const t=q(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);w.set(n,o)}y.subVectors(w,g).multiplyScalar(n.panSpeed),k(y.x,y.y),g.copy(w)}function F(e){const t=q(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);T.set(0,i),v.set(0,Math.pow(T.y/O.y,n.zoomSpeed)),x(v.y),O.copy(T)}function X(e){!1!==n.enabled&&(0===P.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",Z),n.domElement.addEventListener("pointerup",U)),function(e){P.push(e)}(e),"touch"===e.pointerType?function(e){switch(G(e),P.length){case 1:switch(n.touches.ONE){case o.Jb.ROTATE:if(!1===n.enableRotate)return;I(),c=r.TOUCH_ROTATE;break;case o.Jb.PAN:if(!1===n.enablePan)return;C(),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case o.Jb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&H(),n.enablePan&&C(),c=r.TOUCH_DOLLY_PAN;break;case o.Jb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&H(),n.enableRotate&&I(),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.R.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY)}(e),c=r.DOLLY;break;case o.R.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;D(e),c=r.PAN}else{if(!1===n.enableRotate)return;Y(e),c=r.ROTATE}break;case o.R.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Y(e),c=r.ROTATE}else{if(!1===n.enablePan)return;D(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e))}function Z(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(G(e),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;_(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&F(e),n.enablePan&&z(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&F(e),n.enableRotate&&_(e)}(e),n.update();break;default:c=r.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;L(2*Math.PI*f.x/t.clientHeight),j(2*Math.PI*f.y/t.clientHeight),b.copy(E),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY),v.subVectors(T,O),v.y>0?x(A()):v.y<0&&M(A()),O.copy(T),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){w.set(e.clientX,e.clientY),y.subVectors(w,g).multiplyScalar(n.panSpeed),k(y.x,y.y),g.copy(w),n.update()}(e)}}(e))}function U(e){!1!==n.enabled&&(e.pointerType,n.dispatchEvent(s),c=r.NONE,B(e),0===P.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",U)))}function K(e){B(e)}function V(e){!1===n.enabled||!1===n.enableZoom||c!==r.NONE&&c!==r.ROTATE||(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?M(A()):e.deltaY>0&&x(A()),n.update()}(e),n.dispatchEvent(s))}function W(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:k(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function J(e){!1!==n.enabled&&e.preventDefault()}function B(e){delete R[e.pointerId];for(let t=0;t<P.length;t++)if(P[t].pointerId==e.pointerId)return void P.splice(t,1)}function G(e){let t=R[e.pointerId];void 0===t&&(t=new o.Rb,R[e.pointerId]=t),t.set(e.pageX,e.pageY)}function q(e){const t=e.pointerId===P[0].pointerId?P[1]:P[0];return R[t.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}},366:function(e,t,n){"use strict";n.r(t);var o=n(240),a=n(243),i={data:()=>({gui:null}),mounted(){this.initScene()},beforeDestroy(){console.log("要销毁啦")},methods:{initScene(){let e,t,n;const i=!0,s=[new o.kb(new o.Sb(1,0,0),0),new o.kb(new o.Sb(0,-1,0),0),new o.kb(new o.Sb(0,0,-1),0)];function r(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),c()}function c(){n.render(t,e)}!function(){const l=document.getElementById("myThree");n=new o.Vb({antialias:!0}),n.setPixelRatio(window.devicePixelRatio),n.setSize(l.clientWidth,l.clientHeight),n.localClippingEnabled=!0,l.appendChild(n.domElement),t=new o.xb,e=new o.jb(40,l.clientWidth/l.clientHeight,1,200),e.position.set(-1.5,2.5,3);const d=new a.a(e,n.domElement);d.addEventListener("change",c),d.minDistance=1,d.maxDistance=10,d.enablePan=!1;const p=new o.A(16777215,526344,1.5);p.position.set(-1.25,1,1.25),t.add(p);const m=new o.z;for(let e=1;e<=30;e+=2){const t=new o.Eb(e/30,48,24),n=new o.X({color:(new o.p).setHSL(Math.random(),.5,.5),side:o.t,clippingPlanes:s,clipIntersection:i});m.add(new o.V(t,n))}t.add(m);const u=new o.z;u.add(new o.mb(s[0],2,16711680)),u.add(new o.mb(s[1],2,65280)),u.add(new o.mb(s[2],2,255)),u.visible=!1,t.add(u),window.addEventListener("resize",r)}(),c()}}},s=n(14),r=Object(s.a)(i,(function(){var e=this._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("最近我在学threejs，希望能够集成threejs，首先我尝试在vuepress中使用vue组件，然后在vue组件中使用three，结果如下，大成功！和普通的使用vue一样。很简单，感觉没什么好写的，来看下效果：\n")]),e("style",{attrs:{lang:"stylus",scoped:""}},[this._v("\n#myThree{\nwidth:800px;\nheight:600px;\n}\n")]),this._v(" "),[e("div",{attrs:{id:"myThree"}})],e("p")],2)}),[],!1,null,null,null);t.default=r.exports}}]);