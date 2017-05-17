export default
  [
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
          // clipPath: 'polygon(0 0,100% 100%,0 100%)'
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
          width: 400,
          height: 400,


          // clipPath: 'polygon(10% 0,45% 10%,100% 100%,0 100%)'
        },
        domProps: {
          src: '/static/2.png',
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
          src: 'http://img06.tooopen.com/images/20170321/tooopen_sy_202659171135.jpg'
        },
        'class': ['tpl-bg']
      }

    }
  ]
