<template>
  <div>
   <p class="red"> 郭方方的前端学习网站demo... </p>
    <p class="testImg"> </p>

    <p class="mt20"> <span class="iconfont manue"  @click="show=true">&#xe890;</span></p>


    <van-button type="info" @click="bottomShow=true">popup bottom</van-button>

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

    <van-popup v-model="show" position="left" style="height: 100%; width:50%;">
        <van-button @click="show=false"> 关闭 </van-button>
    </van-popup>

    <van-popup v-model="bottomShow" position="bottom">
      <van-row  type="flex" justify="space-between">
        <van-col span="4"> 请选择 </van-col>
        <van-col span="4" style="text-align: right;">  <span @click="bottomShow=false"> 关闭 </span> </van-col>
      </van-row>
      <van-picker :columns="columns" @change="onChange" />

    </van-popup>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        slidesPerView : 3,
      },
      show:false,
      bottomShow:false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
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

//      this.axiosPost("/post_user",{user:"gff",pwd:"00"})
//        .then(res => {
//          if (res.success) {
//
//          }else {
//            this.$dialog.alert({message: res.errorMessage});
//          }
//        })

    },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
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
