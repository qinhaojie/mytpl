

<script>
import * as _ from 'lodash'

const type2NameMap = {
  img: 'img',
  text: 'div'
}

export default {
  name: 'element',
  props: ['el'],
  computed: {
    format() {
      let ret = _.cloneDeep(this.el)
      for (let key in ret.props.style) {
        let value = ret.props.style[key]
        if (key === 'rotate') {
          ret.props.style['transform'] = `rotate(${value}deg)`
          continue
        }
        if (key === 'animationDuration') {
          ret.props.style['animationDuration'] = `${value}s`
          continue
        }
        if (typeof value === 'number') {
          ret.props.style[key] = value + 'px'
        }
      }
      // 禁止图片的默认拖拽行为
      ret.props.attrs = {
        'draggable': false
      }
      ret.props.class = ['touch']
      return ret
    }
  },
  render(h) {
    return h(
      type2NameMap[this.el.type],
      Object.assign({}, this.format.props)
    )
  },
  mounted() {
    var hammertime = new Hammer(this.$el);
    hammertime.on('pan', function (ev) {
      console.log(ev.deltaX,ev.deltaY);
    })
  }
}
</script>

<style>

</style>
