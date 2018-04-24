<template>
  <div class="search">
    <input class="search-input" type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '输入城市名或拼音'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/variable.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      padding: 0 .1rem
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
      box-sizing: border-box
</style>
