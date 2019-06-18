webpackJsonp([37],{HpqG:function(s,t){},ojUx:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("4YfN"),a=e.n(i),n=e("FWz8"),o=e("2bvH"),c={name:"orderSummary",data:function(){return{grandTotal:"",selectIndex:[],couponAmount:0,ids:JSON.parse(this.$route.query.ids),isVIP:1,cuponShow:!1,orderData:{},chooseNum:"",couponList:[],hisCouponList:[],initCouponList:[],noAdress:!0,initProList:[]}},computed:a()({},Object(o.b)(["selectAddress"])),mounted:function(){this.init()},methods:{init:function(){var s=this;Object(n.c)(this.ids).then(function(t){s.orderData=t.data.result,s.initProList=t.data.result.shipmentList,s.initProList.length>0&&s.initProList.forEach(function(s){s.timeVal=0,s.timeLabel=s.deliveryTimeList[0]}),s.couponList=t.data.result.couponList.filter(function(s){return 0!=s.canUse}),s.couponList.length>0&&(s.selectIndex.push(0),s.couponAmount=s.couponList[0].couponAmount,s.chooseNum=1),s.calTotal(),s.orderData.address&&(s.noAdress=!1),s.selectAddress&&(s.orderData.address={address:s.selectAddress.countryName+" "+s.selectAddress.provinceName+" "+s.selectAddress.cityName+" "+s.selectAddress.street,addressId:s.selectAddress.id,addressType:s.selectAddress.addressType,landlineNumber:s.selectAddress.landlineNumber,landmark:s.selectAddress.landmark,mobile:s.selectAddress.mobile,userName:s.selectAddress.lastName+" "+s.selectAddress.firstName})})},initAddress:function(){getAddress().then(function(s){})},initProData:function(){},selectCoupon:function(s,t){if(0==s.use)return!1;this.selectIndex.indexOf(t)>-1?this.selectIndex.splice(0,1):(this.selectIndex.splice(0,1),this.selectIndex.push(t)),s.check=!s.check,this.calTotal()},changeTime:function(s,t,e){this.$set(s,"timeVal",e),this.$set(s,"timeLabel",t),this.$set(s,"timeShow",!1)},counponShow:function(){0==this.couponList.length||(this.cuponShow=!0)},calTotal:function(){var s=1*this.orderData.subTotal+1*this.orderData.shipping-(1*this.couponAmount||0);this.grandTotal=s>0?s.toFixed(2):"0.01"},confirmCoupon:function(){var s=this;this.chooseNum=0,this.couponAmount=0,this.selectIndex.length>0&&this.selectIndex.forEach(function(t){s.chooseNum++,s.couponAmount+=1*s.couponList[t].couponAmount}),this.cuponShow=!1,this.calTotal()},goBack:function(){this.$router.back(-1)},addressGo:function(){this.$router.push("/addAddress?action=select")},getAttributes:function(s){return s.map(function(s){return s.optionName}).join(";")},showAnyTime:function(s){this.$set(s,"timeShow",!s.timeShow)},payMentGo:function(){var s=this;if(!this.orderData.address)return this.$toast("Add address"),!1;var t=[];this.initProList.forEach(function(s){t.push(s.shipmentFrom+"~"+s.timeLabel)});var e={grandTotal:this.grandTotal,couponId:this.selectIndex.length>0?this.couponList[this.selectIndex[0]].couponId:"",ids:this.ids.join(","),addressId:this.orderData.address.addressId,expectedDeliveryTime:t.join(",")};Object(n.l)(e).then(function(t){s.$router.push({path:"/payMent",query:t.data.result}),s.bus.$emit("loadIndexData")})}}},r={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"mainwrap"},[e("section",{staticClass:"head"},[e("div",[e("a",{staticClass:"iconfont back",on:{click:s.goBack}},[s._v("  ")])]),s._v(" "),e("h1",[s._v("Order Summary")]),s._v(" "),e("div",{staticClass:"chartWrap"})]),s._v(" "),e("section",{staticClass:"orderSummaryWrap"},[e("div",{staticClass:"address item-box"},[e("p",{staticClass:"tittle"},[s._v("Delivery Address")]),s._v(" "),s.noAdress?s._e():[e("p",{staticClass:"user",on:{click:function(t){return s.redirect("/myAddress?action=select")}}},[e("span",[s._v(" "+s._s(s.orderData.address.userName)+" ")]),s._v(" "),e("span",[s._v(" NO.+971 "+s._s(s.orderData.address.mobile)+" ")]),s._v(" "),e("span",{staticClass:"tag"},[s._v(" Home ")])])],s._v(" "),e("div",{staticClass:"box-content",on:{click:function(t){return s.redirect("/myAddress?action=select")}}},[s.noAdress?s._e():e("div",[e("p",{staticClass:"two-line-ellipsis"},[s._v(s._s(s.orderData.address.address))])]),s._v(" "),s.noAdress?e("div",{on:{click:s.addressGo}},[e("span",{staticClass:"iconfont"},[s._v("  ")]),s._v(" "),e("span",[s._v(" Add shipping address ")])]):s._e(),s._v(" "),e("div",{staticClass:"rightChange",class:{rightArrow:s.noAdress}},[e("span",{staticClass:"iconfont"},[s._v("\n            "+s._s(s.noAdress?"":""))])])])],2),s._v(" "),e("section",{staticClass:"proList"},s._l(s.initProList,function(t,i){return e("div",{key:i,staticClass:"item-box"},[e("div",{staticClass:"tittleWrap"},[e("p",{staticClass:"tittle"},[s._v("\n            "+s._s(t.shipmentTitle)+"\n          ")]),s._v(" "),e("div",{staticClass:"deliveryTime"},[e("p",{staticClass:"red"},[s._v("\n              delivered in "+s._s(t.deliveredDays)+" business days\n            ")]),s._v(" "),e("div",{staticClass:"chooseTime"},[e("p",{staticClass:"outer",on:{click:function(e){return s.showAnyTime(t,i)}}},[e("span",[s._v("\n                  "+s._s(t.timeLabel?t.timeLabel:"Preferred delivery time")+"\n                ")]),s._v(" "),e("span",{staticClass:"iconfont arrowDown"},[s._v("  ")])]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.timeShow,expression:"item.timeShow"}],staticClass:"timeList"},s._l(t.deliveryTimeList,function(i,a){return e("p",{key:a,class:{red:t.timeVal==a},on:{click:function(e){return s.changeTime(t,i,a)}}},[s._v("\n                  "+s._s(i)+"\n                ")])}),0)])])]),s._v(" "),s._l(t.skuList,function(i,a){return e("div",{key:a,staticClass:"box-content clearfix"},[e("div",{staticClass:"imgWrap"},[e("img",{staticClass:"img",attrs:{src:i.img0}}),s._v(" "),e("p",{staticClass:"cutOff"},[s._v(s._s(t.cutOff))])]),s._v(" "),e("div",{staticClass:"rightMain",on:{click:function(t){return s.$router.push({path:"/proDetail",query:{spuCode:i.spuCode}})}}},[e("div",{staticClass:"nameWrap"},[e("div",{staticClass:"name"},[s._v(s._s(i.name))]),s._v(" "),e("div",{staticClass:"num"},[e("span",{staticClass:"iconfont"},[s._v("  ")]),s._v(" "),e("span",[s._v(" "+s._s(i.num)+" ")])])]),s._v(" "),e("div",{staticClass:"proDownWrap"},[e("div",{staticClass:"sizeWrap"},[e("p",{staticClass:"size"},[s._v("\n                  "+s._s(s.getAttributes(i.attributeList))+"\n                ")]),s._v(" "),t.shipping?e("p",{staticClass:"shipping"},[s._v("\n                  Shipping: "+s._s(i.shipping)+" AED\n                ")]):s._e()]),s._v(" "),e("div",[e("p",{staticClass:"price"},[s._v(s._s(i.mallPrice)+" AED")]),s._v(" "),e("p",{staticClass:"priceDel"},[s._v(s._s(i.merchantPrice)+" AED")])])])])])})],2)}),0),s._v(" "),s.couponList.length>0?e("div",{staticClass:"item-box useCoupon",on:{click:s.counponShow}},[e("p",{staticClass:"tittle"},[s._v("Choose Coupon")]),s._v(" "),e("div",{staticClass:"box-content"},[e("div",[e("span",{staticClass:"iconfont radio",class:{red:s.chooseNum}},[s._v("\n            "+s._s(s.chooseNum?"":"")+"\n          ")]),s._v(" "),e("span",{staticClass:"value"},[s._v(" "+s._s(s.chooseNum)+" Selected ")])]),s._v(" "),s._m(0)])]):s._e(),s._v(" "),e("div",{staticClass:"item-box total"},[e("p",{staticClass:"tittle"},[s._v("Payment summary")]),s._v(" "),e("div",{staticClass:"box-content"},[e("p",{staticClass:"row"},[e("label",[s._v(" Sub Total: ")]),s._v(" "),e("span",[s._v(" "+s._s(s.orderData.subTotal)+" AED ")])]),s._v(" "),e("p",{staticClass:"row"},[e("label",[s._v(" Shipping: ")]),s._v(" "),e("span",[s._v(" "+s._s(s.orderData.shipping)+" AED ")])]),s._v(" "),e("p",{staticClass:"row"},[e("label",[s._v(" Coupon: ")]),s._v(" "),e("span",[s._v(" - "+s._s(s.couponAmount)+" AED")])])])]),s._v(" "),e("section",{staticClass:"downWrap"},[e("div",{staticClass:"tips"},[e("div",{staticClass:"red"},[s._v(s._s(s.orderData.messae))]),s._v(" "),s._e()]),s._v(" "),e("div",{staticClass:"downBtn"},[e("div",{staticClass:"rightOperate"},[e("span",{staticClass:"black"},[s._v(" Grand Total: ")]),s._v(" "),e("span",{staticClass:"price"},[s._v(" "+s._s(s.grandTotal)+" AED ")]),s._v(" "),e("van-button",{attrs:{type:"danger"},on:{click:s.payMentGo}},[s._v("Proceed(1)")])],1)])])]),s._v(" "),e("van-popup",{attrs:{position:"bottom"},on:{"click-overlay":function(t){s.cuponShow=!1}},model:{value:s.cuponShow,callback:function(t){s.cuponShow=t},expression:"cuponShow"}},[e("div",{staticClass:"couponList"},[e("a",{staticClass:"iconfont close",attrs:{href:"javascript:void(0)"},on:{click:function(t){s.cuponShow=!1}}},[s._v("\n        \n      ")]),s._v(" "),e("ul",{staticClass:"clearfix"},s._l(s.couponList,function(t,i){return e("li",{key:i},[e("span",{staticClass:"iconfont radio",class:{red:s.selectIndex.indexOf(i)>-1},on:{click:function(e){return s.selectCoupon(t,i)}}},[s._v("\n            "+s._s(s.selectIndex.indexOf(i)>-1?"":"")+"\n          ")]),s._v(" "),e("div",[e("p",{staticClass:"name"},[s._v(s._s(t.name))]),s._v(" "),e("p",{staticClass:"row2"},[e("span",{staticClass:"price"},[s._v(" "+s._s(t.couponAmount)+" ")]),s._v(" "),e("span",{staticClass:"date"},[s._v("\n                "+s._s(t.beginTime)+"-"+s._s(t.endTime)+"\n              ")])])])])}),0),s._v(" "),e("div",{staticClass:"btnWrap"},[e("van-button",{attrs:{type:"danger",size:"large"},on:{click:s.confirmCoupon}},[s._v("Confirm")])],1)])])],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("span",{staticClass:"iconfont arrowDown"},[this._v("  ")])])}]};var d=e("C7Lr")(c,r,!1,function(s){e("HpqG")},"data-v-96d1e554",null);t.default=d.exports}});
//# sourceMappingURL=37.b12058f143d07807c36b.js.map