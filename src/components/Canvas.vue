<template>
  <div class="canvas-container" ref="canvasContainer">
    <div class="canvas rounded border mx-auto" ref="canvas">
      <tpl-element v-for="(item,index) in data" :key="index" :el="item" @click.native="$emit('activeElementChange',index)" class="abs"></tpl-element>
      <div class="copy-container" ref="copyContainer">

      </div>
    </div>
  </div>
</template>

<script>
import tplElement from './Element'

export default {
  name: 'canvas',
  components: {
    tplElement
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
