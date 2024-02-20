const { join } = require('path');
const basePreset = require('../../tailwind.preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/*.ts')],
  presets: [basePreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
