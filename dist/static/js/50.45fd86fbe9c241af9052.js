webpackJsonp([50],{h6ao:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("4YfN"),s=a.n(n),c=a("qSrn"),e=a("2bvH"),r={name:"activities",data:function(){return{control:!1,activities:[]}},computed:s()({},Object(e.b)(["indexData"])),mounted:function(){this.init()},methods:{init:function(){var t=this;Object(c.d)().then(function(i){t.activities=i.data.result})},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)}}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("section",{staticClass:"head"},[a("div",[a("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),a("h1",[t._v("Marketing activities")]),t._v(" "),a("div",{staticClass:"chartWrap"},[a("a",{staticClass:"iconfont cart",attrs:{href:"javascript:void(0)"},on:{click:function(i){return t.$router.push("search")}}},[t._v("  ")]),t._v(" "),a("span",{staticClass:"bag"},[a("em",{staticClass:"font10"},[t._v(" "+t._s(t.indexData.shoppingCartNum)+" ")])]),t._v(" "),a("a",{staticClass:"iconfont cart",attrs:{href:"javascript:void(0)"},on:{click:function(i){return t.$router.push("/cart")}}},[t._v("  ")])])]),t._v(" "),a("div",{staticClass:"center"},[a("ul",t._l(t.activities,function(i,n){return a("li",{key:n,on:{click:function(a){return t.$router.push(i.jumpUrl)}}},[a("div",{staticClass:"photoWrap"},[a("img",{attrs:{src:i.img1}}),t._v(" "),t._e()])])}),0)])])},staticRenderFns:[]};var u=a("C7Lr")(r,o,!1,function(t){a("k9T2")},"data-v-4e099724",null);i.default=u.exports},k9T2:function(t,i){}});
//# sourceMappingURL=50.45fd86fbe9c241af9052.js.map