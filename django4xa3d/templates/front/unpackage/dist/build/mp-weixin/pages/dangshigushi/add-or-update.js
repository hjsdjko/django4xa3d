(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dangshigushi/add-or-update"],{"65b9":function(e,n,t){"use strict";(function(e){t("f7fc");a(t("66fd"));var n=a(t("a4e5"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"9b70":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},a4e5:function(e,n,t){"use strict";t.r(n);var a=t("9b70"),r=t("ccef");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("f7ef");var s,u=t("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"9acbf072",null,!1,a["a"],s);n["default"]=o.exports},ca80:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,s){try{var u=e[i](s),o=u.value}catch(c){return void t(c)}u.done?n(o):Promise.resolve(o).then(a,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var s=e.apply(n,t);function u(e){i(s,a,r,u,o,"next",e)}function o(e){i(s,a,r,u,o,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("eab9"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{dangshibianhao:this.getUUID(),dangshifenlei:"",tupian:"",dangshijieshao:"",lishigushi:"",xiangqing:""},dangshifenleiOptions:[],dangshifenleiIndex:0,user:{},ro:{dangshibianhao:!1,dangshifenlei:!1,tupian:!1,dangshijieshao:!1,lishigushi:!1,xiangqing:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return s(a.default.mark((function r(){var i,s,u,o;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,t.$api.session(i);case 3:return s=r.sent,t.user=s.data,r.next=7,t.$api.option("dangshifenlei","dangshifenlei",{});case 7:if(s=r.sent,t.dangshifenleiOptions=s.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=17;break}return t.ruleForm.id=n.id,r.next=15,t.$api.info("dangshigushi",t.ruleForm.id);case 15:s=r.sent,t.ruleForm=s.data;case 17:if(t.cross=n.cross,!n.cross){r.next=49;break}u=e.getStorageSync("crossObj"),r.t0=a.default.keys(u);case 21:if((r.t1=r.t0()).done){r.next=49;break}if(o=r.t1.value,"dangshibianhao"!=o){r.next=27;break}return t.ruleForm.dangshibianhao=u[o],t.ro.dangshibianhao=!0,r.abrupt("continue",21);case 27:if("dangshifenlei"!=o){r.next=31;break}return t.ruleForm.dangshifenlei=u[o],t.ro.dangshifenlei=!0,r.abrupt("continue",21);case 31:if("tupian"!=o){r.next=35;break}return t.ruleForm.tupian=u[o],t.ro.tupian=!0,r.abrupt("continue",21);case 35:if("dangshijieshao"!=o){r.next=39;break}return t.ruleForm.dangshijieshao=u[o],t.ro.dangshijieshao=!0,r.abrupt("continue",21);case 39:if("lishigushi"!=o){r.next=43;break}return t.ruleForm.lishigushi=u[o],t.ro.lishigushi=!0,r.abrupt("continue",21);case 43:if("xiangqing"!=o){r.next=47;break}return t.ruleForm.xiangqing=u[o],t.ro.xiangqing=!0,r.abrupt("continue",21);case 47:r.next=21;break;case 49:t.styleChange();case 50:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},dangshifenleiChange:function(e){this.dangshifenleiIndex=e.target.value,this.ruleForm.dangshifenlei=this.dangshifenleiOptions[this.dangshifenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return s(a.default.mark((function t(){var r,i,s,u,o,c,f,d,l,g;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.cross){t.next=16;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=16;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=12;break}for(f in c)f==u&&(c[f]=o);return d=e.getStorageSync("crossTable"),t.next=10,n.$api.update("".concat(d),c);case 10:t.next=16;break;case 12:r=Number(e.getStorageSync("userid")),i=c["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!r){t.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:r,crossrefid:i},t.next=22,n.$api.list("dangshigushi",l);case 22:if(g=t.sent,!(g.data.total>=s)){t.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!n.ruleForm.id){t.next=33;break}return t.next=31,n.$api.update("dangshigushi",n.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,n.$api.add("dangshigushi",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!n.ruleForm.id){t.next=43;break}return t.next=41,n.$api.update("dangshigushi",n.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,n.$api.add("dangshigushi",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},ccef:function(e,n,t){"use strict";t.r(n);var a=t("ca80"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a},d7b6:function(e,n,t){},f7ef:function(e,n,t){"use strict";var a=t("d7b6"),r=t.n(a);r.a}},[["65b9","common/runtime","common/vendor"]]]);