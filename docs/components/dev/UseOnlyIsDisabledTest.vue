<template>
  <treeselect
    :options="options"
    v-model="selected"
    :expandParentsInMenuForSelected="true"
    :useOnlyIsDisabled="true"/>
</template>

<script>
  import { generateOptions } from '../utils'

  let options = generateOptions(3)
  options[2].children[2].isDisabled = true

  export default {
    data: () => ({
      options: options,
      selected: ['ccc']
    }),
  }
</script>
