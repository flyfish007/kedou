webpackJsonp([16],{Ghgx:function(e,a){},Ml0Q:function(e,a){},PBLO:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var c=t("cKxd"),r={name:"addBankcard",data:function(){return{checked:!1,card:{cardNum:"",name:"",termValidity:"",securityCode:""}}},computed:{},mounted:function(){this.init()},methods:{init:function(){},changeSort:function(e){this.sortValue=e,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},submitForm:function(){var e=this;Object(c.a)(this.card).then(function(a){console.log(1234),e.$toast("Card added successfully"),e.$router.push("myBankcards")})}}},d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"center"},[t("section",{staticClass:"head"},[t("div",[t("a",{staticClass:"iconfont back",on:{click:e.goBack}},[e._v("  ")])]),e._v(" "),t("h1",[e._v("Add Bank Card")]),e._v(" "),t("div",{staticClass:"chartWrap"})]),e._v(" "),t("section",{staticClass:"inputBox"},[t("van-cell-group",[t("van-field",{attrs:{reuired:"true",placeholder:"Card NO."},model:{value:e.card.cardNum,callback:function(a){e.$set(e.card,"cardNum",a)},expression:"card.cardNum"}}),e._v(" "),t("van-field",{attrs:{reuired:"true",placeholder:"Term of Validity(Month-Year)"},model:{value:e.card.termValidity,callback:function(a){e.$set(e.card,"termValidity",a)},expression:"card.termValidity"}}),e._v(" "),t("van-field",{attrs:{reuired:"true",placeholder:"CSC / CVV / CVC (3 or 4-digit on the card's back)"},model:{value:e.card.securityCode,callback:function(a){e.$set(e.card,"securityCode",a)},expression:"card.securityCode"}}),e._v(" "),t("van-field",{attrs:{reuired:"true",placeholder:"Name on Card"},model:{value:e.card.name,callback:function(a){e.$set(e.card,"name",a)},expression:"card.name"}})],1),e._v(" "),t("div",{staticClass:"choice"},[t("van-checkbox",{attrs:{"checked-color":"#e33946"},model:{value:e.checked,callback:function(a){e.checked=a},expression:"checked"}},[e._v("Save card NO.(Not include CSC / CVV / CVC )")])],1)],1),e._v(" "),t("section",{staticClass:"btnWrap"},[t("van-button",{attrs:{type:"danger"},on:{click:e.submitForm}},[e._v("Add")])],1)])},staticRenderFns:[]};var n=t("VU/8")(r,d,!1,function(e){t("Ghgx"),t("Ml0Q")},"data-v-68248cfc",null);a.default=n.exports}});
//# sourceMappingURL=16.a6e6453d747ddd556f4b.js.map