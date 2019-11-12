<template>
  <section class="swiper-wrapper">
    <swiper :options="swiperOptions" v-if="picDatas.length > 0">
      <swiper-slide
        v-for="(item, index) of picDatas"
        :key="index"
      >
        <img
          class="swiper-img"
          :src="item" alt="swiper-img"
        /> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'DetailSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    picDatas: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.swiper-wrapper >>> .swiper-pagination {
  background-color: $defaultGreen;
}

.swiper-wrapper{
  height: 0;
  padding-bottom: 2rem;
  background-color: #ddd;
}

.swiper-container {
  height: 2rem;
}

.swiper-slide {
  height: 100%;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>