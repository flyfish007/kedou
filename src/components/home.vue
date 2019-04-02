<template>
  <div>
   <p class="red"> 郭方方的前端学习网站demo... </p>
    <p class="testImg"> </p>

    <p class="mt20"> <span class="iconfont manue">&#xe890;</span></p>


    <van-button type="info">信息按钮</van-button>

    <br><br><br><br>

    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>


  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        slidesPerView : 3,
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){

//      this.axiosPost("/cpn/console/couponBatch/query", {"code":"","name":"","type":"","orderType":"","useChannel":"","startDate":"","endDate":"","username":"","batchStatus":"","remark":"","sendStatus":"1","validShopType":"","pageIndex":1,"pageSize":10,"queryCount":true,"start":0})
//        .then(res => {
//          if (res.success) {
//
//          }else {
//            this.$dialog.alert({message: res.errorMessage});
//          }
//        })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .testImg{background: url('../common/images/456456.png') no-repeat; width: 100px; height: 100px;}
    .manue{font-size: 40px;}
    .swiper-slide{height: 150px;background: #eee;text-align: center; padding-top: 65px; border-right: solid 1px #ccc;}
</style>
