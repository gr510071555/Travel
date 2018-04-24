<template>
  <div>
    <city-list></city-list>
    <city-search></city-search>
  </div>
</template>

<script>
import CityList from 'components/cityList/cityList'
import CitySearch from 'base/search/search'
export default{
  components: {
    CityList,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
