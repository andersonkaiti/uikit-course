import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  minify: true,
  clean: true,
  format: ['esm', 'cjs'],
  onSuccess: 'tsc -p tsconfig.build.json', // generates the type definition files
})
