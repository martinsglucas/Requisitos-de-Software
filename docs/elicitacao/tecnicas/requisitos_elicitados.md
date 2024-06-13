# Requisitos Elicitados

## Introdução

A seguinte tabela contém os requisitos elicitados a partir das técnicas utilizadas. Vale ressaltar que requisitos repetidos e requisitos muito similares foram agrupados em um única célula, para fins de simplificação, porém sempre mantendo a rastreabilidade.

> Legenda:
>
> - **RF**: Requisito funcional
> - **RNF**: Requisito não funcional
> - **BRSx**: Requisito nº x elicitado pela técnica de brainstorming
> - **OBSx**: Requisito nº x elicitado pela técnica de observação
> - **ENTx**: Requisito nº x elicitado pela técnica de entrevista
> - **QSTx**: Requisito nº x elicitado pela técnica de questionário

## Elicitação

<center>

**Tabela 1**: Requisitos elicitados pelos usuários e sua rastreabilidade 
Claro, aqui está a tabela com uma nova coluna adicionada à esquerda com a numeração:

| Nº  | Tipo | Descrição                                                                              | Rastreabilidade            |
|-----|------|----------------------------------------------------------------------------------------|----------------------------|
| 1   | RF   | O aplicativo deve possuir uma barra de pesquisa                                        | OBS01, BRS23               |
| 2   | RF   | O aplicativo deve ter opção de navegação anônima                                       | OBS02                      |
| 3   | RF   | O aplicativo deve possuir opção de visualizar e agrupar guias                          | OBS03, BRS13               |
| 4   | RF   | O aplicativo deve possuir opção de favoritar sites                                     | OBS04                      |
| 5   | RF   | O aplicativo deve possuir histórico de navegação                                       | OBS05, BRS24               |
| 6   | RF   | O aplicativo deve possuir histórico de downloads                                       | OBS06                      |
| 7   | RF   | O aplicativo deve ser possível instalar extensões de uso                               | OBS07, BRS09               |
| 8   | RF   | O aplicativo deve possuir opção de sincronizar e salvar dados inseridos                | OBS08, BRS03, QST01, BRS14 |
| 9   | RF   | O aplicativo deve permitir visualização dos sites em formato desktop                   | OBS09                      |
| 10  | RF   | O aplicativo deve permitir a criação de atalhos na tela inicial do dispositivo         | OBS10, ENT10               |
| 11  | RF   | O aplicativo deve oferecer sugestões personalizadas de pesquisa                        | OBS12, BRS15               |
| 12  | RF   | O aplicativo deve permitir a personalização da tela inicial do navegador               | OBS13, BRS22               |
| 13  | RF   | O aplicativo deve suportar a mudança de idioma do sistema                              | OBS14                      |
| 14  | RF   | O aplicativo deve permitir a alternação entre tema claro e escuro                      | OBS15, OBS16, ENT06, QST04 |
| 15  | RF   | O aplicativo deve possuir suporte para atalhos de gestos                               | OBS18                      |
| 16  | RF   | O aplicativo deve possibilitar a troca de conta do usuário                             | OBS20                      |
| 17  | RF   | O aplicativo deve permitir a alteração da senha da conta do usuário                    | OBS21                      |
| 18  | RF   | O aplicativo deve permitir ao usuário limpar seu histórico de navegação                | OBS22                      |
| 19  | RF   | O aplicativo deve permitir ao usuário limpar seus dados inseridos e de navegação       | OBS23                      |
| 20  | RF   | O aplicativo deve ser permitir a habilitação e bloqueio de notificações                | OBS24                      |
| 21  | RF   | O aplicativo deve permitir alterar a fonte de texto em tipo e tamanho                  | OBS26, OBS19               |
| 22  | RF   | O aplicativo deve incluir opção de bloquear anúncios                                   | OBS27, BRS08, QST02        |
| 23  | RF   | O aplicativo deve incluir opção de busca interna na página                             | OBS28                      |
| 24  | RF   | O aplicativo deve incluir opção de pesquisa por voz                                    | OBS29                      |
| 25  | RF   | O aplicativo deve possuir opção de leitura da página em voz alta                       | OBS30, BRS11               |
| 26  | RF   | O aplicativo deve possuir opção de controle parental de acesso das páginas             | OBS32, BRS18               |
| 27  | RF   | O aplicativo deve oferecer opção de impressão de páginas                               | OBS33                      |
| 28  | RF   | O aplicativo deve conter opção de traduzir o idioma das páginas                        | OBS34, BRS10               |
| 29  | RF   | O aplicativo deve permitir sincronização de dados pessoais com a conta do Google       | ENT01, BRS07, QST01        |
| 30  | RF   | O aplicativo deve oferecer opção de navegação através de rede privada virtual (VPN)    | ENT03                      |
| 31  | RF   | O aplicativo deve simular, para desenvolvedores, suas aplicações em outros navegadores | ENT08                      |
| 32  | RF   | O aplicativo deve ser compatível com vários sistemas operacionais                      | BRS05, BRS20               |
| 33  | RF   | O aplicativo deve conter uma ferramenta de correção ortográfica                        | BRS19                      |
| 34  | RNF  | O aplicativo deve ser leve                                                             | ENT04, QST03               |
| 35  | RNF  | O aplicativo deve permitir acesso rápido à sites acessados recentemente                | ENT05, BRS24               |
| 36  | RNF  | O aplicativo deve apresentar um design arredondado                                     | ENT06                      |
| 37  | RNF  | O aplicativo deve possuir modo alternativo de cores para daltônicos                    | ENT07, BRS17, QST04        |
| 38  | RNF  | O aplicativo deve apresentar uma interface minimalista                                 | ENT09, QST06               |
| 39  | RNF  | O aplicativo deve ser rápido                                                           | BRS01                      |
| 40  | RNF  | O aplicativo deve gerir bem a memória                                                  | BRS02                      |
| 41  | RNF  | O aplicativo deve ser seguro                                                           | OBS36, OBS37, BRS16, BRS06 |
| 42  | RNF  | O aplicativo deve ser de fácil uso                                                     | BRS12, QST07, BRS21        |

