import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  minify: true,
  clean: true,
  format: ['esm', 'cjs'],
  onSuccess: [
    'tsc -p tsconfig.build.json',
    'tailwindcss -i ./src/build.css -o ./dist/index.css --minify',
  ].join(' && '),
})
