module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-pxtorem')({
      propList: ['*'],
      selectorBlackList: ['html'],
      replace: false,
      exclude: false,
    }),
    require('postcss-preset-env')({
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3,
      features: { 'custom-properties': false },
    }),
    require('postcss-hover-media-feature'),
  ],
};
