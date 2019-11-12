<template>
  <div class="food-item border-bottom">
    <router-link
      :to="{path: '/detail', query: {field: 'food', id: itemInfo.id}}"
      class="item-lk"
    >
      <div class="img">
        <img
          :src="itemInfo.img"
          :alt="itemInfo.name"
          class="food-img"
        />
      </div>
      <div class="info">
        <h1 class="title">{{ itemInfo.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(itemInfo.star)"></stars>
          <span class="price">￥{{ itemInfo.default_price }}/人</span>
        </p>
        <p class="keywords">
          <span
            class="badge"
            v-for="(item, index) of itemInfo.keyword"
            :key="index"
          >
            {{ item }}
          </span>
        </p>
        <p class="others">
          <span class="item">{{ itemInfo.field }}</span>
          <span class="item">{{ itemInfo.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from 'components/ScrollWrapper/Sub/Stars';

export default {
  name: 'FoodItem',
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
.food-item {
  position: relative;
  background-color: #fff;
  box-sizing: border-box;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: .1rem;
    box-sizing: border-box;

    .food-img {
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
      line-height: .3rem;
      font-size: .14rem;
    }

    .keywords {
      height: .3rem;
      line-height: .2rem;
      overflow: hidden;

      .badge {
        margin-left: .05rem;
        padding: 0 .05rem;
        background-color: #fbf4e4;
        color: #be9e4d;
        font-size: .14rem;

        &:first-child {
          margin: 0;
        }
      }
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      line-height: .25rem;
      font-size: .14rem;
    }
  }
}
</style>