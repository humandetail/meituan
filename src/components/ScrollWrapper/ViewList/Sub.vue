<template>
  <div class="view-item">
    <router-link
      :to="{path: '/detail', query: {field: 'view', id: itemInfo.id}}"
      class="item-lk"
    >
      <div class="img">
        <img
          class="view-img"
          :src="itemInfo.img"
          :alt="itemInfo.name"
        />
      </div>
      <div class="info">
        <h1 class="title">{{ itemInfo.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(itemInfo.star)"></stars>
          <span class="score">
            {{ itemInfo.score }}分
          </span>
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
  name: 'ViewItem',
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

.view-item {
  width: 50%;
  padding: .1rem;
  box-sizing: border-box;

  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;

    .view-img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    .title {
      @include ellipsis;
      height: .3rem;
      line-height: .3rem;
      font-size: .16rem;
      color: $defaultBlack;
    }

    .stars {
      height: .3rem;
      line-height: .3rem;
      font-size: .14rem;
      color: #ccc;
    }

    .others {
      display: flex;
      justify-content: space-between;
      height: .3rem;
      line-height: .3rem;

      .item {
        font-size: .14rem;

        .price {
          font-size: .2rem;
          color: $defaultGreen;
          vertical-align: -.01rem;
        }
      }
    }
  }
}
</style>