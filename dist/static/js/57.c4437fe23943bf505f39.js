webpackJsonp([57],{"4MPC":function(t,s){},"o+IM":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("FWz8"),i={name:"orderDetail",data:function(){return{orderDetail:{userAddress:{},prodList:[]},orderNo:this.$route.query.orderNo}},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(e.k)({orderNo:this.orderNo}).then(function(s){t.orderDetail=s.data.result})},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},getAttributes:function(t){return t.map(function(t){return t.optionName}).join(";")},toTel:function(){this.$dialog.confirm({message:"Are you sure to dial the phone??",confirmButtonText:"confirm",cancelButtonText:"Cancel"}).then(function(){window.location.href="tel://4005255222"}).catch(function(){})},review:function(){this.$router.push({path:"reviewsOrder",query:{orderNo:this.orderNo}})},cancel:function(){var t=this;Object(e.b)({orderNo:this.orderNo}).then(function(s){t.init()})},buyAgain:function(){var t=this;this.orderDetail.prodList.forEach(function(s){t.$store.dispatch("addCart",{skuCode:s.skuCode,num:s.productQuantity}).then(function(t){})}),this.$toast("Items have been added to Cart .")},refund:function(t){this.$router.push({path:"exchange",query:{skuCode:t.skuCode,orderNo:this.orderNo}})},received:function(){var t=this;Object(e.e)({orderNo:this.orderNo}).then(function(s){t.init()})}},StringToDate:function(t){var s=Date.parse(t),a=new Date(s);if(isNaN(a)){var e=t.split("-");a=new Date(e[0],--e[1],e[2])}var i=a,r=i.getFullYear(),n=i.getMonth()+1,o=i.getDate(),c=i.getHours(),l=i.getMinutes(),v=i.getSeconds();o<10&&(d+="0");var d=o+"/";return n<10&&(d+="0"),d+=n+"/",d+=r+" ",c<10&&(d+="0"),d+=c+":",l<10&&(d+="0"),d+=l+":",v<10&&(d+="0"),d+=v},getStr:function(t){var s=t.indexOf("-");return-1!=s?t.substring(0,s-1):t}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"head"},[a("div",[a("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),a("h1",[t._v("Orders")]),t._v(" "),a("div",{staticClass:"chartWrap"},[a("a",{staticClass:"iconfont cart",on:{click:function(s){return t.$router.push("cart")}}},[t._v("  ")])])]),t._v(" "),a("div",{staticClass:"orderDetail"},[a("ul",[a("li",[a("van-cell-group",[a("van-cell",{attrs:{title:"Basic Inforation",value:t.orderDetail.orderStatus}})],1),t._v(" "),a("div",{staticClass:"basicInforation"},[a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Order No:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.orderNo))])]),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Date:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.orderDate))])]),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Payment:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.payment))])]),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Grand Total:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.grandTotal)+" AED ("+t._s(t.orderDetail.prodList.length)+"\n              Commodities)")])]),t._v(" "),a("div",{staticClass:"coat",on:{click:function(s){return t.$router.push({path:"/logistics",query:{orderNo:t.orderDetail.orderNo}})}}},[a("span",{staticClass:"title"},[t._v("Recent Logistic:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.recentLogistic)+"\n              "),a("van-icon",{attrs:{color:"#62ade7",name:"arrow"}})],1)]),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Shipment:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.shipment)+" ")])])])],1),t._v(" "),a("li",[a("van-cell-group",[a("van-cell",{attrs:{title:"Commmodities"}})],1),t._v(" "),t._l(t.orderDetail.prodList,function(s,e){return a("div",{key:e,staticClass:"commmoWrap"},[a("p",[t._v(t._s(t.orderDetail.dliverydDays))]),t._v(" "),a("div",{staticClass:"commmo"},[a("div",{staticClass:"photoWrap"},[a("img",{attrs:{src:s.img0}})]),t._v(" "),a("div",{staticClass:"information"},[a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v(t._s(s.productName))]),a("span",{staticClass:"value"},[t._v("x1")])]),t._v(" "),a("div",{staticClass:"model"},[a("span",{staticClass:"title"},[t._v(t._s(t.getAttributes(s.attributeList)))]),a("span",{staticClass:"value"},[t._v(t._s(s.refundStatus))])]),t._v(" "),a("div",{staticClass:"retreat"},[a("div",{staticClass:"title"},[a("p",{staticClass:"present"},[t._v(t._s(s.productAmount)+" AED")]),t._v(" "),a("p",{staticClass:"origin"},[t._v(t._s(s.tagPrice)+" AED")])]),t._v(" "),a("div",{staticClass:"value"},["0"!=s.canRefund?a("span",{on:{click:function(a){return t.refund(s)}}},[t._v("Refund")]):t._e()])])])])])})],2),t._v(" "),a("li",[a("van-cell-group",[a("van-cell",{attrs:{title:"Address Information"}})],1),t._v(" "),a("div",{staticClass:"siteWrap"},[a("div",{staticClass:"addressData"},[a("span",{staticClass:"surname"},[t._v(t._s(t.orderDetail.userAddress.userName))]),t._v(" "),a("span",{staticClass:"mobile"},[t._v("NO.+971 "+t._s(t.orderDetail.userAddress.mobile))]),t._v(" "),t.orderDetail.userAddress.landmark?a("span",{staticClass:"pag"},[t._v(t._s(t.orderDetail.userAddress.landmark))]):t._e()]),t._v(" "),a("div",{staticClass:"address"},[t._v("\n            Address "+t._s(t.orderDetail.userAddress.address)+"\n          ")])])],1),t._v(" "),a("li",[a("van-cell-group",[a("van-cell",{attrs:{title:"Payment Summary"}})],1),t._v(" "),a("div",{staticClass:"payment"},[a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Sub Total:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.subTotal)+"AED")])]),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Shipping:")]),a("span",{staticClass:"value"},[t._v(t._s(t.orderDetail.shipping)+"AED")])]),t._v(" "),t._e(),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Coupon:")]),a("span",{staticClass:"value"},[t._v("-"+t._s(t.orderDetail.couponAmount)+"AED")])]),t._v(" "),a("div",{staticClass:"coat"},[a("span",{staticClass:"title"},[t._v("Grand Total:")]),a("span",{staticClass:"value",staticStyle:{color:"#E33946","font-size":"14px"}},[t._v(t._s(t.orderDetail.grandTotal)+"AED")])])])],1),t._v(" "),a("li",[a("div",{staticClass:"btmWrap"},[a("div",{staticClass:"contact",on:{click:t.toTel}},[t._v("\n            Contact Us: "),a("font",[t._v("400-525-5222")])],1),t._v(" "),"Canceled"==t.orderDetail.orderStatus?a("div",{staticClass:"btn"},[a("span",{staticClass:"review",on:{click:t.review}},[t._v("Review")]),t._v(" "),a("span",{staticClass:"buyAgain",on:{click:t.buyAgain}},[t._v("Buy Again")])]):t._e(),t._v(" "),"Done"==t.orderDetail.orderStatus?a("div",{staticClass:"btn"},[a("span",{staticClass:"review",on:{click:t.review}},[t._v("Review")]),t._v(" "),a("span",{staticClass:"review",on:{click:t.myReview}},[t._v("My Reviews")]),t._v(" "),a("span",{staticClass:"buyAgain",on:{click:t.buyAgain}},[t._v("Buy Again")])]):t._e(),t._v(" "),"Transporting"==t.orderDetail.orderStatus?a("div",{staticClass:"btn"},[a("span",{staticClass:"review",on:{click:t.received}},[t._v("Received")]),t._v(" "),a("span",{staticClass:"buyAgain",on:{click:function(s){return t.$router.push({path:"/logistics",query:{orderNo:t.orderDetail.orderNo}})}}},[t._v("Logistics")])]):t._e(),t._v(" "),"Unpaid"==t.orderDetail.orderStatus?a("div",{staticClass:"btn"},[a("span",{staticClass:"review",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),a("span",{staticClass:"buyAgain",on:{click:function(s){return t.$router.push({path:"payMent",query:{orderNo:t.orderDetail.orderNo}})}}},[t._v("Pay")])]):t._e()])])])])])},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(t){a("4MPC")},"data-v-2c74723b",null);s.default=n.exports}});
//# sourceMappingURL=57.c4437fe23943bf505f39.js.map