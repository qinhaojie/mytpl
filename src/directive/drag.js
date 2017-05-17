


export default {
  install(Vue) {
    Vue.directive('drag', {
      bind() {
        console.log('bind', this)
      },
      inserted(el) {
        console.log('inseted', this)
        el.addEventListener('click', function () {
          console.log(this)
        })
      }
    })
  }
}
