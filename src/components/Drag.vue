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
    // new Draggable (el, {
    //   onDragEnd: this.onDragEnd.bind(this)
    // });
  },
  methods: {

    onDragEnd(el,x,y,e) {
      this.$emit('dragend', this.index, {
        left: x,
        top: y
      })
      e.preventDefault()
    }
  }

}
</script>

<style>

</style>
