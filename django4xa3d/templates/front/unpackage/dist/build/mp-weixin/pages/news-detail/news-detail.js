(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{1317:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"596a":function(t,n,e){},"6c31":function(t,n,e){"use strict";var a=e("596a"),r=e.n(a);r.a},"817b":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,r,u,c){try{var i=t[u](c),o=i.value}catch(f){return void e(f)}i.done?n(o):Promise.resolve(o).then(a,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var c=t.apply(n,e);function i(t){u(c,a,r,i,o,"next",t)}function o(t){u(c,a,r,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{detail:{},id:""}},onLoad:function(t){var n=this;return c(a.default.mark((function e(){var r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.info("news",t.id);case 3:r=e.sent,n.detail=r.data,n.detail.content=n.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return e.stop()}}),e)})))()}};n.default=i},bbe7:function(t,n,e){"use strict";(function(t){e("f7fc");a(e("66fd"));var n=a(e("c16e"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},c16e:function(t,n,e){"use strict";e.r(n);var a=e("1317"),r=e("eeca");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("6c31");var c,i=e("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"3b1ac260",null,!1,a["a"],c);n["default"]=o.exports},eeca:function(t,n,e){"use strict";e.r(n);var a=e("817b"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a}},[["bbe7","common/runtime","common/vendor"]]]);