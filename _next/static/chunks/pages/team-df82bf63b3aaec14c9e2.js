_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"Ab+f":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n("vOnD"),i=r.c.section.withConfig({displayName:"global__Section",componentId:"a49vbg-0"})(["padding:5rem 0rem;"]),o=r.c.div.withConfig({displayName:"global__Container",componentId:"a49vbg-1"})(["margin:0px auto;@media (max-width:","){padding:0rem 2rem;}@media (min-width:","){max-width:520px;}@media (min-width:","){max-width:700px;}@media (min-width:","){max-width:900px;}@media (min-width:","){max-width:1100px;}"],(function(e){return e.theme.screen.xs}),(function(e){return e.theme.screen.xs}),(function(e){return e.theme.screen.sm}),(function(e){return e.theme.screen.md}),(function(e){return e.theme.screen.lg}))},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};function d(e){return function(t){return r.createElement(l,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,i=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,d=e.title,l=a(e,["attr","title"]);return r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:c({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),d&&r.createElement("title",null,d),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},"R/K7":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return n("Ti8R")}])},Ti8R:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),i=n("q1tI"),o=n("vOnD"),c=n("Ab+f"),a=o.c.div.withConfig({displayName:"MemberCard__Card",componentId:"sc-10ofxo8-0"})(["background:",";border:1px solid ",";border-radius:5px;padding:2rem;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);cursor:pointer;"],(function(e){return e.theme.color.background}),(function(e){return e.theme.color.border})),d=o.c.img.withConfig({displayName:"MemberCard__Image",componentId:"sc-10ofxo8-1"})(["width:90px;height:90px;border-radius:50%;"]),l=o.c.div.withConfig({displayName:"MemberCard__ImageWrapper",componentId:"sc-10ofxo8-2"})(["display:flex;justify-content:center;margin-bottom:2em;"]),s=o.c.div.withConfig({displayName:"MemberCard__Name",componentId:"sc-10ofxo8-3"})(["font-weight:700;font-size:18px;text-align:center;margin-bottom:1rem;"]),m=o.c.div.withConfig({displayName:"MemberCard__Title",componentId:"sc-10ofxo8-4"})(["color:",";font-size:18px;text-align:center;"],(function(e){return e.theme.color.subText})),u=function(e){var t=e.member,n=e.handleModalToggle,i=void 0===n?null:n;return Object(r.jsxs)(a,{onClick:function(){return i(t)},children:[Object(r.jsx)(l,{children:Object(r.jsx)(d,{src:t.profile})}),Object(r.jsx)(s,{children:t.name}),Object(r.jsx)(m,{children:t.title})]})},f=n("LjP0"),p=o.c.div.withConfig({displayName:"MemberModal__Overlay",componentId:"sc-1dic6q1-0"})(["background:rgba(0,0,0,0.8);width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:1001;"]),h=o.c.div.withConfig({displayName:"MemberModal__Card",componentId:"sc-1dic6q1-1"})(["background:",";border:1px solid ",";border-radius:5px;padding:4rem;box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1002;max-width:30rem;"],(function(e){return e.theme.color.background}),(function(e){return e.theme.color.border})),b=o.c.img.withConfig({displayName:"MemberModal__Image",componentId:"sc-1dic6q1-2"})(["width:140px;height:140px;border-radius:50%;"]),x=o.c.div.withConfig({displayName:"MemberModal__ImageWrapper",componentId:"sc-1dic6q1-3"})(["display:flex;justify-content:center;margin-bottom:2em;"]),g=o.c.div.withConfig({displayName:"MemberModal__Name",componentId:"sc-1dic6q1-4"})(["font-weight:700;font-size:25px;text-align:center;margin-bottom:1rem;"]),j=o.c.div.withConfig({displayName:"MemberModal__Title",componentId:"sc-1dic6q1-5"})(["color:",";font-size:20px;text-align:center;"],(function(e){return e.theme.color.subText})),w=o.c.div.withConfig({displayName:"MemberModal__Bio",componentId:"sc-1dic6q1-6"})(["color:",";font-size:16px;"],(function(e){return e.theme.color.subText})),_=o.c.div.withConfig({displayName:"MemberModal__Flex",componentId:"sc-1dic6q1-7"})(["display:flex;justify-content:space-around;margin-top:3rem;"]),O=o.c.div.withConfig({displayName:"MemberModal__Icon",componentId:"sc-1dic6q1-8"})(["font-size:25px;margin:1rem;display:flex;justify-content:center;align-items:center;&:hover{cursor:pointer;}"]),v=function(e){var t=e.member,n=e.handleModalToggle;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{onClick:function(){return n(null)}}),Object(r.jsxs)(h,{children:[Object(r.jsx)(x,{children:Object(r.jsx)(b,{src:t.profile})}),Object(r.jsx)(g,{children:t.name}),Object(r.jsx)(j,{children:t.title}),Object(r.jsx)(w,{children:t.bio}),Object(r.jsxs)(_,{children:[t.social.medium&&Object(r.jsx)("a",{href:t.social.medium,target:"_blank",children:Object(r.jsx)(O,{children:Object(r.jsx)(f.f,{color:"#000000"})})}),t.social.twitter&&Object(r.jsx)("a",{href:t.social.twitter,target:"_blank",children:Object(r.jsx)(O,{children:Object(r.jsx)(f.g,{color:"#55acee"})})}),t.social.github&&Object(r.jsx)("a",{href:t.social.github,target:"_blank",children:Object(r.jsx)(O,{children:Object(r.jsx)(f.c,{color:"#333"})})}),t.social.linkedin&&Object(r.jsx)("a",{href:t.social.linkedin,target:"_blank",children:Object(r.jsx)(O,{children:Object(r.jsx)(f.e,{color:"#0077b5"})})})]})]})]})},y=Object(o.c)(c.a).withConfig({displayName:"team__ContainerStyled",componentId:"sc-1ccjr8u-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:2rem;padding:2.5rem 0rem;@media (max-width:","){grid-template-columns:1fr 1fr 1fr;}@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:","){grid-template-columns:1fr;padding:2.5rem 3rem;}"],(function(e){return e.theme.screen.md}),(function(e){return e.theme.screen.sm}),(function(e){return e.theme.screen.xs}));t.default=function(){var e=Object(i.useState)([]),t=e[0],o=e[1],c=Object(i.useState)(null),a=c[0],d=c[1];n.e(19).then(n.t.bind(null,"pFiY",3)).then((function(e){o(e.default.team)}));var l=function(e){d(e)};return Object(r.jsxs)(y,{children:[a&&Object(r.jsx)(v,{member:a,handleModalToggle:l}),t.map((function(e,t){return Object(r.jsx)(u,{member:e,handleModalToggle:l},t)}))]})}}},[["R/K7",0,1,4,2]]]);