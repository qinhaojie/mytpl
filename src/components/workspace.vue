<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2" >
        <img :src="item.preview" class="img-responsive" v-for="(item,index) in tplList" :key="item.name" @click="setActiveTplIndex(index)"/>
      </div>
      <div class="col-md-7 ov-h">
        <my-canvas :data="tplList[activeTplIndex].data" :class="{stop: !isRun}" @activeElementChange="setActiveIndex">sdfg</my-canvas>
      </div>
      <div class="col-md-3">
        <el-form label-width="80px">
          <el-form-item label="文本" v-if="activeType === 'text'">
            <el-input v-model="tplList[activeTplIndex].data[activeElementIndex].props.domProps.innerHTML"></el-input>
          </el-form-item>
          <el-form-item label="文本大小" v-if="activeType === 'text'">
            <el-input-number v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.fontSize" :min="12" :max="240"></el-input-number>
          </el-form-item>
          <el-form-item label="字体" v-if="activeType === 'text'">
            <el-select v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.fontFamily">
              <el-option v-for="option in fontFamily" :key="option.key" :value="option.key" :style="{fontFamily: option.key}" :label="option.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="颜色" v-if="activeType === 'text'">
            <el-color-picker v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.color"></el-color-picker>
          </el-form-item>
          <el-form-item label="宽度" v-if="activeType === 'img'">
            <el-slider v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.width" show-input :min="50" :max="1920"></el-slider>
          </el-form-item>
          <el-form-item label="高度" v-if="activeType === 'img'">
            <el-slider v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.height" show-input :min="50" :max="1080"></el-slider>
          </el-form-item>
          <el-form-item label="left">
            <el-slider v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.left" show-input :min="-300" :max="1920"></el-slider>
          </el-form-item>
          <el-form-item label="top">
            <el-slider v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.top" show-input :min="-300" :max="1080"></el-slider>
          </el-form-item>
          <el-form-item label="旋转">
            <el-slider v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.rotate" show-input :min="0" :max="360"></el-slider>
          </el-form-item>
          <el-form-item label="动画种类">
            <el-select v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.animationName">
              <el-option v-for="name in animateNames" :key="name" :value="name" :label="name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="动画时间">
            <el-slider v-model="tplList[activeTplIndex].data[activeElementIndex].props.style.animationDuration" :step="0.1" show-input :min="0" :max="15"></el-slider>
          </el-form-item>
          <el-form-item v-if="activeType === 'img'" label="替换图片">
            <upload :imageUrl="src" @urlChange="handleUrlChange"></upload>
          </el-form-item>
          <el-form-item label="开启动画">
            <el-switch v-model="isRun" on-text="on" off-text="off">
            </el-switch>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import canvas from './Canvas'
import eventbus from '../common/eventbus'
import upload from './upload'
import fontFamily from '../config/fontFamily.config'
import tplList from '../config/tplList.config'
import animateNames from '../config/animate.config'
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
  computed: {
    activeType() {
      return this.tplList[this.activeTplIndex].data[this.activeElementIndex].type
    },
    src() {
      var domProps = this.tplList[this.activeTplIndex].data[this.activeElementIndex].props.domProps

      return domProps ? domProps.src : ''
    }
  },
  data() {

    return {
      animateNames,
      fontFamily,
      activeElementIndex: 0,
      activeTplIndex: 0,
      isRun: false,
      tplList
    }
  },
  methods: {
    setActiveTplIndex(i) {
      this.activeElementIndex = 0
      this.activeTplIndex = i
    },
    setActiveIndex(i) {
      this.activeElementIndex = i
    },
    handleUrlChange(url) {
      this.$set(this.tplList[this.activeTplIndex].data[this.activeElementIndex].props.domProps, 'src', url)
    }
  },
  mounted() {
    eventbus.$on('elementChange', (index, newEl) => {
      this.$set(this.tplList[this.activeTplIndex].data, index, newEl)
    })
  }
}
</script>

<style>
.ov-h {
  overflow: hidden;
}
</style>
