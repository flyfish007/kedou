webpackJsonp([17],{cNLH:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n("vMJZ"),e={name:"fillInvitation",data:function(){return{invitationCode:this.$route.query.invitationCode||""}},computed:{},mounted:function(){this.init()},methods:{init:function(){},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},submitSignIn:function(){var t=this;Object(a.a)({invitationCode:this.invitationCode}).then(function(i){t.$router.push("/")})}}},o={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("section",{staticClass:"head"},[n("div",[n("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),n("h1",[t._v("Invitation Code")]),t._v(" "),n("div",{staticClass:"chartWrap"})]),t._v(" "),n("div",{staticClass:"centerWrap"},[n("div",{staticClass:"center"},[n("van-cell-group",[n("van-field",{attrs:{placeholder:"Enter Invitation Code","left-icon":"contact","right-icon":"question-o"},model:{value:t.invitationCode,callback:function(i){t.invitationCode=i},expression:"invitationCode"}})],1),t._v(" "),n("div",{staticClass:"getInvitation"},[n("a",{on:{click:function(i){t.$router.push({path:"map",query:{type:1,data:JSON.stringify(t.from)}})}}},[t._v("Get an Invitation Code")])]),t._v(" "),n("van-button",{attrs:{type:"danger"},on:{click:t.submitSignIn}},[t._v("Sigh In")])],1)])])},staticRenderFns:[]};var c=n("C7Lr")(e,o,!1,function(t){n("hcfQ"),n("hbkV")},"data-v-4a4ca80f",null);i.default=c.exports},hbkV:function(t,i){},hcfQ:function(t,i){}});
//# sourceMappingURL=17.e243ab0f499827d711bd.js.map