<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from 'base/banner/banner'
import DetailHeader from 'components/detail-header/detail-header'
export default {
  components: {
    Banner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
