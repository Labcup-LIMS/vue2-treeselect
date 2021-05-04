<template>
  <treeselect
    :options="options"
    :multiple="true"
    v-model="selected"
    :expandParentsInMenuForSelected="true"
    :scrollPositionOnCenter="true"
    :showNodeWhenNoSelection="'bbc'"/>
</template>

<script>
  import { generateOptions } from '../utils'

  export default {
    data: () => ({
      options: generateOptions(3, 5),
      selected: ['eec']
    }),
  }
</script>
