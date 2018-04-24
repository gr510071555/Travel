<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
          imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/D5/47/Cii-TliAJF-IKyGZAM_5xfqSjJgAAG1PAAAAAAAz_nd826_w320_h180_c0_t0.jpg',
          title: '<张家界-大峡谷玻璃桥-天门山玻璃栈道-凤凰高铁4日游>',
          desc: '广州往返，0自费，漫步双玻璃道长廊，沱江边城浪漫凤凰古城，赏湘西民俗大戏魅力湘西'
        },
        {
          id: '0002',
          imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/D5/47/Cii-TliAJF-IKyGZAM_5xfqSjJgAAG1PAAAAAAAz_nd826_w320_h180_c0_t0.jpg',
          title: '[五一]<昆明-大理-丽江-版纳4飞8日游>',
          desc: '丽江直飞版纳舒适环飞，蜜月鲜花大床，smart自驾/洱海旅拍，玉龙雪山观景酒店，原始森林探秘'
        },
        {
          id: '0003',
          imgUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/D5/47/Cii-TliAJF-IKyGZAM_5xfqSjJgAAG1PAAAAAAAz_nd826_w320_h180_c0_t0.jpg',
          title: '<云南昆明-丽江-玉龙雪山-泸沽湖-大理7日游>',
          desc: '纯玩0购物，泡温泉SPA，乘洱海大游船，猪槽船游泸沽湖/篝火打跳，观丽水金沙，玉龙雪山登顶'
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
  .item-img-wrapper
    height: 0
    padding-bottom: 33.9%
    overflow: hidden
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
