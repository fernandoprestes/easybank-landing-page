module.exports = {
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(45, 49, 77, 0.5)',
        base: {
          400: '#bdbec7',
          500: '#9698A6',
        },
      },
      width: {
        192: '48rem',
      },
      height: {
        120: '30rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2D314D',
          'primary-focus': '##7E85B4',
          'primary-content': '#ffffff',

          secondary: '#31D35C',
          'secondary-focus': '#125424',
          'secondary-content': '#ffffff',

          accent: '#2BB7DA',
          'accent-focus': '#0C3A45',
          'accent-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#F3F4F6',
          'base-300': '#dedfe3',
          'base-content': '#1c1d21',
        },
      },
    ],
  },
}
