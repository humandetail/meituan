<template>
  <section class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <template v-if="!errorShow">
        <category-icons></category-icons>

        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list>

        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list>

        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>

        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageDatas="homeDatas.massageDatas"></massage-list>

        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvDatas="homeDatas.ktvDatas"></ktv-list>
      </template>
      <error :errorShow="errorShow"></error>
    </div>
  </section>
</template>

<script>
import BetterScroll from 'better-scroll';
import tools from 'utils/tools';
import { mapState } from 'vuex';
import { IndexModel } from 'models/Index';

import Error from './Sub/Error';
import CategoryIcons from './CategoryIcons/Index';
import HomeTitle from './Sub/HomeTitle';
import ViewList from './ViewList/Index';
import FoodList from './FoodList/Index';
import HotelList from './HotelList/Index';
import MassageList from './MassageList/Index';
import KtvList from './KtvList/Index';

export default {
  name: 'HomeScrollWrapper',
  components: {
    Error,
    CategoryIcons,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList
  },
  data () {
    return {
      currentCity: 0,
      errorShow: false,
      homeTitle: {
        viewTitle: '推荐景点',
        foodTitle: '推荐美食',
        hotelTitle: '推荐酒店',
        massageTitle: '推荐按摩',
        ktvTitle: '推荐KTV'
      },
      homeDatas: {
        viewDatas: [],
        foodDatas: [],
        hotelDatas: [],
        massageDatas: [],
        ktvDatas: []
      }
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    getHomeDatas (cityId) {
      this.currentCity = cityId;
      const indexModel = new IndexModel();
      indexModel.getHomeDatas(cityId).then((res) => {
        if (res && res.status === 0) {
          const data = res.data;
          
          this.errorShow = false;

          this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
          this.homeDatas.viewDatas = data.viewDatas;
          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.massageDatas = data.massageDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
        } else {
          this.errorShow = true;
          console.error(res.error);
        }
      });
    }
  },
  mounted () {
    this.getHomeDatas(this.cityId);
  },

  activated () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    
    if (this.currentCity !== this.cityId) {
      this.getHomeDatas(this.cityId);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>