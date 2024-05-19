# Cenários

## Introdução
Os cenários são uma estratégia essencial para compreender a interação entre o ambiente e o sistema. Eles são eficazes para elicitar e especificar o comportamento do software. Nossa abordagem considera os cenários como descrições evolutivas de situações no ambiente, alinhada com o trabalho de Leite sobre uma linha de base de requisitos orientada ao cliente. Esta abordagem visa modelar os requisitos externos de um sistema de software e sua evolução. Os cenários começam descrevendo as situações do ambiente, de acordo com as principais ações realizadas fora do sistema de software. Além disso, eles ajudam a esclarecer a inter-relação entre requisitos funcionais e não funcionais.[1].

## Metodologia
A construção dos cenários foi realizada identificando as principais tarefas do aplicativo Firefox para Android e IOS. Essas tarefas foram selecionadas com base nos requisitos que foram priorizados pelo grupo utilizando as técnicas In or Out, Three Level Scale e MOSCOW. Os cenários escolhidos são os requisitos que obtiveram a maior prioridade nas três técnicas de priorização. Para essa tarefa, todos os membros da equipe foram designados, cada um responsável por descrever quatro cenários usando textos estruturados para melhor compreensão. A Tabela 1 mostra o identificador do cenário, descrição e membro da equipe responsável.

