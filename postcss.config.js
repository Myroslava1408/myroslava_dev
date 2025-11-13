// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['inset'],
      replace: true,
      mediaQuery: false,
      exclude: /node_modules/i,
    },
  },
}
