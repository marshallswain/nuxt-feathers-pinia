import { defineNuxtPlugin } from '#app'
import type { FP } from '../types'

export default defineNuxtPlugin(() => {
  const fp: FP = { models: {} }
  return { provide: { fp } }
})
