import run from '@rollup/plugin-run'
import babel from 'rollup-plugin-babel'
import localResolve from 'rollup-plugin-local-resolve'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel(),
    localResolve(),
    dev &&
      run({
        execArgv: ['-r', 'dotenv/config']
      })
  ]
}

// https://hoangvvo.com/blog/node-es6-without-nodemon-and-babel/

// package.json
//   > scripts
// "start": "node bundle.js",
// "build": "NODE_ENV=production rollup -c",cls
// "dev": "rollup -c -w"
