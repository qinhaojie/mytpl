<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'drag',
  props: ['index'],
  mounted() {
    let el = this._el = this.$slots.default[0].elm

    el.addEventListener('mousedown', this.onMousedown.bind(this))
    el.addEventListener('mousemove', this.onMousemove.bind(this))
    el.addEventListener('mouseup', this.onMouseup.bind(this))
  },
  created() {
    this.draging = false
    this.pageX = 0
    this.pageY = 0
    this.delX = 0
    this.delY = 0
  },
  methods: {
    onMousedown(e) {
      // this.$emit('dragstart', 12)
      this.draging = true
      this.originalPostiton = {
        x: parseInt(this._el.style.left),
        y: parseInt(this._el.style.top)
      }
      this.pageX = e.pageX
      this.pageY = e.pageY
    },
    onMousemove(e) {
      if (!this.draging) return
      this.delX = e.pageX - this.pageX
      this.delY = e.pageY - this.pageY
      this._el.style.left = this.originalPostiton.x + this.delX + 'px'
      this._el.style.top = this.originalPostiton.y + this.delY + 'px'
    },
    onMouseup(e) {
      if (!this.draging) return
      this.draging = false
      this.$emit('dragend', this.index, {
        left: parseInt(this._el.style.left),
        top: parseInt(this._el.style.top)
      })
      this.pageX = 0
      this.pageY = 0
      this.delX = 0
      this.delY = 0
      e.preventDefault()
    }
  }

}
</script>

<style>

</style>
