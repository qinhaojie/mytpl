<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'drag',
  data() {
    return {
      draging: false
    }
  },
  mounted() {
    let el = this._el = this.$slots.default[0].elm
    el.addEventListener('mousedown', this.onMousedown.bind(this))
    el.addEventListener('mousemove', this.onMousemove.bind(this))
    el.addEventListener('mouseup', this.onMouseup.bind(this))
  },
  methods: {
    onMousedown(e) {
      this.$emit('dragstart', 12)
      this.draging = true
    },
    onMousemove(e) {
      if(!this.draging) return

      console.log('move')
    },
    onMouseup(e) {
      if(!this.draging) return
      console.log('up')
      this.draging = false

    }
  }

}
</script>

<style>

</style>
