import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', 'src/preset.css'],
  minify: true,
  clean: true,
  format: ['esm', 'cjs'],
  tsconfig: 'tsconfig.app.json',
  onSuccess: [
    'tsc -p tsconfig.build.json',
    'tailwindcss -i ./src/build.css -o ./dist/index.css --minify',
  ].join(' && '),
})
