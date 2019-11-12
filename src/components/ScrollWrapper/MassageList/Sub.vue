<template>
  <div class="massage-item border-bottom">
    <router-link
      :to="{path: '/detail', query: {field: 'massage', id: itemInfo.id}}"
      class="item-lk"
    >
      <div class="img">
        <img
          :src="itemInfo.img"
          :alt="itemInfo.name"
          class="massage-img"
        />
      </div>
      <div class="info">
        <h1 class="title">{{ itemInfo.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(itemInfo.star)"></stars>
          <span class="score"> {{ itemInfo.score }}分</span>
        </p>
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
import Stars from 'components/ScrollWrapper/Sub/Stars';

export default {
  name: 'MassageItem',
  components: {
    Stars
  },
  props: {
    itemInfo: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
.massage-item {
  position: relative;
  background-color: #fff;
  box-sizing: border-box;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: .1rem;
    box-sizing: border-box;

    .massage-img {
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
      height: .2rem;
      line-height: .2rem;
      font-size: .18rem;
      color: $defaultBlack;
    }

    .stars {
      line-height: .5rem;
      font-size: .14rem;
      color: $starColor;
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      line-height: .35rem;
      font-size: .14rem;

      .price {
        font-size: .2rem;
        color: $defaultOrange;
      }
    }
  }
}
</style>