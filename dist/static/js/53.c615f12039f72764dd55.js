webpackJsonp([53],{YGLJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("vMJZ"),a={name:"setPwd",data:function(){return{username:this.$route.query.username,pwd:"",confirmPwd:""}},computed:{},mounted:function(){this.init()},methods:{init:function(){},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},submitReset:function(){var t=this;Object(n.h)({password:this.pwd,rePassword:this.confirmPwd}).then(function(e){t.$toast("Password has been reset successfully"),t.$router.push("login")}).catch(function(t){})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"head"},[s("div",[s("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),s("h1",[t._v("Reset Password")]),t._v(" "),s("div",{staticClass:"chartWrap"})]),t._v(" "),s("div",{staticClass:"center"},[s("van-field",{attrs:{type:"password",placeholder:"Enter new password","right-icon":"eye"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}}),t._v(" "),s("van-field",{attrs:{type:"password",placeholder:"Re-enter new password"},model:{value:t.confirmPwd,callback:function(e){t.confirmPwd=e},expression:"confirmPwd"}})],1),t._v(" "),s("van-button",{attrs:{type:"danger"},on:{click:t.submitReset}},[t._v("Save")])],1)},staticRenderFns:[]};var o=s("VU/8")(a,i,!1,function(t){s("yLFy")},"data-v-37a26cd6",null);e.default=o.exports},yLFy:function(t,e){}});
//# sourceMappingURL=53.c615f12039f72764dd55.js.map