module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify")
    }
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    vm: true
  }
};
