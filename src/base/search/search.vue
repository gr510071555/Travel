<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" :placeholder="placeholder">
    </div>
    <div class="search-content" ref="searchContent" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '输入城市名或拼音'
    },
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchContent)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
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
  .search-content
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background: #eee
    z-index: 1
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
