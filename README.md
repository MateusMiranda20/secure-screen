# 💻 Frontend - Tela Segura

Este é o frontend da aplicação **Tela Segura**, desenvolvido com React.js. A interface se conecta ao backend via **WebSocket** e garante que **somente um usuário por vez possa acessar a tela** de forma interativa e em tempo real.

---

## Tecnologias utilizadas

- React.js
- Socket.IO Client
- Styled-components
- Vite
- Axios

---

## Funcionalidades principais

- Interface clara para o usuário solicitar ou liberar o acesso à tela.
- Exibe status em tempo real: "tela livre", "ocupada", "você tem o controle".
- Conexão automática com o backend via WebSocket.
- Mensagens visuais e botões para gerenciar o acesso.

---

## Estrutura de pastas

frontend-secure-screen/
├── public/
├── src/
│ ├── App.jsx # Componente principal
│ ├── main.jsx # Ponto de entrada
│ ├── services/socket.js # Configuração do Socket.IO Client
│ └── styles/ # Estilos com styled-components
├── package.json
└── README.md

---

## ▶️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/frontend-secure-screen.git
cd frontend-secure-screen

2. Instale as dependências

npm install

3. Inicie o projeto

yarn dev

O frontend estará disponível em: http://localhost:5173

## Comunicação com o backend

Conecta via socket.io-client no endereço http://localhost:3001

Usa os seguintes eventos para sincronização:

request_access

access_granted

access_denied

access_locked

release_access

access_unlocked

