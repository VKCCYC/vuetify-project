import{p as Z,m as U,a as j,g as G,as as ue,u as J,c as S,s as V,o as h,v as ie,A as K,z as R,B as Q,at as re,b as se,au as ce,d as ve,C as de,e as me,f as fe,n as ge,l as he,i as ye,h as z,t as X,j as we,_ as be,k as Se,av as Me,D as ke,aw as Ee,x as Te,ax as xe,E as Y,ay as Be,F as Ve,q as Ce,G as A,az as pe,a5 as Pe,ai as Re}from"./index-15a32def.js";import{u as ee}from"./VList-e4776e15.js";const He=Z({scrollable:Boolean,...U(),...j({tag:"main"})},"VMain"),Xe=G()({name:"VMain",props:He(),setup(e,s){let{slots:l}=s;const{mainStyles:u}=ue(),{ssrBootStyles:a}=ee();return J(()=>S(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,a.value,e.style]},{default:()=>{var t,v;return[e.scrollable?S("div",{class:"v-main__scroller"},[(t=l.default)==null?void 0:t.call(l)]):(v=l.default)==null?void 0:v.call(l)]}})),{}}});function Ye(e){let{rootEl:s,isSticky:l,layoutItemStyles:u}=e;const a=V(!1),t=V(0),v=h(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:ie(t.value)}:{top:u.value.top}]});K(()=>{R(l,g=>{g?window.addEventListener("scroll",M,{passive:!0}):window.removeEventListener("scroll",M)},{immediate:!0})}),Q(()=>{window.removeEventListener("scroll",M)});let b=0;function M(){const g=b>window.scrollY?"up":"down",i=s.value.getBoundingClientRect(),d=parseFloat(u.value.top??0),c=window.scrollY-Math.max(0,t.value-d),f=i.height+Math.max(t.value,d)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-d?(a.value="top",t.value=d):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+i.top-k,a.value=!0):g==="down"&&f<=0?(t.value=0,a.value="bottom"):g==="up"&&c<=0&&(k?a.value!=="top"&&(t.value=-c+k+d,a.value="top"):(t.value=i.top+c,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:v}}const De=100,Le=20;function F(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const u=F(s),a=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);s+=(a-u)*Math.abs(a),l===e.length-1&&(s*=.5)}return F(s)*1e3}function Ne(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new re(Le))).push([a.timeStamp,t])})}function l(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const v=t[0],b=[],M=[];for(const i of t){if(v[0]-i[0]>De)break;b.push({t:i[0],d:i[1].clientX}),M.push({t:i[0],d:i[1].clientY})}return{x:q(b),y:q(M),get direction(){const{x:i,y:d}=this,[c,f]=[Math.abs(i),Math.abs(d)];return c>f&&i>=0?"right":c>f&&i<=0?"left":f>c&&d>=0?"down":f>c&&d<=0?"up":_e()}}}return{addMovement:s,endTouch:l,getVelocity:u}}function _e(){throw new Error}function Ie(e){let{isActive:s,isTemporary:l,width:u,touchless:a,position:t}=e;K(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",T,{passive:!0})}),Q(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",T)});const v=h(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:M,getVelocity:g}=Ne();let i=!1;const d=V(!1),c=V(0),f=V(0);let k;function y(o,n){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:B())-(n?u.value:0)}function H(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const r=t.value==="left"?(o-f.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-o-f.value)/u.value:t.value==="top"?(o-f.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-o-f.value)/u.value:B();return n?Math.max(0,Math.min(1,r)):r}function C(o){if(a.value)return;const n=o.changedTouches[0].clientX,r=o.changedTouches[0].clientY,m=25,E=t.value==="left"?n<m:t.value==="right"?n>document.documentElement.clientWidth-m:t.value==="top"?r<m:t.value==="bottom"?r>document.documentElement.clientHeight-m:B(),x=s.value&&(t.value==="left"?n<u.value:t.value==="right"?n>document.documentElement.clientWidth-u.value:t.value==="top"?r<u.value:t.value==="bottom"?r>document.documentElement.clientHeight-u.value:B());(E||x||s.value&&l.value)&&(i=!0,k=[n,r],f.value=y(v.value?n:r,s.value),c.value=H(v.value?n:r),M(o),b(o))}function p(o){const n=o.changedTouches[0].clientX,r=o.changedTouches[0].clientY;if(i){if(!o.cancelable){i=!1;return}const E=Math.abs(n-k[0]),x=Math.abs(r-k[1]);(v.value?E>x&&E>3:x>E&&x>3)?(d.value=!0,i=!1):(v.value?x:E)>3&&(i=!1)}if(!d.value)return;o.preventDefault(),b(o);const m=H(v.value?n:r,!1);c.value=Math.max(0,Math.min(1,m)),m>1?f.value=y(v.value?n:r,!0):m<0&&(f.value=y(v.value?n:r,!1))}function T(o){if(i=!1,!d.value)return;b(o),d.value=!1;const n=g(o.changedTouches[0].identifier),r=Math.abs(n.x),m=Math.abs(n.y);(v.value?r>m&&r>400:m>r&&m>3)?s.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||B()):s.value=c.value>.5}const P=h(()=>d.value?{transform:t.value==="left"?`translateX(calc(-100% + ${c.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${c.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${c.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${c.value*u.value}px))`:B(),transition:"none"}:void 0);return{isDragging:d,dragProgress:c,dragStyles:P}}function B(){throw new Error}const We=["start","end","left","right","top","bottom"],Oe=Z({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>We.includes(e)},sticky:Boolean,...se(),...U(),...ce(),...ve(),...de(),...me(),...j({tag:"nav"}),...fe()},"VNavigationDrawer"),Ae=G()({name:"VNavigationDrawer",props:Oe(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:l,emit:u,slots:a}=s;const{isRtl:t}=ge(),{themeClasses:v}=he(e),{borderClasses:b}=ye(e),{backgroundColorClasses:M,backgroundColorStyles:g}=z(X(e,"color")),{elevationClasses:i}=we(e),{displayClasses:d,mobile:c}=be(e),{roundedClasses:f}=Se(e),k=Me(),y=ke(e,"modelValue",null,w=>!!w),{ssrBootStyles:H}=ee(),{scopeId:C}=Ee(),p=Te(),T=V(!1),P=h(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=h(()=>xe(e.location,t.value)),n=h(()=>!e.permanent&&(c.value||e.temporary)),r=h(()=>e.sticky&&!n.value&&o.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{R(T,w=>u("update:rail",!w))}),Y(()=>!e.disableResizeWatcher,()=>{R(n,w=>!e.permanent&&Re(()=>y.value=!w))}),Y(()=>!e.disableRouteWatcher&&!!k,()=>{R(k.currentRoute,()=>n.value&&(y.value=!1))}),R(()=>e.permanent,w=>{w&&(y.value=!0)}),Be(()=>{e.modelValue!=null||n.value||(y.value=e.permanent||!c.value)});const{isDragging:m,dragProgress:E,dragStyles:x}=Ie({isActive:y,isTemporary:n,width:P,touchless:X(e,"touchless"),position:o}),D=h(()=>{const w=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):P.value;return m.value?w*E.value:w}),{layoutItemStyles:L,layoutItemScrimStyles:te}=Ve({id:e.name,order:h(()=>parseInt(e.order,10)),position:o,layoutSize:D,elementSize:P,active:h(()=>y.value||m.value),disableTransitions:h(()=>m.value),absolute:h(()=>e.absolute||r.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:ae}=Ye({rootEl:p,isSticky:r,layoutItemStyles:L}),_=z(h(()=>typeof e.scrim=="string"?e.scrim:null)),ne=h(()=>({...m.value?{opacity:E.value*.2,transition:"none"}:void 0,...te.value}));Ce({VList:{bgColor:"transparent"}});function oe(){T.value=!0}function le(){T.value=!1}return J(()=>{const w=a.image||e.image;return S(Pe,null,[S(e.tag,A({ref:p,onMouseenter:oe,onMouseleave:le,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":r.value},v.value,M.value,b.value,d.value,i.value,f.value,e.class],style:[g.value,L.value,x.value,H.value,ae.value,e.style]},C,l),{default:()=>{var I,W,O,$;return[w&&S("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(I=a.image)==null?void 0:I.call(a,{image:e.image}):S("img",{src:e.image,alt:""},null)]),a.prepend&&S("div",{class:"v-navigation-drawer__prepend"},[(W=a.prepend)==null?void 0:W.call(a)]),S("div",{class:"v-navigation-drawer__content"},[(O=a.default)==null?void 0:O.call(a)]),a.append&&S("div",{class:"v-navigation-drawer__append"},[($=a.append)==null?void 0:$.call(a)])]}}),S(pe,{name:"fade-transition"},{default:()=>[n.value&&(m.value||y.value)&&!!e.scrim&&S("div",A({class:["v-navigation-drawer__scrim",_.backgroundColorClasses.value],style:[ne.value,_.backgroundColorStyles.value],onClick:()=>y.value=!1},C),null)]})])}),{isStuck:N}}});export{Ae as V,Xe as a};
