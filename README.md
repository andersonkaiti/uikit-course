# @andersonkaiti/uikit

[![npm](https://img.shields.io/npm/v/@andersonkaiti/uikit?logo=npm&label=npm)](https://www.npmjs.com/package/@andersonkaiti/uikit)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

Biblioteca de componentes React construída com Tailwind CSS e shadcn/ui, com tipos em TypeScript e suporte a tema claro e escuro.

## Instalação

```sh
pnpm add @andersonkaiti/uikit
```

`react` e `react-dom` (16.8 ou mais novo) são peer dependencies.

## Uso

Importe o CSS uma vez, na entrada da aplicação, e use os componentes:

```tsx
import '@andersonkaiti/uikit/index.css'
import { Button } from '@andersonkaiti/uikit'

export function App() {
  return <Button>Hello, JStack!</Button>
}
```

O pacote declara `sideEffects: false`, então o bundler remove o que você não importar (tree shaking).

## Componentes

| Componente     | Exports                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------- |
| `Avatar`       | `Avatar`, `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount` |
| `Button`       | `Button`, `buttonVariants`                                                                  |
| `DropdownMenu` | `DropdownMenu` e seus subcomponentes                                                        |
| `Input`        | `Input`                                                                                     |

O `Button` aceita as variantes `default`, `outline`, `secondary`, `ghost`, `destructive` e `link`, e os tamanhos `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm` e `icon-lg`:

```tsx
;<Button variant="outline" size="sm">
  Cancelar
</Button>
```

## Tema

O tema escuro é ativado com a classe `dark` em um elemento pai, por exemplo `<html class="dark">`.

Se o seu app também usa Tailwind v4, importe o preset para ter os mesmos tokens do kit (cores, raios, fonte e a variante `dark`). No CSS do app:

```css
@import "tailwindcss";
@import "@andersonkaiti/uikit/tailwind-preset";
@import "@andersonkaiti/uikit/index.css";
```

## Pontos de entrada

| Import                                 | Conteúdo                                  |
| -------------------------------------- | ----------------------------------------- |
| `@andersonkaiti/uikit`                 | Componentes (ESM e CJS) e tipos.          |
| `@andersonkaiti/uikit/index.css`       | Estilos compilados dos componentes.       |
| `@andersonkaiti/uikit/tailwind-preset` | Tokens do tema para usar no seu Tailwind. |
