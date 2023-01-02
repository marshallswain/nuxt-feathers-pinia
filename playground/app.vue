<script setup lang="ts">
// import type { ModelInstance, AnyData } from 'feathers-pinia'

import { useModel } from './.nuxt/imports'

// const modelFn = (data: ModelInstance<AnyData>) => {
//   const withDefaults = useInstanceDefaults({ description: '', isComplete: false }, data)
//   return withDefaults
// }
// const Task = useBaseModel<Tasks, TasksQuery, typeof modelFn>({ name: 'Task', idField: '_id' }, modelFn)

const test = useModel('Name', () => { })
</script>

<template>
  <div>
    Nuxt module playground!
  </div>
</template>
