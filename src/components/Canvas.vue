<template>
  <div class="canvas-container unselectable" ref="canvasContainer">
    <div class="canvas rounded border mx-auto" ref="canvas">
      <Drag @dragstart="start" v-for="(item,index) in data" :key="index">
        <tpl-element  :el="item" @click.native="$emit('activeElementChange',index)" class="abs"></tpl-element>
      </Drag>
    </div>
  </div>
</template>

<script>
import tplElement from './Element'
import Drag from './Drag'
export default {
  name: 'canvas',
  components: {
    tplElement,
    Drag
  },
  methods: {
    onMove: function (e) {
      console.log(this, e)
    },
    start() {
      console.log(arguments)
    }
  },
  mounted() {
    let canvas = this.$refs.canvas
    let copyContainer = this.$refs.copyContainer
    let p = canvas.parentElement
    // bootstrap默认的15px padding
    let width = p.clientWidth - 30
    canvas.style.transform = `scale(${width / 1920})`


  },
  props: {
    data: Array
  }
}
</script>

<style>
.canvas {
  background: #fff;
  height: 1080px;
  width: 1920px;
  position: relative;
  transform-origin: 0 0;
  overflow: hidden;
}

.stop .animated {
  animation-duration: initial !important;
  animation-fill-mode: initial;
}
</style>
