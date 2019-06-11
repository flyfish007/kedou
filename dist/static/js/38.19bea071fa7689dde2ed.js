webpackJsonp([38],{ojUx:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("Dd8w"),a=i.n(e),n=i("FWz8"),o=i("NYxO"),c={name:"orderSummary",data:function(){return{grandTotal:"",selectIndex:[],couponAmount:0,ids:JSON.parse(this.$route.query.ids),isVIP:1,cuponShow:!1,orderData:{},chooseNum:"",couponList:[],hisCouponList:[],initCouponList:[],noAdress:!0,initProList:[]}},computed:a()({},Object(o.b)(["selectAddress"])),mounted:function(){this.init()},methods:{init:function(){var s=this;Object(n.c)(this.ids).then(function(t){s.orderData=t.data.result,s.initProList=t.data.result.shipmentList,s.initProList.length>0&&s.initProList.forEach(function(s){s.timeVal=0,s.timeLabel=s.deliveryTimeList[0]}),s.couponList=t.data.result.couponList.filter(function(s){return 0!=s.canUse}),s.couponList.length>0&&(s.selectIndex.push(0),s.couponAmount=s.couponList[0].couponAmount,s.chooseNum=1),s.calTotal(),s.orderData.address&&(s.noAdress=!1),s.selectAddress&&(s.orderData.addres=s.selectAddress)})},initAddress:function(){getAddress().then(function(s){})},initProData:function(){},selectCoupon:function(s,t){if(0==s.use)return!1;this.selectIndex.indexOf(t)>-1?this.selectIndex.splice(0,1):(this.selectIndex.splice(0,1),this.selectIndex.push(t)),s.check=!s.check,this.calTotal()},changeTime:function(s,t,i){this.$set(s,"timeVal",i),this.$set(s,"timeLabel",t),this.$set(s,"timeShow",!1)},counponShow:function(){0==this.couponList.length||(this.cuponShow=!0)},calTotal:function(){var s=1*this.orderData.subTotal+1*this.orderData.shipping-(1*this.couponAmount||0);this.grandTotal=s>0?s.toFixed(2):"0.01"},confirmCoupon:function(){var s=this;this.chooseNum=0,this.couponAmount=0,this.selectIndex.length>0&&this.selectIndex.forEach(function(t){s.chooseNum++,s.couponAmount+=1*s.couponList[t].couponAmount}),this.cuponShow=!1,this.calTotal()},goBack:function(){this.$router.back(-1)},addressGo:function(){this.$router.push("/addAddress?action=select")},getAttributes:function(s){return s.map(function(s){return s.optionName}).join(";")},showAnyTime:function(s){this.$set(s,"timeShow",!s.timeShow)},payMentGo:function(){var s=this;if(!this.orderData.address)return this.$toast("Add address"),!1;var t=[];this.initProList.forEach(function(s){t.push(s.shipmentFrom+"~"+s.timeLabel)});var i={grandTotal:this.grandTotal,couponId:this.selectIndex.length>0?this.couponList[this.selectIndex[0]].couponId:"",ids:this.ids.join(","),addressId:this.orderData.address.addressId,expectedDeliveryTime:t.join(",")};Object(n.l)(i).then(function(t){s.$router.push({path:"/payMent",query:t.data.result})})}}},r={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"mainwrap"},[i("section",{staticClass:"head"},[i("div",[i("a",{staticClass:"iconfont back",on:{click:s.goBack}},[s._v("  ")])]),s._v(" "),i("h1",[s._v("Order Summary")]),s._v(" "),i("div",{staticClass:"chartWrap"})]),s._v(" "),i("section",{staticClass:"orderSummaryWrap"},[i("div",{staticClass:"address item-box"},[i("p",{staticClass:"tittle"},[s._v("Delivery Address")]),s._v(" "),s.noAdress?s._e():[i("p",{staticClass:"user",on:{click:function(t){return s.redirect("/myAddress?action=select")}}},[i("span",[s._v(" "+s._s(s.orderData.address.userName)+" ")]),s._v(" "),i("span",[s._v(" NO.+971 "+s._s(s.orderData.address.mobile)+" ")]),s._v(" "),i("span",{staticClass:"tag"},[s._v(" Home ")])])],s._v(" "),i("div",{staticClass:"box-content",on:{click:function(t){return s.redirect("/myAddress?action=select")}}},[s.noAdress?s._e():i("div",[i("p",{staticClass:"two-line-ellipsis"},[s._v(s._s(s.orderData.address.address))])]),s._v(" "),s.noAdress?i("div",{on:{click:s.addressGo}},[i("span",{staticClass:"iconfont"},[s._v("  ")]),s._v(" "),i("span",[s._v(" Add shipping address ")])]):s._e(),s._v(" "),i("div",{staticClass:"rightChange",class:{rightArrow:s.noAdress}},[i("span",{staticClass:"iconfont"},[s._v("\n            "+s._s(s.noAdress?"":""))])])])],2),s._v(" "),i("section",{staticClass:"proList"},s._l(s.initProList,function(t,e){return i("div",{key:e,staticClass:"item-box"},[i("div",{staticClass:"tittleWrap"},[i("p",{staticClass:"tittle"},[s._v("\n            "+s._s(t.shipmentTitle)+"\n          ")]),s._v(" "),i("div",{staticClass:"deliveryTime"},[i("p",{staticClass:"red"},[s._v("\n              delivered in "+s._s(t.deliveredDays)+" business days\n            ")]),s._v(" "),i("div",{staticClass:"chooseTime"},[i("p",{staticClass:"outer",on:{click:function(i){return s.showAnyTime(t,e)}}},[i("span",[s._v("\n                  "+s._s(t.timeLabel?t.timeLabel:"Preferred delivery time")+"\n                ")]),s._v(" "),i("span",{staticClass:"iconfont arrowDown"},[s._v("  ")])]),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.timeShow,expression:"item.timeShow"}],staticClass:"timeList"},s._l(t.deliveryTimeList,function(e,a){return i("p",{key:a,class:{red:t.timeVal==a},on:{click:function(i){return s.changeTime(t,e,a)}}},[s._v("\n                  "+s._s(e)+"\n                ")])}),0)])])]),s._v(" "),s._l(t.skuList,function(e,a){return i("div",{key:a,staticClass:"box-content clearfix"},[i("div",{staticClass:"imgWrap"},[i("img",{staticClass:"img",attrs:{src:e.img0}}),s._v(" "),i("p",{staticClass:"cutOff"},[s._v(s._s(t.cutOff))])]),s._v(" "),i("div",{staticClass:"rightMain"},[i("div",{staticClass:"nameWrap"},[i("div",{staticClass:"name"},[s._v(s._s(e.name))]),s._v(" "),i("div",{staticClass:"num"},[i("span",{staticClass:"iconfont"},[s._v("  ")]),s._v(" "),i("span",[s._v(" "+s._s(e.num)+" ")])])]),s._v(" "),i("div",{staticClass:"proDownWrap"},[i("div",{staticClass:"sizeWrap"},[i("p",{staticClass:"size"},[s._v("\n                  "+s._s(s.getAttributes(e.attributeList))+"\n                ")]),s._v(" "),t.shipping?i("p",{staticClass:"shipping"},[s._v("\n                  Shipping: "+s._s(e.shipping)+" AED\n                ")]):s._e()]),s._v(" "),i("div",[i("p",{staticClass:"price"},[s._v(s._s(e.mallPrice)+" AED")]),s._v(" "),i("p",{staticClass:"priceDel"},[s._v(s._s(e.merchantPrice)+" AED")])])])])])})],2)}),0),s._v(" "),i("div",{staticClass:"item-box useCoupon",on:{click:s.counponShow}},[i("p",{staticClass:"tittle"},[s._v("Choose Coupon")]),s._v(" "),i("div",{staticClass:"box-content"},[i("div",[i("span",{staticClass:"iconfont radio",class:{red:s.chooseNum}},[s._v("\n            "+s._s(s.chooseNum?"":"")+"\n          ")]),s._v(" "),i("span",{staticClass:"value"},[s._v(" "+s._s(s.chooseNum)+" Selected ")])]),s._v(" "),s._m(0)])]),s._v(" "),i("div",{staticClass:"item-box total"},[i("p",{staticClass:"tittle"},[s._v("Payment summary")]),s._v(" "),i("div",{staticClass:"box-content"},[i("p",{staticClass:"row"},[i("label",[s._v(" Sub Total: ")]),s._v(" "),i("span",[s._v(" "+s._s(s.orderData.subTotal)+" AED ")])]),s._v(" "),i("p",{staticClass:"row"},[i("label",[s._v(" Shipping: ")]),s._v(" "),i("span",[s._v(" "+s._s(s.orderData.shipping)+" AED ")])]),s._v(" "),i("p",{staticClass:"row"},[i("label",[s._v(" Coupon: ")]),s._v(" "),i("span",[s._v(" - "+s._s(s.couponAmount)+" AED")])])])]),s._v(" "),i("section",{staticClass:"downWrap"},[i("div",{staticClass:"tips"},[i("div",{staticClass:"red"},[s._v(s._s(s.orderData.messae))]),s._v(" "),s._e()]),s._v(" "),i("div",{staticClass:"downBtn"},[i("div",{staticClass:"rightOperate"},[i("span",{staticClass:"black"},[s._v(" Grand Total: ")]),s._v(" "),i("span",{staticClass:"price"},[s._v(" "+s._s(s.grandTotal)+" AED ")]),s._v(" "),i("van-button",{attrs:{type:"danger"},on:{click:s.payMentGo}},[s._v("Proceed(1)")])],1)])])]),s._v(" "),i("van-popup",{attrs:{position:"bottom"},on:{"click-overlay":function(t){s.cuponShow=!1}},model:{value:s.cuponShow,callback:function(t){s.cuponShow=t},expression:"cuponShow"}},[i("div",{staticClass:"couponList"},[i("a",{staticClass:"iconfont close",attrs:{href:"javascript:void(0)"},on:{click:function(t){s.cuponShow=!1}}},[s._v("\n        \n      ")]),s._v(" "),i("ul",{staticClass:"clearfix"},s._l(s.couponList,function(t,e){return i("li",{key:e},[i("span",{staticClass:"iconfont radio",class:{red:s.selectIndex.indexOf(e)>-1},on:{click:function(i){return s.selectCoupon(t,e)}}},[s._v("\n            "+s._s(s.selectIndex.indexOf(e)>-1?"":"")+"\n          ")]),s._v(" "),i("div",[i("p",{staticClass:"name"},[s._v(s._s(t.name))]),s._v(" "),i("p",{staticClass:"row2"},[i("span",{staticClass:"price"},[s._v(" "+s._s(t.couponAmount)+" ")]),s._v(" "),i("span",{staticClass:"date"},[s._v("\n                "+s._s(t.beginTime)+"-"+s._s(t.endTime)+"\n              ")])])])])}),0),s._v(" "),i("div",{staticClass:"btnWrap"},[i("van-button",{attrs:{type:"danger",size:"large"},on:{click:s.confirmCoupon}},[s._v("Confirm")])],1)])])],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("span",{staticClass:"iconfont arrowDown"},[this._v("  ")])])}]};var l=i("VU/8")(c,r,!1,function(s){i("wDDB")},"data-v-8c78d7c0",null);t.default=l.exports},wDDB:function(s,t){}});
//# sourceMappingURL=38.19bea071fa7689dde2ed.js.map