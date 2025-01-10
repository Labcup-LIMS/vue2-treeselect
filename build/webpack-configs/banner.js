const { version } = require('../../package')

const currentYear = new Date().getFullYear()
module.exports = `
vue2-treeselect v${version} | (c) 2017-${currentYear} Riophae Lee & 2025-${currentYear} Labcup Ltd
Released under the MIT License.
`.trim()
