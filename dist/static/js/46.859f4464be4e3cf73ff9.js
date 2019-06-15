webpackJsonp([46],{VRWX:function(t,e){},dzCT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),s=a("4YfN"),r=a.n(s),o=a("FWz8"),c=a("2bvH"),u={name:"orderList",data:function(){return{navIndex:0,navList:[],orderList:[],query:{},loading:!1,finished:!1,isLoading:!0,isEmpty:!1,orderStatus:""}},computed:r()({},Object(c.b)(["indexData"])),mounted:function(){this.bus.$emit("showLoading"),this.init()},methods:{init:function(){var t=this;this.bus.$emit("loadIndexData"),this.query=n()(this.query,{pageNo:1,pageSize:10}),Object(o.i)().then(function(e){t.navList=e.data.result,t.orderStatus=e.data.result[0].orderStatus,Object(o.f)(t.orderStatus,t.query.pageNo,t.query.pageSize).then(function(e){t.orderList=e.data.result.result,t.isLoading=!1,e.data.result.totalNum<=t.orderList.length&&(t.finished=!0),0==e.data.result.result.length&&(t.isEmpty=!0)}).catch(function(e){t.isEmpty=!0,t.orderList=[],t.finished=!0,t.isLoading=!1})}),this.bus.$emit("hideLoading")},goBack:function(){this.$router.back(-1)},change:function(t){this.navIndex=t,this.orderStatus=this.navList[t].orderStatus,this.onRefresh()},onLoad:function(){var t=this;if(this.isLoading)return this.loading=!1,!1;this.query.pageNo++;this.query;Object(o.f)(this.orderStatus,this.query.pageNo,this.query.pageSize).then(function(e){t.orderList=t.orderList.concat(e.data.result.result),t.loading=!1,e.data.result.totalNum<=t.orderList.length&&(t.finished=!0)}).catch(function(e){t.finished=!0,t.loading=!1})},onRefresh:function(){var t=this;this.query=n()(this.query,{pageNo:1,pageSize:10}),Object(o.f)(this.orderStatus,this.query.pageNo,this.query.pageSize).then(function(e){t.orderList=e.data.result.result,t.isLoading=!1,e.data.result.totalNum<=t.orderList.length&&(t.finished=!0),0==e.data.result.result.length?t.isEmpty=!0:t.isEmpty=!1}).catch(function(e){t.isEmpty=!0,t.orderList=[],t.finished=!0,t.isLoading=!1})},addCart:function(t){var e=this;t.prodList.forEach(function(t){e.$store.dispatch("addCart",{skuCode:t.skuCode,num:t.productQuantity}).then(function(t){})}),this.$toast("Items have been added to Cart .")},getAttributes:function(t){return t.map(function(t){return t.optionName}).join(";")},cancel:function(t){var e=this;this.$dialog.confirm({message:"Are you sure to cancel this order?",confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){Object(o.b)({orderNo:t.orderNo}).then(function(t){e.init()})}).catch(function(){})},received:function(t){var e=this;Object(o.e)({orderNo:t}).then(function(t){e.$toast("Received Successfully"),e.init()})},StringToDate:function(t){var e=Date.parse(t),a=new Date(e);if(isNaN(a)){var i=t.split("-");a=new Date(i[0],--i[1],i[2])}var n=a,s=n.getFullYear(),r=n.getMonth()+1,o=n.getDate();n.getHours(),n.getMinutes(),n.getSeconds()},payTypeEnum:function(t){return"ONLINE"===t?"Online Pay":t}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainXiaoGuo"},[i("div",{staticClass:"orderHeadWrap"},[i("section",{staticClass:"head"},[i("div",[i("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),i("h1",[t._v("My Orders")]),t._v(" "),i("div",{staticClass:"chartWrap"},[i("router-link",{attrs:{to:{path:"/search",query:{}}}},[i("span",{staticClass:"search iconfont"},[t._v("  ")])]),t._v(" "),t.indexData.shoppingCartNum>0?i("span",{staticClass:"bag"},[i("em",{staticClass:"font10"},[t._v(" "+t._s(t.indexData.shoppingCartNum)+" ")])]):t._e(),t._v(" "),i("a",{staticClass:"iconfont cart",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$router.push("cart")}}},[t._v("\n            \n          ")])],1)]),t._v(" "),i("section",{staticClass:"tabNav"},t._l(t.navList,function(e,a){return i("div",{key:a,class:t.navIndex==a?"active":"",staticStyle:{"z-index":"10"},on:{click:function(e){return t.change(a)}}},[i("span",[t._v(" "+t._s(e.name))])])}),0),t._v(" "),i("van-pull-refresh",{attrs:{"loosing-text":"Release to refresh","loading-text":"Loading..."},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[t.isEmpty?t._e():i("section",{staticClass:"orderList"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"The end"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("ul",t._l(t.orderList,function(e,a){return i("li",{key:a},[i("div",{staticClass:"topNo",on:{click:function(a){return t.$router.push({path:"/orderDetail",query:{orderNo:e.orderNo}})}}},[i("p",[i("span",{staticClass:"no"},[t._v(" "+t._s(e.orderNo)+" ")]),t._v(" "),i("span",{staticClass:"payStyle"},[t._v(" "+t._s(t.payTypeEnum(e.payType))+" ")])]),t._v(" "),i("p",[i("span",{staticClass:"payStatus"},[t._v(" "+t._s(e.orderStatusStr)+" ")])])]),t._v(" "),t._l(e.prodList,function(a,n){return i("div",{key:n,staticClass:"proWrap clearfix",on:{click:function(a){return t.$router.push({path:"/orderDetail",query:{orderNo:e.orderNo}})}}},[i("div",{staticClass:"imgWrap",on:{click:function(a){return t.$router.push({path:"/orderDetail",query:{orderNo:e.orderNo}})}}},[i("img",{staticClass:"img",attrs:{src:a.img0}})]),t._v(" "),i("div",{staticClass:"numRight"},[i("span",{staticClass:"cheng"},[t._v(" X ")]),t._v(" "),i("span",[t._v(" "+t._s(a.productQuantity)+" ")])]),t._v(" "),i("div",{staticClass:"rightMain"},[i("p",{staticClass:"name"},[t._v(t._s(a.productName))]),t._v(" "),i("p",{staticClass:"size"},[t._v("\n                    "+t._s(t.getAttributes(a.attrOptList))+"\n                  ")])])])}),t._v(" "),i("div",{staticClass:"downRow",on:{click:function(a){return t.$router.push({path:"/orderDetail",query:{orderNo:e.orderNo}})}}},[i("p",{staticClass:"date"},[t._v(t._s(t.StringToDate(e.createDate)))]),t._v(" "),i("p",[i("span",{staticClass:"color999"},[t._v(" Grand Total: ")]),t._v(" "),i("span",{staticClass:"total"},[t._v("\n                    "+t._s((e.payedAmount/100).toFixed(2))+" AED\n                  ")])])]),t._v(" "),101==e.orderStatus?i("div",{staticClass:"downBtns"},[i("van-button",{attrs:{plain:"",hairline:"",type:"primary"},on:{click:function(a){return t.cancel(e)}}},[t._v("Cancel")]),t._v(" "),i("van-button",{attrs:{plain:"",hairline:"",type:"danger"},on:{click:function(a){return t.$router.push({path:"/payMent",query:{orderNo:e.orderNo}})}}},[t._v("Pay")])],1):t._e(),t._v(" "),103==e.orderStatus||102==e.orderStatus?i("div",{staticClass:"downBtns"},[e.logisticsInformationList?i("span",{staticClass:"tips"},[t._v("\n                  "+t._s(e.logisticsInformationList[0].remark))]):t._e(),t._v(" "),i("van-button",{attrs:{plain:"",hairline:"",type:"primary"},on:{click:function(a){return t.received(e.orderNo)}}},[t._v("Received")]),t._v(" "),i("van-button",{attrs:{plain:"",hairline:"",type:"primary"},on:{click:function(a){return t.$router.push({path:"/logistics",query:{orderNo:e.orderNo}})}}},[t._v("Logistic")])],1):t._e(),t._v(" "),104==e.orderStatus?i("div",{staticClass:"downBtns"},[i("van-button",{attrs:{plain:"",hairline:"",type:"primary"},on:{click:function(t){return this.$router.push({path:"reviewsOrder",query:{orderNo:e.orderNo}})}}},[t._v("Review")]),t._v(" "),i("van-button",{attrs:{plain:"",hairline:"",type:"danger"},on:{click:function(a){return t.addCart(e)}}},[t._v("Buy Again")])],1):t._e(),t._v(" "),202==e.orderStatus?i("div",{staticClass:"downBtns"},[i("van-button",{attrs:{plain:"",hairline:"",type:"danger"},on:{click:function(a){return t.addCart(e)}}},[t._v("Buy Again")])],1):t._e()],2)}),0)])],1)]),t._v(" "),t.isEmpty?[i("div",{staticClass:"emptycenter"},[i("img",{attrs:{src:a("Gi3r")}}),t._v(" "),i("span",{staticClass:"tips"},[t._v("You don't have any orders")]),t._v(" "),i("div",{staticClass:"emptyDiv"},[i("van-button",{attrs:{type:"danger"},on:{click:function(e){return t.$router.push("flashSale")}}},[t._v("EXPLORE OUR DEALS")])],1)])]:t._e()],2)])},staticRenderFns:[]};var l=a("C7Lr")(u,d,!1,function(t){a("VRWX")},"data-v-49adc3f6",null);e.default=l.exports}});
//# sourceMappingURL=46.859f4464be4e3cf73ff9.js.map