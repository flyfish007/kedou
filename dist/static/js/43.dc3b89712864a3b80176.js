webpackJsonp([43],{IUJo:function(t,s){},oodW:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("4YfN"),i=e.n(a),o=e("2bvH"),r={name:"home",data:function(){return{show:!1,categoryOneCode:this.$route.query.categoryCode,commonSwiperOption:{slidesPerView:2.3,spaceBetween:10,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0}},addChartVisible:!1,timer:{d:"00",h:"00",m:"00",s:"00"}}},computed:i()({},Object(o.b)(["categoryTwo","indexData","wishCode","wishes"])),mounted:function(){this.init()},methods:{init:function(){this.$store.dispatch("getCategoryTwo",{parentCategoryCode:this.categoryOneCode}).then(function(t){})},goBack:function(){this.bus.$emit("goBack")},addChart:function(t){this.$refs.addCart.load(t)},handlerLove:function(t){var s=this,e=this.wishCode.indexOf(t.spuCode),a=-1==e;this.$store.dispatch(a?"addWish":"deleteWish",a?{type:"spu",code:t.spuCode}:{id:this.wishes.result[e].id}).then(function(t){a?s.$toast("Move to Whislist Successfully"):s.$toast("Remove From Whislist Successfully"),s.$store.dispatch("myWishes")})},getStr:function(t){var s=t.indexOf("-");return-1!=s?t.substring(0,s-1):t}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mainXiaoGuo"},[e("section",{staticClass:"head"},[e("div",[e("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),e("h1",[t._v(t._s(t.$route.query.name)+" ")]),t._v(" "),e("div",{staticClass:"chartWrap"},[e("router-link",{attrs:{to:{path:"/search",query:{}}}},[e("span",{staticClass:"search iconfont"},[t._v("  ")])]),t._v(" "),t.indexData.shoppingCartNum>0?e("span",{staticClass:"bag"},[e("em",{staticClass:"font10"},[t._v(" "+t._s(t.indexData.shoppingCartNum)+" ")])]):t._e(),t._v(" "),e("a",{staticClass:"iconfont cart",on:{click:function(s){return t.$router.push("cart")}}},[t._v("  ")])],1)]),t._v(" "),e("section",{staticClass:"salesWrap"},[e("div",{staticClass:"box box-flex justify-between"},[t._m(0),t._v(" "),e("div",[e("a",{staticClass:"blue",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.$router.push({path:"searchResult",query:{category1Code:t.categoryOneCode,orderByVolume:"DESC"}})}}},[t._v(" See All")])])]),t._v(" "),e("div",{staticClass:"commonPro"},[e("swiper",{attrs:{options:t.commonSwiperOption}},[t._l(t.categoryTwo.cateSpuVo,function(s,a){return[e("swiper-slide",[e("div",{staticClass:"item"},["0%"!=s.percentage?e("div",{staticClass:"tips_cutOff"},[t._v(" "+t._s(s.percentage)+" OFF ")]):t._e(),t._v(" "),e("div",{staticClass:"tips_love iconfont",class:{active:t.wishCode.indexOf(s.spuCode)>-1},on:{click:function(e){return e.stopPropagation(),t.handlerLove(s)}}},[t._v(" "+t._s(t.wishCode.indexOf(s.spuCode)>-1?"":"")+" ")]),t._v(" "),s.sale?e("div",{staticClass:"tips_sale"}):t._e(),t._v(" "),e("img",{staticClass:"img",attrs:{src:s.spuMainImage,alt:""}})]),t._v(" "),e("div",{staticClass:"name"},[t._v(" "+t._s(s.name)+" ")]),t._v(" "),e("div",{staticClass:"bottomPrice"},[e("p",{staticClass:"red"},[t._v(" "+t._s(t.getStr(s.priceRange))+" AED  ")]),t._v(" "),e("p",{staticClass:"gray"},[t._v(" "+t._s(t.getStr(s.priceRangeLine))+" AED ")]),t._v(" "),1==s.isTypeFour?e("p",[t._v(" Free Shipping ")]):t._e()]),t._v(" "),e("div",{staticClass:"downShare"},[e("div",{class:{active:s.share}},[e("span",{staticClass:"share iconfont"},[t._v("  ")])]),t._v(" "),e("div",{class:{active:s.cart},on:{click:function(e){return e.stopPropagation(),t.addChart(s)}}},[e("span",{staticClass:"cart iconfont"},[t._v("  ")])])])])]})],2)],1),t._v(" "),e("div",{staticClass:"box mt10 box-flex justify-between"},[e("div",{staticClass:"timerWrap"},[e("h3",{staticClass:"homeTittle"},[t._v(" "+t._s(t.$route.query.name)+"  ")])]),t._v(" "),e("div",[e("a",{staticClass:"blue",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.$router.push({path:"searchResult",query:{category1Code:t.categoryOneCode}})}}},[t._v(" See All")])])]),t._v(" "),e("div",{staticClass:"categrorySales"},[e("ul",{staticClass:"clearfix"},t._l(t.categoryTwo.cateTwoVo,function(s,a){return e("li",{key:a,on:{click:function(e){return t.$router.push({path:"searchResult",query:{category2Code:s.categoryCode}})}}},[e("div",{staticClass:"item"},[e("img",{staticClass:"img",attrs:{src:s.img,alt:""}}),t._v(" "),e("div",{staticClass:"bottomName"},[t._v("\n                  "+t._s(s.categoryName)+"\n                ")])])])}),0)])]),t._v(" "),e("add-cart",{ref:"addCart"})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"timerWrap"},[s("h3",{staticClass:"homeTittle"},[this._v(" Best sales of this Category ")])])}]};var n=e("C7Lr")(r,c,!1,function(t){e("IUJo")},"data-v-63f49a1c",null);s.default=n.exports}});
//# sourceMappingURL=43.dc3b89712864a3b80176.js.map