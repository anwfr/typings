# Typings for webpack-env
 - 'process.env.NODE_ENV' global variable, set in webpack configuration

## Webpack configuration (webpack.config.js)
```javascript

module.exports = {
  ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
  ...
}
```

## Usage
```javascript

console.log(process.env.NODE_ENV) // 'development'
```
