import{Q as Te,aM as Be,g as ce,a2 as qe,aK as $e,m as ue,aJ as Ye,p as $,S as Ge,a as Ke,b as Me,d as Fe,u as Le,c as M,r as D,ar as q,q as fe,w as F,ai as I,aN as Ue,f as O,Z as ve,i as N,j as he,z as de,aO as Re,aP as Qe,$ as me,a0 as pe,aQ as we,y as W,al as Xe,s as Y,U as Ze,o as Je,aF as Ve,_ as et,au as tt,aR as nt,ad as ot,n as at,e as rt,t as it,ae as st,k as lt,aS as ct,af as ut,at as ft,ak as vt,K as dt,ag as mt}from"./index-CQvYIuvz.js";import{h as yt,b as gt,i as ht,j as wt,w as bt,n as xt,e as Et,o as St,V as kt,g as Ot,f as Pt,x as Ct,A as be,B as oe,C as ae,D as xe,E as Ee,y as At,u as Tt,F as Bt,M as Mt,G as Ft}from"./index-CEnD0z_g.js";class j{constructor(t){let{x:n,y:o,width:a,height:r}=t;this.x=n,this.y=o,this.width=a,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Se(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Lt(e){return Array.isArray(e)?new j({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Rt(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),o=n.transform;if(o){let a,r,i,s,u;if(o.startsWith("matrix3d("))a=o.slice(9,-1).split(/, /),r=+a[0],i=+a[5],s=+a[12],u=+a[13];else if(o.startsWith("matrix("))a=o.slice(7,-1).split(/, /),r=+a[0],i=+a[3],s=+a[4],u=+a[5];else return new j(t);const c=n.transformOrigin,d=t.x-s-(1-r)*parseFloat(c),g=t.y-u-(1-i)*parseFloat(c.slice(c.indexOf(" ")+1)),E=r?t.width/r:e.offsetWidth+1,S=i?t.height/i:e.offsetHeight+1;return new j({x:d,y:g,width:E,height:S})}else return new j(t)}function pt(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(a=>{o.onfinish=()=>{a(o)}})),o}const X=new WeakMap;function Vt(e,t){Object.keys(t).forEach(n=>{if(Te(n)){const o=Be(n),a=X.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[i,s]=r;i===o&&(e.removeEventListener(o,s),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),X.has(e)||X.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Nt(e,t){Object.keys(t).forEach(n=>{if(Te(n)){const o=Be(n),a=X.get(e);a==null||a.forEach(r=>{const[i,s]=r;i===o&&(e.removeEventListener(o,s),a.delete(r))})}else e.removeAttribute(n)})}function xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return ce()({name:n??qe($e(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...ue()},setup(o,a){let{slots:r}=a;return()=>{var i;return Ye(o.tag,{class:[e,o.class],style:o.style},(i=r.default)==null?void 0:i.call(r))}}})}function Ne(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const _t="cubic-bezier(0.4, 0, 0.2, 1)",En="cubic-bezier(0.0, 0, 0.2, 1)",Sn="cubic-bezier(0.4, 0, 1, 1)";function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Ht(e):ye(e))return e;e=e.parentElement}return document.scrollingElement}function J(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ye(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ye(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ht(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Dt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const zt=$({start:Boolean,end:Boolean,icon:Ge,image:String,text:String,...ue(),...yt(),...gt(),...ht(),...Ke(),...Me(),...wt({variant:"flat"})},"VAvatar"),kn=ce()({name:"VAvatar",props:zt(),setup(e,t){let{slots:n}=t;const{themeClasses:o}=Fe(e),{colorClasses:a,colorStyles:r,variantClasses:i}=bt(e),{densityClasses:s}=xt(e),{roundedClasses:u}=Et(e),{sizeClasses:c,sizeStyles:d}=St(e);return Le(()=>M(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},o.value,a.value,s.value,u.value,c.value,i.value,e.class],style:[r.value,d.value,e.style]},{default:()=>[n.default?M(Pt,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?M(kt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?M(Ot,{key:"icon",icon:e.icon},null):e.text,Ct(!1,"v-avatar")]})),{}}});function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Wt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ke(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:r},t)}return re({x:t.width/2,y:t.height/2},t)}const _e={static:$t,connected:Gt},jt=$({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in _e},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function qt(e,t){const n=D({}),o=D();q&&fe(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var i,s;F(()=>e.locationStrategy,r),I(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(i=e.locationStrategy(t,e,n))==null?void 0:i.updateLocation:o.value=(s=_e[e.locationStrategy](t,e,n))==null?void 0:s.updateLocation});function a(r){var i;(i=o.value)==null||i.call(o,r)}return{contentStyles:n,updateLocation:o}}function $t(){}function Yt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=Rt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Gt(e,t,n){(Array.isArray(e.target.value)||Dt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Ue(()=>{const f=be(t.location,e.isRtl.value),v=t.origin==="overlap"?f:t.origin==="auto"?oe(f):be(t.origin,e.isRtl.value);return f.side===v.side&&f.align===ae(v).align?{preferredAnchor:xe(f),preferredOrigin:xe(v)}:{preferredAnchor:f,preferredOrigin:v}}),[i,s,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>O(()=>{const v=parseFloat(t[f]);return isNaN(v)?1/0:v})),d=O(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const f=t.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const E=new ResizeObserver(()=>{g&&S()});F([e.target,e.contentEl],(f,v)=>{let[A,T]=f,[x,h]=v;x&&!Array.isArray(x)&&E.unobserve(x),A&&!Array.isArray(A)&&E.observe(A),h&&E.unobserve(h),T&&E.observe(T)},{immediate:!0}),I(()=>{E.disconnect()});function S(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const f=Lt(e.target.value),v=Yt(e.contentEl.value,e.isRtl.value),A=J(e.contentEl.value),T=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=A.reduce((k,w)=>{const m=w.getBoundingClientRect(),y=new j({x:w===document.documentElement?0:m.x,y:w===document.documentElement?0:m.y,width:w.clientWidth,height:w.clientHeight});return k?new j({x:Math.max(k.left,y.left),y:Math.max(k.top,y.top),width:Math.min(k.right,y.right)-Math.max(k.left,y.left),height:Math.min(k.bottom,y.bottom)-Math.max(k.top,y.top)}):y},void 0);x.x+=T,x.y+=T,x.width-=T*2,x.height-=T*2;let h={anchor:a.value,origin:r.value};function H(k){const w=new j(v),m=ke(k.anchor,f),y=ke(k.origin,w);let{x:p,y:L}=Wt(m,y);switch(k.anchor.side){case"top":L-=d.value[0];break;case"bottom":L+=d.value[0];break;case"left":p-=d.value[0];break;case"right":p+=d.value[0];break}switch(k.anchor.align){case"top":L-=d.value[1];break;case"bottom":L+=d.value[1];break;case"left":p-=d.value[1];break;case"right":p+=d.value[1];break}return w.x+=p,w.y+=L,w.width=Math.min(w.width,u.value),w.height=Math.min(w.height,c.value),{overflows:Se(w,x),x:p,y:L}}let R=0,P=0;const l={x:0,y:0},B={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:k,y:w,overflows:m}=H(h);R+=k,P+=w,v.x+=k,v.y+=w;{const y=Ee(h.anchor),p=m.x.before||m.x.after,L=m.y.before||m.y.after;let G=!1;if(["x","y"].forEach(C=>{if(C==="x"&&p&&!B.x||C==="y"&&L&&!B.y){const V={anchor:{...h.anchor},origin:{...h.origin}},U=C==="x"?y==="y"?ae:oe:y==="y"?oe:ae;V.anchor=U(V.anchor),V.origin=U(V.origin);const{overflows:z}=H(V);(z[C].before<=m[C].before&&z[C].after<=m[C].after||z[C].before+z[C].after<(m[C].before+m[C].after)/2)&&(h=V,G=B[C]=!0)}}),G)continue}m.x.before&&(R+=m.x.before,v.x+=m.x.before),m.x.after&&(R-=m.x.after,v.x-=m.x.after),m.y.before&&(P+=m.y.before,v.y+=m.y.before),m.y.after&&(P-=m.y.after,v.y-=m.y.after);{const y=Se(v,x);l.x=x.width-y.x.before-y.x.after,l.y=x.height-y.y.before-y.y.after,R+=y.x.before,v.x+=y.x.before,P+=y.y.before,v.y+=y.y.before}break}const ne=Ee(h.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:N(ie(P)),left:e.isRtl.value?void 0:N(ie(R)),right:e.isRtl.value?N(ie(-R)):void 0,minWidth:N(ne==="y"?Math.min(i.value,f.width):i.value),maxWidth:N(Oe(he(l.x,i.value===1/0?0:i.value,u.value))),maxHeight:N(Oe(he(l.y,s.value===1/0?0:s.value,c.value)))}),{available:l,contentBox:v}}return F(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>S()),ve(()=>{const f=S();if(!f)return;const{available:v,contentBox:A}=f;A.height>v.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Oe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let se=!0;const ee=[];function Kt(e){!se||ee.length?(ee.push(e),le()):(se=!1,e(),le())}let Pe=-1;function le(){cancelAnimationFrame(Pe),Pe=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?le():se=!0})}const Z={none:null,close:Xt,block:Zt,reposition:Jt},Ut=$({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Z}},"VOverlay-scroll-strategies");function Qt(e,t){if(!q)return;let n;de(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Re(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=Z[e.scrollStrategy])==null||o.call(Z,t,e,n)}))}),I(()=>{n==null||n.stop()})}function Xt(e){function t(n){e.isActive.value=!1}Ie(e.targetEl.value??e.contentEl.value,t)}function Zt(e,t){var i;const n=(i=e.root.value)==null?void 0:i.offsetParent,o=[...new Set([...J(e.targetEl.value,t.contained?n:void 0),...J(e.contentEl.value,t.contained?n:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(s=>ye(s)&&s)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((s,u)=>{s.style.setProperty("--v-body-scroll-x",N(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",N(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",N(a)),s.classList.add("v-overlay-scroll-blocked")}),I(()=>{o.forEach((s,u)=>{const c=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(s.style.getPropertyValue("--v-body-scroll-y")),g=s.style.scrollBehavior;s.style.scrollBehavior="auto",s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-c,s.scrollTop=-d,s.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Jt(e,t,n){let o=!1,a=-1,r=-1;function i(s){Kt(()=>{var d,g;const u=performance.now();(g=(d=e.updateLocation).value)==null||g.call(d,s),o=(performance.now()-u)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{n.run(()=>{Ie(e.targetEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),I(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Ie(e,t){const n=[document,...J(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),I(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const en=Symbol.for("vuetify:v-menu"),tn=$({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function nn(e,t){let n=()=>{};function o(i){n==null||n();const s=Number(i?e.openDelay:e.closeDelay);return new Promise(u=>{n=Qe(s,()=>{t==null||t(i),u(i)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:n,runOpenDelay:a,runCloseDelay:r}}const on=$({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...tn()},"VOverlay-activator");function an(e,t){let{isActive:n,isTop:o}=t;const a=me("useActivator"),r=D();let i=!1,s=!1,u=!0;const c=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:g,runCloseDelay:E}=nn(e,l=>{l===(e.openOnHover&&i||c.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==l&&(u=!0),n.value=l)}),S=D(),f={onClick:l=>{l.stopPropagation(),r.value=l.currentTarget||l.target,n.value||(S.value=[l.clientX,l.clientY]),n.value=!n.value},onMouseenter:l=>{var B;(B=l.sourceCapabilities)!=null&&B.firesTouchEvents||(i=!0,r.value=l.currentTarget||l.target,g())},onMouseleave:l=>{i=!1,E()},onFocus:l=>{Xe(l.target,":focus-visible")!==!1&&(s=!0,l.stopPropagation(),r.value=l.currentTarget||l.target,g())},onBlur:l=>{s=!1,l.stopPropagation(),E()}},v=O(()=>{const l={};return d.value&&(l.onClick=f.onClick),e.openOnHover&&(l.onMouseenter=f.onMouseenter,l.onMouseleave=f.onMouseleave),c.value&&(l.onFocus=f.onFocus,l.onBlur=f.onBlur),l}),A=O(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{i=!0,g()},l.onMouseleave=()=>{i=!1,E()}),c.value&&(l.onFocusin=()=>{s=!0,g()},l.onFocusout=()=>{s=!1,E()}),e.closeOnContentClick){const B=pe(en,null);l.onClick=()=>{n.value=!1,B==null||B.closeParents()}}return l}),T=O(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(i=!0,u=!1,g())},l.onMouseleave=()=>{i=!1,E()}),l});F(o,l=>{l&&(e.openOnHover&&!i&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!i))&&(n.value=!1)}),F(n,l=>{l||setTimeout(()=>{S.value=void 0})},{flush:"post"});const x=we();de(()=>{x.value&&ve(()=>{r.value=x.el})});const h=we(),H=O(()=>e.target==="cursor"&&S.value?S.value:h.value?h.el:He(e.target,a)||r.value),R=O(()=>Array.isArray(H.value)?void 0:H.value);let P;return F(()=>!!e.activator,l=>{l&&q?(P=Re(),P.run(()=>{rn(e,a,{activatorEl:r,activatorEvents:v})})):P&&P.stop()},{flush:"post",immediate:!0}),I(()=>{P==null||P.stop()}),{activatorEl:r,activatorRef:x,target:H,targetEl:R,targetRef:h,activatorEvents:v,contentEvents:A,scrimEvents:T}}function rn(e,t,n){let{activatorEl:o,activatorEvents:a}=n;F(()=>e.activator,(u,c)=>{if(c&&u!==c){const d=s(c);d&&i(d)}u&&ve(()=>r())},{immediate:!0}),F(()=>e.activatorProps,()=>{r()}),I(()=>{i()});function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Vt(u,W(a.value,c))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Nt(u,W(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=He(u,t);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function He(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function sn(){if(!q)return Y(!1);const{ssr:e}=Ze();if(e){const t=Y(!1);return Je(()=>{t.value=!0}),t}else return Y(!0)}const ln=$({eager:Boolean},"lazy");function cn(e,t){const n=Y(!1),o=O(()=>n.value||e.eager||t.value);F(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function un(){const t=me("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Ce=Symbol.for("vuetify:stack"),K=Ve([]);function fn(e,t,n){const o=me("useStack"),a=!n,r=pe(Ce,void 0),i=Ve({activeChildren:new Set});et(Ce,i);const s=Y(+t.value);fe(e,()=>{var g;const d=(g=K.at(-1))==null?void 0:g[1];s.value=d?d+10:+t.value,a&&K.push([o.uid,s.value]),r==null||r.activeChildren.add(o.uid),I(()=>{if(a){const E=tt(K).findIndex(S=>S[0]===o.uid);K.splice(E,1)}r==null||r.activeChildren.delete(o.uid)})});const u=Y(!0);a&&de(()=>{var g;const d=((g=K.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=d)});const c=O(()=>!i.activeChildren.size);return{globalTop:nt(u),localTop:c,stackStyles:O(()=>({zIndex:s.value}))}}function vn(e){return{teleportTarget:O(()=>{const n=e.value;if(n===!0||!q)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function dn(){return!0}function De(e,t,n){if(!e||ze(e,n)===!1)return!1;const o=Ne(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function ze(e,t){return(typeof t.value=="object"&&t.value.closeConditional||dn)(e)}function mn(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&De(e,t,n)&&setTimeout(()=>{ze(e,n)&&o&&o(e)},0)}function Ae(e,t){const n=Ne(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const yn={mounted(e,t){const n=a=>mn(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=De(a,e,t)};Ae(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Ae(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function gn(e){const{modelValue:t,color:n,...o}=e;return M(mt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&M("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const hn=$({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...on(),...ue(),...ot(),...ln(),...jt(),...Ut(),...Me(),...At()},"VOverlay"),On=ce()({name:"VOverlay",directives:{ClickOutside:yn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...hn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=at(e,"modelValue"),i=O({get:()=>r.value,set:b=>{b&&e.disabled||(r.value=b)}}),{teleportTarget:s}=vn(O(()=>e.attach||e.contained)),{themeClasses:u}=Fe(e),{rtlClasses:c,isRtl:d}=rt(),{hasContent:g,onAfterLeave:E}=cn(e,i),S=Tt(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:f,localTop:v,stackStyles:A}=fn(i,it(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:x,target:h,targetEl:H,targetRef:R,activatorEvents:P,contentEvents:l,scrimEvents:B}=an(e,{isActive:i,isTop:v}),{dimensionStyles:te}=st(e),ne=sn(),{scopeId:k}=un();F(()=>e.disabled,b=>{b&&(i.value=!1)});const w=D(),m=D(),y=D(),{contentStyles:p,updateLocation:L}=qt(e,{isRtl:d,contentEl:y,target:h,isActive:i});Qt(e,{root:w,contentEl:y,targetEl:H,isActive:i,updateLocation:L});function G(b){a("click:outside",b),e.persistent?Q():i.value=!1}function C(b){return i.value&&f.value&&(!e.scrim||b.target===m.value)}q&&F(i,b=>{b?window.addEventListener("keydown",V):window.removeEventListener("keydown",V)},{immediate:!0}),lt(()=>{q&&window.removeEventListener("keydown",V)});function V(b){var _,ge;b.key==="Escape"&&f.value&&(e.persistent?Q():(i.value=!1,(_=y.value)!=null&&_.contains(document.activeElement)&&((ge=T.value)==null||ge.focus())))}const U=Bt();fe(()=>e.closeOnBack,()=>{Ft(U,b=>{f.value&&i.value?(b(!1),e.persistent?Q():i.value=!1):b()})});const z=D();F(()=>i.value&&(e.absolute||e.contained)&&s.value==null,b=>{if(b){const _=It(w.value);_&&_!==document.scrollingElement&&(z.value=_.scrollTop)}});function Q(){e.noClickAnimation||y.value&&pt(y.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:_t})}function We(){a("afterEnter")}function je(){E(),a("afterLeave")}return Le(()=>{var b;return M(dt,null,[(b=n.activator)==null?void 0:b.call(n,{isActive:i.value,targetRef:R,props:W({ref:x},P.value,e.activatorProps)}),ne.value&&g.value&&M(ct,{disabled:!s.value,to:s.value},{default:()=>[M("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:N(z.value)},e.style],ref:w},k,o),[M(gn,W({color:S,modelValue:i.value&&!!e.scrim,ref:m},B.value),null),M(Mt,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterEnter:We,onAfterLeave:je},{default:()=>{var _;return[ut(M("div",W({ref:y,class:["v-overlay__content",e.contentClass],style:[te.value,p.value]},l.value,e.contentProps),[(_=n.default)==null?void 0:_.call(n,{isActive:i})]),[[ft,i.value],[vt("click-outside"),{handler:G,closeConditional:C,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:m,target:h,animateClick:Q,contentEl:y,globalTop:f,localTop:v,updateLocation:L}}});export{kn as V,pt as a,Sn as b,xn as c,En as d,en as e,On as f,Lt as g,It as h,hn as m,Rt as n,_t as s,un as u};