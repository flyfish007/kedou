webpackJsonp([7],{"4d3u":function(t,i){},"P+gi":function(t,i){},iuH6:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("woOf"),a=s.n(e),n=s("qSrn"),o={name:"ads",data:function(){return{value:"",active:0,types:[],selectType:0,list:{},loading:!1,finished:!1,isLoading:!0,query:{}}},computed:{},mounted:function(){var t=this;Object(n.b)().then(function(i){t.types=i.data.result,t.selectType=t.types[0].type,t.init()})},methods:{init:function(){var t=this;this.query=a()(this.query,{pageNo:1,pageSize:10}),Object(n.a)({type:this.selectType,pageNo:this.query.pageNo,pageSize:this.query.pageSize}).then(function(i){t.list=i.data.result.result})},onLoad:function(){var t=this;if(this.isLoading)return this.loading=!1,!1;this.query.pageNo++,Object(n.a)({type:this.selectType,pageNo:this.query.pageNo,pageSize:this.query.pageSize}).then(function(i){t.list=t.list.concat(i.data.result.result),t.loading=!1,i.data.result.totalNum<=t.list.length&&(t.finished=!0)}).catch(function(i){t.finished=!0,t.loading=!1})},onRefresh:function(){this.init()},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},onClick:function(t){this.selectType=this.types[t].type,this.init()},StringToDate:function(t){var i=Date.parse(t),s=new Date(i);if(isNaN(s)){var e=t.split("-");s=new Date(e[0],--e[1],e[2])}var a=s,n=a.getFullYear(),o=a.getMonth()+1,r=a.getDate(),c=a.getHours(),l=a.getMinutes(),u=a.getSeconds();r<10&&(d+="0");var d=r+"/";return o<10&&(d+="0"),d+=o+"/",d+=n+" ",c<10&&(d+="0"),d+=c+":",l<10&&(d+="0"),d+=l+":",u<10&&(d+="0"),d+=u}}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("section",{staticClass:"head"},[s("div",[s("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),s("h1",[t._v("Ads")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("a",{staticClass:"iconfont cart",on:{click:function(i){return t.$router.push("search")}}},[t._v("  ")])])]),t._v(" "),s("div",{staticClass:"tabWrap"},[s("van-tabs",{attrs:{"title-active-color":"#f44"},on:{click:t.onClick}},t._l(t.types,function(i,e){return s("van-tab",{key:e,attrs:{title:i.name}},[s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[s("van-list",{attrs:{finished:t.finished,"finished-text":"The end"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[s("ul",t._l(t.list,function(i,e){return s("li",{key:e},[s("div",{staticClass:"adsWrap"},[s("div",{staticClass:"userheadWrap"},[s("div",{staticClass:"userHead"},[s("img",{attrs:{src:i.headImage}})]),t._v(" "),s("span",[t._v(t._s(i.name))])]),t._v(" "),s("div",{staticClass:"connect"},[t._v("\n                    "+t._s(i.content)+"\n                    "),t._e()]),t._v(" "),s("div",{staticClass:"content"},[t._e(),t._v(" "),s("div",{staticClass:"photoWrap"},[s("div",{staticClass:"photo_top"},[i.imgList&&i.imgList.length>0?s("div",{staticClass:"photo_left"},[s("img",{attrs:{src:i.imgList[0].img}})]):t._e(),t._v(" "),i.imgList&&i.imgList.length>1?s("div",{staticClass:"photo_right"},[s("img",{attrs:{src:i.imgList[1].img}})]):t._e()]),t._v(" "),s("div",{staticClass:"photo_btm"},[i.imgList&&i.imgList.length>2?s("div",{staticClass:"photoList mr9"},[s("img",{attrs:{src:i.imgList[2].img}})]):t._e(),t._v(" "),i.imgList&&i.imgList.length>3?s("div",{staticClass:"photoList mr9"},[s("img",{attrs:{src:i.imgList[3].img}})]):t._e(),t._v(" "),i.imgList&&i.imgList.length>4?s("div",{staticClass:"photoList mr9"},[s("img",{attrs:{src:i.imgList[4].img}})]):t._e()])])]),t._v(" "),s("div",{staticClass:"downTime"},[s("span",{staticClass:"reverse"},[t._v("Count Down")]),t._v(" "),s("span",{staticClass:"finish"},[t._v("FinishTime")])]),t._v(" "),s("div",{staticClass:"dayTime"},[s("span",{staticClass:"reverse"},[s("span",[t._v("02")]),t._v(" Days")]),t._v(" "),s("span",{staticClass:"finish"},[t._v(" "+t._s(t.StringToDate(i.endTime)))])]),t._v(" "),s("div",{staticClass:"btmWrap"},[s("van-button",{attrs:{type:"danger"},on:{click:function(s){return t.$router.push(i.rushIn)}}},[t._v("Rush In")]),t._v(" "),s("van-button",{attrs:{type:"danger"},on:{click:function(s){return t.$router.push({path:"sharingModel",query:{id:i.id}})}}},[t._v("Share")])],1)])])}),0)])],1)],1)}),1)],1)])},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("4d3u"),s("P+gi")},"data-v-f6926b38",null);i.default=c.exports}});
//# sourceMappingURL=7.3be0654a98a560fb59b3.js.map