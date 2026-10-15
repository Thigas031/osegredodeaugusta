# O Segredo de Augusta

Visual novel curta inspirada no conto de Machado de Assis. O projeto usa somente HTML, CSS e JavaScript nativos; não requer instalação, servidor, internet ou serviços externos.

## Executar localmente

1. Baixe o projeto pelo botão **Code → Download ZIP** do GitHub e extraia o arquivo, ou clone o repositório.
2. Abra `index.html` em um navegador atualizado.

O jogo funciona diretamente como arquivo local (`file://`); não é necessário iniciar servidor ou processo de build.

## Arquivos

- `index.html`: estrutura e menus.
- `style.css`: apresentação, incluindo os elementos ilustrativos feitos em CSS.
- `script.js`: cenas, escolhas, mecânicas e finais.

Não há dependências externas nem recursos de imagem, fonte ou áudio separados.

## Progresso da galeria

Os finais alcançados são guardados em `localStorage` no navegador e perfil local usados para jogar. Eles permanecem após fechar ou atualizar a página; limpar os dados locais do navegador apaga a galeria desbloqueada.