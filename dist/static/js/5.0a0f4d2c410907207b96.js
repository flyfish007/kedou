webpackJsonp([5],{K31e:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("mvHQ"),a=i.n(n),s=i("tH3/"),o={name:"index",data:function(){return{username:"",pwd:"",tel:"",nickname:"",sex:"Man",email:"",invitationCode:"JJQ95AA",registerPwd:"",genders:["Man","Woman","-"],control:!1,useTel:!0,hide:!1,genderList:[{name:"Men"},{name:"Women"}],getCode:!1}},methods:{login:function(){var e=this;this.$store.dispatch("login",{username:this.username,password:this.pwd}).then(function(t){e.$toast(" Sign in successfully")})},register:function(){var e=this,t={nickname:this.nickname,telephone:this.useTel?this.tel:"",email:this.useTel?"":this.email,loginPassword:this.registerPwd,sex:this.genders.indexOf(this.sex)+1,invitationCode:this.invitationCode};(this.useTel?s.b:s.a)(this.username,"signup").then(function(i){e.$toast("Code send successfully"),e.$router.push({path:e.useTel?"verifyMobile":"verifyEmail",query:{type:"signup",username:e.username,extra:a()(t)}})})},facebookLogin:function(){this.$store.dispatch("thirdLogin",{type:"0"}).then(function(e){alert(a()(e))})},twitterLogin:function(){var e=this;this.$store.dispatch("thirdLogin",{type:"1"}).then(function(t){e.$toast(a()(t))})},genderSel:function(e){this.sex=e,this.control=!1,this.showGender=!1}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.control,expression:"control"}],staticClass:"mengban",on:{click:function(t){e.control=!1}}}),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"land"},[i("div",{staticStyle:{"padding-top":"5px"}},[i("van-icon",{staticClass:"van-icon van-icon-arrow-left"})],1),e._v(" "),e._m(1),e._v(" "),i("van-tabs",[i("van-tab",{attrs:{title:"Sign In"}},[i("div",{staticClass:"fromWrap"},[i("van-cell-group",[i("div",{staticClass:"userName",class:{errorShow:e.hide}},[i("van-field",{attrs:{AUTOCOMPLETE:"off",clearable:"",placeholder:"Username or Email or Phone"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),i("div",{staticClass:"passwd"},[i("p",{directives:[{name:"show",rawName:"v-show",value:e.hide,expression:"hide"}],staticClass:"errorTips"},[i("a",{staticClass:"iconfont"},[e._v("  ")]),e._v("Wrong Email Address, Please\n                check out and refill.\n              ")]),e._v(" "),i("van-field",{attrs:{AUTOCOMPLETE:"off",type:"password",placeholder:"Password"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1)]),e._v(" "),i("span",{staticClass:"forgetPwd",on:{click:function(t){return e.$router.push("resetPwd")}}},[e._v("Forget Password?")]),e._v(" "),i("van-button",{attrs:{type:"danger"},on:{click:e.login}},[e._v("Sign In")]),e._v(" "),i("div",{staticClass:"or"},[e._v("OR")]),e._v(" "),i("div",{staticClass:"facebook",on:{click:e.facebookLogin}},[i("span",{staticClass:"iconfont"},[e._v("  ")]),e._v(" Login with Facebook\n          ")]),e._v(" "),i("div",{staticClass:"twitter",on:{click:e.twitterLogin}},[i("span",{staticClass:"iconfont"},[e._v("  ")]),e._v(" Login with Twitter\n          ")]),e._v(" "),i("div",{staticClass:"privacy"},[e._v("\n            By clicking the SIGN UP button, you confirm that you accept our\n            "),i("font",[e._v("Terms of")]),e._v(" uee and "),i("font",[e._v("Privacy Policv")])],1)],1)]),e._v(" "),i("van-tab",{attrs:{title:"Sign Up"}},[i("div",{staticClass:"fromUpWrap"},[i("div",{staticClass:"personal"},[i("van-field",{staticStyle:{width:"48%","margin-right":"4%"},attrs:{placeholder:"Name"},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),e._v(" "),i("div",{staticClass:"pwdWrap",on:{click:function(t){e.control=!0}}},[i("van-field",{staticStyle:{"border-bottom":"1px solid #999999"},attrs:{disabled:"",placeholder:"Gender","right-icon":"arrow-down"},on:{click:function(t){e.showGender=!0}},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.control,expression:"control"}],staticClass:"witch"},e._l(e.genderList,function(t,n){return i("p",{key:n,staticClass:"hover",on:{click:function(i){return e.genderSel(t.name)}}},[e._v("\n                  "+e._s(t.name)+"\n                ")])}),0)],1)],1),e._v(" "),i("van-cell-group",[e.useTel?i("div",{staticClass:"telWrap"},[i("span",{staticClass:"areaCode"},[e._v("Qatar +61 "),i("a",{staticClass:"iconfont cart"},[e._v("  ")])]),e._v(" "),i("van-field",{attrs:{type:"tel"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1):e._e(),e._v(" "),e.useTel?e._e():i("van-field",{attrs:{type:"email",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),e.useTel?e._e():i("van-button",{staticClass:"switch",attrs:{type:"danger"},on:{click:function(t){e.useTel=!0}}},[e._v("Use your mobile number instead")]),e._v(" "),e.useTel?i("van-button",{staticClass:"switch",attrs:{type:"danger"},on:{click:function(t){e.useTel=!1}}},[e._v("Use your email instead")]):e._e(),e._v(" "),i("van-cell-group",[i("van-field",{attrs:{type:"password",placeholder:"Password"},model:{value:e.registerPwd,callback:function(t){e.registerPwd=t},expression:"registerPwd"}}),e._v(" "),i("div",{staticClass:"invitationCode"},[i("van-field",{attrs:{type:"text",placeholder:"Invitation Code","right-icon":"question-o"},on:{"click-right-icon":function(t){e.getCode=!0}},model:{value:e.invitationCode,callback:function(t){e.invitationCode=t},expression:"invitationCode"}})],1)],1),e._v(" "),i("van-button",{staticClass:"btm",attrs:{type:"danger"},on:{click:e.register}},[e._v("Sign Up")]),e._v(" "),i("div",{staticClass:"privacy"},[e._v("\n            By clicking the SIGN UP button, you confirm that you accept our\n            "),i("font",[e._v("Terms of")]),e._v(" uee and "),i("font",[e._v("Privacy Policv")])],1)],1)])],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.getCode,expression:"getCode"}],staticClass:"transparent"}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.getCode,expression:"getCode"}],staticClass:"getCode"},[i("div",{staticClass:"photo"},[i("div",{staticClass:"codeWrap",on:{click:function(t){e.getCode=!1}}},[e._v("\n          Get Code\n        ")]),e._v(" "),i("div",{staticClass:"deso"},[i("span",{staticClass:"iconfont back",on:{click:function(t){e.getCode=!1}}},[e._v("")])])])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bkground"},[t("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("MM0Y")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cartIcon"},[t("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("k9Vt")}})])}]};var l=i("VU/8")(o,c,!1,function(e){i("jFGj"),i("ukhv")},"data-v-60a249c2",null);t.default=l.exports},MM0Y:function(e,t,i){e.exports=i.p+"static/img/land.f7906bc.png"},jFGj:function(e,t){},k9Vt:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAYAAAB1h9JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJBRjZGMEJDNTA1ODExRTlCQjI2RjAyMTY1MTAwMDgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJBRjZGMEJENTA1ODExRTlCQjI2RjAyMTY1MTAwMDgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkFGNkYwQkE1MDU4MTFFOUJCMjZGMDIxNjUxMDAwODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkFGNkYwQkI1MDU4MTFFOUJCMjZGMDIxNjUxMDAwODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/TUgcAAAQnklEQVR42uyd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"},ukhv:function(e,t){}});
//# sourceMappingURL=5.0a0f4d2c410907207b96.js.map