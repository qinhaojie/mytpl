<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 ov-h">
        <my-canvas :data="elements" :class="{stop: !isRun}" @activeElementChange="setActiveIndex">sdfg</my-canvas>
      </div>
      <div class="col-md-4">
        <form>
          <div class="form-group" v-if="activeType === 'text'">
            <label>文本</label>
            <el-input  v-model="elements[activeIndex].props.domProps.innerHTML"></el-input>
          </div>
          <div class="form-group" v-if="activeType === 'text'">
            <label>字体大小</label>
            <el-input-number  v-model="elements[activeIndex].props.style.fontSize" :min="12" :max="240"></el-input-number>
          </div>
          <div class="form-group" v-if="activeType === 'text'">
            <label>颜色</label>
            <el-color-picker v-model="elements[activeIndex].props.style.color"></el-color-picker>
          </div>
          <div class="form-group" v-if="activeType === 'img'">
            <label>宽度</label>
            <el-slider v-model="elements[activeIndex].props.style.width" show-input :min="50" :max="1920"></el-slider>
          </div>
          <div class="form-group" v-if="activeType === 'img'">
            <label>高度</label>
            <el-slider v-model="elements[activeIndex].props.style.height" show-input :min="50" :max="1080"></el-slider>
          </div>
          <div class="form-group">
            <label>left</label>
            <el-slider v-model="elements[activeIndex].props.style.left" show-input :min="0" :max="1920"></el-slider>
          </div>
          <div class="form-group">
            <label>top</label>
            <el-slider v-model="elements[activeIndex].props.style.top" show-input :min="0" :max="1080"></el-slider>
          </div>

          <div class="form-group">
            <label>旋转</label>
            <el-slider v-model="elements[activeIndex].props.style.rotate" show-input :min="0" :max="360" @change="onChange"></el-slider>
          </div>
          <div class="form-group" v-if="activeType === 'img'">
            <upload :imageUrl="src" @urlChange="handleUrlChange"></upload>
          </div>
          <div class="form-group">
            <el-switch v-model="isRun" on-text="on" off-text="off">
            </el-switch>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import canvas from './Canvas'
import eventbus from '../common/eventbus'
import upload from './upload'
import data from '../mock/data'

const numberKyes = ['top', 'left', 'width', 'height', 'rotate', 'fontSize']
function generateComputedStyleProps() {
  let ret = {}
  const styleKey = ['width', 'height', 'top', 'left', 'color', 'rotate', 'fontSize']
  styleKey.forEach((key) => {
    ret[key] = function () {
      return this.elements[this.activeIndex].props.style[key] || 0
    }
  })
  return ret
}

export default {
  name: 'workspace',
  components: {
    "my-canvas": canvas,
    upload
  },
  computed: Object.assign({
    innerHTML() {
      return this.elements[this.activeIndex].props.domProps.innerHTML
    },
    src() {
      return this.elements[this.activeIndex].props.domProps.src
    },
    activeType() {
      return this.elements[this.activeIndex].type
    }
  }, generateComputedStyleProps()),
  data() {

    return {
      activeIndex: 0,
      isRun: false,
      elements: data
    }
  },
  methods: {
    styleChange(dom) {

      let key = dom.getAttribute('data-style')
      let valueMustBeNumber = numberKyes.includes(key)
      let value = valueMustBeNumber ? Number(dom.value) : dom.value
      this.$set(this.elements[this.activeIndex].props.style, key, value)
    },
    domPropsChange(dom) {
      let value = dom.value
      let key = dom.getAttribute('data-style')
      this.$set(this.elements[this.activeIndex].props.domProps, key, value)
    },
    setActiveIndex(i) {
      this.activeIndex = i
    },
    handleUrlChange(url) {
      this.$set(this.elements[this.activeIndex].props.domProps, 'src', url)
    },
    onChange(){
      console.log(arguments)
    }
  },
  mounted() {
    eventbus.$on('elementChange', (index, newEl) => {
      // this.elements[index] = newEl
      this.$set(this.elements, index, newEl)
      // this.elements[index].props.style.top = newEl.props.style.top
      // this.elements[index].props.style.left = newEl.props.style.left
      // console.log(newEl,this.elements[index])
    })
  }
}
</script>

<style scoped>
.ov-h {
  overflow: hidden;
}
</style>
