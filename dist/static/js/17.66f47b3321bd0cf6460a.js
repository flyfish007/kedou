webpackJsonp([17],{RN0F:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("4YfN"),i=n.n(o),a=n("Llv5"),s=n("2bvH"),c={name:"becomeVip",data:function(){return{value:"",active:0,myStore:""}},computed:i()({},Object(s.b)(["user"])),mounted:function(){this.init()},methods:{init:function(){var t=this;this.user&&Object(a.c)().then(function(e){t.myStore=e.data.result})},become:function(){this.myStore?this.$toast("The data has been submitted, please do not submit again"):this.$router.push("becomeSeller")},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.bus.$emit("goBack")},confirm:function(){this.$dialog.confirm({message:"Confirm to dial our service<br>NO.+971 988888888",confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){window.location.href="tel:971-988888888"})}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"bkground"},[o("section",{staticClass:"head"},[o("div",[o("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),o("h1",[t._v("Become VIP")]),t._v(" "),o("div",{staticClass:"chartWrap"},[o("span",{staticClass:"iconfont cart",on:{click:t.confirm}},[t._v("  ")])])])]),t._v(" "),o("div",{staticClass:"center"},[o("img",{attrs:{src:n("i3zI")}}),t._v(" "),o("div",{staticClass:"describe"},[o("p",[t._v('1. What is "Shopeone VIP"')]),t._v(" "),o("span",[t._v('\n                "Shopeone VIP" are special customers who can buy items with\n                 "VIP Price" which is much cheaper than ordinary users. What\'s more, VIP can earn\n                 commission by sharing your own "Invitation Code".\n            ')]),t._v(" "),o("p",[t._v('2. How to become a "Shopeone VIP"')]),t._v(" "),o("span",[t._v("\n                One way is that all the last 30 days of your or\n                ders' grand total reaches 4999 €. Then you'll\n                becom a \"Shopeone VIP\" automatically in the next 30 days. You don't need to submit anything.\n            ")]),t._v(" "),o("span",{staticClass:"become"},[t._v("\n                  The other way is that if you have a physical store, you can click\n                  "),o("i",{staticStyle:{"text-decoration":"underline"},on:{click:function(e){return t.become()}}},[t._v("Become Cooperative VIP")]),t._v("\n                  . After you finishing profile submitting, we'll cantact you as soon as possible.\n            ")])])])])},staticRenderFns:[]};var u=n("C7Lr")(c,r,!1,function(t){n("uL62")},"data-v-6f719429",null);e.default=u.exports},i3zI:function(t,e,n){t.exports=n.p+"static/img/shopeone.047ed41.png"},uL62:function(t,e){}});
//# sourceMappingURL=17.66f47b3321bd0cf6460a.js.map