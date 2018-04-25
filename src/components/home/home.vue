<template>
  <div>
    <m-header></m-header>
    <home-swiper :list="swiperList"></home-swiper>
    <icons :iconList="iconList"></icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import HomeSwiper from 'base/swiper/swiper'
import Icons from 'components/icons/icons'
import Recommend from 'components/recommend/recommend'
import Weekend from 'components/weekend/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
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
