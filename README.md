

# Simulador de Empréstimo - Angular 7

## 📋 Descrição
Sistema web desenvolvido em Angular para simulação de empréstimos pessoais. O projeto possui uma interface responsiva que se adapta a diferentes tamanhos de tela, oferecendo uma experiência otimizada tanto para desktop quanto para dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

- Angular 7.2.0
- Angular Material 7.3.7 
- TypeScript
- CSS
- HTML5

## 📦 Estrutura do Projeto

```src/
├── app/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── entities/
│       └── loan/
│           ├── loan-confirmation/
│           ├── loan-form/
│           ├── loan-success/
│           ├── models/
│           ├── loan.module.ts
│           └── loan.service.ts
├── assets/
└── environments/
```

## ⚙️ Funcionalidades

- **Simulação de Empréstimo**
  - Formulário para entrada de dados do solicitante
  - Cálculo automático de parcelas e juros
  - Visualização do resultado da simulação

- **Confirmação de Empréstimo**
  - Modal de confirmação com detalhes da simulação
  - Botões de confirmação e cancelamento

- **Tela de Sucesso**
  - Exibição dos detalhes do empréstimo contratado
  - Opção para realizar nova simulação

## 💻 Pré-requisitos

- Node.js (versão 10.x ou superior)
- NPM (versão 6.x ou superior)
- Angular CLI 7.3.10

## Instale as dependências
```
npm install --legacy-peer-deps
```

### Instale o Angular Material
```
npm install --save @angular/material@7.3.7 @angular/cdk@7.3.7 @angular/animations@7.2.0
```

### Execute o projeto
```
ng serve
```

Para gerar o svg por de tras do form foi usado https://www.blobmaker.app/
