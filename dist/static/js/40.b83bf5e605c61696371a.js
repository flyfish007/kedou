webpackJsonp([40],{"/woJ":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("NS8l"),i={name:"myAddress",data:function(){return{addressList:[],action:this.$route.query.action}},computed:{},mounted:function(){this.init()},methods:{init:function(){var t=this;Object(n.g)().then(function(s){t.addressList=s.data.result})},changeSort:function(t){this.sortValue=t,this.sortVisible=!1},goBack:function(){this.$router.back(-1)},showName:function(){this.control=!0},changePrimary:function(t){var s=this;this.$dialog.confirm({message:"Tap other icon to change default address",confirmButtonText:"Confirm",cancelButtonText:"cancel"}).then(function(){Object(n.e)({id:t,addressType:1}).then(function(t){s.$toast("Set as default successfully"),s.init()})})},chooseAddress:function(t){"select"==this.action?(console.log(t),this.$store.dispatch("commitSelectAddress",{selectAddress:t}),this.$router.go(-1)):redirect("/addAddress",{id:t.id})},deleteAdd:function(t){var s=this;this.$dialog.confirm({message:"Are you sure to delete this address",confirmButtonText:"Confirm",cancelButtonText:"cancel"}).then(function(){Object(n.d)(t).then(function(t){s.$toast("Delete Success"),s.init()})})}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"head"},[e("div",[e("a",{staticClass:"iconfont back",on:{click:t.goBack}},[t._v("  ")])]),t._v(" "),e("h1",[t._v("My Address")]),t._v(" "),e("div",{staticClass:"chartWrap"},[e("van-icon",{attrs:{name:"add-o"},on:{click:function(s){return t.redirect("/addAddress")}}})],1)]),t._v(" "),e("div",{staticClass:"center"},[e("ul",t._l(t.addressList,function(s,n){return e("li",{key:n,on:{click:function(e){return t.chooseAddress(s)}}},[e("div",{staticClass:"tagging"},[e("span",[t._v(t._s(s.lastName)+t._s(s.firstName))]),t._v(" "),e("span",{staticClass:"number"},[t._v("NO.+971 "+t._s(s.mobile))]),t._v(" "),s.landmark?e("span",{staticClass:"title"},[t._v(t._s(s.landmark))]):t._e()]),t._v(" "),e("div",{staticClass:"information"},[e("div",{staticClass:"content"},[t._v("\n                          Address "+t._s(s.countryName)+" "+t._s(s.provinceName)+" "+t._s(s.cityName)+" "+t._s(s.street)+" "+t._s(s.lastName)+" "+t._s(s.firstName)+"\n                  ")]),t._v(" "),e("div",{staticClass:"operation"},[e("span",[e("a",{class:["iconfont","cart",1==s.addressType?"yellow":""],on:{click:function(e){return e.stopPropagation(),t.changePrimary(s.id)}}},[t._v("  ")])]),t._v(" "),e("span",[e("a",{staticClass:"iconfont cart",on:{click:function(e){return e.stopPropagation(),t.deleteAdd(s.id)}}},[t._v("  ")])]),t._v(" "),e("span",[e("a",{staticClass:"iconfont cart",on:{click:function(e){return e.stopPropagation(),t.redirect("/addAddress",{id:s.id})}}},[t._v("  ")])])])])])}),0)])])},staticRenderFns:[]};var c=e("C7Lr")(i,a,!1,function(t){e("8O/y")},"data-v-6b9ec805",null);s.default=c.exports},"8O/y":function(t,s){}});
//# sourceMappingURL=40.b83bf5e605c61696371a.js.map