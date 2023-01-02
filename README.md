# nuxt-feathers-pinia

The Nuxt module for [Feathers Pinia](https://v2.feathers-pinia.pages.dev)

## Installation

```bash
npm i feathers-pinia nuxt-feathers-pinia
```

Open `nuxt.config.ts` and add it to the `modules`:

```ts
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-feathers-pinia',
  ],
  // Allows you to put stores and models in their own folders
  imports: {
    dirs: [
      'stores',
      'models',
    ],
  },
  // Enable Nuxt Takeover Mode: https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    shim: false,
  },
  // optional: https://vuejs.org/guide/extras/reactivity-transform.html
  experimental: {
    reactivityTransform: true,
  },
})
```

## API Overview

This module provides two features:

- A set of composables for working with Feathers-Pinia and Nuxt
- Enables auto-import for key [Feathers-Pinia composables](https://v2.feathers-pinia.pages.dev/guide/nuxt-module)

## Development

The Nuxt development playground seems to be broken as of Jan 1, 2023. Instead of using the playground,
use the following instructions:

- just make the changes and run `npm pack` to get a `.tgz` file.
- copy the `.tgz` file into another project.
- run `npm i ./path-to-file.tgz`
- see if it works.
