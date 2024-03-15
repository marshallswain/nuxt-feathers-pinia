import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-feathers-pinia',
    configKey: 'feathersPinia',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addPlugin(resolve(runtimeDir, 'plugin'))

    const from = resolve(runtimeDir, 'composables/index')
    const autoImports = [
      'createPiniaClient',
      'defineGetters',
      'defineSetters',
      'defineValues',
      'useAuth',
      'useBackup',
      'useDataStore',
      'useInstanceDefaults',
      'useServiceInstance'
    ]

    addImports(autoImports.map(name => ({ from, name })))
  }
})
