webpackJsonp([28],{"3TCe":function(e,t){},SmYS:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("tH3/"),a=i("vMJZ"),n=i("FWz8"),o=i("E4LH"),r={name:"verifyMobile",data:function(){return{btnText:"",title:"",username:this.$route.query.username,type:this.$route.query.type,accountType:this.$route.query.accountType,validateCode:""}},computed:{},mounted:function(){this.init()},methods:{init:function(){switch(this.type){case"forget":case"register":case"updateEmail":case"reMobile":case"codMobile":this.btnText="Verify";break;default:this.btnText="Sign In"}1==this.accountType?this.title="Verify Email":this.title="Verify mobile number"},changeSort:function(e){this.sortValue=e,this.sortVisible=!1},goBack:function(){this.bus.$emit("goBack")},submitSms:function(){var e=this;if(""==this.validateCode||void 0==this.validateCode)return this.$toast(" Verification code cannot be empty"),!1;if(!Object(o.a)(this.validateCode))return this.$toast(" Verification code must be 4 digits"),!1;if("updateEmail"==this.type||"reMobile"==this.type||"codMobile"==this.type)switch(this.type){case"updateEmail":Object(a.q)({email:this.username,verificationCode:this.validateCode}).then(function(t){e.$toast(" Add Email successfully"),e.$router.go(-2)});break;case"reMobile":Object(a.s)({telephone:this.username,verificationCode:this.validateCode}).then(function(t){e.$toast(" Add Mobile successfully"),e.$router.go(-2)});break;case"codMobile":this.codPay()}else this.verifyCode().then(function(t){switch(e.type){case"forget":e.$router.push({path:"setPwd",query:{username:e.username}});break;case"register":e.register()}})},sendSms:function(){var e=this;(1==this.accountType?s.a:s.b)(this.username,this.type).then(function(t){e.$toast("Code send successfully")})},verifyCode:function(){return Object(s.c)({codeType:this.type,accountType:this.accountType,validateCode:this.validateCode,account:this.username})},register:function(){var e=this,t=JSON.parse(this.$route.query.extra);this.$store.dispatch("register",t).then(function(t){e.$toast(" Sign up successfully"),e.$router.push("/login")})},codPay:function(){var e=this,t=JSON.parse(this.$route.query.extra);t.tel=this.username,t.validateCode=this.validateCode,Object(n.d)(t).then(function(i){e.$router.push({path:"paySuccessful",query:{orderNo:t.orderNo}})})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",{staticClass:"head"},[s("div",[s("a",{staticClass:"iconfont back",on:{click:e.goBack}},[e._v("  ")])]),e._v(" "),s("h1",[e._v(e._s(e.title))]),e._v(" "),s("div",{staticClass:"chartWrap"})]),e._v(" "),s("div",{staticClass:"centerWrap"},[s("div",{staticClass:"center"},[s("span",{staticClass:"title"},[e._v(e._s(2==e.accountType?"AE +971 ":"")+" "+e._s(e.username)+"\n        "),"codMobile"!=e.type?s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.$router.go("-1")}}},[e._v("(Change)")]):e._e()]),e._v(" "),s("p",[e._v("\n        A text with a code has been sent to the number above, please enter the\n        code below.\n      ")]),e._v(" "),s("div",{staticClass:"emailWrap"},[s("img",{attrs:{src:i("qA3x")}}),e._v(" "),s("van-field",{attrs:{placeholder:"Enter Verify Code",type:"number",clearable:""},model:{value:e.validateCode,callback:function(t){e.validateCode=t},expression:"validateCode"}})],1),e._v(" "),s("van-button",{attrs:{type:"danger"},on:{click:e.submitSms}},[e._v(e._s(e.btnText))]),e._v(" "),s("span",{staticClass:"again"},[e._v("Didn't receive the code ?\n        "),s("a",{attrs:{href:"javascript:void(0)"},on:{click:e.sendSms}},[e._v("(Resend Code)")])])],1)])])},staticRenderFns:[]};var u=i("C7Lr")(r,c,!1,function(e){i("3TCe")},"data-v-f3a81f88",null);t.default=u.exports}});
//# sourceMappingURL=28.58a54278b62939e55b0a.js.map