<template>
  <div class="container">
    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
  </div>
</template>

<script>
import HomeHeader from 'components/Header/Home';
import HomeScrollWrapper from 'components/ScrollWrapper/Home';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScrollWrapper
  }
}
</script>
