<template>
  <section class="search-input">
    <div class="input-wrapper">
      <span class="icon iconfont icon-header-search"></span>
      <input
        class="input" 
        type="text" 
        :placeholder="placeholder" 
         @input="handleInput"
         v-model="keyword"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { SearchModel } from 'models/Search';
import tools from 'utils/tools';

export default {
  name: 'SearchInput',
  data () {
    return {
      keyword: '',
      placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    handleInput: tools.throttle(function () {
      const keyword = tools.trimSpace(this.keyword);
      if (keyword.length <= 0) {
        this.$emit('search', {});
      } else {
        const searchModel = new SearchModel();

        searchModel.searchAction(keyword, this.cityId).then((res) => {
          this.$emit('search', res);
        });
      }
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';
.search-input {
  height: $headerHeight;
  padding: .08rem .15rem;
  background-color: #fff;
  box-sizing: border-box;

  .icon {
    position: absolute;
    left: .1rem;
    top: .12rem;
    font-size: .16rem;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: .04rem;
      font-size: .14rem;
      text-indent: .32rem;
    }
  }
}
</style>