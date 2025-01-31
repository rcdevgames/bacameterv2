const presets = ['module:@react-native/babel-preset']
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ]
]

module.exports = {
  presets,
  plugins,
}
