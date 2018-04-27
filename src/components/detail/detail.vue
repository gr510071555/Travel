<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import Banner from 'base/banner/banner'
import DetailHeader from 'components/detail-header/detail-header'
import DetailList from 'components/detail-list/detail-list'
export default {
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票 - 某一连锁店销售'
                }
              ]
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        }
      ]
    }
  },
  components: {
    Banner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
