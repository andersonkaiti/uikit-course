# @andersonkaiti/uikit

React UI kit built with Tailwind CSS, shadcn/ui and Storybook.

## Usage

```tsx
import '@andersonkaiti/uikit/index.css'
import { Button } from '@andersonkaiti/uikit'
```

## Package entry points

`pnpm build` (tsup) writes everything to `dist/`, and only `dist/` is published (`files`).

| Import                              | Resolves to           | Built by                                   |
| ----------------------------------- | --------------------- | ------------------------------------------ |
| `import ... from '...uikit'`        | `dist/index.js`       | tsup, `esm` format (package is `type: module`) |
| `require('...uikit')`               | `dist/index.cjs`      | tsup, `cjs` format                         |
| types                               | `dist/index.d.ts`     | `tsc -p tsconfig.build.json` (`onSuccess`) |
| `import '...uikit/index.css'`       | `dist/index.css`      | Tailwind CLI from `src/build.css` (`onSuccess`) |

`main`, `module` and `types` are fallbacks for tools that ignore `exports`. Inside `exports`, `types` comes first so TypeScript matches it before the other conditions.

## Scripts

- `pnpm dev`: Storybook on port 6006
- `pnpm build`: bundles JS, type definitions and compiled CSS into `dist/`
- `pnpm build:storybook`: static Storybook build
