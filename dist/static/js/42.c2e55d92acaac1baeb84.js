webpackJsonp([42],{DH2Q:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("4YfN"),i=t.n(s),n=t("tH3/"),r=t("2bvH"),o=(t("E4LH"),{name:"addMobile",data:function(){return{username:"",accountType:this.$route.query.accountType}},computed:i()({},Object(r.b)(["user"])),mounted:function(){this.init()},methods:{init:function(){},isEdit:function(){return!!(1==this.accountType&&this.user.email||2==this.accountType&&this.user.mobile)},changeSort:function(e){this.sortValue=e,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},applyEdit:function(){var e=this;this.$validator.validateAll().then(function(a){if(a){var t=1==e.accountType?n.a:n.b,s=1==e.accountType?"updateEmail":"reMobile";t(e.username,s).then(function(a){e.$toast("Code send successfully"),e.$router.push({path:"verifyCode",query:{username:e.username,type:s,accountType:e.accountType}})})}})}}}),c={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("section",{staticClass:"head"},[s("div",[s("a",{staticClass:"iconfont back",on:{click:e.goBack}},[e._v("  ")])]),e._v(" "),s("h1",[e._v(e._s(e.isEdit()?"Edit":"Add")+" "+e._s(1==e.accountType?"Email":"Mobile"))]),e._v(" "),s("div",{staticClass:"chartWrap"})]),e._v(" "),s("div",{staticClass:"centerWrap"},[s("div",{staticClass:"center"},[e.isEdit()?s("div",{staticClass:"enterEamil"},[e._v("\n                  Enter the "+e._s(1==e.accountType?"Email address":"Mobile ")+" you want to add. We will send you a code to add this "+e._s(1==e.accountType?"Email address":"Mobile ")+" to your acount\n              ")]):e._e(),e._v(" "),e.isEdit()?s("p",{staticStyle:{color:"#666666"}},[e._v("Old Email Address")]):e._e(),e._v(" "),e.isEdit()?s("span",{staticClass:"title"},[e._v(e._s(1==e.accountType?"":"AE +")+e._s(1==e.accountType?e.user.email:e.user.mobile))]):e._e(),e._v(" "),s("div",{staticClass:"emailWrap"},[1==e.accountType?s("img",{attrs:{src:t("qA3x")}}):e._e(),e._v(" "),2==e.accountType?s("span",[e._v("AE +97 "),s("a",{staticClass:"iconfont back"},[e._v("  ")])]):e._e(),e._v(" "),1==e.accountType?s("van-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{placeholder:"Enter New Email Address",name:"email"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}):s("van-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|mobile",expression:"'required|mobile'"}],attrs:{placeholder:"Enter New Mobile",name:"mobile"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}})],1),e._v(" "),1==e.accountType?s("font",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("email")))]):s("font",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("mobile"),expression:"errors.has('mobile')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("mobile")))]),e._v(" "),e.isEdit()?e._e():s("div",{staticClass:"sada"},[e._v("\n                We will send a code to the New "+e._s(1==e.accountType?"Email":"Mobile")+" above, please enter the code next.\n            ")]),e._v(" "),s("van-button",{attrs:{type:"danger"},on:{click:e.applyEdit}},[e._v("Send")])],1)])])},staticRenderFns:[]};var l=t("C7Lr")(o,c,!1,function(e){t("qc72")},"data-v-710771b4",null);a.default=l.exports},qc72:function(e,a){}});
//# sourceMappingURL=42.c2e55d92acaac1baeb84.js.map