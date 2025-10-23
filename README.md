# Shell Mapa - Projeto React

Aplicação React para visualização de mapas interativos da Shell com blocos marítimos e infraestrutura.

## 🚀 Tecnologias

- **React** 18.x
- **Vite** 7.x
- **JavaScript/JSX**

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build

Para criar uma versão de produção:

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
final_shell_mapa/
├── public/              # Arquivos SVG dos mapas
│   ├── 2025.svg
│   ├── 2013.svg
│   └── Pre2013.svg
├── src/
│   ├── components/      # Componentes React
│   │   ├── Toolbar.jsx
│   │   ├── Toolbar.css
│   │   ├── SVGMap.jsx
│   │   └── SVGMap.css
│   ├── data/
│   │   └── mapData.json # Dados dos mapas
│   ├── App.jsx          # Componente principal
│   ├── App.css
│   ├── main.js          # Ponto de entrada
│   └── style.css        # Estilos globais
├── index.html
├── vite.config.js
└── package.json
```

## ✨ Funcionalidades

- **Visualização de Mapas**: Exibe mapas SVG interativos
- **Filtros de Legenda**: Controle de visibilidade de blocos marítimos
  - Em exploração (vermelho)
  - Em produção (verde)
  - Em descomissionamento (cinza)
- **Seleção de Áreas**: Navegação entre diferentes áreas geográficas
- **Responsivo**: Interface adaptável

## 🎨 Componentes

### App.jsx
Componente raiz que gerencia o estado global da aplicação e coordena os componentes filhos.

### Toolbar.jsx
Barra lateral com:
- Seletor de áreas
- Legenda de blocos marítimos
- Legenda de infraestrutura
- Informações adicionais

### SVGMap.jsx
Componente responsável por:
- Carregar e exibir mapas SVG
- Aplicar filtros de visibilidade
- Gerenciar interações com o mapa

## 🔧 Personalização

Para adicionar novos mapas SVG:
1. Adicione o arquivo `.svg` na pasta `public/`
2. Atualize o mapeamento em `SVGMap.jsx`
3. Atualize os dados em `src/data/mapData.json`

## 📝 Notas

- Os mapas são carregados dinamicamente do diretório `public/`
- Os filtros são aplicados através de classes CSS nos elementos SVG
- O estado é gerenciado através de React Hooks (useState, useEffect)
