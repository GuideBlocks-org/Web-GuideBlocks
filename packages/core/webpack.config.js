module.exports = function (baseConfig) {
  baseConfig.module.rules[2].options.transpileOnly = false;
  baseConfig.module.rules[3].oneOf[4].use.splice(0, 1);
  baseConfig.target = 'web';
  return {
    ...baseConfig,
    module: {
      ...baseConfig.module,
      rules: [...baseConfig.module.rules],
    },
  };
};
