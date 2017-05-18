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
          src: '/static/3.png',
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
          innerHTML: '端午节就来蚂蚁风暴'

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
          src: '/static/2.jpg'
        },
        'class': ['tpl-bg']
      }

    }
  ]
