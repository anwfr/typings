# Typings for accessing 'process.env.NODE_ENV' (value configured in webpack)

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
