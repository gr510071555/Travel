<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <alphabet></alphabet>
  </div>
</template>

<script>
import CityHeader from 'base/city-header/city-header'
import CityList from 'base/cityList/cityList'
import CitySearch from 'base/search/search'
import Alphabet from 'base/alphabet/alphabet'
export default{
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
