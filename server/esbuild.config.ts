import * as esbuild from 'esbuild'
import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader'

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: '../dist/server.js',
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  platform: 'node',
  sourcemap: process.env.NODE_ENV === 'production',
  target: 'node14',
  logLevel: "info",
  plugins: [
    graphqlLoaderPlugin()
  ],
  watch: true
}).catch(() => process.exit(1))
