module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/0_app',
          '@processes': './src/1_processes',
          '@screens': './src/2_screens',
          '@widgets': './src/3_widgets',
          '@features': './src/4_features',
          '@entities': './src/5_entities',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
