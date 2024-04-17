Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página se atualiza automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

## Saiba Mais

Para aprender mais sobre o Next.js, dê uma olhada nos seguintes recursos:

- [Documentação Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - tutorial interativo do Next.js.


Você pode conferir [o repositório Next.js no GitHub](https://github.com/vercel/next.js/) - seus feedbacks e contribuições são bem-vindos!

## Deploy no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Platforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Documentação de uso do Modelo de Painel

### page.tsx

O arquivo `app/page.tsx` possui o State `[logged, setLogged]` que é utilizada para conferir se o usuário está ou não logado, este State também deve ser utilizado na função de login na página `views/Login.tsx` e no componente `components/base/EstBaseApp.tsx` para deslogar, também possui o State `[view, setView]` que é utilizada pelo componente `components/base/EstBaseApp.tsx` para renderizar as páginas e o menu apartir da constante `sectionUser` em `data/sections` no componente `components/base/Menu.tsx`

### EstBaseApp.tsx

Este componente passa suas props para o componente filho Navbar, que por sua vez passa suas props para Menu, que gera o elemento do menu para logout, que seta `localStorage.removeItem('@aplication')` como vazio, apartir da premissa de que localStorage seja utilizado para guardar os dados de login, além de gerar os outros elementos do menu apartir da constante que é pasado a este componente como props

### Logged.tsx

Esta View é responsável por gerenciar qual view será exibida, tendo como referência o valor de props.view, que é setado com o nome da label da constante que é utilizada como elementos que definirão o menu, caso este menu possua submenus, o valor da view será a label do item do menu, um espaço e a label do item do submenu

### Pastas `data` e `interfaces`

A pasta `data` possui no arquivo `sections.tsx` a constante se seção que gera o menu e a pasta `interfaces` possui as interfaces do menu e das views `Logged.tsx` e `Login.tsx`