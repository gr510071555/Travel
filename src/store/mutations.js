export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      alert('您的浏览器不支持本地存储')
    }
  }
}
