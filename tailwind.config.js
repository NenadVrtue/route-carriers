module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'display':['Bebas Neue', 'cursive'],
      'body':['Roboto', 'sans-serif']
    },
    extend: {
      screens:{
        '3xl':'1700px'
      },

     fontSize:{
      'big': '4.875rem',
      'big-m': '3.125rem',
      'sub': '1.625rem',
     },
     margin:{
     '26': '1.688rem',
     '50%':'50%'
     },
      colors:{
        'main-red':'#EC202B',
        
        'main-red-hover':'#BC1922',
        'main-blue':'#01143A',
      },
      zIndex:{
         '-10': '-10',
        },
        
      spacing:{
        '330' : '20.625rem'
      },
      animation:{
        'pulse-1':'pulse 1.75s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'pulse-2':'pulse 2.25s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
       translate: {
         '1/5': '20%',
         
        }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}
