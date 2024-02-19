module.exports = function (baseConfig) {
  return {
    ...baseConfig,
    module: {
      ...baseConfig.module,
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.css$/i,
          type: 'asset/source',
        },
      ],
    },
  };
};
