<template>
  <div class="ticket-bd">
    <detail-title 
      title="购票信息"
      icon="icon-intro"
    ></detail-title>

    <div class="ticket-info">{{ ticketInfo }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title';
export default {
  name: 'DetailTicketInfo',
  components: {
    DetailTitle
  },
  props: {
    ticketInfo: {
      type: String,
      default () {
        return '玩命加载中...';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ticket-bd {
  margin-top: .1rem;

  .ticket-info {
    padding: .1rem .15rem;
    background-color: #fff;
    line-height: .18rem;
    font-size: .14rem;
    text-indent: 2em;
  }
}
</style>