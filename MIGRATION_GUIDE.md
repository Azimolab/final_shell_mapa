# Guia de Migração de Componentes

Este guia explica como o projeto foi migrado de JavaScript vanilla para React e como adaptar outros componentes.

## 🔄 O que foi feito

### 1. Instalação de Dependências

```bash
npm install react react-dom
npm install @vitejs/plugin-react
```

### 2. Configuração do Vite

Criamos `vite.config.js` com o plugin React:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### 3. Estrutura de Componentes

#### Antes (JavaScript Vanilla)
```javascript
// main.js
function loadSVG(filename) {
  // manipulação direta do DOM
}
document.addEventListener('DOMContentLoaded', () => {
  loadSVG('2013.svg');
});
```

#### Depois (React)
```jsx
// App.jsx
function App() {
  const [selectedYear, setSelectedYear] = useState('2025');
  return (
    <div>
      <Toolbar onYearChange={setSelectedYear} />
      <SVGMap selectedYear={selectedYear} />
    </div>
  );
}
```

## 📦 Como Adaptar Componentes de Outros Projetos

### Passo 1: Copiar o Componente
Copie o arquivo `.jsx` para `src/components/`

### Passo 2: Verificar Dependências
- **mapData.json**: Adapte os dados para o formato do seu projeto
- **CSS**: Copie os arquivos `.css` necessários
- **Variáveis CSS**: Certifique-se que as variáveis CSS estão definidas

### Passo 3: Ajustar Props
Adapte as props do componente para se adequar ao estado da aplicação:

```jsx
// Componente original
<Toolbar
  selectedArea={selectedArea}
  selectedYear={selectedYear}
  onAreaSelect={handleAreaSelect}
/>

// Adaptar callbacks e estados conforme necessário
```

### Passo 4: Importar no App.jsx
```jsx
import NovoComponente from './components/NovoComponente';

function App() {
  return (
    <div>
      <NovoComponente prop1={value1} prop2={value2} />
    </div>
  );
}
```

## 🎯 Exemplo: Componente Toolbar

O componente `Toolbar.jsx` foi adaptado do projeto `clfI3Xc` com as seguintes modificações:

### Arquivos Necessários
- ✅ `Toolbar.jsx` - Componente principal
- ✅ `Toolbar.css` - Estilos
- ✅ `mapData.json` - Dados (adaptado)

### Adaptações Realizadas

1. **Estado dos botões de visibilidade**
   ```jsx
   // Adicionado classe condicional para indicar estado
   className={`toolbar-visibility-toggle ${activeLegendItems.exploration ? 'visible' : 'hidden'}`}
   ```

2. **Dados simplificados**
   ```json
   {
     "rio": {
       "Pre2013": true,
       "2013": true,
       "2025": true
     }
   }
   ```

3. **CSS Variables**
   Adicionadas no `Toolbar.css`:
   ```css
   :root {
     --grass-x: #90c695;
     --ocean-200: #4a90e2;
     --grey-800: #333333;
   }
   ```

## 🔍 Verificação

Após migrar um componente, verifique:

1. **Sem erros de lint**: `npm run dev` e verifique o console
2. **Estilos aplicados**: Confira se o CSS está sendo importado
3. **Props funcionando**: Teste as interações
4. **Estado sincronizado**: Verifique se as mudanças de estado se propagam

## 💡 Dicas

- Use React DevTools para debugar componentes
- Mantenha componentes pequenos e focados
- Extraia lógica complexa em hooks customizados
- Documente props com PropTypes ou TypeScript

## 🐛 Problemas Comuns

### Componente não renderiza
- Verifique se está importado corretamente
- Confira se todas as dependências estão instaladas
- Veja o console do navegador para erros

### Estilos não aplicados
- Certifique-se que o CSS está importado no componente
- Verifique conflitos de nomes de classes
- Confira se as variáveis CSS estão definidas

### Props não funcionam
- Verifique se as callbacks estão sendo passadas corretamente
- Use `console.log()` para debugar valores de props
- Confira se o estado está no componente certo

