<template>
  <treeselect :options="options" :multiple="true" v-model="selected" :expandParentsInMenuForSelected="true" />
</template>

<script>
  import { generateOptions } from '../utils'

  export default {
    data: () => ({
      options: generateOptions(3),
      selected: ['aaa', 'bbb', 'ccc']
    }),
  }
</script>
