a = {
  // 界面元素
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
      // 元素类型
      type: 'text',
      id: 13,
      // dom的各种描述
      props: {
        style: {
          width: 200,
          height: 30,

          color: '#3da21a',
          fontSize: 92,
          position: 'absolute',
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

  ],
  // 编译好的html
  compiled: '<html>.........</html>'

}
