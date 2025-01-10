# vue2-treeselect
[![npm](https://badgen.now.sh/npm/v/@labcup-lims/vue2-treeselect)](https://www.npmjs.com/package/@labcup-lims/vue2-treeselect) [![Build](https://badgen.now.sh/circleci/github/labcup-lims/vue2-treeselect)](https://circleci.com/gh/labcup-lims/vue2-treeselect/tree/master)
![npm monthly downloads](https://badgen.now.sh/npm/dm/@labcup-lims/vue2-treeselect)
![jsDelivr monthly hits](https://badgen.net/jsdelivr/hits/npm/@labcup-lims/vue2-treeselect) [![Known vulnerabilities](https://snyk.io/test/npm/@labcup-lims/vue2-treeselect/badge.svg)](https://snyk.io/test/npm/@labcup-lims/vue2-treeselect) ![License](https://badgen.net/github/license/labcup-lims/vue2-treeselect)

> A multi-select component with nested options support for Vue.js (v2)

![Vue2-Treeselect Screenshot](https://raw.githubusercontent.com/riophae/vue-treeselect/master/screenshot.png)

### Features

- Single & multiple select with nested options support
- Fuzzy matching
- Async searching
- Delayed loading (load data of deep level options only when needed)
- Keyboard support (navigate using <kbd>Arrow Up</kbd> & <kbd>Arrow Down</kbd> keys, select option using <kbd>Enter</kbd> key, etc.)
- Rich options & highly customizable
- Supports a wide range of browsers (see [below](#browser-compatibility))
- RTL support

*Requires Vue 2.2+*

### Getting Started

It's recommended to install vue2-treeselect via npm, and build your app using a bundler like [webpack](https://webpack.js.org/).

```bash
npm install --save @labcup-lims/vue2-treeselect
```

This example shows how to integrate vue2-treeselect with your [Vue SFCs](https://vuejs.org/v2/guide/single-file-components.html).

```vue
<template>
  <div id="app">
    <treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
  // import the component
  import Treeselect from '@labcup-lims/vue2-treeselect'
  // import the styles
  import '@labcup-lims/vue2-treeselect/dist/vue2-treeselect.css'

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      }
    },
  }
</script>
```

If you just don't want to use webpack or any other bundlers, you can simply include the standalone UMD build in your page. In this way, make sure Vue as a dependency is included before vue2-treeselect.

```html
<html>
  <head>
    <!-- include Vue 2.x -->
    <script src="https://cdn.jsdelivr.net/npm/vue@^2"></script>
    <!-- include vue2-treeselect & its styles. you can change the version tag to better suit your needs. -->
    <script src="https://cdn.jsdelivr.net/npm/@labcup-lims/vue2-treeselect@^0.5.2/dist/vue2-treeselect.umd.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labcup-lims/vue2-treeselect@^0.5.2/dist/vue2-treeselect.min.css">
  </head>
  <body>
    <div id="app">
      <treeselect v-model="value" :multiple="true" :options="options" />
    </div>
  </body>
  <script>
    // register the component
    Vue.component('treeselect', VueTreeselect.Treeselect)

    new Vue({
      el: '#app',
      data: {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      },
    })
  </script>
</html>
```

### Documentation & Live Demo

[Visit the website](https://vue-treeselect.js.org/)

Note: please use a desktop browser since the website hasn't been optimized for mobile devices.

### Browser Compatibility

- Chrome
- Edge
- Firefox
- IE ≥ 9
- Safari

It should function well on IE9, but the style can be slightly broken due to the lack of support of some relatively new CSS features, such as `transition` and `animation`. Nevertheless it should look 90% same as on modern browsers.

### Bugs

You can use this [pen](https://codepen.io/nagyjano/pen/qEWoNmE) to reproduce bugs and then [open an issue](https://github.com/labcup-lims/vue2-treeselect/issues/new).

### Contributing

1. Fork & clone the repo
2. Install dependencies by `yarn` or `npm install`
3. Check out a new branch
4. `npm run dev` & hack
5. Make sure `npm test` passes
6. Push your changes & file a pull request

### Credits

This project is inspired by [vue-multiselect](https://github.com/monterail/vue-multiselect), [react-select](https://github.com/JedWatson/react-select) and [Ant Design](https://github.com/ant-design/ant-design/). Special thanks go to their respective authors!

Some icons used in this project:

  - "link" icon made by [Smashicons](https://www.flaticon.com/authors/smashicons) is licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
  - "spinner" icon from [SpinKit](https://github.com/tobiasahlin/SpinKit) is licensed under the [MIT License](https://github.com/tobiasahlin/SpinKit/blob/master/LICENSE)
  - "caret" icon made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) is licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
  - "delete" icon made by [Freepik](https://www.flaticon.com/authors/freepik) is licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
  - "checkmark symbol" & "minus symbol" icons made by [Catalin Fertu](https://www.flaticon.com/authors/catalin-fertu) are licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)

### License

Copyright (c) 2017-2020 [Riophae Lee](https://github.com/riophae).
Copyright (c) 2025-2025 [Labcup Ltd](https://github.com/labcup-lims).

Released under the [MIT License](https://github.com/labcup-lims/vue2-treeselect/blob/master/LICENSE).
