(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{3620:function(n,e,t){},"6f21":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var c=n[a](u),s=c.value}catch(o){return void t(o)}c.done?e(s):Promise.resolve(s).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function c(n){a(u,i,r,c,s,"next",n)}function s(n){a(u,i,r,c,s,"throw",n)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("851c"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{shangpinmingcheng:"",tupian:"",guige:"",shangpinxiangqing:"",price:""},user:{},ro:{shangpinmingcheng:!1,tupian:!1,guige:!1,shangpinxiangqing:!1,price:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var r,a,u,c;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("shangpinxinxi",this.ruleForm.id);case 11:a=e.sent,this.ruleForm=a.data;case 13:if(!t.cross){e.next=40;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 16:if((e.t1=e.t0()).done){e.next=40;break}if(c=e.t1.value,"shangpinmingcheng"!=c){e.next=22;break}return this.ruleForm.shangpinmingcheng=u[c],this.ro.shangpinmingcheng=!0,e.abrupt("continue",16);case 22:if("tupian"!=c){e.next=26;break}return this.ruleForm.tupian=u[c],this.ro.tupian=!0,e.abrupt("continue",16);case 26:if("guige"!=c){e.next=30;break}return this.ruleForm.guige=u[c],this.ro.guige=!0,e.abrupt("continue",16);case 30:if("shangpinxiangqing"!=c){e.next=34;break}return this.ruleForm.shangpinxiangqing=u[c],this.ro.shangpinxiangqing=!0,e.abrupt("continue",16);case 34:if("price"!=c){e.next=38;break}return this.ruleForm.price=u[c],this.ro.price=!0,e.abrupt("continue",16);case 38:e.next=16;break;case 40:this.styleChange();case 41:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.price){n.next=3;break}return this.$utils.msg("价格不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){n.next=6;break}return this.$utils.msg("价格应输入数字"),n.abrupt("return");case 6:if(!this.ruleForm.id){n.next=11;break}return n.next=9,this.$api.update("shangpinxinxi",this.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,this.$api.add("shangpinxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},"9c6f":function(n,e,t){"use strict";t.r(e);var i=t("6f21"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},a283:function(n,e,t){"use strict";(function(n){t("43cf"),t("921b");i(t("66fd"));var e=i(t("b000"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},a41d:function(n,e,t){"use strict";var i=t("3620"),r=t.n(i);r.a},b000:function(n,e,t){"use strict";t.r(e);var i=t("c020"),r=t("9c6f");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("a41d");var u,c=t("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"3f819c4e",null,!1,i["a"],u);e["default"]=s.exports},c020:function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))}},[["a283","common/runtime","common/vendor"]]]);