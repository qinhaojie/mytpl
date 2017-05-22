var a =
  {
    // 模板名
    name: 'tpl1',
    // 预览图地址
    preview: '/static/tplImg/01/preview.jpg',
    // 模板内元素信息
    data: [
      {
        // 元素类型，目前暂定：图片img、文本text两种
        type: 'img',
        id: 1,
        // 元素作用，目前暂定： 普通组件component、背景元素background、二维码code三种
        role: 'component',
        // 元素的各种样式属性,用于最终渲染
        props: {
            top: 10,
            left: 10,
            width: 328,
            height: 114,
            src: '/static/tplImg/01/logo.png',
        }
      },
      {
        type: 'text',
        id: 13,
        role: 'component',
        props: {
            fontFamily: 'STFangsong',
            color: '#000',
            fontSize: 50,
            top: 370,
            left: 343,
        }
      },
    ]
  }
