# UIKit Course

[![npm](https://img.shields.io/npm/v/@andersonkaiti/uikit?logo=npm&label=npm)](https://www.npmjs.com/package/@andersonkaiti/uikit)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

UI kit em React com Tailwind CSS, shadcn/ui e Storybook, criado durante um curso da JStack.

O repositório tem dois projetos independentes, cada um com seu próprio `package.json` e lockfile:

| Pasta                   | O que é                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| [`uikit/`](uikit)       | A biblioteca de componentes, publicada no npm como `@andersonkaiti/uikit`.                    |
| [`consumer/`](consumer) | Um app Vite + React que instala o pacote publicado, para testá-lo como um usuário de verdade. |

## Stack

| Categoria | Tecnologia | Onde é usada |
| ------------------ | ------------------------------------------------------------------------ | ------------ |
| Interface | [React 19](https://react.dev) e [TypeScript](https://www.typescriptlang.org) | `uikit`, `consumer` |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) e [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) | `uikit` |
| Componentes | [shadcn/ui](https://ui.shadcn.com) sobre [Base UI](https://base-ui.com), [CVA](https://cva.style) e [Lucide](https://lucide.dev) | `uikit` |
| Documentação | [Storybook](https://storybook.js.org) | `uikit` |
| Build da biblioteca | [tsup](https://tsup.egoist.dev) (ESM, CJS e tipos) e Tailwind CLI | `uikit` |
| App de teste | [Vite](https://vite.dev) | `consumer` |
| Qualidade de código | [Biome](https://biomejs.dev), [Husky](https://typicode.github.io/husky), [lint-staged](https://github.com/lint-staged/lint-staged) e [commitlint](https://commitlint.js.org) | `uikit`, `consumer` |
| Gerenciador de pacotes | [pnpm](https://pnpm.io) | todos |

## Começando

### Pré-requisitos

- [Node.js](https://nodejs.org) em uma versão LTS recente
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com)

### 1. Clonar o repositório

```sh
git clone https://github.com/andersonkaiti/uikit-course.git
cd uikit-course
```

### 2. Rodar a biblioteca no Storybook

É o fluxo principal para criar e visualizar os componentes.

```sh
cd uikit
pnpm install
pnpm dev
```

O Storybook abre em <http://localhost:6006>, com um seletor de tema claro/escuro.

### 3. Rodar o app de teste

Em outro terminal, a partir da raiz do repositório:

```sh
cd consumer
pnpm install
pnpm dev
```

O Vite mostra o endereço no terminal, normalmente <http://localhost:5173>.

> O `consumer` instala `@andersonkaiti/uikit` do npm. Alterações feitas em `uikit/` só aparecem nele depois que uma nova versão for publicada.

### Scripts do `uikit`

| Comando                | O que faz                                                         |
| ---------------------- | ----------------------------------------------------------------- |
| `pnpm dev`             | Inicia o Storybook na porta 6006.                                 |
| `pnpm build`           | Gera em `dist/` o JS (ESM e CJS), as definições de tipos e o CSS. |
| `pnpm build:storybook` | Gera uma versão estática do Storybook.                            |

## Usando o pacote

Instale no seu projeto:

```sh
pnpm add @andersonkaiti/uikit
```

Importe o CSS uma vez na entrada da aplicação e use os componentes:

```tsx
import '@andersonkaiti/uikit/index.css'
import { Button } from '@andersonkaiti/uikit'

export function App() {
  return <Button>Hello, JStack!</Button>
}
```

Componentes disponíveis: `Avatar`, `Button`, `DropdownMenu` e `Input`. Veja o [`uikit/README.md`](uikit/README.md) para entender como os pontos de entrada do pacote se relacionam com o build.
