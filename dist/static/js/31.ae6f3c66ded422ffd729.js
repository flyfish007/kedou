webpackJsonp([31],{STCY:function(t,s){},sFCw:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("4YfN"),i=a.n(e),o=a("FWz8"),n=a("2bvH"),c={name:"exchange",data:function(){return{resonVal:{label:"",value:0},temp:{},reasonList:[],productQuantity:1,reasonShow:!1,orderNo:this.$route.query.orderNo,skuCode:this.$route.query.skuCode,productDetail:{},reason:""}},computed:i()({},Object(n.b)(["indexData","productData"])),mounted:function(){this.init()},methods:{init:function(){var t=this;Object(o.j)({orderNo:this.orderNo,skuCode:this.skuCode}).then(function(s){t.productDetail=s.data.result})},showReason:function(){this.temp={name:this.resonVal.name,code:this.resonVal.code},this.reasonShow=!0},confirmReason:function(){this.resonVal={name:this.temp.name,code:this.temp.code},this.reasonShow=!1},goBack:function(){this.$router.back(-1)},apply:function(){var t=this;Object(o.a)({orderNo:this.orderNo,skuCode:this.skuCode,refundReason:this.resonVal.code,remark:this.reason,productQuantity:this.productQuantity}).then(function(s){t.$router.go(-1)})},getAttributes:function(t){return t?t.map(function(t){return t.optionName}).join(";"):""}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"head"},[a("div",[a("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")]),t._v(" "),a("a",{staticClass:"icon icon_manue"},[t._v(" manue ")])]),t._v(" "),a("h1",[t._v("Refund")]),t._v(" "),a("div",{staticClass:"chartWrap"},[t.indexData.shoppingCartNum>0?a("span",{staticClass:"bag"},[a("em",{staticClass:"font10"},[t._v(" "+t._s(t.indexData.shoppingCartNum)+" ")])]):t._e(),t._v(" "),a("a",{staticClass:"iconfont cart",on:{click:function(s){return t.$router.push("/cart")}}},[t._v("  ")])])]),t._v(" "),a("section",{staticClass:"exchangeContent"},[a("div",{staticClass:"blocks"},[a("div",{staticClass:"proWrap clearfix"},[a("div",{staticClass:"imgWrap"},[a("img",{staticClass:"img",attrs:{src:t.productDetail.img0}})]),t._v(" "),a("div",{staticClass:"numRight"},[a("span",{staticClass:"iconfont"},[t._v("  ")]),t._v(" "),a("span",[t._v(" "+t._s(t.productDetail.productQuantity)+" ")])]),t._v(" "),a("div",{staticClass:"rightMain"},[a("p",{staticClass:"name"},[t._v(" "+t._s(t.productDetail.productName)+" ")]),t._v(" "),a("p",{staticClass:"size"},[t._v(" "+t._s(t.getAttributes(t.productDetail.attrOptList))+" ")])])]),t._v(" "),a("div",{staticClass:"commonRow"},[a("p",{staticClass:"tittle"},[t._v(" Application Qty: ")]),t._v(" "),a("div",{staticClass:"gw_num clearfix"},[a("van-stepper",{attrs:{max:1*t.productDetail.productQuantity},model:{value:t.productQuantity,callback:function(s){t.productQuantity=s},expression:"productQuantity"}})],1)]),t._v(" "),t._e()]),t._v(" "),a("div",{staticClass:"blocks mt10"},[a("div",{staticClass:"commonRow",on:{click:t.showReason}},[t._m(0),t._v(" "),a("div",{staticClass:"rightCol"},[a("span",{staticClass:"color999 single-ellipsis"},[t._v("  "+t._s(t.resonVal.name)+" ")]),t._v(" "),a("span",{staticClass:"iconfont arrowDown"},[t._v("  ")])])])]),t._v(" "),a("div",{staticClass:"blocks mt10"},[t._m(1),t._v(" "),a("div",{staticClass:"txt"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],attrs:{placeholder:"Min 20 Characters"},domProps:{value:t.reason},on:{input:function(s){s.target.composing||(t.reason=s.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"exchangeBtnwrap"},[a("van-button",{attrs:{size:"large",type:"danger"},on:{click:t.apply}},[t._v(" Apply ")])],1),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.reasonShow,callback:function(s){t.reasonShow=s},expression:"reasonShow"}},[a("div",{staticClass:"resonList"},[a("a",{staticClass:"close",on:{click:function(s){t.reasonShow=!1}}},[t._v(" Cancel ")]),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(t.productDetail.refundReason,function(s,e){return a("li",{key:e,class:{red:s.code==t.temp.code},on:{click:function(a){t.temp=s}}},[a("span",{staticClass:"iconfont radio"},[t._v(" "+t._s(s.code==t.temp.code?"":"")+" ")]),t._v(" "),a("div",[a("p",{staticClass:"name"},[t._v(" "+t._s(s.name)+" ")])])])}),0),t._v(" "),a("div",{staticClass:"btnWrap mt20"},[a("van-button",{attrs:{type:"danger",size:"large"},on:{click:t.confirmReason}},[t._v("Confirm")])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"tittle"},[this._v(" Select Reason: "),s("sup",{staticClass:"require"},[this._v("*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"commonRow"},[s("p",{staticClass:"tittle"},[this._v(" Problem Description "),s("sup",{staticClass:"require"},[this._v("*")])])])}]};var l=a("C7Lr")(c,r,!1,function(t){a("STCY")},"data-v-f73aa81e",null);s.default=l.exports}});
//# sourceMappingURL=31.ae6f3c66ded422ffd729.js.map