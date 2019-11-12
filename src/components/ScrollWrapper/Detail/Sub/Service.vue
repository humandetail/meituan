<template>
  <div class="service-bd">
    <detail-title 
      title="商家服务"
      icon="icon-service"
    ></detail-title>

    <div class="service">
      <p class="item">
        停车场：{{ parking }}
      </p>
      <p class="item">
        WIFI：{{ wifi }}
      </p>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title';
export default {
  name: 'DetailService',
  components: {
    DetailTitle
  },
  props: {
    service: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  computed: {
    parking () {
      return this.service.parking ? '有' : '无';
    },
    
    wifi () {
      return this.service.wifi ? '有' : '无';
    }
  }
}
</script>

<style lang="scss" scoped>
.service-bd {
  margin-top: .1rem;

  .service {
    padding: .1rem .15rem;
    background-color: #fff;
    line-height: .24rem;
    font-size: .14rem;
  }
}
</style>