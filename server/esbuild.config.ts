import * as esbuild from 'esbuild'
import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader'

esbuild.build({
  entryPoints: ['./index.ts'],
  outfile: '../dist/server.js',
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  platform: 'node',
  sourcemap: process.env.NODE_ENV === 'production',
  target: 'node14',
  logLevel: "info",
  plugins: [
    graphqlLoaderPlugin()
  ]
}).catch(() => process.exit(1))
