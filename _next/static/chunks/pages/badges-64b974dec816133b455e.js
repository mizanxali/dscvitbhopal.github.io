_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"Ab+f":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n("vOnD"),o=r.c.section.withConfig({displayName:"global__Section",componentId:"a49vbg-0"})(["padding:5rem 0rem;"]),i=r.c.div.withConfig({displayName:"global__Container",componentId:"a49vbg-1"})(["margin:0px auto;@media (max-width:","){padding:0rem 2rem;}@media (min-width:","){max-width:520px;}@media (min-width:","){max-width:700px;}@media (min-width:","){max-width:900px;}@media (min-width:","){max-width:1100px;}"],(function(e){return e.theme.screen.xs}),(function(e){return e.theme.screen.xs}),(function(e){return e.theme.screen.sm}),(function(e){return e.theme.screen.md}),(function(e){return e.theme.screen.lg}))},IVUm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/badges",function(){return n("gt8p")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),c=n("elyg"),a=n("nOHt"),u=n("vNVm"),d={};function s(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),l=f.href,p=f.as,m=e.children,h=e.replace,g=e.shallow,b=e.scroll,v=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var w=i.Children.only(m),y=w&&"object"===typeof w&&w.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),O=r(x,2),j=O[0],_=O[1],C=i.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);(0,i.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(l),r="undefined"!==typeof v?v:n&&n.locale,o=d[l+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,l,p,{locale:r})}),[p,l,_,v,t,n]);var E={ref:C,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,p,h,g,b,v)},onMouseEnter:function(e){(0,c.isLocalURL)(l)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),s(n,l,p,{priority:!0}))}};return(e.passHref||"a"===w.type&&!("href"in w.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof v?v:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(w,E)};t.default=f},gt8p:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("nKUr"),i=n("q1tI"),c=n("vOnD"),a=n("Ab+f"),u=n("YFqc"),d=n.n(u),s=c.c.div.withConfig({displayName:"BadgeCard__Card",componentId:"qn0b8v-0"})(["background:",";border:1px solid ",";border-radius:5px;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);padding:1rem;cursor:pointer;display:flex;align-items:center;"],(function(e){return e.theme.color.background}),(function(e){return e.theme.color.border})),f=c.c.img.withConfig({displayName:"BadgeCard__Image",componentId:"qn0b8v-1"})(["width:80px;height:80px;object-fit:contain;margin-right:2rem;"]),l=c.c.div.withConfig({displayName:"BadgeCard__Name",componentId:"qn0b8v-2"})(["font-weight:700;font-size:20px;text-align:center;"]),p=function(e){var t=e.badge,n=void 0===t?"":t,r=e.name,i=void 0===r?"":r,c=e.id,a=void 0===c?"":c;return n?Object(o.jsx)(d.a,{href:"badges/".concat(a),children:Object(o.jsxs)(s,{children:[Object(o.jsx)(f,{src:n}),Object(o.jsx)(l,{children:i})]})}):Object(o.jsx)(s,{children:Object(o.jsx)(l,{children:i})})};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=Object(c.c)(a.a).withConfig({displayName:"badges__ContainerStyled",componentId:"agh3qm-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;padding:2.5rem 0rem;@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:","){grid-template-columns:1fr;}@media (max-width:","){padding:2.5rem 3rem;}"],(function(e){return e.theme.screen.md}),(function(e){return e.theme.screen.sm}),(function(e){return e.theme.screen.xs}));t.default=function(){var e=Object(i.useState)([]),t=e[0],c=e[1];return n.e(17).then(n.t.bind(null,"OTzg",3)).then((function(e){c(e.default.badges)})),Object(o.jsx)(h,{children:t.map((function(e){return Object(o.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.id)}))})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=(0,i.useRef)(),d=(0,i.useState)(!1),s=r(d,2),f=s[0],l=s[1],p=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){i.unobserve(e),0===c.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[n,t,f]);return(0,i.useEffect)((function(){a||f||(0,c.default)((function(){return l(!0)}))}),[f]),[p,f]};var i=n("q1tI"),c=o(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var u=new Map}},[["IVUm",0,1,2,3]]]);