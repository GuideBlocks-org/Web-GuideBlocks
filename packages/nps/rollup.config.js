const postCss = require('rollup-plugin-postcss');
const { join } = require('path');

const postCssConfig = require(join(__dirname, 'postcss.config.js'));

module.exports = function (config) {
  let postCssIndex;
  config.plugins.find(
    (plugin, idx) => ((postCssIndex = idx), plugin.name === 'postcss')
  );
  config.plugins.splice(postCssIndex, 1, postCss(postCssConfig));

  return config;
};
