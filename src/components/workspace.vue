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
            <input type="text" :value="innerHTML" data-style="innerHTML" @input="domPropsChange($event.target)" class="form-control">
          </div>
          <div class="form-group" v-if="activeType === 'text'">
            <label>字体大小</label>
            <input type="range" min="12" max="240" :value="fontSize" data-style="fontSize" @input="styleChange($event.target)" class="form-control">
          </div>
          <div class="form-group" v-if="activeType === 'text'">
            <label>颜色</label>
            <input type="color" :value="color" data-style="color" @input="styleChange($event.target)" class="form-control">
          </div>
          <div class="form-group" v-if="activeType === 'img'">
            <label>宽度</label>
            <input type="text" min="50" max="1920" :value="width" data-style="width" @input="styleChange($event.target)" class="form-control">
          </div>
          <div class="form-group" v-if="activeType === 'img'">
            <label>高度</label>
            <input type="text" min="50" max="1080" :value="height" data-style="height" @input="styleChange($event.target)" class="form-control" />
          </div>
          <div class="form-group">
            <label>left</label>
            <input type="range" min="0" max="1920" :value="left" data-style="left" @input="styleChange($event.target)" class="form-control" />
          </div>
          <div class="form-group">
            <label>top</label>
            <input type="range" min="0" max="1080" :value="top" data-style="top" @input="styleChange($event.target)" class="form-control" />
          </div>

          <div class="form-group">
            <label>旋转</label>
            <input type="range" min="0" max="360" :value="rotate" data-style="rotate" @input="styleChange($event.target)" class="form-control" />
          </div>

          <div class="btn btn-default" @click="isRun = !isRun"> {{isRun ? '停止动画':'启动动画'}}</div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import canvas from './Canvas'
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
    "my-canvas": canvas
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
      elements: [
        {
          type: 'img',
          id: 12,
          props: {
            style: {
              top: 20,
              left: 50,
              width: 800,
              height: 600,
              position: 'absolute',
              transform: 'rotate(50deg)',
              clipPath: 'polygon(0 0,100% 100%,0 100%)'
            },
            domProps: {
              src: 'http://www.mayifengbao.com:3000/img/hot-screen.jpg',
            },
            'class': ['zoomOutUp', 'infinite', 'animated']
          }
        },
        {
          type: 'img',
          id: 12,
          props: {
            style: {
              top: 200,
              left: 500,
              width: 756,
              height: 455,


              clipPath: 'polygon(10% 0,45% 10%,100% 100%,0 100%)'
            },
            domProps: {
              src: 'http://ant-storm.oss-cn-shenzhen.aliyuncs.com/bucket-antstorm/antstorm/10058/10058/10058-1493779983767-image.jpg',
            },
            'class': ['wobble', 'infinite', 'animated']
          }
        },
        {
          type: 'text',
          id: 13,
          props: {
            style: {

              rotate: 40,
              color: '#3da21a',
              fontSize: 92,
              top: 500,
              left: 400,
              animationDuration: '3s'
            },
            domProps: {
              innerHTML: 'adsfasdf'

            },
            'class': ['flipInX', 'infinite', 'animated']
          }
        },
        {
          type: 'img',
          role: 'background',
          id: 13,
          props: {
            style: {
            },
            domProps: {
              src: '/static/1.jpg'
            },
            'class': ['tpl-bg']
          }

        }
      ]
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
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.ov-h {
  overflow: hidden;
}
</style>
