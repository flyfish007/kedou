webpackJsonp([51],{bMjj:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("3cXf"),i=e.n(o),s=e("cKxd"),n=e("FWz8"),r=e("tH3/"),c={name:"payMent",data:function(){return{radio:"1",show:!1,cardList:[],orderNo:this.$route.query.orderNo,defaultCard:{},orderDetail:{},codPayFee:{},selectBank:0}},computed:{},mounted:function(){this.init()},methods:{init:function(){var a=this;Object(s.d)().then(function(t){a.cardList=t.data.result,a.defaultCard=a.cardList[0]||{}}),Object(n.k)({orderNo:this.orderNo}).then(function(t){a.orderDetail=t.data.result}),Object(n.g)({orderNo:this.orderNo}).then(function(t){a.codPayFee=t.data.result})},changeSort:function(a){this.sortValue=a,this.sortVisible=!1},goBack:function(){var a=this;this.$dialog.confirm({message:"Please pay it in 30 min, otherwise the order will be cancelled?",confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){a.$router.push("/orderList")}).catch(function(){})},toPay:function(){var a=this;"1"==this.radio&&Object(r.b)(this.orderDetail.userAddress.mobile,"codMobile").then(function(t){a.$router.push({path:"verifyCode",query:{username:a.orderDetail.userAddress.mobile,accountType:2,type:"codMobile",extra:i()({orderNo:a.orderNo})}})})},confirmFee:function(){this.$dialog.confirm({message:"COD required extra service fee",confirmButtonText:"I Know",showCancelButton:!1}).then(function(){})}},watch:{selectBank:function(a){this.defaultCard=this.cardList[a],this.show=!1}}},d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("section",{staticClass:"head"},[e("div",[e("a",{staticClass:"iconfont back",on:{click:a.goBack}},[a._v("  ")])]),a._v(" "),e("h1",[a._v("Payment")]),a._v(" "),e("div",{staticClass:"chartWrap"})]),a._v(" "),e("div",{staticClass:"center"},[e("div",{staticClass:"price"},[a._v("\n            "+a._s(a.orderDetail.grandTotal)+" AED\n        ")]),a._v(" "),e("div",{staticClass:"payMethod"},[e("div",{staticClass:"codWrap"},[e("span",{staticClass:"cod"},[e("van-radio-group",{model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[e("van-radio",{attrs:{name:"1","checked-color":"#e33946"}},[a._v("COD")])],1)],1),a._v(" "),e("span",{staticClass:"additional"},[a._v("+"+a._s(a.codPayFee.codAdditionalFee)+" AED "),e("van-icon",{attrs:{name:"question-o",color:"#55a4e1",size:"17px"},on:{click:a.confirmFee}})],1)]),a._v(" "),e("div",{staticClass:"cardWrap"},[e("span",{staticClass:"cod"},[e("van-radio-group",{attrs:{disabled:"disabled"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[e("van-radio",{attrs:{name:"2","checked-color":"#e33946"}},[a._v(" Bank Card")])],1)],1),a._v(" "),e("span",{staticClass:"bankCard"},[a._v(a._s(a.defaultCard.cardNum)+" "),e("van-icon",{attrs:{name:"arrow-down",size:"17px"},on:{click:function(t){a.show=!0}}})],1)]),a._v(" "),e("div",{staticClass:"paypalWrap"},[e("span",{staticClass:"cod"},[e("van-radio-group",{attrs:{disabled:"disabled"},model:{value:a.radio,callback:function(t){a.radio=t},expression:"radio"}},[e("van-radio",{attrs:{name:"3","checked-color":"#e33946"}},[a._v(" Paypal")])],1)],1)])]),a._v(" "),e("van-button",{attrs:{type:"danger"},on:{click:a.toPay}},[a._v("Pay")])],1),a._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:a.show,callback:function(t){a.show=t},expression:"show"}},[e("div",{staticClass:"newCard"},[e("span",{on:{click:function(t){a.show=!1}}},[a._v("Cancel")]),a._v(" "),e("span",{staticClass:"add",on:{click:function(t){return a.redirect("/myBankcards")}}},[a._v("Add New Card")])]),a._v(" "),e("div",{staticClass:"choiceBankWrap"},a._l(a.cardList,function(t,o){return e("div",{key:o,staticClass:"choiceBank"},[e("div",{staticClass:"btn_left"},[e("van-radio-group",{model:{value:a.selectBank,callback:function(t){a.selectBank=t},expression:"selectBank"}},[e("van-radio",{attrs:{name:o,"checked-color":"#e33946"}})],1)],1),a._v(" "),e("div",{staticClass:"bankName"},[e("p",[a._v(a._s(t.name))]),a._v(" "),e("span",[a._v(a._s(t.cardNum))])])])}),0)])],1)},staticRenderFns:[]};var l=e("C7Lr")(c,d,!1,function(a){e("dH/W")},"data-v-3e3ed5a2",null);t.default=l.exports},"dH/W":function(a,t){}});
//# sourceMappingURL=51.c2fe9d2d2e5dc2b9d9e7.js.map