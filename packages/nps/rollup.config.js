const postCss = require('rollup-plugin-postcss');
const { join } = require('path');
const tailwindCss = require('tailwindcss');

module.exports = function (config) {
  let postCssIndex;
  config.plugins.find(
    (plugin, idx) => ((postCssIndex = idx), plugin.name === 'postcss')
  );
  config.plugins.splice(
    postCssIndex,
    1,
    postCss({
      plugins: [
        tailwindCss({
          config: join(__dirname, 'tailwind.config.js'),
        }),
      ],
    })
  );

  return config;
};
