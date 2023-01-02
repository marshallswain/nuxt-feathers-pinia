import type { ModelInstance, AnyData } from 'feathers-pinia'

const useUserModel = () => {
  return useModel('User', () => {
    const modelFn = (data: ModelInstance<AnyData>) => {
      const withDefaults = useInstanceDefaults({ description: '', isComplete: false }, data)
      return withDefaults
    }
    const Task = useBaseModel<Tasks, TasksQuery, typeof modelFn>({ name: 'Task', idField: '_id' }, modelFn)
    return Task
  })
}
