const fs = require('fs')
const path = require('path')
const shallowEqual = require('shallow-equal/arrays')
const config = require('./config')

const expectedDistFiles = [
  'vue2-treeselect.cjs.js',
  'vue2-treeselect.cjs.js.map',
  'vue2-treeselect.umd.js',
  'vue2-treeselect.umd.js.map',
  'vue2-treeselect.css',
  'vue2-treeselect.css.map',
  'vue2-treeselect.cjs.min.js',
  'vue2-treeselect.cjs.min.js.map',
  'vue2-treeselect.umd.min.js',
  'vue2-treeselect.umd.min.js.map',
  // Currently there is no SourceMap for the minified CSS file.
  'vue2-treeselect.min.css',
]
const actualFiles = fs.readdirSync(config.library.assetsRoot)
if (!shallowEqual(expectedDistFiles.sort(), actualFiles.sort())) {
  throw new Error('Built files are not as expected.')
}

function readFile(fileName) {
  return fs.readFileSync(path.join(config.library.assetsRoot, fileName))
}

function shouldReplaceEnvOrNot(fileName, expected) {
  const source = readFile(fileName)
  const actual = !source.includes('process.env.NODE_ENV')

  if (expected !== actual) {
    throw new Error(`${fileName} was not built correctly.`)
  }
}
shouldReplaceEnvOrNot('vue2-treeselect.umd.js', true)
shouldReplaceEnvOrNot('vue2-treeselect.umd.min.js', true)
shouldReplaceEnvOrNot('vue2-treeselect.cjs.js', false)
shouldReplaceEnvOrNot('vue2-treeselect.cjs.min.js', true)

function shouldReplaceCssEasings(fileName) {
  const source = readFile(fileName)

  if (!source.includes('cubic-bezier(')) {
    throw new Error(`${fileName} was not built correctly.`)
  }
}
shouldReplaceCssEasings('vue2-treeselect.css')
shouldReplaceCssEasings('vue2-treeselect.min.css')
