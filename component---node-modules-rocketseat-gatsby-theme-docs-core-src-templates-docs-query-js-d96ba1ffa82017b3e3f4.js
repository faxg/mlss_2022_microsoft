(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[52],{76251:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=r(67294),o=r(92102),i=r(24276),l=r(67940),s=r(1597),a=r(42775),u=r(6771);var p=(0,u.Z)("section",{target:"e1jikabl1"})({name:"ns1hxi",styles:"display:flex;justify-content:space-between;align-items:center;padding:48px 0;width:100%;@media (max-width: 780px){flex-direction:column;}"}),c=(0,u.Z)("div",{target:"e1jikabl0"})("transition:all 200ms;",(function(t){return!t.isLeft&&"margin-left: auto;"})," a{display:flex;text-decoration:none;justify-content:center;align-items:center;width:100%;height:100%;svg{width:25px;height:25px;color:",(function(t){return t.theme.colors.text}),";",(function(t){return t.isLeft?"margin-right: 16px":"margin-left: 16px"}),";}p{letter-spacing:0.142em;text-transform:uppercase;font-size:12px;margin:0;color:",(function(t){return t.theme.colors.text}),";}h3{color:",(function(t){return t.theme.colors.text}),";border:none;margin:0;padding:0;font-size:16px;}}&:hover{opacity:0.8;a svg{opacity:0.8;}}@media (max-width: 780px){width:100%;",(function(t){return t.isLeft&&"margin-bottom: 16px"}),";a{justify-content:",(function(t){return t.isLeft?"flex-start":"flex-end"}),";}}"),f=r(23431);function d(t){var e=t.prev,r=t.next;return(0,f.tZ)(p,null,e&&(0,f.tZ)(c,{isLeft:!0},(0,f.tZ)(s.Link,{to:e.link},(0,f.tZ)(a.sG8,null),(0,f.tZ)("div",null,(0,f.tZ)("p",null,"Prev"),(0,f.tZ)("h3",null,e.label)))),r&&(0,f.tZ)(c,null,(0,f.tZ)(s.Link,{to:r.link},(0,f.tZ)("div",null,(0,f.tZ)("p",null,"Next"),(0,f.tZ)("h3",null,r.label)),(0,f.tZ)(a.AeI,null))))}d.defaultProps={prev:null,next:null};var x=r(26149);function y(t){var e=t.repositoryEditUrl,r=t.repositoryProvider,n=(0,x.a)();return e?(0,f.tZ)("a",{href:e,target:"_blank",rel:"noopener noreferrer",css:(0,f.iv)("display:flex;align-items:center;text-decoration:none;margin-top:48px;color:",n.colors.text,";opacity:0.8;font-size:14px;font-weight:normal;","")},(0,f.tZ)(a.zmo,{style:{marginRight:"5px"}}),"Edit this page on ",r):null}function m(t){var e=t.mdx,r=t.pageContext,s=r.prev,a=r.next,u=r.repositoryEditUrl,p=r.repositoryProvider,c=e.frontmatter,x=c.title,m=c.description,g=c.image,v=c.disableTableOfContents,b=e.headings,h=e.body,Z=e.fields.slug;return(0,f.tZ)(n.Fragment,null,(0,f.tZ)(l.Z,{title:x,description:m,slug:Z,image:g}),(0,f.tZ)(i.Z,{disableTableOfContents:v,title:x,headings:b},(0,f.tZ)(o.MDXRenderer,null,h),(0,f.tZ)(y,{repositoryEditUrl:u,repositoryProvider:p}),(0,f.tZ)(d,{prev:s,next:a})))}y.defaultProps={repositoryEditUrl:null,repositoryProvider:null};var g=function(t){var e=t.data.mdx,r=t.pageContext;return(0,f.tZ)(m,{mdx:e,pageContext:r})}},92102:function(t,e,r){var n=r(92632);t.exports={MDXRenderer:n}},92632:function(t,e,r){var n=r(3515),o=r(861),i=r(38416),l=r(7071),s=["scope","children"];function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r(67294),c=r(64983).mdx,f=r(76948).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=l(t,s),a=f(e),d=p.useMemo((function(){if(!r)return null;var t=u({React:p,mdx:c},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,e]);return p.createElement(d,u({},i))}},63405:function(t,e,r){var n=r(73897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,r){var n=r(6015),o=r(69617);function i(e,r,l){return o()?(t.exports=i=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},69617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(63405),o=r(79498),i=r(86116),l=r(42281);t.exports=function(t){return n(t)||o(t)||i(t)||l()},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-docs-query-js-d96ba1ffa82017b3e3f4.js.map