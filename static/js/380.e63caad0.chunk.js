"use strict";(self.webpackChunkquick=self.webpackChunkquick||[]).push([[380],{910:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(8520),i=r(8547),o=r(2834);function a(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{sx:{mr:1}}),(0,o.jsx)(i.Z,{variant:"h6",component:"a",href:"/",sx:{fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"LOGO"})]})}},8380:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(4924),i=r(9867);if(!i.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!t.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var o=r(8544);function a(e){e()}function s(e){return(0,t.Gf)(e)}var c=function(){function e(e){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var r=Date.now();n.registrations.forEach((function(t,i){r-t.registeredAt>=e&&(n.finalize(t.value),n.registrations.delete(i))})),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),l=new("undefined"!==typeof FinalizationRegistry?FinalizationRegistry:c)((function(e){var n;null===(n=e.reaction)||void 0===n||n.dispose(),e.reaction=null})),u=!1;function f(){return u}var d=function(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,i,o=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)a.push(t.value)}catch(s){i={error:s}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a};function p(e){return"observer".concat(e)}var m=function(){};function h(){return new m}function x(e,n){if(void 0===n&&(n="observed"),f())return e();var r=d(i.useState(h),1)[0],o=d(i.useState(),2)[1],a=function(){return o([])},c=i.useRef(null);c.current||(c.current={reaction:null,mounted:!1,changedBeforeMount:!1});var u,m,x=c.current;if(x.reaction||(x.reaction=new t.le(p(n),(function(){x.mounted?a():x.changedBeforeMount=!0})),l.register(r,x,x)),i.useDebugValue(x.reaction,s),i.useEffect((function(){return l.unregister(x),x.mounted=!0,x.reaction?x.changedBeforeMount&&(x.changedBeforeMount=!1,a()):(x.reaction=new t.le(p(n),(function(){a()})),a()),function(){x.reaction.dispose(),x.reaction=null,x.mounted=!1,x.changedBeforeMount=!1}}),[]),x.reaction.track((function(){try{u=e()}catch(n){m=n}})),m)throw m;return u}var v="function"===typeof Symbol&&Symbol.for,w=v?Symbol.for("react.forward_ref"):"function"===typeof i.forwardRef&&(0,i.forwardRef)((function(e){return null})).$$typeof,b=v?Symbol.for("react.memo"):"function"===typeof i.memo&&(0,i.memo)((function(e){return null})).$$typeof;var g={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};var y,j;(j=o.unstable_batchedUpdates)||(j=a),(0,t.jQ)({reactionScheduler:j});y=l.finalizeAllImmediately;var Z=r(4415),S=r(910),k=r(3598),P=r(923),T=r(4964),C=r(4670),O=r(2834);var F=function(e,n){var r;if(b&&e.$$typeof===b)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(f())return e;var t=null!==(r=null===n||void 0===n?void 0:n.forwardRef)&&void 0!==r&&r,o=e,a=e.displayName||e.name;if(w&&e.$$typeof===w&&(t=!0,"function"!==typeof(o=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var s,c,l=function(e,n){return x((function(){return o(e,n)}),a)};return""!==a&&(l.displayName=a),e.contextTypes&&(l.contextTypes=e.contextTypes),t&&(l=(0,i.forwardRef)(l)),l=(0,i.memo)(l),s=e,c=l,Object.keys(s).forEach((function(e){g[e]||Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))})),l}((function(){var e=(0,C.s0)();return(0,O.jsx)(Z.YS,{noTheme:!0,header:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S.Z,{}),(0,O.jsx)(k.Z,{sx:{flexGrow:1},children:(0,O.jsxs)(P.Z,{direction:"row",children:[(0,O.jsx)(T.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/")},children:"\u9996\u9875"},1),(0,O.jsx)(T.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/tutor/html")},children:"Html"},2),(0,O.jsx)(T.Z,{sx:{my:2,color:"white",display:"block"},onClick:function(){e("/tutor/css")},children:"Css"},3)]})})]}),main:(0,O.jsx)(O.Fragment,{children:"content"}),footer:(0,O.jsx)(O.Fragment,{children:"\xa92023 footer"})})}))},4415:function(e,n,r){r.d(n,{YS:function(){return z}});var t=r(1413),i=r(9439),o=r(5987),a=r(2834);var s=r(1574),c=r(9711);var l=function(e){var n=e.content;return(0,a.jsx)(s.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"fixed",bottom:16,right:16},icon:"Theme",children:n.map((function(e,n){return(0,a.jsx)(c.Z,{sx:{fill:"parent"},icon:e.icon,tooltipTitle:e.name,onClick:function(){e.onClick&&e.onClick()}},n)}))})},u=r(4942),f=r(9867),d=r(3598),p=r(2999),m=r(2724),h=r(7705),x=r(923),v=240;function w(e){var n=e.header,r=e.sider,t=e.main,i=e.footer;return(0,a.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,a.jsx)(p.Z,{sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:(0,a.jsx)(m.Z,{children:n})}),r?(0,a.jsxs)(h.ZP,{variant:"permanent",sx:(0,u.Z)({width:v,flexShrink:0},"& .MuiDrawer-paper",{width:v,boxSizing:"border-box"}),children:[(0,a.jsx)(m.Z,{}),r]}):(0,a.jsx)(a.Fragment,{}),(0,a.jsx)(d.Z,{component:"main",sx:{flexGrow:1,p:3},children:(0,a.jsxs)(x.Z,{direction:"column",alignItems:"stretch",children:[(0,a.jsx)(m.Z,{}),(0,a.jsx)(d.Z,{children:t}),(0,a.jsx)(d.Z,{textAlign:"center",children:i})]})})]})}var b=240;function g(e){var n=e.header,r=e.sider,t=e.main;e.footer;return(0,a.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,a.jsx)(p.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(b,"px)")},ml:{sm:"".concat(b,"px")}},children:(0,a.jsx)(m.Z,{children:n})}),(0,a.jsx)(h.ZP,{variant:"permanent",sx:(0,u.Z)({width:b,flexShrink:0},"& .MuiDrawer-paper",{width:b,boxSizing:"border-box"}),children:r}),(0,a.jsxs)(d.Z,{component:"main",sx:{flexGrow:1,p:3},children:[(0,a.jsx)(m.Z,{}),t]})]})}var y=r(9346),j=r(3078),Z=r(1439),S=r(3475),k=240,P=(0,j.ZP)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var n=e.theme,r=e.open;return(0,t.Z)({flexGrow:1,padding:n.spacing(3),transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),marginLeft:"-".concat(k,"px")},r&&{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen}),marginLeft:0})})),T=(0,j.ZP)(p.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var n=e.theme,r=e.open;return(0,t.Z)({transition:n.transitions.create(["margin","width"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen})},r&&{width:"calc(100% - ".concat(k,"px)"),marginLeft:"".concat(k,"px"),transition:n.transitions.create(["margin","width"],{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen})})})),C=(0,j.ZP)("div")((function(e){var n=e.theme;return(0,t.Z)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:n.spacing(0,1)},n.mixins.toolbar)}));function O(e){var n=e.header,r=e.sider,o=e.main,s=(e.footer,f.useState(!0)),c=(0,i.Z)(s,2),l=c[0],p=c[1];return(0,a.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,a.jsx)(T,{open:l,children:(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(y.Z,{color:"inherit",onClick:function(){return p(!l)},sx:(0,t.Z)({mr:2},l&&{display:"none"}),children:(0,a.jsx)(Z.Z,{})}),n]})}),(0,a.jsxs)(h.ZP,{display:"flex","flex-basis":k,variant:"persistent",sx:(0,u.Z)({width:k},"& .MuiDrawer-paper",{width:k}),open:l,children:[(0,a.jsx)(C,{children:(0,a.jsx)(y.Z,{onClick:function(){return p(!l)},children:(0,a.jsx)(S.Z,{})})}),r]}),(0,a.jsxs)(P,{open:l,component:"main",sx:{flexGrow:1,p:3},children:[(0,a.jsx)(m.Z,{}),o]})]})}var F=["main","noTheme"];function z(e){var n=e.main,r=e.noTheme,s=(0,o.Z)(e,F),c="TemplateName",u=(0,f.useState)("clipped"),d=(0,i.Z)(u,2),p=d[0],m=d[1];return(0,f.useEffect)((function(){r||m(localStorage.getItem(c)||"clipped")}),[r]),r||(n=(0,a.jsxs)(a.Fragment,{children:[n," ",(0,a.jsx)(l,{content:[{icon:"clip",tip:"",onClick:function(){localStorage.setItem(c,"clipped"),m("clipped")}},{icon:"resp",tip:"",onClick:function(){localStorage.setItem(c,"responsive"),m("responsive")}},{icon:"perst",tip:"",onClick:function(){localStorage.setItem(c,"Persistent"),m("Persistent")}}]})]})),"clipped"===p?(0,a.jsx)(w,(0,t.Z)((0,t.Z)({},s),{},{main:n})):"responsive"===p?(0,a.jsx)(g,(0,t.Z)((0,t.Z)({},s),{},{main:n})):"Persistent"===p?(0,a.jsx)(O,(0,t.Z)((0,t.Z)({},s),{},{main:n})):void 0}}}]);
//# sourceMappingURL=380.e63caad0.chunk.js.map