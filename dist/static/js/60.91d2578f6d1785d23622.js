webpackJsonp([60],{bu9z:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("aA9S"),s=i.n(n),a=i("4YfN"),o=i.n(a),r=i("vMJZ"),u=i("2bvH"),c={name:"coupons",data:function(){return{loading:!1,finished:!1,isLoading:!0,value:"4",result:[],query:{}}},computed:o()({},Object(u.b)(["indexData"])),mounted:function(){this.init()},methods:{init:function(){var t=this;this.query=s()(this.query,{pageNo:1,pageSize:10}),Object(r.m)(this.query).then(function(e){t.result=e.data.result.result,t.isLoading=!1,e.data.result.totalNum<=t.result.length&&(t.finished=!0)}).catch(function(e){t.finished=!0,t.isLoading=!1,t.loading=!1})},onLoad:function(){var t=this;if(this.isLoading)return this.loading=!1,!1;this.query.pageNo++;this.query;Object(r.m)(this.query).then(function(e){t.result=t.result.concat(e.data.result.result),t.loading=!1,e.data.result.totalNum<=t.result.length&&(t.finished=!0)}).catch(function(e){t.finished=!0,t.loading=!1})},onRefresh:function(t){var e=this;setTimeout(function(){e.init(),t()},500)},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.bus.$emit("goBack")},StringToDate:function(t){var e=Date.parse(t),i=new Date(e);if(isNaN(i)){var n=t.split("-");i=new Date(n[0],--n[1],n[2])}var s=i,a=s.getFullYear(),o=s.getMonth()+1,r=s.getDate(),u=s.getHours(),c=s.getMinutes(),l=s.getSeconds();r<10&&(d+="0");var d=r+"/";return o<10&&(d+="0"),d+=o+"/",d+=a+" ",u<10&&(d+="0"),d+=u+":",c<10&&(d+="0"),d+=c+":",l<10&&(d+="0"),d+=l}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"head",staticStyle:{"z-index":"10"}},[i("div",[i("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),i("h1",[t._v("My Coupons")]),t._v(" "),i("div",{staticClass:"chartWrap"},[t.indexData.shoppingCartNum>0?i("span",{staticClass:"bag"},[i("em",{staticClass:"font10"},[t._v(" "+t._s(t.indexData.shoppingCartNum)+" ")])]):t._e(),t._v(" "),i("a",{staticClass:"iconfont cart",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$router.push("/cart")}}},[t._v("\n        \n      ")])])]),t._v(" "),i("vx-pull-refresh",{on:{refresh:t.onRefresh}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"The end"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"couponsWrap"},[i("ul",t._l(t.result,function(e,n){return i("li",{key:n},[i("div",{staticClass:"coupon_left"},[i("span",[t._v("ADE "),i("b",[t._v(t._s((e.result/100).toFixed(0)))]),t._v("."+t._s((e.result/100).toFixed(2).split(".")[1]))]),t._v(" "),i("p",[t._v("Order AED "+t._s((e.condition/100).toFixed(2))+"+")])]),t._v(" "),i("div",{staticClass:"coupon_right"},[i("span",[t._v(t._s(t.StringToDate(e.beginTime))+"-"+t._s(t.StringToDate(e.endTime)))]),t._v(" "),i("p",[t._v(t._s(e.name))])])])}),0)])])],1)],1)},staticRenderFns:[]};var d=i("C7Lr")(c,l,!1,function(t){i("eMGI")},"data-v-106d4a92",null);e.default=d.exports},eMGI:function(t,e){}});
//# sourceMappingURL=60.91d2578f6d1785d23622.js.map