"use strict";(self.webpackChunkquick=self.webpackChunkquick||[]).push([[412],{7986:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(8249),i=r(890),o=r(184);function a(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{sx:{mr:1}}),(0,o.jsx)(i.Z,{variant:"h6",component:"a",href:"/",sx:{fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"})]})}},1412:function(e,n,r){r.r(n),r.d(n,{default:function(){return z}});var t=r(4098),i=r(2791);if(!i.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!t.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var o=r(4164);function a(e){e()}function c(e){return(0,t.Gf)(e)}var s=function(){function e(e){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var r=Date.now();n.registrations.forEach((function(t,i){r-t.registeredAt>=e&&(n.finalize(t.value),n.registrations.delete(i))})),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),l=new("undefined"!==typeof FinalizationRegistry?FinalizationRegistry:s)((function(e){var n;null===(n=e.reaction)||void 0===n||n.dispose(),e.reaction=null})),u=!1;function f(){return u}var d=function(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,i,o=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)a.push(t.value)}catch(c){i={error:c}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a};function p(e){return"observer".concat(e)}var m=function(){};function x(){return new m}function h(e,n){if(void 0===n&&(n="observed"),f())return e();var r=d(i.useState(x),1)[0],o=d(i.useState(),2)[1],a=function(){return o([])},s=i.useRef(null);s.current||(s.current={reaction:null,mounted:!1,changedBeforeMount:!1});var u,m,h=s.current;if(h.reaction||(h.reaction=new t.le(p(n),(function(){h.mounted?a():h.changedBeforeMount=!0})),l.register(r,h,h)),i.useDebugValue(h.reaction,c),i.useEffect((function(){return l.unregister(h),h.mounted=!0,h.reaction?h.changedBeforeMount&&(h.changedBeforeMount=!1,a()):(h.reaction=new t.le(p(n),(function(){a()})),a()),function(){h.reaction.dispose(),h.reaction=null,h.mounted=!1,h.changedBeforeMount=!1}}),[]),h.reaction.track((function(){try{u=e()}catch(n){m=n}})),m)throw m;return u}var b="function"===typeof Symbol&&Symbol.for,w=b?Symbol.for("react.forward_ref"):"function"===typeof i.forwardRef&&(0,i.forwardRef)((function(e){return null})).$$typeof,v=b?Symbol.for("react.memo"):"function"===typeof i.memo&&(0,i.memo)((function(e){return null})).$$typeof;var j={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};var y,g;(g=o.unstable_batchedUpdates)||(g=a),(0,t.jQ)({reactionScheduler:g});y=l.finalizeAllImmediately;var Z=r(8170),k=r(7986),S=r(4554),O=r(1582),C=r(6151),T=r(7689),P=r(184);var z=function(e,n){var r;if(v&&e.$$typeof===v)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(f())return e;var t=null!==(r=null===n||void 0===n?void 0:n.forwardRef)&&void 0!==r&&r,o=e,a=e.displayName||e.name;if(w&&e.$$typeof===w&&(t=!0,"function"!==typeof(o=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var c,s,l=function(e,n){return h((function(){return o(e,n)}),a)};return""!==a&&(l.displayName=a),e.contextTypes&&(l.contextTypes=e.contextTypes),t&&(l=(0,i.forwardRef)(l)),l=(0,i.memo)(l),c=e,s=l,Object.keys(c).forEach((function(e){j[e]||Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(c,e))})),l}((function(){var e=(0,T.s0)();return(0,P.jsx)(Z.YS,{noTheme:!0,header:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(k.Z,{}),(0,P.jsx)(S.Z,{sx:{flexGrow:1},children:(0,P.jsxs)(O.Z,{direction:"row",children:[(0,P.jsx)(C.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/")},children:"\u9996\u9875"},1),(0,P.jsx)(C.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/tutor/html")},children:"Html"},2),(0,P.jsx)(C.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/tutor/css")},children:"Css"},3),(0,P.jsx)(C.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/tutor/effect")},children:"Effect"},4)]})})]}),main:(0,P.jsx)(P.Fragment,{children:"content"}),footer:(0,P.jsx)(P.Fragment,{children:"\xa92023 footer"})})}))},8170:function(e,n,r){r.d(n,{YS:function(){return P}});var t=r(1413),i=r(9439),o=r(5987),a=r(184);var c=r(1161),s=r(6933);var l=function(e){var n=e.content;return(0,a.jsx)(c.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"fixed",bottom:16,right:16},icon:"Theme",children:n.map((function(e,n){return(0,a.jsx)(s.Z,{sx:{fill:"parent"},icon:e.icon,tooltipTitle:e.name,onClick:function(){e.onClick&&e.onClick()}},n)}))})},u=r(4942),f=r(2791),d=r(4554),p=r(4395),m=r(4663),x=r(3007),h=r(1582),b=240;function w(e){var n=e.header,r=e.sider,t=e.main,i=e.footer;return(0,a.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,a.jsx)(p.Z,{sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:(0,a.jsx)(m.Z,{children:n})}),r?(0,a.jsxs)(x.ZP,{variant:"permanent",sx:(0,u.Z)({width:b,flexShrink:0},"& .MuiDrawer-paper",{width:b,boxSizing:"border-box"}),children:[(0,a.jsx)(m.Z,{}),r]}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)(d.Z,{component:"main",sx:{flexGrow:1,p:3},children:(0,a.jsxs)(h.Z,{direction:"column",alignItems:"stretch",children:[(0,a.jsx)(m.Z,{}),(0,a.jsx)(d.Z,{children:t}),(0,a.jsx)(d.Z,{textAlign:"center",children:i})]})})]})}var v=240;function j(e){var n=e.header,r=e.sider,t=e.main;e.footer;return(0,a.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,a.jsx)(p.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(v,"px)")},ml:{sm:"".concat(v,"px")}},children:(0,a.jsx)(m.Z,{children:n})}),(0,a.jsx)(x.ZP,{variant:"permanent",sx:(0,u.Z)({width:v,flexShrink:0},"& .MuiDrawer-paper",{width:v,boxSizing:"border-box"}),children:r}),(0,a.jsxs)(d.Z,{component:"main",sx:{flexGrow:1,p:3},children:[(0,a.jsx)(m.Z,{}),t]})]})}var y=r(3400),g=r(6125),Z=r(8008),k=r(1009),S=r(3967),O=240;function C(e){var n=e.header,r=e.sider,o=e.main,c=(e.footer,f.useState(!0)),s=(0,i.Z)(c,2),l=s[0],b=s[1],w=(0,S.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(h.Z,{direction:"row",id:"stackroot",alignItems:"stretch",children:[(0,a.jsxs)(x.ZP,{display:"flex","flex-basis":O,variant:"persistent",sx:(0,u.Z)({width:O},"& .MuiDrawer-paper",{width:O}),open:l,unmountOnExit:!0,children:[(0,a.jsx)(h.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",sx:{height:"64px"},children:(0,a.jsx)(y.Z,{sx:{mr:"10px"},onClick:function(){return b(!l)},children:(0,a.jsx)(k.Z,{})})}),r]}),(0,a.jsx)(d.Z,{id:"box",sx:(0,t.Z)((0,t.Z)({width:"100%"},l&&{transition:w.transitions.create("margin-left",{easing:w.transitions.easing.easeOut,duration:w.transitions.duration.enteringScreen}),marginLeft:0}),!l&&{transition:w.transitions.create("margin-left",{easing:w.transitions.easing.easeOut,duration:w.transitions.duration.enteringScreen}),marginLeft:"-".concat(O,"px")}),children:(0,a.jsxs)(h.Z,{direction:"column",id:"stack",sx:{},children:[(0,a.jsx)(p.Z,{open:l,id:"appbar",position:"sticky",children:(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(g.Z,{in:!l,orientation:"horizontal",unmountOnExit:!0,children:(0,a.jsx)(y.Z,{color:"inherit",sx:{mr:2},onClick:function(){return b(!l)},children:(0,a.jsx)(Z.Z,{})})}),n]})}),(0,a.jsxs)(d.Z,{sx:{marginLeft:"20px"},children:[(0,a.jsx)(m.Z,{}),o]})]})})]})})}var T=["main","noTheme"];function P(e){var n=e.main,r=e.noTheme,c=(0,o.Z)(e,T),s="TemplateName",u=(0,f.useState)("clipped"),d=(0,i.Z)(u,2),p=d[0],m=d[1];return(0,f.useEffect)((function(){r||m(localStorage.getItem(s)||"clipped")}),[r]),r||(n=(0,a.jsxs)(a.Fragment,{children:[n," ",(0,a.jsx)(l,{content:[{icon:"clip",tip:"",onClick:function(){localStorage.setItem(s,"clipped"),m("clipped")}},{icon:"resp",tip:"",onClick:function(){localStorage.setItem(s,"responsive"),m("responsive")}},{icon:"perst",tip:"",onClick:function(){localStorage.setItem(s,"Persistent"),m("Persistent")}}]})]})),"clipped"===p?(0,a.jsx)(w,(0,t.Z)((0,t.Z)({},c),{},{main:n})):"responsive"===p?(0,a.jsx)(j,(0,t.Z)((0,t.Z)({},c),{},{main:n})):"Persistent"===p?(0,a.jsx)(C,(0,t.Z)((0,t.Z)({},c),{},{main:n})):void 0}}}]);
//# sourceMappingURL=412.24427d43.chunk.js.map