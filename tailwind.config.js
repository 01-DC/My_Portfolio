module.exports = {
  purge: [
    './index.html',
    './about.html',
    './projects.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s ease-in-out infinite'
      },

      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-3%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(3%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      transform: ['hover'],
      display: ['hover'],
      filter: ['hover'],
      grayscale: ['hover'],
    },
  },
  plugins: [],
}
