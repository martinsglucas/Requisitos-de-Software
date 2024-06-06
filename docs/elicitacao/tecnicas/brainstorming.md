# Elicitação de Requisitos: Brainstorming

## Introdução
Conforme pesquisa levantada pela UFSC[1], o brainstorming pode ser classificado como uma técnica de elicitação de requisitos em que cada participante tem a oportunidade de expor suas concepções de forma aberta, com o objetivo de desenvolvimento de um novo sistema. Nessa técnica, os participantes podem ter origens acadêmicas e profissionais distintas e compartilham suas ideias, que são direcionadas para a resolução de um problema específico, em um intervalo de tempo determinado. Dessa forma, a abordagem possibilita que os stakeholders ampliem suas perspectivas acerca do problema em questão.

## Justificativa
No contexto da elicitação de requisitos, o brainstorm tem como principal vantagem sua capacidade de estimular a criatividade, promovendo a geração de ideias diversas através da expressão livre dos pensamentos. Assim, a técnica traz variedade, profundidade e inovação para as informações coletadas e, consequentemente, auxilia na resolução de conflitos oriundos da elicitação.

<center>

### Tabela 1: Participantes

| Nome                                              | Função   |
|---------------------------------------------------|----------|
| [Guilherme Westphall](https://github.com/west7)   | Mediador |
| [Lucas Martins](https://github.com/martinsglucas) | Mediador |
| Guilherme Dutra                                   | Usuário  |
| Hugo Queiroz                                      | Usuário  |

**Autor:** [Guilherme Westphall](https://github.com/west7)
</center>

## Desenvolvimento

### Pergunta 1 - Quais as funcionalidades essenciais para o navegador Firefox?
- Velocidade de resposta
- Sincronização de dados
- Boa gestão de memória
- Criação de vários perfis
- Proteção de dados
- Compatibilidade
- Assertividade

### Pergunta 2 - O que te faria usar o Firefox?
- Sincronização com a conta Google
- Bom bloqueador de anúncios
- Possibilidade de vários perfis de usuário
- Mais extensões
- Tradução de páginas
- Ferramenta de leitura de páginas

### Pergunta 3 - O que você mais gosta no seu navegador atual?
- Facilidade de uso
- Separação de perfis
- Agrupamento de guias
- Sincronização de senhas com o dispositivo 
- Bloqueador de anúncios   
- Sugestão de notícias
- Navegação segura

### Pergunta 4 - De que forma o Firefox pode ser mais acessível?
- Ferramenta de leitura avançada
- Modo daltonismo
- Controle parental
- Correção ortográfica

### Pergunta 5 - O que pode ser melhorado no Firefox?
- Padronização entre plataformas

### Pergunta 6 - Você considera a interface do Firefox intuitivo?
- Todos responderam "sim"

### Pergunta 7 - O que você considera positivo no Firefox?
- Variedade de personalização da tela inicial
- Pesquisa direta
- Acesso fácil a guias recém visitadas
- Criação de atalhos

> Legenda para tabela 2:
>
> - **RFx**: Requisito funcional nº x
> - **RNFx**: Requisito não funcional nº x
> - **BRSx**: Requisito nº x elicitado pela técnica de brainstorming

<center>

### Tabela 2: Requisitos elicitados

| Tipo  | Descrição                                                       | ID    | Implementado |
|-------|-----------------------------------------------------------------|-------|--------------|
| RNF01 | O navegador deve responder rapidamente as pesquisas             | BRS01 | Sim          |
| RNF02 | O sistema deve gerir bem a memória                              | BRS02 | Sim          |
| RF01  | Deve sincronizar os dados                                       | BRS03 | Sim          |
| RF02  | Deve ser possível criar vários perfis                           | BRS04 | Não          |
| RF03  | O sistema deve ser compatível com várias plataformas            | BRS05 | Sim          |
| RNF03 | O sistema deve proteger os dados do usuário durante a navegação | BRS06 | Sim          |
| RF04  | O sistema deve prover sincronização com a conta google          | BRS07 | Não          |
| RF05  | O navegador deve conter um bloqueador de anúncios               | BRS08 | Não          |
| RF06  | Deve ser possível instalar várias extensões                     | BRS09 | Sim          |
| RF07  | Deve fornecer uma ferramenta de tradução de páginas             | BRS10 | Não          |
| RF08  | Deve fornecer uma ferramenta de leitura avançada                | BRS11 | Não          |
| RNF04 | Sistema deve ser de fácil uso                                   | BRS12 | Sim          |
| RF09  | Deve ser possível agrupar várias guias                          | BRS13 | Não          |
| RF10  | Deve ser possível sincronizar senhas com outros dispositivos    | BRS14 | Não          |
| RF11  | O navegador deve conter uma página de sugestão de notícias      | BRS15 | Não          |
| RNF05 | O navegador deve prover uma navegação segura                    | BRS16 | Não          |
| RF12  | O navegador deve incluir um modo de daltonismo                  | BRS17 | Não          |
| RF13  | Deve conter uma ferramenta de controle parental                 | BRS18 | Não          |
| RF14  | Deve conter uma ferramenta de correção ortográfica              | BRS19 | Não          |
| RNF06 | O sistema deve ser padronizado entra plataformas                | BRS20 | Não          |
| RNF07 | O sistema deve ter uma interface intuitiva                      | BRS21 | Sim          |
| RF15  | O sistema deve fornecer uma personalização diversa              | BRS22 | Sim          |
| RF16  | O sistema deve conter uma ferramenta de pesquisa rápida         | BRS23 | Sim          |
| RF17  | Deve conter uma lista de páginas recém visitadas                | BRS24 | Sim          |
| RF18  | Deve ser possível a criação de atalhos                          | BRS25 | Sim          |

**Autores:** [Guilherme Westphall](https://github.com/west7) e [Lucas Martins](https://github.com/martinsglucas), 2024

</center>

## Link da gravação

<center>

**Vídeo 1**: Gravação da reunião de Brainstorming

<iframe width="560" height="315" src="https://www.youtube.com/embed/narh2r5dhUg?si=fdIlbsQ10JuP6_GD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Autores:** [Guilherme Westphall](https://github.com/west7) e [Lucas Martins](https://github.com/martinsglucas), 2024
</center>

## Referências

1. Retraining. Técnicas de Elicitação de Requisitos - Brainstorming. Disponível em: https://retraining.inf.ufsc.br/guia/app/classificacoes/tecnicas-de-elicitacao-de-requisitos/entidades/tecnicas-de-elicitacao-de-requisitos-brainstorming. Acesso em: 5 jun. 2024.

2. GNACIO, Rafael C. Guia Facetado de Técnicas de Elicitação de Requisitos: Técnicas de Elicitação de Requisitos. Universidade Federal de Santa Catarina, 2018. Disponível em: https://retraining.inf.ufsc.br/guia/app/classificacoes/tecnicas-de-elicitacao-de-requisitos/entidades/tecnicas-de-elicitacao-de-requisitos-brainstorming. Acesso em 10/04/2024. 

## Histórico de Versões 


| Versão |    Data    | Descrição                                        |                      Autor                      |                     Revisor                     |
| :----: | :--------: | ------------------------------------------------ | :---------------------------------------------: | :---------------------------------------------: |
|  1.0   | 14/04/2024 | Descrição do método de Elicitação: Brainstorming | [Kallyne Macedo](https://github.com/kalipassos) | [Kauan T. Eiras](https://github.com/kauaneiras) |
|  1.1   | 16/04/2024 | Adição das perguntas                             | [Guilherme Westphall](https://github.com/west7) | [Kauan T. Eiras](https://github.com/kauaneiras) |
|  1.2   | 16/04/2024 | Adiciona tabela 1 e 2                            | [Guilherme Westphall](https://github.com/west7) | [Kauan T. Eiras](https://github.com/kauaneiras) |
| 1.3 | 17/04/2024 | Adiciona link da gravação | [Guilherme Westphall](https://github.com/west7) | [Lucas Martins](https://github.com/martinsglucas) | 
| 1.4 | 20/04/2024 | Troca do link para link do Youtube | [Kauan T. Eiras](https://github.com/kauaneiras) | [Guilherme Westphall](https://github.com/west7) | 
| 1.5 | 30/05/2024 | Correção da formatação | [Kauan T. Eiras](https://github.com/kauaneiras) | [Guilherme Westphall](https://github.com/west7) | 

