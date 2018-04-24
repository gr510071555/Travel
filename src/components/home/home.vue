<template>
  <div>
    <m-header></m-header>
    <home-swiper></home-swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import HomeSwiper from 'base/swiper/swiper'
import Icons from 'components/icons/icons'
import Recommend from 'components/recommend/recommend'
import Weekend from 'components/weekend/weekend'
export default {
  components: {
    MHeader,
    HomeSwiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style>

</style>