**Autor:** [Guilherme Westphall](https://github.com/west7), 2024.
</center>

## Referências

1. GNACIO, Rafael C. Guia Facetado de Técnicas de Elicitação de Requisitos: Técnicas de Elicitação de Requisitos. Universidade Federal de Santa Catarina, 2018. Disponível em: https://retraining.inf.ufsc.br/guia/app/classificacoes/tecnicas-de-elicitacao-de-requisitos/entidades/tecnicas-de-elicitacao-de-requisitos-brainstorming. Acesso em 10 de abril de 2024.

2. VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira. Engenharia de requisitos: software orientado ao negócio. 1. ed. [S. l.]: Brasport, 2016.

3. Universidade Federal de Santa Catarina. Guia de Retreinamento - Técnicas de Elicitação de Requisitos: Observação Direta. Disponível em: https://retraining.inf.ufsc.br/guia/app/classificacoes/tecnicas-de-elicitacao-de-requisitos/entidades/tecnicas-de-elicitacao-de-requisitos-observacao-direta. Acesso em: 14 de abril de 2024.

## Histórico de versões

| Versão | Data       | Descrição                | Autor                                             | Revisor                                         |
|--------|------------|--------------------------|---------------------------------------------------|-------------------------------------------------|
| 1.0    | 19/04/2024 | Cria página              | [Guilherme Westphall](https://github.com/west7)   | [Kauan T. Eiras](https://github.com/kauaneiras) |
| 1.1    | 19/04/2024 | Adiciona tabela 1        | [Guilherme Westphall](https://github.com/west7)   | [Kauan T. Eiras](https://github.com/kauaneiras) |
| 1.2    | 19/04/2024 | Adiciona bibliografia    | [Lucas Gabriel](https://github.com/martinsglucas) | [Guilherme Westphall](https://github.com/west7) |
| 1.3    | 30/05/2024 | Correções                | [Kauan Eiras](https://github.com/kauaneiras)      | [Guilherme Westphall](https://github.com/west7) |
| 1.4    | 05/06/2024 | Reescrita dos requisitos | [Kallyne Macedo](https://github.com/kalipassos)   | [Guilherme Westphall](https://github.com/west7) |