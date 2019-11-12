<template>
  <section class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <template v-if="!errorShow">
        <view-list
          v-if="field === 'view'"
          :viewDatas="listDatas[cityId]"
        ></view-list>

        <food-list
          v-if="field === 'food'"
          :foodDatas="listDatas[cityId]"
        ></food-list>
        
        <hotel-list
          v-if="field === 'hotel'"
          :hotelDatas="listDatas[cityId]"
        ></hotel-list>
        
        <massage-list
          v-if="field === 'massage'"
          :massageDatas="listDatas[cityId]"
        ></massage-list>
        
        <ktv-list
          v-if="field === 'ktv'"
          :ktvDatas="listDatas[cityId]"
        ></ktv-list>

        <loading :loadingShow="loadingShow"></loading>
      </template>
      <error :errorShow="errorShow"></error>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { ListModel } from 'models/List';
import tools from 'utils/tools';
import BetterScroll from 'better-scroll';

import ViewList from './ViewList/Index';
import FoodList from './FoodList/Index';
import HotelList from './HotelList/Index';
import MassageList from './MassageList/Index';
import KtvList from './KtvList/Index';
import Loading from './Sub/Loading';
import Error from './Sub/Error';

export default {
  name: 'ListScrollWrapper',
  components: {
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
    Error
  },
  computed: {
    ...mapState(['cityId', 'field'])
  },
  data () {
    return {
      errorShow: false,
      loadingShow: true,
      listDatas: {}
    }
  },
  methods: {
    getListDatas (cityId, field) {
      if (!this.listDatas[cityId]) {
        this.loadingShow = true;
        this.errorShow = false;

        const listModel = new ListModel();

        listModel.getListDatas(cityId, field).then((res) => {
          if (res && res.status === 0) {
            const data = tools.formatJSON(res.data, 'keyword');

            setTimeout(() => {
              this.listDatas[cityId] = data;
              this.loadingShow = false;
            }, 300);
          } else {
            this.errorShow = true;
            console.error(res.error);
          }
        });
      }
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);

    this.getListDatas(this.cityId, this.field);
  },
  watch: {
    cityId () {
      this.getListDatas(this.cityId, this.field);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>