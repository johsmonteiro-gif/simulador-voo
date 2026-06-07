# ✈️ Projeto: Simulador de Voo em Escala Real

Este projeto cria um simulador de voo com globo 3D em tempo real,
usando APIs gratuitas e uma DSL em português.

## Estrutura
- index.html → interface principal
- simulador.voo → código em português (DSL)
- tradutor.js → converte DSL para JavaScript
- hud.css → estilo do painel de voo
- .github/workflows/deploy.yml → automação de deploy


## Missão 3: HUD Automático
- Criado arquivo **hud.css** com painel verde translúcido.
- Atualizado **index.html** para exibir altitude, velocidade e coordenadas.
- HUD integrado ao simulador e pronto para receber dados do tradutor.js.

## Missão 3.1: Teste da DSL
- Criado arquivo **simulador.voo** com comandos em português.
- Implementado **tradutor.js** que converte DSL para JavaScript.
- HUD agora recebe dados dinâmicos de altitude, velocidade e coordenadas.
