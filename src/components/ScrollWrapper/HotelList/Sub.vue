<template>
  <div class="hotel-item border-bottom">
    <router-link
      :to="{path: '/detail', query: {field: 'hotel', id: itemInfo.id}}"
      class="item-lk"
    >
      <div class="img">
        <img
          class="hotel-img"
          :src="itemInfo.img"
          :alt="itemInfo.name"
        />
      </div>
      <div class="info">
        <h1 class="title">{{ itemInfo.name }}</h1>
        <p class="score">{{ itemInfo.score }}分</p>
        <p class="area">{{ itemInfo.area }}</p>
        <p class="others">
          <span class="item">
            ￥
            <span class="price">{{ itemInfo.default_price }}</span>
            起
          </span>
          <span class="item">{{ itemInfo.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotelItem',
  props: {
    itemInfo: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.hotel-item {
  position: relative;
  background-color: #fff;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: .1rem;
    box-sizing: border-box;
    overflow: hidden;

    .hotel-img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: .1rem .1rem 0 1.2rem;
    box-sizing: border-box;

    .title {
      @include ellipsis;
      width: 100%;
      line-height: .2rem;
      font-size: .18rem;
      color: $defaultBlack;
    }

    .score {
      line-height: .3rem;
      font-size: .16rem;
      color: $starColor;
    }

    .area {
      @include ellipsis;
      font-size: .14rem;
      color: #999;
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      margin-top: .1rem;
      line-height: .25rem;
      
      .item {
        font-size: .14rem;

        .price {
          font-size: .2rem;
        }

        &:first-child {
          color: $defaultGreen;
        }
      }
    }
  }
}
</style>