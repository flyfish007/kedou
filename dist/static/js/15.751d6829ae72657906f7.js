webpackJsonp([15],{"H/gB":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("FWz8"),e={name:"logistics",data:function(){return{value:"",orderNo:this.$route.query.orderNo,logistic:{}}},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(a.h)({orderNo:this.orderNo}).then(function(s){t.logistic=s.data.result})},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.bus.$emit("goBack")},getStr:function(t){var s=t.indexOf("-");return-1!=s?t.substring(0,s-1):t}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"center"},[i("section",{staticClass:"head"},[i("div",[i("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),i("h1",[t._v("Logistics")]),t._v(" "),i("div",{staticClass:"chartWrap"},[i("a",{staticClass:"iconfont back",on:{click:function(s){return t.$router.push("/cart")}}},[t._v("  ")])])]),t._v(" "),i("div",{staticClass:"centent"},[i("div",{staticClass:"information"},[i("div",{staticClass:"coat"},[t._v("Order No: "),i("span",[t._v(t._s(t.logistic.orderNo))])]),t._v(" "),i("div",{staticClass:"coat"},[t._v("Logistics Number: "),i("span",[t._v(t._s(t.logistic.expressNo))])]),t._v(" "),i("div",{staticClass:"coat"},[t._v("Courier Services Company: "),i("span",[t._v(t._s(t.logistic.expressName))])]),t._v(" "),i("div",{staticClass:"coat"},[t._v("Estimated Delivered Time: "),i("span",[t._v(t._s(t.logistic.expectedDeliveryTime))])])]),t._v(" "),i("div",{staticClass:"steps"},[i("ul",t._l(t.logistic.logisticsInformationList,function(s,a){return i("li",[i("div",{staticClass:"content"},[i("span",{staticClass:"circle"}),t._v(" "),i("div",{staticClass:"timebar"},[i("span",[t._v(" "+t._s(s.date.split(" ")[0].substring(5,10))+" ")]),t._v(" "),i("br"),t._v(" "),i("span",{staticStyle:{"font-size":"11px"}},[t._v(" "+t._s(s.date.split(" ")[1].substring(0,5)))])]),t._v(" "),i("p",{staticClass:"txt"},[i("span",[t._v(" "+t._s("["+s.location+"] ")+t._s(s.remark))])])])])}),0)])])])},staticRenderFns:[]};var n=i("C7Lr")(e,c,!1,function(t){i("z4HE"),i("rTPk")},"data-v-7aec6d4c",null);s.default=n.exports},rTPk:function(t,s){},z4HE:function(t,s){}});
//# sourceMappingURL=15.751d6829ae72657906f7.js.map