| Identificador | Descrição | Membro de Equipe |
|---|---|---|
| CEN01 | Pesquisar e abrir sites | [Leonardo Aguiar](https://github.com/Leonardo0o0) | 
| CEN02 | Escolher idioma | [Kauan Eiras](https://github.com/kauaneiras) | 	
| CEN03 | Traduzir páginas | [Leonardo Aguiar](https://github.com/Leonardo0o0) |
| CEN04 | Sincronizar e salvar dados do usuário | [Leonardo Aguiar](https://github.com/Leonardo0o0)  |
| CEN05 | Trocar de conta sincronizada | [Leonardo Aguiar](https://github.com/Leonardo0o0)  |
| CEN06 | Bloquear anúncios dos sites| [Guilherme Westphall](https://github.com/west7) | 
| CEN07 | Buscar por textos na página | [Guilherme Westphall](https://github.com/west7) |
| CEN08 | Realizar pesquisa por voz | [Kallyne Macedo](https://github.com/kalipassos) |
| CEN09 | Ler da textos da página para deficientes visuais | - |
| CEN10 | Ativar modo para daltônicos | |
| CEN12 | Ativar controle parental	| [Kauan Eiras](https://github.com/kauaneiras) |
| CEN13 | Alterar fonte do navegador em tipo e tamanho | [Kauan Eiras](https://github.com/kauaneiras) |
| CEN14 | Proteger dados do usuário |[Kauan Eiras](https://github.com/kauaneiras) | 
| CEN15 | Limpar histórico de navegação, senhas salvas e cache | | 
| CEN16 | Escolher entre tema claro ou escuro | |

Fonte: [Kauan Eiras](https://github.com/kauaneiras) e [Leonardo Aguiar](https://github.com/Leonardo0o0)

### Cada cenário é descrito conforme a tabela 2 [1]:

| Elemento | Descrição |
| --- | --- |
| título | o título do cenário |
| objetivo | o objetivo a ser alcançado pela tarefa |
| contexto | descreve a localização geográfica e o estado inicial da tarefa |
| recursos | meios de apoio e dispositivos que necessitam estar disponíveis para o cenário |
| atores | pessoa que realiza a tarefa descrita no cenário |
| episódios | frases que descrevem como o cenário acontece e seu comportamento |
| restrição | características que o cenário deve seguir |
| exceção | situações que impedem a realização do cenário |

Fonte: [Kauan Eiras](https://github.com/kauaneiras)

## Cenarios

<center>

### Tabela 3 - CEN01: Pesquisar e abrir sites

| Elemento | Descrição |
| --- | --- |
| Título | Pesquisar e abrir sites |
| Objetivo | Realizar uma pesquisa na internet atraves da barra de pesquisa |
| Contexto | Local: em casa,<br> Tempo: durante o dia realizado em 1 minuto,<br> Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos | Aparelho celular,<br> Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios | Usuário deseja realizar uma pesquisa sobre cachorros,<br> Usuário pega o celular, <br> Usuário abre o aplicativo do Firefox,<br> Usuário abre a barra de pesquisa,<br> Usuário digita o que deseja pesquisar,<br> Usuário aperta o botão para realizar a pesquisa,<br> O app Firefox mostra os resultados da pesquisa |
| Restrição | O aplicativo deve estar atualizado para evitar erros |
| Exceção | Queda de internet,<br> O aparelho celular não funcionar |

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024

### Tabela 4 - CEN02: Escolher idioma

| Elemento    | Descrição                                                                                          |
| --- | --- |
| Título      | Escolher idioma                                                                                    |
| Objetivo    | Permitir ao usuário alterar o idioma do aplicativo Firefox                                         |
| Contexto    | Local: em casa<br>Tempo: durante o dia, realizado em 2 minutos<br>Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos    | Aparelho celular<br>Acesso à internet                                                              |
| Atores      | Usuário do aplicativo Firefox                                                                      |
| Episódios   | <ul><li>Usuário deseja alterar o idioma do aplicativo Firefox</li><li>Usuário pega o celular</li><li>Usuário abre o aplicativo do Firefox</li><li>Usuário navega até o menu de configurações</li><li>Usuário seleciona a opção "Idioma"</li><li>Usuário escolhe o idioma desejado na lista de idiomas disponíveis</li><li>Usuário confirma a seleção do idioma</li><li>O aplicativo Firefox atualiza a interface para o idioma escolhido</li></ul> |
| Restrição   | O aplicativo deve estar atualizado para evitar erros<br>O idioma escolhido deve estar disponível no aplicativo |
| Exceção     | <ul><li>Queda de internet</li><li>O aparelho celular não funcionar</li><li>O idioma escolhido não está disponível</li></ul>                        |

Fonte: [Kauan Eiras](https://github.com/kauaneiras), 2024

### Tabela 5 - CEN03: Traduzir páginas

| Elemento | Descrição |
| --- | --- |
| Título | Traduzir páginas |
| Objetivo | Traduzir uma pagina que esta em um idioma desconhecido para um idioma conhecido |
| Contexto | Local: em casa,<br> Tempo: durante a noite realizado em 1 minuto,<br> Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos | Aparelho celular,<br> Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios | Usuário deseja realizar uma pesquisa sobre gatos,<br> Usuário pega o celular, <br> Usuário abre o aplicativo do Firefox,<br> Usuário abre a barra de pesquisa,<br> Usuário digita o que deseja pesquisar,<br> Usuário aperta o botão para realizar a pesquisa,<br> O app Firefox mostra os resultados da pesquisa,<br> O Usuário entra em um dos links,<br> A pagina se encontra em um idioma desconhecido,<br> O Usuário abre o menu de opçoes,<br> O Usuário seleciona a opcao "traduzir pagina",<br> O Usuário seleciona o idioma para o qual ele deseja que a pagina seja traduzida,<br> O app Firefox mostra a mesma pagina no idioma que foi selecionado a traducao |
| Restrição | O aplicativo deve estar atualizado para evitar erros,<br> O idioma estar elegivel para ser traduzido |
| Exceção | Queda de internet,<br> O aparelho celular não funcionar |

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024

### Tabela 6 - CEN04: Sincronizar e salvar dados do usuário

| Elemento | Descrição |
| --- | --- |
| Título | Sincronizar e salvar dados do usuário |
| Objetivo | Sincronizar as configuracoes e dados salvos entre dois aparelhos diferentes que possuam o app Firefox |
| Contexto | Local: no escritorio do trabalho,<br> Tempo: durante a tarde realizado em 5 minutos,<br> Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado em ambas as máquinas, possuir um dos aparelhos com camera ou possuir um email valido |
| Recursos | Aparelho celular e/ou computador,<br> Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios | Usuário deseja sincronizar os dados do navegador do pc com o do celular,<br> Usuário pega o celular, <br> Usuário abre o aplicativo do Firefox,<br> Usuário abre o menu de opcoes,<br> Usuário clica na opcao "sincronizar e salvar dados",<br> Usuário aperta o botão para sincronizar via QR Code,<br> Usuário abre o QR Code no pc, <br> Usuário aponta a camera do celular para o QR Code no pc,<br> O app Firefox sincroniza os dados dos dispositivos |
| Restrição | O aplicativo deve estar atualizado para evitar erros,<br>  |
| Exceção | Queda de internet,<br> O aparelho celular não funcionar,<br> O computador não funcionar |

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024

### Tabela 7 - CEN05: Trocar de conta sincronizada

| Elemento | Descrição |
| --- | --- |
| Título | Trocar de conta sincronizada |
| Objetivo | Ter ao mesmo tempo duas contas registradas no app do Firefox e conectadas que possam ser trocadas conforme necessario |
| Contexto | Local: na academia,<br> Tempo: durante a tarde realizado em 1 minuto,<br> Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos | Aparelho celular,<br> Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios | Usuário deseja entrar no perfil de trabalho para enviar um email,<br> Usuário pega o celular, <br> Usuário abre o aplicativo do Firefox,<br> Usuário ve que esta no seu perfil pessoal,<br> Usuário deseja trocar para o perfil de trabalho,<br> Usuário abre o menu de opcoes,<br> O Usuário seleciona a opcao "contas",<br> O app Firefox abre uma pagina com opcoes relacionadas a conta do usuário,<br> O Usuário seleciona a opcao "trocar de conta",<br> O Usuário seleciona a conta que deseja entrar,<br> O app Firefox sincroniza com a conta escolhida,<br> O Usuário envia o email do trabalho |
| Restrição | O aplicativo deve estar atualizado para evitar erros |
| Exceção | Queda de internet,<br> O aparelho celular não funcionar |

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024

### Tabela 8 - CEN06: Bloquear anúncios de sites

| Elemento | Descrição |
|----------|-----------|
| Título | Bloquear anúncios de sites |
| Objetivo | Permitir que o usuário configure o navegador para bloquear anúncios em sites diversos, permitindo uma navegação mais rápida e limpa |
| Contexto | Local: em casa ou no trabalho<br>Tempo: durante o dia, realizado em 2 minutos<br>Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos | Aparelho celular ou computador<br>Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios | <ul><li>Usuário está navegando em um site e é incomodado por muitos anúncios</li><li>Usuário decide bloquear os anúncios</li><li>Usuário pega o celular ou está no computador</li><li>Usuário abre o aplicativo do Firefox</li><li>Usuário navega até o menu de configurações</li><li>Usuário seleciona a opção "Bloqueio de anúncios"</li><li>Usuário ativa a opção para bloquear anúncios</li><li>Usuário personaliza as configurações de bloqueio, se desejar (ex.: bloquear todos os anúncios, permitir anúncios em sites específicos)</li><li>Usuário salva as configurações</li><li>O aplicativo Firefox aplica as configurações de bloqueio de anúncios</li></ul> |
| Restrição | O aplicativo deve estar atualizado para evitar erros<br>Usuário deve ter permissões administrativas no dispositivo |
| Exceção   | <ul><li>Queda de internet</li><li>O aparelho celular ou computador não funcionar</li><li>O aplicativo não aplicar corretamente as configurações de bloqueio</li><li>O site detectar e não permitir o bloqueio de anúncios</ul> |

Fonte: [Guilherme Westphall](https://github.com/west7), 2024

### Tabela 9 - CEN07: Busca por texto em páginas

| Elemento | Descrição |
|----------|-----------|
| Título   | Busca por texto em páginas| 
| Objetivo | Permitir que o usuário encontre rapidamente palavras ou frases específicas em uma página web aberta no navegador |
| Contexto | Local: em casa ou no trabalho<br>Tempo: durante o dia, realizado em 1 minuto<br>Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos | Aparelho celular ou computador<br>Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios |<ul><li>Usuário está lendo um artigo longo e precisa encontrar uma informação específica</li><li>Usuário decide usar a função de busca por texto</li><li>Usuário pega o celular ou está no computador</li><li>Usuário abre o aplicativo do Firefox e a página web desejada</li><li>Usuário abre o menu de opções do navegador</li><li>Usuário seleciona a opção "Buscar na página"</li><li>Usuário digita a palavra ou frase que deseja encontrar</li><li>O navegador destaca todas as ocorrências do texto buscado na página</li><li>Usuário navega pelas ocorrências encontradas até achar a informação desejada</li></ul> |
| Restrição | O aplicativo deve estar atualizado para evitar erros<br>A página deve estar totalmente carregada para uma busca precisa |
| Exceção | <ul><li>Queda de internet</li><li>O aparelho celular ou computador não funcionar</li><li>O aplicativo não encontrar o texto desejado devido a problemas de indexação</li></ul> | 

Fonte: [Guilherme Westphall](https://github.com/west7), 2024

### Tabela 10 - CEN08: Realizar pesquisa por voz

| Elemento | Descrição |
| --- | --- |
| Título | Realizar pesquisa por voz |
| Objetivo | Conseguir realizar uma pesquisa no app através de ferramenta speech-to-text embutida no navegador |
| Contexto | Local: em casa,<br> Tempo: de manhã, realizado em 1 minuto,<br> Pré-condições: acesso à Internet, ter o aplicativo do Firefox instalado, ter um microfone funcional no aparelho |
| Recursos | Aparelho celular,<br> Acesso à internet |
| Atores | Usuário do aplicativo Firefox |
| Episódios | Usuário está cozinhando e precisa pesquisar uma receita,<br> Usuário pega o celular, <br> Usuário abre o aplicativo do Firefox,<br> Usuário está com a mão suja, então prefere usar a voz<br> Usuário abre a barra de pesquisa, <br> Usuário seleciona a opção de pesquisa por voz, <br> Usuário fala, no microfone, o que deseja pesquisar, <br> O app Firefox retorna uma pagina com resultados da busca, <br> Usuário consegue visualizar a informação que precisava,<br> Usuário volta a cozinhar<br> |
| Restrição | O aplicativo deve estar atualizado para evitar erros,<br>O microfone deve estar ativado<br> |
| Exceção | Queda de internet,<br> O aparelho celular não funcionar,<br> O aplicativo não entender a voz do usuário |

Fonte: [Kallyne Macedo](https://github.com/kalipassos), 2024

### Tabela 14 -CEN12: Ativar controle parental

| Elemento    | Descrição                                                                                          |
| --- | --- |
| Título      | Ativar controle parental                                                                                  |
| Objetivo    | Permitir que os pais ou responsáveis configurem restrições no navegador para proteger os menores de conteúdo inapropriado |
| Contexto    | Local: em casa<br>Tempo: durante o dia, realizado em 5 minutos<br>Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado, ter permissões administrativas no dispositivo |
| Recursos    | Aparelho celular<br>Acesso à internet                                                              |
| Atores      | Usuário do aplicativo Firefox (pais ou responsáveis)                                               |
| Episódios   | <ul><li>Usuário deseja configurar controles parentais no aplicativo Firefox</li><li>Usuário pega o celular</li><li>Usuário abre o aplicativo do Firefox</li><li>Usuário navega até o menu de configurações</li><li>Usuário seleciona a opção "Controle parental"</li><li>Usuário ativa a opção de controle parental</li><li>Usuário define um código de acesso ou senha para modificar as configurações de controle parental</li><li>Usuário configura as restrições desejadas (ex.: bloquear sites específicos, definir horários de uso, restringir conteúdo adulto)</li><li>Usuário salva as configurações</li><li>O aplicativo Firefox aplica as restrições configuradas</li></ul> |
| Restrição   | O aplicativo deve estar atualizado para evitar erros<br>O dispositivo deve ter suporte para controles parentais<br>Usuário deve ter permissões administrativas no dispositivo |
| Exceção     | <ul><li>Queda de internet</li><li>O aparelho celular não funcionar</li><li>O usuário não ter permissões administrativas no dispositivo</li></ul>                        |

Fonte: [Kauan Eiras](https://github.com/kauaneiras), 2024

### Tabela 15 -CEN13: Alterar fonte do navegador em tipo e tamanho

| Elemento    | Descrição                                                                                          |
| --- | --- |
| Título      | Alterar fonte do navegador em tipo e tamanho                                                       |
| Objetivo    | Permitir que o usuário altere o tipo e o tamanho da fonte utilizada no navegador Firefox para melhorar a legibilidade e a personalização da interface |
| Contexto    | Local: em casa<br>Tempo: durante o dia, realizado em 3 minutos<br>Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado |
| Recursos    | Aparelho celular<br>Acesso à internet                                                              |
| Atores      | Usuário do aplicativo Firefox                                                                      |
| Episódios   | <ul><li>Usuário deseja alterar o tipo e o tamanho da fonte no aplicativo Firefox</li><li>Usuário pega o celular</li><li>Usuário abre o aplicativo do Firefox</li><li>Usuário navega até o menu de configurações</li><li>Usuário seleciona a opção "Aparência"</li><li>Usuário escolhe a sub-opção "Fonte"</li><li>Usuário seleciona o tipo de fonte desejado a partir de uma lista</li><li>Usuário ajusta o tamanho da fonte usando um controle deslizante ou opções de tamanho pré-definidas</li><li>Usuário visualiza uma prévia das alterações</li><li>Usuário confirma e salva as configurações</li><li>O aplicativo Firefox aplica as alterações de fonte na interface</li></ul> |
| Restrição   | O aplicativo deve estar atualizado para evitar erros<br>O tipo de fonte deve estar disponível no aplicativo |
| Exceção     | <ul><li>Queda de internet</li><li>O aparelho celular não funcionar</li><li>O tipo de fonte desejado não estar disponível</li></ul>                        |

Fonte: [Kauan Eiras](https://github.com/kauaneiras), 2024

### Tabela 16 -CEN14: Proteger dados do usuário

| Elemento    | Descrição                                                                                          |
| --- | --- |
| Título      | Proteger dados do usuário                                                                      |
| Objetivo    | Garantir a proteção das contas, senhas, cartões e informações pessoais do usuário contra acessos não autorizados e violações de privacidade |
| Contexto    | Local: em casa<br>Tempo: durante o dia, realizado em 5 minutos<br>Pré-condições: acesso à internet, ter o aplicativo do Firefox instalado, ter permissões administrativas no dispositivo |
| Recursos    | Aparelho celular<br>Acesso à internet                                                              |
| Atores      | Usuário do aplicativo Firefox                                                                      |
| Episódios   | <ul><li>Usuário deseja configurar as opções de proteger dados no aplicativo Firefox</li><li>Usuário pega o celular</li><li>Usuário abre o aplicativo do Firefox</li><li>Usuário navega até o menu de configurações</li><li>Usuário seleciona a opção "Proteger Dados"</li><li>Usuário revisa e ajusta as configurações de segurança, como ativar a proteção de contas, gerenciar senhas salvas, e ativar a verificação em duas etapas</li><li>Usuário define uma senha mestra ou utiliza autenticação biométrica para proteger o acesso às configurações de segurança</li><li>Usuário configura alertas de segurança para notificações de tentativas de acesso não autorizadas</li><li>Usuário salva as configurações</li><li>O aplicativo Firefox aplica as configurações de segurança e protege as contas, senhas, cartões e informações pessoais do usuário</li></ul> |
| Restrição   | O aplicativo deve estar atualizado para evitar erros<br>O dispositivo deve suportar autenticação biométrica (se utilizada) |
| Exceção     | <ul><li>Queda de internet</li><li>O aparelho celular não funcionar</li><li>Falta de suporte para autenticação biométrica no dispositivo</li></ul>                        |

Fonte: [Kauan Eiras](https://github.com/kauaneiras), 2024

## Bibliografia

[1] Leite, Julio & Rossi, Gustavo & Balaguer, Federico & Maiorana, Vanesa & Kaplan, Gladys & Hadad, Graciela & Oliveros, Alejandro. (1997). Enhancing a requirements baseline with scenarios. Requirements Engineering. 2. 184-198. 10.1007/BF02745371. 

## Histórico de Versões 

| Versão |    Data    | Descrição                                        |                      Autor                      |                     Revisor                     |
| :----: | :--------: | ------------------------------------------------ | :---------------------------------------------: | :---------------------------------------------: |
|  1.0   | 15/05/2024 | Introdução e Metodologia |[Kauan Eiras](https://github.com/kauaneiras) | [Kallyne Macedo](https://github.com/kalipassos) |
|  1.1   | 16/05/2024 | Correções e criação da tabela 3 | [Leonardo Aguiar](https://github.com/Leonardo0o0) | [Kallyne Macedo](https://github.com/kalipassos) |
|  1.2   | 18/05/2024 | Correções e criação das tabelas 5, 6 e 7 | [Leonardo Aguiar](https://github.com/Leonardo0o0) | [Kallyne Macedo](https://github.com/kalipassos) |
|  1.3   | 19/05/2024 | Correção dos cenários e criação das tabelas 4, 14, 15, 16 | [Kauan Eiras](https://github.com/kauaneiras) | [Kallyne Macedo](https://github.com/kalipassos) |
|  1.4   | 19/05/2024 | Criação tabela - CEN08 | [Kallyne Macedo](https://github.com/kalipassos)  | [Kauan Eiras](https://github.com/kauaneiras)|