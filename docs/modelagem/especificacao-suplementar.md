# Especificação Suplementar

## Introdução

A Especificação Suplementar corresponde a um documento em linguagem natural que busca descrever os requisitos de um sistema que não foram elicitados pelos casos de uso. Este documento é complementar à modelagem de casos de uso e é crucial no processo de desenvolvimento de software, pois captura requisitos não funcionais e outros aspectos essenciais que não são facilmente definidos pela modelagem.
O objetivo principal da Especificação Suplementar é garantir que todos os requisitos do sistema sejam abrangidos, proporcionando uma visão completa e detalhada que, junto com os casos de uso, define todos os requisitos do sistema. Este documento é essencial para assegurar a qualidade do software e a satisfação do usuário.

## Metodologia

A metodologia base utilizada para a produção da especificação suplementar é a FURPS+, que aborda Funcionalidade, Usabilidade, Confiabilidade, Desempenho e Suportabilidade, além de outros aspectos. Dessa forma, o documento foi estruturado de forma a permitir que cada subtópico da Especificação Suplementar represente um aspecto da FURPS+.

## Especificação Suplementar

### Funcionalidade

### Usabilidade
Usabilidade, segundo Nielsen, é a qualidade que avalia a facilidade de uso de uma interface. Ele propõe 10 heurísticas que, quando seguidas, promovem uma melhor usabilidade, permitindo que os usuários realizem suas tarefas de forma eficiente, eficaz e satisfatória.

A tabela a seguir apresenta requisitos identificados em relação à usabilidade:

Tabela X - Requisitos de Usabilidade.
| ID |    Descrição   |
| :----: | :--------: |
| US1 | Deve ser possível visualizar em formato desktop |
| US2 | Deve disponibilizar formas de facilitar seu uso principal, como criar atalhos, sugestões personalizadas de pesquisa e pesquisa por voz. |
| US3 | Deve disponibilizar formas de se adaptar ao usuário, incluindo acessibilidade, personalizar a tela inicial do navegador, mudar o idioma e mudar entre tema claro e escuro. |
| US4 | O aplicativo deve fornecer feedback imediato após cada ação do usuário. |
| US5 | O aplicativo deve permitir que os usuários desfaçam ações sempre que possível. |

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024.

### Confiabilidade

### Desempenho

### Suportabilidade

A Suportabilidade de Software é a capacidade de suportar um sistema de software durante toda a sua vida útil. Isso implica satisfazer todas as necessidades ou requisitos necessários, bem como a provisão de equipamentos, infraestrutura de suporte, software adicional, instalações, mão de obra ou qualquer outro recurso necessário para manter o software operacional e capaz de cumprir sua função.

A empresa que gerencia o software possui uma [página de suporte online](https://support.mozilla.org/pt-BR/). Além disso, realiza atualizações regulares, com uma frequência de quatro semanas, além de uma atualização anual mais abrangente. As atualizações abordam novas funcionalidades e corrigem erros identificados em seus respectivos períodos. No caso do aplicativo Firefox, ele oferece suporte para sistemas operacionais iOS 13.0 e superior, e Android 5.0 e acima. 

A tabela a seguir apresenta requisitos identificados em relação à suportabilidade:

Tabela X - Requisitos de Suportabilidade.
| ID |    Descrição   |
| :----: | :--------: |
|  SUP01   | O aplicativo deve prover suporte em casos de erros de execução e bugs. |
|  SUP02   | O sistema deve ser extensível para permitir a adição de novas funcionalidades e acompanhar as mudanças. |
|  SUP03   | A documentação deve estar sempre atualizada para facilitar a contribuição, com cobertura de pelo menos 90%. |
|  SUP04   | O sistema deve ser projetado para facilitar a realização de testes durante o desenvolvimento e a manutenção. |
|  SUP05   | O sistema deve contar com rastreabilidade, incluindo mecanismos para registrar e acompanhar mudanças e correções ao longo do tempo, com controle de versão e registros de alterações.|

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024.

### +: Restrições de Design

### +: Requisitos de Implementação

### +: Requisitos de Interface

### +: Requisitos Físicos

Requisitos físicos: refere-se ao hardware onde o sistema vai ser alocado, como será exibido, além da interface usuário-sistema através do hardware. Desse modo, foi levantado que o app Firefox possui as seguintes restrições:

* No caso de sistemas iOS, o aparelho deverá estar na versão 13.0 ou superior. <br>
* No caso de sistemas Android, o aparelho deverá estar na versão 5.0 ou superior. <br>
* O aparelho deverá possuir acesso à internet para ter todas as funcionalidades do software disponíveis.

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024.

## Bibliografia

SERRANO, et al. Requisitos - Aula 13. Disponível em: https://aprender3.unb.br/pluginfile.php/2845007/mod_resource/content/1/Requisitos%20-%20Aula%20013a.pdf. Acesso em 17 maio 2024.

ALVES, Izabella; ZARANZA, Gabriel. Especificação Suplementar. Repositório do Grupo Economia-DF da disciplina de Requisitos de Software da Universidade de Brasília, 2023. Disponível em: <https://requisitos-de-software.github.io/2023.2-Economia-DF/modelagem/especificacao-suplementar/#historico-de-versoes>. Acesso em: 17 maio 2024.

SUPORTE, Mozilla; Gerir atualizações do Firefox, 2024. Disponível em: <https://support.mozilla.org/pt-PT/kb/gerir-atualizacoes-do-firefox>. Acesso em: 20 maio 2024.

UXDesign, 10 heurísticas de Nielsen para o design de interface, 2024. Disponível em: <https://brasil.uxdesign.cc/10-heur%C3%ADsticas-de-nielsen-para-o-design-de-interface-58d782821840>. Acesso em: 20 maio 2024.

## Histórico de Versões 


| Versão |    Data    | Descrição                                        |                      Autor                      |                     Revisor                     |
| :----: | :--------: | ------------------------------------------------ | :---------------------------------------------: | :---------------------------------------------: |
|  1.0   | 19/05/2024 | Introdução e Metodologia | [Kallyne Macedo](https://github.com/kalipassos) | [Lucas Gabriel](https://github.com/martinsglucas) |
|  1.1   | 20/05/2024 | Usabilidade, Suportabilidade e Requisitos Físicos | [Leonardo Aguiar](https://github.com/Leonardo0o0) | [Davi Pierre](https://github.com/DaviPierre) |
