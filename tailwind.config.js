/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: ["./*.html"],
  theme: {
    extend: {
      

     
      keyframes:{
        wiggle:{
          'from': {
            transform:'scaleX(0)'},
          'to': {transform:'scaleX(1)'},
        }
      },
      animation: {
        btnAnimate: 'wiggle 0.5s ease-out ',
      },
      
      
      backgroundColor:{
        "darkBlue":"#0a5273",
        "lightBlue":"#1374a0"
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

