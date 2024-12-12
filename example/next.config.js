/**
 * Next Config
 */

const withTM = require('next-transpile-modules')([])

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  future: {
    webpack5: false
  }
}

module.exports = withPlugins([withBundleAnalyzer, withTM], nextConfig)
