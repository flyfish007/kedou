webpackJsonp([48],{"/woJ":function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("NS8l"),a={name:"myAddress",data:function(){return{addressList:[]}},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(e.g)().then(function(n){t.addressList=n.data.result})},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},showName:function(){this.control=!0},changePrimary:function(t){var n=this;this.$dialog.confirm({message:"Tap other icon to change default address",confirmButtonText:"confirm",cancelButtonText:"cancel"}).then(function(){Object(e.e)({id:t,addressType:1}).then(function(t){n.$toast("Set as default successfully"),n.init()})})},deleteAdd:function(t){var n=this;this.$dialog.confirm({message:"Are you sure to delete this address",confirmButtonText:"confirm",cancelButtonText:"cancel"}).then(function(){Object(e.d)(t).then(function(t){n.$toast("Delete Success"),n.init()})})}}},i={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("section",{staticClass:"head"},[s("div",[s("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),s("h1",[t._v("My Address")]),t._v(" "),s("div",{staticClass:"chartWrap"},[s("van-icon",{attrs:{name:"add-o"},on:{click:function(n){return t.redirect("/addAddress")}}})],1)]),t._v(" "),s("div",{staticClass:"center"},[s("ul",t._l(t.addressList,function(n,e){return s("li",{key:e,on:{click:function(s){return t.redirect("/addAddress",{id:n.id})}}},[s("div",{staticClass:"tagging"},[s("span",[t._v(t._s(n.lastName)+t._s(n.firstName))]),t._v(" "),s("span",{staticClass:"number"},[t._v("NO.+971 "+t._s(n.mobile))]),t._v(" "),n.landmark?s("span",{staticClass:"title"},[t._v(t._s(n.landmark))]):t._e()]),t._v(" "),s("div",{staticClass:"information"},[s("div",{staticClass:"content"},[t._v("\n                          Address "+t._s(n.countryName)+" "+t._s(n.provinceName)+" "+t._s(n.cityName)+" "+t._s(n.street)+" "+t._s(n.lastName)+" "+t._s(n.firstName)+"\n                  ")]),t._v(" "),s("div",{staticClass:"operation"},[s("span",[s("a",{class:["iconfont","cart",1==n.addressType?"yellow":""],on:{click:function(s){return s.stopPropagation(),t.changePrimary(n.id)}}},[t._v("  ")])]),t._v(" "),s("span",[s("a",{staticClass:"iconfont cart",on:{click:function(s){return s.stopPropagation(),t.deleteAdd(n.id)}}},[t._v("  ")])]),t._v(" "),s("span",[s("a",{staticClass:"iconfont cart",on:{click:function(s){return s.stopPropagation(),t.redirect("/addAddress",{id:n.id})}}},[t._v("  ")])])])])])}),0)])])},staticRenderFns:[]};var c=s("C7Lr")(a,i,!1,function(t){s("nZ9o")},"data-v-4b305162",null);n.default=c.exports},nZ9o:function(t,n){}});
//# sourceMappingURL=48.c9dba7657c740f4e4df1.js.map