# Elos

## Introdução

Neste artefato serão desenvolvidos os Elos de rastreabilidade dos requisitos elicitados. A rastreabilidade pode ser implementada por um conjunto de elos ou ligações (links) entre requisitos inter-relacionados, entre requisitos e suas fontes, e entre requisitos e os componentes que os implementam (SAYÃO e LEITE 2005).

## Metodologia

Para implemetar a rastreabilidade serão usados os requisitos registrados na [baseline](./baseline.md#baseline-dos-requisitos) e a matriz de rastreabilidade [forward-from](./forwardfrom.md). Os elos serão baseados no meta-modelo de Toranzo que descreve 4 níveis de classificação: Ambiental, Organizacional, Gerencial e Desenvolvimento. Para o contexto da discplina, serão registrados somente os elos de nível de Desenvolvimento, que abrange os artefatos desenvolvidos ao longo do semestre. Os elos de rastreabilidade podem ser de 6 tipos:

- Satisfação: classe origem tem dependência de satisfação com a classe
destino.
- Recurso: classe origem tem dependência de recurso com a classe
destino.
- Responsabilidade: registra a participação, responsabilidade e ação de
pessoas sobre artefatos.
- Representação: captura a representação ou modelagem dos requisitos
em outras linguagens.
- Alocado: classe origem está relacionada à classe destino, que
representa um subsistema.
- Agregação: indica “composição” de elementos.

<center>
**Fonte**: SAYÃO e LEITE, 2005
</center>

## Elos de desenvolvimento

Nesta seção, serão registrados os elos de rastreabilidade de desenvolvimento.

### Elos de satisfação

Na Tabela 1 a seguir, estão os elos de rastreabilidade do tipo "satisfação".

<center>

**Tabela 1**: Elos de rastreabilidade do tipo "satisfação".

| ID    | Tipo do elo | Elementos rastreáveis                                                                                 | Elo                                                                            | Justificativa                                                                                                                                                                                                                                                           |
| ----- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ELO2  | Satisfação  | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos.<br>- [US14](../modelagem_agil/historias_de_usuario/historias_de_usuario.md#us14-sincronizar-dados): Como um usuário do navegador Firefox, desejo sincronizar os dados de outro navegador com o meu, para que eu consiga importar minhas preferências e dados salvos.      | Os critérios de aceitação da US14 **satisfazem** o requisito R8                | A história de usuário descreve a necessidade do usuário de sincronizar dados, incluindo critérios de aceitação que detalham como essa sincronização deve ocorrer, o que satisfaz o requisito "O aplicativo deve possuir opção de sincronizar e salvar dados inseridos". |
| ELO5  | Satisfação  | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos.<br>- [NFR01 - Usabilidade](../modelagem_agil/NFR%20Framework.md#nfr01-usabilidade)                                                                                                                                                                                        | O requisito R8 **satisfaz** parcialmente o softgoal de "Memorização" do NFR01  | O elo de Satisfação entre o requisito R8 e o softgoal de "Memorização" indica que a implementação da sincronização e salvamento de dados é fundamental para alcançar o objetivo de memorização no sistema.                                                              |
| ELO10 | Satisfação  | - [R14](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir a alternação entre tema claro e escuro	.<br>- [US10](../modelagem_agil/historias_de_usuario/historias_de_usuario.md#us10-alterar-entre-o-tema-claro-e-escuro): Como um usuário do navegador Firefox, desejo alterar o tema do navegador para claro ou escuro, para que eu possa utilizar ele no modo escuro de noite e claro de dia. | Os critérios de aceitação da US10 **satisfazem** o requisito R14               | A US10 detalha a necessidade do usuário de trocar o tema entre claro e escuro e como ela deve ocorrer através dos critérios de aceitação, que satisfazem o requisito R14.                                                                                               |
| ELO12 | Satisfação  | - [R14](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir a alternação entre tema claro e escuro	.<br>- [NFR05 - Interface](../modelagem_agil/NFR%20Framework.md#nfr05-interface)                                                                                                                                                                                                              | O requisito R14 **satisfaz** parcialmente o softgoal "Personalização" do NFR05 | A implementação da mudança de tema contribui positivamente para o cumprimento do objetivo de personalização.                                                                                                                                                            |
| ELO17 | Satisfação | - [R26](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de controle parental de acesso das páginas<br>- [US07](../modelagem_agil/historias_de_usuario/historias_de_usuario.md#us07-controlar-acesso-a-sites-controle-parental) | Os critérios de aceitação da história de usuário US07 **satisfazem** o requisito R26 | A história de usuário descreve a necessidade do usuário de controlar o acesso dos filhos ao navegador, incluindo critérios que mostram como esse requisito pode ser atendido. | 
| ELO18 | Satisfação | - [R32](./baseline.md#baseline-dos-requisitos): O sistema deve ser compatível com os sistemas operacionais IOS e Android<br>- [NFR04 - Suportabilidade](../modelagem_agil/NFR%20Framework.md#nfr04-suportabilidade) | O requisito R32 **satisfaz** o softgoal de "Portabilidade" do NFR04 | A implementação do requisito cumpre o objetivo de portabilidade. | 
| ELO19 | Satisfação | - [R18](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir ao usuário limpar seu histórico de navegação<br>- [US17](../modelagem_agil/historias_de_usuario/historias_de_usuario.md#us17-limpar-historico): Como um usuário do navegador Firefox, desejo limpar meu histórico, para que minha interação com um tópico seja invisível. | Os critérios de aceitação da US17 **satisfazem** o requisito R18 | A história de usuário descreve a necessidade do usuário de limpar o histórico de navegação, incluindo critérios que mostram como esse requisito pode ser atendido. |
|ELO22 | Satisfação | - [R38](baseline.md#baseline-dos-requisitos): A interface do aplicativo deve apresentar abas quadradas, animações suaves e uma Biblioteca que oferece acesso rápido a itens salvos, como favoritos, histórico, downloads, abas e capturas de tela<br>- [NFR05 - Interface](../modelagem_agil/NFR%20Framework.md#nfr05-interface) | O requisito R38 **satisfaz** o softgoal de "Acesso rápido" do NFR05 | A implementação da Biblioteca de acesso rápido do requisito R38 cumpre o softgoal de "Acesso rápido" do NFR05. |
| ELO23 | Satisfação | - [R24](baseline.md#baseline-dos-requisitos): O aplicativo deve incluir opção de pesquisa por voz<br> - [US05](../modelagem_agil/historias_de_usuario/historias_de_usuario.md#us05-pesquisar-por-voz): Como um usuário do navegador Firefox, desejo realizar buscas utilizando comandos de voz, para que eu possa pesquisar sem usar o teclado. | Os critérios de aceitação da US05 **satisfazem** o requisito R24 | A história de usuário descreve a necessidade do usuário de realizar buscas por voz, incluindo critérios que mostram como esse requisito pode ser atendido. |
| ELO24 | Satisfação | - [R42](baseline.md#baseline-dos-requisitos): O usuário deve conseguir acessar qualquer parte do sistema em no máximo três cliques<br> - [NFR05 - Interface](../modelagem_agil/NFR%20Framework.md#nfr05-interface) | O requisito R42 **satisfaz** o softgoal de "Acesso Rápido" do NFR05 | A implementação do requisito cumpre o objetivo de portabilidade. |


**Autor**:

</center>

### Elos de recurso

Na Tabela 2 a seguir, estão os elos de rastreabilidade do tipo "recurso".

| ID  | Tipo do elo | Elementos rastreáveis | Elo | Justificativa |
| --- | ----------- | --------------------- | --- | ------------- |

### Elos de responsabilidade

Na Tabela 3 a seguir, estão os elos de rastreabilidade do tipo "responsabilidade".

| ID  | Tipo do elo | Elementos rastreáveis | Elo | Justificativa |
| --- | ----------- | --------------------- | --- | ------------- |

### Elos de representação

Na Tabela 4 a seguir, estão os elos de rastreabilidade do tipo "representação".

<center>

**Tabela 4**: Elos de rastreabilidade do tipo "representação".

| ID    | Tipo do elo   | Elementos rastreáveis                                                                                                                                                                                                                        | Elo                                                                               | Justificativa                                                                                                                                                                                                                                                                                                                                 |
| ----- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ELO7  | Representação | - [R2](./baseline.md#baseline-dos-requisitos): O aplicativo deve ter opção de navegação anônima<br>- [Navegar](../modelagem/lexicos/lexicos.md#navegar)<br>- [Modo de navegação privada](../modelagem/lexicos/lexicos.md#privado)            | Os léxicos "Navegar" e "Modo de navegação privada" **representam** o requisito R2 | A definição de "Navegar" e "Modo de navegação privada" explicam o verbo navegar e o que é o estado de navegação privada que representam o requisito descrito.                                                                                                                                                                                 |
| ELO1  | Representação | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos<br>- [CEN04](../modelagem/cenarios.md#cen04-sincronizar-e-salvar-dados-do-usuario)                                    | O Cenário CEN04 **representa** o requisito R8                                     | O cenário "Sincronizar e salvar dados do usuário" detalha como o requisito será implementado na prática, descrevendo passo a passo as ações do usuário e as condições necessárias para a sincronização e salvamento dos dados inseridos.                                                                                                      |
| ELO4  | Representação | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos<br>- [Sincronizar](../modelagem/lexicos/lexicos.md#sincronizar)<br>- [Salvar](../modelagem/lexicos/lexicos.md#salvar) | Os léxicos "Sincronizar" e "Salvar" **representam** o requisito R8                | A definição de "Sincronizar" e "Salvar" detalham o processo e a importância de manter os dados do usuário consistentes em múltiplos dispositivos e a ação de armazenar dados e a importância da segurança e acessibilidade dos dados salvos, representando claramente o requisito de sincronização e de salvar os dados do usuário descritos. |
| ELO8  | Representação | - [R14](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir a alternação entre tema claro e escuro	<br>- [CEN15](../modelagem/cenarios.md#cen15-escolher-entre-tema-claro-ou-escuro)                                                        | O Cenário "Escolher entre tema claro ou escuro" **representa** o requisito R14    | O CEN15 detalha como o requisito será implementado na prática, descrevendo passo a passo as ações do usuário para alterar o tema entre claro e escuro                                                                                                                                                                                         |
| ELO11 | Representação | - [R14](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir a alternação entre tema claro e escuro	<br>- [Tema](../modelagem/lexicos/lexicos.md#tema)<br>- [Personalizar](../modelagem/lexicos/lexicos.md#personalizar)                     | Os léxicos "Tema" e "Personalizar" **representam** o R14.                         | As definições "Tema" e "Personalizar" definem um objeto e um verbo importantes para o contexto do R14.                                                                                                                                                                                                                                        |
|ELO14| Representação | - [R20](./baseline.md#baseline-dos-requisitos): O aplicativo deve ser permitir a habilitação e bloqueio de notificações<br>- [Bloquear](../modelagem/lexicos/lexicos.md#bloquear) | O léxico "Bloquear" **representa** parcialmente o R20 | A definição de "Bloquear" detalha um verbo essencial para o contexto R20. | 
| ELO15 | Representação | - [R26](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de controle parental de acesso das páginas<br>- [CEN11](../modelagem/cenarios.md#cen11-ativar-controle-parental) | O  cenário CEN11 **representa** o requisito R26 | O cenário "ativar controle parental" detalha como o requisito será implementado na prática, descrevendo passo a passo as ações do usuário. |
| ELO20 | Representação | - [R38](baseline.md#baseline-dos-requisitos): A interface do aplicativo deve apresentar abas quadradas, animações suaves e uma Biblioteca que oferece acesso rápido a itens salvos, como favoritos, histórico, downloads, abas e capturas de tela<br> - [UC5](../modelagem/casos_de_uso/casos_de_uso.md#acessar-site) | O fluxo alternativo do FA.3 e FA.4 do caso de uso UC5 **representa** o requisito R38 | Os fluxos alterantivos: "FA.3: Internauta deseja usar um atalho de site favorito para acessar o site" e "FA.4: Internauta deseja acessar um site acessado recentemente" representam uma parte do requisito R38 que é a Biblioteca de acesso rápido. |   

</center>

### Elos de alocado

Na Tabela 5 a seguir, estão os elos de rastreabilidade do tipo "alocado".

| ID  | Tipo do elo | Elementos rastreáveis | Elo | Justificativa |
| --- | ----------- | --------------------- | --- | ------------- |

### Elos de agregação

Na Tabela 6 a seguir, estão os elos de rastreabilidade do tipo "agregação".

<center>

**Tabela 6**: Elos de rastreabilidade do tipo "agregação".


| ID    | Tipo do elo | Elementos rastreáveis                                                                                                                                                                                                                                          | Elo                                                                                                  | Justificativa                                                                                                                                                       |
| ----- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ELO6  | Agregação   | - [R2](./baseline.md#baseline-dos-requisitos): O aplicativo deve ter opção de navegação anônima<br>- [T01. Navegação](../modelagem_agil/backlog.md#t01-navegacao)<br>- [E01. Acesso à sites](../modelagem_agil/backlog.md#e01-acesso-a-sites)                  | O requisito R2 **compõe** o Tema 1 "Navegação" e o Épico 1 "Acesso à sites" do backlog.              | O requisito R2 de navegaçãp privada faz parte do conjunto maior de funcionalidade representados pelo T01 e pelo E01.                                                |
| ELO3  | Agregação   | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos<br>- [T03. Dados](../modelagem_agil/backlog.md#t03-dados)<br>- [E06. Rastreabilidade](../modelagem_agil/backlog.md#e06-rastreabilidade) | O requisito R8 **compõe** o Tema 3 "Dados" e o Épico 6 "Rastreabilidade" do backlog.                 | O requisito de sincronização e salvamento de dados faz parte do conjunto mais amplo de funcionalidades relacionadas à gestão e armazenamento de dados na aplicação. |
| ELO9  | Agregação   | - [R14](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir a alternação entre tema claro e escuro	<br>- [T02. Personalização](../modelagem_agil/backlog.md#t02-personalizacao)<br>- [E03. Acessibilidade](../modelagem_agil/backlog.md#e03-acessibilidade)   | O requisito R14 **compõe** o Tema 2 "Personalização" e o Épico 3 "Acessibilidade".                   | O requisito de trocar entre os temas claro e escuro fazem parte de um conjunto de funcionalidades maior dos T02 e E03 do backlog.                                   |
| ELO13 | Agregação   | - [R14](./baseline.md#baseline-dos-requisitos): O aplicativo deve permitir a alternação entre tema claro e escuro	<br>- [Usabilidade](../modelagem/especificacao-suplementar.md#usabilidade)                                                                                 | O requisito R8 **compõe** a Usabilidade da metodologia FURPS+ descrita na especificação suplementar. | O requisito de trocar entre tema claro e escuro, faz parte dos requisitos de usabilidade da especificação suplementar.                                              |
| ELO16 | Agregação | - [R26](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de controle parental de acesso das páginas<br>- [T01. Navegação](../modelagem_agil/backlog.md#t01-navegacao)<br>- [E01. Acesso à sites](../modelagem_agil/backlog.md#e01-acesso-a-sites) | O requisito R26 **compõe** o Tema 1 "Navegação" e o Épico 1 "Acesso à sites". | O requisito de controle parental faz parte de um conjunto de funcionalidades maior representadas pelos T01 e E01 do backlog. |
| ELO19 | Agregação | - [R32](./baseline.md#baseline-dos-requisitos): O sistema deve ser compatível com os sistemas operacionais IOS e Android<br>- [+:Restrições de Design](../modelagem/especificacao-suplementar.md#restricoes-de-design) | O requisito R32 **compõe** os requisitos de restrições de design da metodologia FURPS+. | O requisito do aplicativo ser compatível com os sistemas Android e IOS faz parte dos requisitos de design da especificação suplementar. |
 


</center>

## Referências

1. SAYÃO, Miriam; LEITE, Julio Cesar. Monografias em Ciência da Computação n° 20/05. Acesso em 21 de junho de 2024.

## Histórico de versão

| Versão | Data       | Descrição                       | Autor                                           | Revisor |
| ------ | ---------- | ------------------------------- | ----------------------------------------------- | ------- |
| 1.0    | 21/06/2024 | Cria a página                   | [Guilherme Westphall](https://github.com/west7) | [Lucas Martins](https://github.com/martinsglucas)        |
| 1.1    | 21/06/2024 | Adiciona elos ELO1, ELO2 e ELO3 | [Guilherme Westphall](https://github.com/west7) | [Lucas Martins](https://github.com/martinsglucas)        |
| 1.2    | 24/06/2024 | Adiciona ELO4 ao ELO13          | [Guilherme Westphall](https://github.com/west7) | [Lucas Martins](https://github.com/martinsglucas)        |