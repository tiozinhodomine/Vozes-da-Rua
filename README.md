# Vozes da Rua

**Conectando solidariedade à ação.**

O **Vozes da Rua** é uma plataforma web criada para aproximar pessoas que desejam ajudar de organizações sociais que atuam com pessoas em situação de rua e em contextos de vulnerabilidade social. A aplicação reúne informações das instituições, formas de contribuição e localização em um só lugar, facilitando o primeiro passo para quem quer participar.

> Projeto Integrador desenvolvido por estudantes do Ensino Médio do Senac Distrito Criativo, em Porto Alegre — RS.

## Acesse o projeto

- **Repositório:** [github.com/tiozinhodomine/Vozes-da-Rua](https://github.com/tiozinhodomine/Vozes-da-Rua)

## Funcionalidades

- **Página inicial:** apresenta a proposta do projeto e organizações em destaque.
- **Organizações:** permite explorar as instituições cadastradas e visualizar sua localização no mapa interativo.
- **Perfis das organizações:** reúne descrição, endereço, contatos disponíveis, necessidades informadas e links oficiais para consultar formas de ajudar.
- **Cadastro e login:** permite criar uma conta e acessar a área de perfil.
- **Meu perfil:** exibe os dados básicos da conta e permite editar o nome de exibição.
- **Favoritos:** usuários conectados podem salvar organizações e consultar ou remover seus favoritos no perfil. Os favoritos são armazenados por usuário no Cloud Firestore.
- **Navegação entre páginas:** inclui acesso à página inicial, organizações, informações sobre o projeto, login, cadastro e perfil.

As informações de contato e as formas de contribuição podem mudar. Antes de se deslocar ou levar uma doação, confirme diretamente com a instituição os horários, os itens aceitos e as condições de recebimento.

## Como usar a plataforma

1. **Conheça o projeto:** na página inicial, entenda a proposta da Vozes da Rua e explore as organizações em destaque.
2. **Encontre uma organização:** acesse **Organizações** para consultar os perfis e explorar o mapa.
3. **Veja os detalhes:** selecione **Ver Perfil** para consultar a descrição, endereço, canais oficiais e formas de ajudar.
4. **Acesse os canais oficiais:** use os links disponíveis para confirmar informações e combinar a melhor forma de contribuir.
5. **Crie uma conta ou entre:** para usar os favoritos, cadastre-se ou faça login.
6. **Salve organizações:** selecione o ícone de coração nos cards ou no perfil da organização.
7. **Consulte seus favoritos:** abra **Meu Perfil** para visualizar as organizações salvas ou removê-las da lista.
8. **Gerencie sua conta:** no perfil, altere o nome de exibição ou saia da conta quando terminar.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| React | Construção da interface por componentes reutilizáveis |
| TypeScript | Tipagem do código e apoio à manutenção |
| Vite | Ambiente de desenvolvimento e geração da versão de produção |
| Tailwind CSS | Estilização da interface e adaptação a diferentes telas |
| React Router | Navegação entre páginas e perfis individuais |
| Firebase Authentication | Cadastro, login e estado de autenticação dos usuários |
| Cloud Firestore | Armazenamento dos favoritos por usuário |
| Leaflet | Renderização do mapa interativo |
| OpenStreetMap | Camada de mapa utilizada pelo Leaflet |
| Lucide React | Ícones da interface |

## Executar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado;
- npm, incluído com o Node.js;
- acesso à internet para instalar dependências e carregar os blocos do mapa.

### 1. Clonar o repositório

```bash
git clone https://github.com/tiozinhodomine/Vozes-da-Rua.git
cd Vozes-da-Rua
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O Vite mostrará no terminal um endereço local — normalmente `http://localhost:5173`. Abra esse endereço no navegador.


```

## Estrutura principal do projeto

```text
src/
├── assets/          # Imagens e outros recursos visuais
├── components/      # Componentes reutilizáveis, como Navbar e cards
├── contexts/        # Contexto de autenticação
├── data/            # Dados locais das organizações cadastradas
├── firebase/        # Inicialização e configuração do Firebase
├── pages/           # Páginas da aplicação
├── routes/          # Definição das rotas
├── services/        # Operações com favoritos no Firestore
├── styles/          # Estilos globais e tema
├── App.tsx          # Estrutura principal da aplicação
└── main.tsx         # Ponto de entrada do React
```

Atualmente, os dados das organizações exibidas na aplicação são mantidos em `src/data/organizations.ts`. Os favoritos dos usuários são armazenados no Firestore.

Importante: não é necessário instalar o Firebase separadamente nem criar outro projeto Firebase para executar esta cópia. O código já contém a configuração da aplicação utilizada pelo Vozes da Rua. O login, os favoritos e o mapa precisam de conexão com a internet.


Tecnologias utilizadas
- React + TypeScript: interface e lógica da aplicação.
- Vite: execução em desenvolvimento e geração da versão de produção.
- Tailwind CSS: estilos e layout responsivo.
- React Router: navegação entre páginas.
- Firebase Authentication: cadastro e login.
- Cloud Firestore: armazenamento dos favoritos de cada usuário.
- Leaflet + OpenStreetMap: mapa interativo.
- Lucide React: ícones da interface.

Equipe
- Leonardo Vilella
- Lorenzo Lima
- Vitória Caroline
- Andrei Lacerda


*O Vozes da Rua é um projeto acadêmico que busca facilitar o acesso a informações sobre organizações sociais e aproximar essas instituições de pessoas interessadas em ajudar. A plataforma funciona como um ponto de informação e conexão; cada instituição deve ser consultada para confirmar dados e procedimentos atualizados.*
