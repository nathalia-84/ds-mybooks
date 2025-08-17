# 📚 DS MyBooks - Design System

Um Design System moderno para aplicações relacionadas a livros, desenvolvido com React, TypeScript, Vite e Storybook.

## 🚀 Tecnologias

- **⚛️ React 19** - Biblioteca para interfaces de usuário
- **📘 TypeScript** - Superset JavaScript com tipagem estática
- **⚡ Vite** - Build tool moderna e rápida
- **📖 Storybook** - Ferramenta para desenvolvimento de componentes UI
- **💅 Styled Components** - CSS-in-JS para estilização
- **🎨 React Icons** - Biblioteca de ícones para React
- **🧪 Vitest** - Framework de testes unitários
- **🎭 Playwright** - Testes end-to-end
- **📋 ESLint** - Linter para qualidade de código
- **🚀 Auto** - Automação de releases e versionamento
- **📱 Design Responsivo** - Adaptado para diferentes tamanhos de tela

## 📦 Componentes

### MbBotao

Componente de botão customizável com duas variações:

- **Primário**: Estilo principal com fundo laranja
- **Secundário**: Estilo alternativo com fundo transparente

### MbTag

Componente de tag/etiqueta para categorização e identificação visual de elementos.

### MbGrupoOpcoes

Componente que exibe um grupo de opções interativas com seleção única:

- Estado interno para gerenciar seleção
- Suporte a callback `onChange`
- Valor padrão configurável
- Design visual destacado para item selecionado

### MbCampoTexto

Componente de campo de texto avançado com recursos completos:

- **Tipos**: Email e Password
- **Toggle de senha**: Ícone para mostrar/ocultar senha
- **Estados visuais**: Normal, erro, foco, desabilitado
- **Callbacks**: `onChange` e `onBlur`
- **Responsivo**: Adaptado para desktop, tablet e mobile
- **Acessibilidade**: Labels, titles e navegação por teclado

### MbInputQuantidade

Componente para seleção de quantidade com controles intuitivos:

- **Botões**: Aumentar (+) e diminuir (-)
- **Limites**: Configuração de valores mínimo e máximo
- **Estado controlado**: Gerenciamento interno da quantidade
- **Validação**: Desabilita botões nos limites
- **Responsivo**: Design adaptativo para diferentes telas

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/ds-mybooks.git

# Entre na pasta do projeto
cd ds-mybooks

# Instale as dependências
npm install
```

## 🏃‍♂️ Como executar

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

### Storybook

```bash
# Inicia o Storybook para visualizar os componentes
npm run storybook
```

### Build

```bash
# Gera a build de produção
npm run build

# Gera a build da biblioteca para distribuição
npm run build:lib
```

### Testes

```bash
# Executa os testes
npm run test
```

### Release (Automação)

```bash
# Informações sobre o próximo release
npm run info

# Gera changelog automaticamente
npm run changelog

# Calcula e aplica a próxima versão
npm run version

# Release completo (usado no CI/CD)
npm run release
```

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── MbBotao/            # Componente de botão
│   │   └── index.tsx
│   ├── MbTag/              # Componente de tag
│   │   └── index.tsx
│   ├── MbGrupoOpcoes/      # Componente de grupo de opções
│   │   └── index.tsx
│   ├── MbCampoTexto/       # Componente de campo de texto
│   │   └── index.tsx
│   └── MbInputQuantidade/  # Componente de input de quantidade
│       └── index.tsx
├── stories/                # Stories do Storybook
│   ├── MbBotao.stories.tsx
│   ├── MbTag.stories.tsx
│   ├── MbGrupoOpcoes.stories.tsx
│   ├── MbCampoTexto.stories.tsx
│   └── MbInputQuantidade.stories.tsx
└── assets/                 # Recursos estáticos
    └── ...
```

## 🎨 Design System

Este projeto faz parte do curso da Alura sobre Design Systems e inclui:

- ✅ **Componentes tipados** com TypeScript
- ✅ **Documentação interativa** com Storybook
- ✅ **Design responsivo** para mobile, tablet e desktop
- ✅ **Acessibilidade** com navegação por teclado e ARIA
- ✅ **Testes automatizados** com Vitest e Playwright
- ✅ **Linting e formatação** de código
- ✅ **Build otimizada** para produção e distribuição
- ✅ **CI/CD automatizado** com GitHub Actions
- ✅ **Versionamento semântico** com Auto
- ✅ **Publicação automática** no npm

## 🚀 Distribuição

Este Design System pode ser instalado como um pacote npm:

```bash
npm install @nathalia-84/ds-mybooks
```

### Uso

```tsx
import {
  MbBotao,
  MbCampoTexto,
  MbInputQuantidade,
} from "@nathalia-84/ds-mybooks";

function App() {
  return (
    <div>
      <MbCampoTexto label="Email" tipo="email" placeholder="seu@email.com" />

      <MbInputQuantidade
        quantidadeInicial={1}
        minimo={1}
        maximo={10}
        onChange={(qty) => console.log(qty)}
      />

      <MbBotao
        tipo="primario"
        texto="Confirmar"
        onClick={() => alert("Clicou!")}
      />
    </div>
  );
}
```

---

💡 **Desenvolvido como parte do curso de Design System da Alura**
