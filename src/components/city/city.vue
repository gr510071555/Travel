<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from 'base/city-header/city-header'
import CityList from 'base/cityList/cityList'
import CitySearch from 'base/search/search'
import Alphabet from 'base/alphabet/alphabet'
export default{
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  components: {
    CityHeader,
    CityList,
    CitySearch,
    Alphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
