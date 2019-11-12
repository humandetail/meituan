<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @search="handleSearch"></search-input>
    <search-scroll-wrapper :searchDatas="searchDatas"></search-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common';
import SearchInput from 'components/SearchInput/Index';
import SearchScrollWrapper from 'components/ScrollWrapper/Search';

import tools from 'utils/tools';

export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchInput,
    SearchScrollWrapper
  },
  data () {
    return {
      title: '商家搜索',
      searchDatas: {}
    }
  },
  methods: {
    handleSearch (res) {
      if (res && res.status === 0) {
        const data = res.data;
        data.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
        this.searchDatas = data;
      } else {
        this.searchDatas = res;
        console.log(this.searchDatas);
      }
    }
  }
}
</script>