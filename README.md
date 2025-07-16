Gerenciamento de Usuários com Next.js e Redux
Este projeto é uma aplicação web para listar e gerenciar informações de usuários, com funcionalidades de busca, detalhamento e favoritos, consumindo dados de uma API pública.

🚀 Objetivo do Projeto
O principal objetivo é demonstrar a construção de uma aplicação web moderna utilizando Next.js e integrando-se à API pública JSONPlaceholder para gerenciar uma lista de usuários. A ênfase está na aplicação de boas práticas de desenvolvimento e na utilização de tecnologias específicas para gerenciamento de estado e estilização.

✨ Funcionalidades
A aplicação oferece as seguintes funcionalidades principais:

Listagem de Usuários: Exibe uma lista de usuários com informações básicas (nome, email, telefone).

Pesquisa Dinâmica: Permite filtrar a lista de usuários pelo nome através de um campo de busca.

Detalhes do Usuário: Ao clicar em um item da lista, é possível visualizar informações mais detalhadas do usuário (endereço, empresa e outros dados fornecidos pela API).

Lista de Favoritos: Funcionalidade para adicionar e remover usuários de uma lista de favoritos, que é gerenciada no estado global da aplicação.

Indicador de Carregamento: Exibe um loader enquanto os dados estão sendo carregados da API.

🛠️ Detalhes Técnicos e Tecnologias
Este projeto foi desenvolvido com foco nas seguintes tecnologias e padrões de arquitetura:

Next.js (App Router): Framework React para aplicações web de alto desempenho, utilizando o novo App Router para roteamento e renderização.

TypeScript: Linguagem de programação para garantir a tipagem estática e melhorar a robustez do código.

Styled Components: Biblioteca para estilização de componentes React, permitindo CSS-in-JS e facilitando a manutenção de estilos.

Redux: Biblioteca para gerenciamento de estado global da aplicação, centralizando os dados e facilitando o fluxo de informações.

Redux Sagas: Middleware para Redux, utilizado para lidar com efeitos colaterais assíncronos, como chamadas à API, de forma organizada e testável.

Componentes de Classe: Pelo menos um componente foi implementado como componente de classe (React "antigo") para demonstrar a compatibilidade e o uso de padrões orientados a objetos. Os demais componentes são funcionais.

Configuração de API: Para fins de teste e simplicidade, a API pública JSONPlaceholder é acessada diretamente no código, não sendo necessário configurar um arquivo .env para chaves de API ou URLs.

Estrutura da Aplicação
A aplicação é organizada em duas telas principais:

Tela Inicial (/): Exibe a lista de usuários com funcionalidades de pesquisa e filtro por favoritos.

Tela de Detalhe (/users/[id]): Mostra as informações completas de um usuário específico.

Regras de Implementação
Persistência: Os dados (incluindo a lista de favoritos) não são persistidos localmente (ex: Local Storage) e são resetados ao recarregar a página.

Design: O foco da estilização está na correta aplicação do Styled Components, não na criação de um design complexo.

🚀 Primeiros Passos
Para rodar o projeto em sua máquina local, siga os passos abaixo:

Clone o repositório:

git clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DA_PASTA_DO_PROJETO]

Instale as dependências:

npm install

# ou

yarn install

# ou

pnpm install

# ou

bun install

Inicie o servidor de desenvolvimento:

npm run dev

# ou

yarn dev

# ou

pnpm dev

# ou

bun dev

Abra http://localhost:3000 em seu navegador para ver a aplicação em funcionamento.

Você pode começar a editar as páginas modificando os arquivos em app/. As alterações são atualizadas automaticamente.

Este projeto utiliza next/font para otimizar e carregar fontes automaticamente.

📚 Saiba Mais
Para aprender mais sobre Next.js, consulte os seguintes recursos:

Next.js Documentation - Aprenda sobre os recursos e a API do Next.js.

Learn Next.js - Um tutorial interativo de Next.js.

Você pode conferir o repositório do Next.js no GitHub - seu feedback e contribuições são bem-vindos!

🌐 Deploy na Vercel
A maneira mais fácil de fazer o deploy da sua aplicação Next.js é usando a Plataforma Vercel, dos criadores do Next.js.

Confira a documentação de deploy do Next.js para mais detalhes.
