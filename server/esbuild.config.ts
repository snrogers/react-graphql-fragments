import * as esbuild from 'esbuild'
import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader'

const buildOptions: esbuild.BuildOptions = {
  entryPoints: ['./src/index.ts'],
  outfile: './dist/server.js',
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  platform: 'node',
  sourcemap: process.env.NODE_ENV === 'production',
  target: 'node14',
  logLevel: "info",
  plugins: [
    graphqlLoaderPlugin()
  ],
  watch: !!process.env.WATCH
}

esbuild.build(buildOptions).catch(() => process.exit(1))
