const { join } = require('path');
const tailwindCss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindCss({ config: join(__dirname, 'tailwind.config.js') }),
    autoprefixer,
  ],
};
