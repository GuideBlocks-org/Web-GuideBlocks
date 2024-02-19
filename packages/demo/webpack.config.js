module.exports = function (baseConfig) {
  baseConfig.module.rules[3].oneOf[4].use.splice(0, 1);
  return {
    ...baseConfig,
    module: {
      ...baseConfig.module,
      rules: [...baseConfig.module.rules],
    },
  };
};
