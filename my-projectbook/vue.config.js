module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
}