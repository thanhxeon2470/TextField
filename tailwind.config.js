module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bule-356':'#344356',
        'blue-A3A':'#1E2A3A',
        'blue-18A': '#5E718A',
        'blue-DAF': '#919DAF',
        'red-336': '#F44336',
      },
      inset: {
        '45.45': '45.45%',
        '31.25':'31.25%',
        '81.25':'81.25%',
        '0': '0%',
        '27.08':'27.08%',
        'clac': 'calc(50% - 288px/2)',
      },
      width: {
        '288': '288px',
        '264': '264px',
      },
      lineHeight: {
        '150': '150%',
        '160': '160%',
      },
      fontFamily: {
        'inter': ['Inter']
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['active'],
    },
  },
  plugins: [],
}
