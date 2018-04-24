<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://m.tuniucdn.com/fb2/t1/G5/M00/8B/F0/Cii-slqooSOIFMNlABNOeczElxYAAEO8APejmcAE06R813_w80_h80_c1_t0.jpg',
          title: '[五一](桂林-阳朔-兴坪漓江-象鼻山-世外桃源-银子岩动车3日游)广州往返 专车专导 0自费 豪餐盛景 鸡血玉 最佳质量 口碑爆款',
          desc: '高铁往返 100%成团 遇龙河双漂 20元背景 探秘王府 椿记烧鹅 '
        },
        {
          id: '0002',
          imgUrl: 'http://m.tuniucdn.com/fb2/t1/G5/M00/8B/F0/Cii-slqooSOIFMNlABNOeczElxYAAEO8APejmcAE06R813_w80_h80_c1_t0.jpg',
          title: '[五一](桂林-阳朔-兴坪漓江-象鼻山-世外桃源-银子岩动车3日游)广州往返 专车专导 0自费 豪餐盛景 鸡血玉 最佳质量 口碑爆款',
          desc: '高铁往返 100%成团 遇龙河双漂 20元背景 探秘王府 椿记烧鹅 '
        },
        {
          id: '0003',
          imgUrl: 'http://m.tuniucdn.com/fb2/t1/G5/M00/8B/F0/Cii-slqooSOIFMNlABNOeczElxYAAEO8APejmcAE06R813_w80_h80_c1_t0.jpg',
          title: '[五一](桂林-阳朔-兴坪漓江-象鼻山-世外桃源-银子岩动车3日游)广州往返 专车专导 0自费 豪餐盛景 鸡血玉 最佳质量 口碑爆款',
          desc: '高铁往返 100%成团 遇龙河双漂 20元背景 探秘王府 椿记烧鹅 '
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        padding: 0 .2rem
        margin-top: .16rem
        line-height: .44rem
        background: #ff9300
        border-radius: .06rem
        color: #fff
</style>
