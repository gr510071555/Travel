let defaultCity = '长沙'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  alert('您的浏览器不支持本地存储')
}

export default {
  city: defaultCity
}
