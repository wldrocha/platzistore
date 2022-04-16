module.exports = {
  reactStrictMode: true,
  basePath: '/dist',
  compress: true,
  async redirects() {
    return {
      source: '/hola',
      destination: '/hi',
      permanent: true,
    }
  },
}
