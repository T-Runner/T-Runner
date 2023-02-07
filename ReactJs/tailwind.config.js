const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ct4-subscribe': "url('https://evogym.vn/wp-content/uploads/2021/08/youngfitnesscenter-evogym-setup-phong-gym-banner-aspect-ratio-1300-500.jpg')",
      },
      colors: {
        'ct4-orange-start': '#f26922',
        'ct4-orange': '#e67e22',
        'ct4-facebook': '#4267b2',
        'ct4-green': '#39ac31',
        'ct4-red': '#c20000',
        'ct4-red-1': '#ff0000',
        'ct4-gray': '#d9d9d9',
        'ct4-gray-2': '#f3f3f3',
        'ct4-gray-3': '#888888',
        'ct4-gray-4': '#f6f6f6',
        'ct4-mossy-green': '#151515',
        'ct4-green-neon': '#a0e50f',
        'ct4-green-2': '#f3ffe7',
        'ct4-green-3': '#598300',
        'ct4-green-4': '#d8decc',
        'ct4-border-gray': '#ececec',
        'ct4-border-gray-2': '#d0d0d0',
        'ct4-dark-green': '#457900',
      },
      fontFamily: {
        'tnr': '"Times New Roman"',
        'barlow-regular': ['Barlow-Regular'],
        'barlow-medium': ['Barlow-Medium'],
        'barlow': ['Barlow'],
      },
      fontSize: {
        28: '28px'
      },
      height: {
        '60px': '60px',
        '72px': '72px',
        100: '100px',
        180: '180px',
        200: '200px',
        320: '320px',
        400: '400px',
        480: '480px',
        913: '913px'
      },
      margin: {
        0.35: '35%',
        '30px': '30px',
        30: '120px',
        '50px': '50px',
        350: '350px'
      },
      maxWidth: {
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        1400: '1400px',
        1800: '1800px'
      },
      minWidth: {
        280: '280px',
        400: '400px',
        1600: '1600px'
      }
      ,
      minHeight: {
        200: '200px',
        250: '250px'
      },
      padding: {
        30: '120px',
        186: '186px',
        240: '240px'
      },
      width: {
        0.3: '30%',
        100: '100px',
        140: '140px',
        189: '189px',
        200: '200px',
        272: '272px',
        288: '288px',
        250: '250px',
        330: '330px',
        400: '400px',
        420: '420px',
        500: '500px',
        600: '600px',
        650: '650px',
        800: '800px',
      },
    },
  },
  plugins: [],
}