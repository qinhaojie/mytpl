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
          rotate: 60,
          animationDuration: 1,
          animationName:'zoomOutUp'
          // clipPath: 'polygon(0 0,100% 100%,0 100%)'
        },
        domProps: {
          src: '/static/3.png',
        },
        'class': ['infinite', 'animated']
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
          rotate: 0,
          animationName: 'wobble',
          animationDuration: 1

          // clipPath: 'polygon(10% 0,45% 10%,100% 100%,0 100%)'
        },
        domProps: {
          src: '/static/2.png',
        },
        'class': ['infinite', 'animated']
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
          animationDuration: 1,
          animationName: 'flipInX'
        },
        domProps: {
          innerHTML: '端午节就来蚂蚁风暴'

        },
        'class': ['infinite', 'animated']
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

    },
    {
      type: 'img',

      id: 13,
      props: {
        style: {
          width: 160,
          height: 160,
          top: 800,
          left: 1600,
          rotate: 0,
          animationName:''
        },
        domProps: {
          src: '/static/1.jpg'
        },
        'class': []
      }

    }
  ]
