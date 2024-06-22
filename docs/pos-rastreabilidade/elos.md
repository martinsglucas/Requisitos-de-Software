# Elos

## Introdução

## Metodologia

## Elos de desenvolvimento

| ID   | Tipo do elo   | Elementos rastreáveis                                                                                                                                                                                                                                                                                                                                                                       | Elo                                                                                  | Justificativa                                                                                                                                                                                                                                                           |
| ---- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ELO1 | Representação | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos<br>- [CEN04](../modelagem/cenarios.md#cen04-sincronizar-e-salvar-dados-do-usuario)                                                                                                                                                                                   | O Cenário CEN04 **representa** o requisito R8                                        | No caso apresentado, o cenário "Sincronizar e salvar dados do usuário" detalha como o requisito será implementado na prática, descrevendo passo a passo as ações do usuário e as condições necessárias para a sincronização e salvamento dos dados inseridos.           |
| ELO2 | Satisfação    | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos<br>- [US14](../modelagem_agil/historias_de_usuario/historias_de_usuario.md#us14-sincronizar-dados): Como um usuário do navegador Firefox, desejo sincronizar os dados de outro navegador com o meu, para que eu consiga importar minhas preferências e dados salvos. | Os critérios de aceitação da US14 **satisfazem** o requisito R8                      | A História de Usuário descreve a necessidade do usuário de sincronizar dados, incluindo critérios de aceitação que detalham como essa sincronização deve ocorrer, o que satisfaz o requisito "O aplicativo deve possuir opção de sincronizar e salvar dados inseridos". |
| ELO3 | Agregação     | - [R8](./baseline.md#baseline-dos-requisitos): O aplicativo deve possuir opção de sincronizar e salvar dados inseridos<br>- [T03. Dados](../modelagem_agil/backlog.md#t03-dados)<br>- [E06. Rastreabilidade](../modelagem_agil/backlog.md#e06-rastreabilidade)                                                                                                                             | O requisito R8 **compõe** o Tema 3 "Dados" e o Épico 6 "Rastreabilidade" do backlog. | O requisito de sincronização e salvamento de dados faz parte do conjunto mais amplo de funcionalidades relacionadas à gestão e armazenamento de dados na aplicação.                                                                                                     |

## Referências

1. SAYÃO, Miriam; LEITE, Julio Cesar. Monografias em Ciência da Computação n° 20/05. Acesso em 21 de junho de 2024.

## Histórico de versão

| Versão | Data       | Descrição                       | Autor                                           | Revisor |
| ------ | ---------- | ------------------------------- | ----------------------------------------------- | ------- |
| 1.0    | 21/06/2024 | Cria a página                   | [Guilherme Westphall](https://github.com/west7) |         |
| 1.1    | 21/06/2024 | Adiciona elos ELO1, ELO2 e ELO3 | [Guilherme Westphall](https://github.com/west7) |         |