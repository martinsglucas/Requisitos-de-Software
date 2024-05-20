# Casos de Uso

## Introdução

Casos de uso são uma ferramenta fundamental na engenharia de requisitos. Eles descrevem interações entre um sistema e seus usuários, ajudando a definir os requisitos funcionais de um sistema de forma clara e compreensível. Um caso de uso identifica diferentes cenários de uso do sistema, descrevendo as ações que um usuário realiza e as respostas do sistema em cada situação. Esses casos fornecem uma visão detalhada de como o sistema deve se comportar em diferentes circunstâncias, ajudando os desenvolvedores a entender os requisitos do cliente e a projetar soluções que atendam às necessidades específicas dos usuários finais. Além disso, os casos de uso servem como uma ponte eficaz entre os stakeholders do projeto, permitindo uma comunicação clara e eficiente entre os desenvolvedores, clientes e outras partes interessadas. Em resumo, os casos de uso desempenham um papel essencial na garantia de que o software desenvolvido atenda às expectativas e requisitos do usuário final.

## Metodologia

Na definição dos casos de uso, utilizaremos as personas definidas para entender melhor a atividade do usuário no navegador Firefox. O processo envolve identificar os atores, que neste caso será apenas o usuário (ator principal), o limite do sistema e a definição dos casos de uso que indicam o fluxo de ações dentro do sistema. Usaremos a ferramenta [Miro](https://miro.com/pt/) para a construção do diagrama. A legenda para o diagrama está presente na tabela 1.

<div align="center">
    <font size="3"><p style="text-align: center"><b>Tabela 1:</b> Legenda para o diagrama</p></font>
</div>

| Símbolo                                    | Nome        | Função                                                    |
| ------------------------------------------ | ----------- | --------------------------------------------------------- |
| <img src="assets/boneco.png" width=50/>    | Ator        | Representam os indivíduos que interagem com o sistema     |
| <img src="assets/elipse.png" width=50/>    | Caso de uso | Representa as possíveis ações realizadas no sistema       |
| <img src="assets/flecha.png" width=50/>    | Relações    | Indicam o fluxo de ações e as relações entre casos de uso |
| <img src="assets/retangulo.png" width=50/> | Sistema     | Representa a aplicação                                    |



<div align="center"
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>
</div>

## Diagrama de casos de uso

A figura 1 apresenta o diagrama de casos de uso confeccionado com base no App Firefox.

<div align="center">
    <font size="3"><p style="text-align: center"><b>Figura 1:</b> Diagrama de casos de uso</p></font>
</div>

<center> <img src="assets/REQ 2024.1 - G6 - Frame 2.jpg"/> </center>

<div align="center"
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/DaviPierre">Davi Pierre</a>, <a href="https://github.com/kalipassos">Kallyne Macedo</a>, 2024</p></font>
</div>

## Especificação de casos de uso

### Realizar pesquisa na Web 

Na tabela 2, abaixo, será disposta a especificação do caso de uso "Realizar pesquisa na web".


<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 2:</b> Especificação - Realizar pesquisa na Web  </p></font>
</div>

|  | Realizar pesquisa na Web |
| -: | :- |
| **Descrição** | O usuário realiza uma pesquisa na web, o que envolve acessar a barra de pesquisa e depois acessar o site com resultados da pesquisa. |
| **Ator** | Usuário |
| **Frequência de Uso** | Alta |
| **Pré-condições** | Conexão à Internet, acesso ao navegador, acesso a um mecanismo de buscas (Google, Bing, DuckDuckGo, etc.) |
| **Fluxo principal** | - Usuário abre o app. <br> - Usuário seleciona a barra de pesquisa e navegação. Aciona caso de uso "Acessar barra de pesquisa". <br> - Usuário insere o que deseja pesquisar na Web e confirma. <br> - Usuário é redirecionado para a página com resultados da pesquisa. Aciona o caso de uso "Acessar página com resultados". <br> - Pesquisa realizada com sucesso. |
| **Fluxos alternativos** | <b> FA.1: Sugestões de pesquisa </b> <br> - Usuário abre o app. <br> - Usuário seleciona a barra de pesquisa e navegação. Aciona caso de uso "Acessar barra de pesquisa". <br> - O usuário começa a digitar na barra de pesquisa. <br> - O usuário recebe sugestões personalizadas baseadas em seu histórico. Aciona caso de uso "Receber sugestões personalizadas de pesquisa". <br> - Usuário seleciona uma sugestão e confirma. <br> - Usuário é redirecionado para a página com resultados da pesquisa. Aciona o caso de uso "Acessar página com resultados". <br> - Pesquisa realizada com sucesso. |
| **Fluxos de exceção** | FE.1: <b> Resultado não encontrado </b> <br> - Usuário abre o app. <br> - Usuário seleciona a barra de pesquisa e navegação. Aciona caso de uso "Acessar barra de pesquisa". <br> - Usuário insere o que deseja pesquisar na Web e confirma. <br> - Usuário não encontra resultados para sua pesquisa <br> - O usuário pode tentar  repetir ou buscar com outros termos.  |
| **Pós-condições** |  O usuário visualiza os resultados da pesquisa.  |
| **Data da Criação** | 16/05/2024 |
| **Rastreabilidade** | OBS01,  OBS12, BRS23, BRS15 |

<div align="center">
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/kalipassos">Kallyne Macêdo</a>, 2024</p></font>
</div>

### Acessar histórico

Na tabela 3, abaixo, será disposta a especificação do caso de uso "Acessar histórico".


<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 3:</b> Especificação - Acessar historico  </p></font>
</div>

|  | Acessar historico |
| -: | :- |
| **Descrição** | O usuário acessa o historico, o que envolve acessar o menu lateral e selecionar a opção de histórico. |
| **Ator** | Usuário |
| **Frequência de Uso** | Média |
| **Pré-condições** | Conexão à Internet, possuir o aplicativo instalado em seu celular |
| **Fluxo principal** | - Usuário abre o app. <br> - Usuário seleciona o menu lateral. <br> - Usuário seleciona a opcao historico. Aciona caso de uso "Acessar historico de guias". <br> - Usuário é redirecionado para a página com o historico de guias. <br> - Acesso ao historico de guias realizado com sucesso. |
| **Fluxos alternativos** | <b> FA.1: Acesso ao historico de downloads </b> <br> - Usuário abre o app. <br> - Usuário seleciona o menu lateral. <br> - Usuário seleciona o botao de downloads. Aciona caso de uso "acessar historico de downloads" <br> - Usuário é redirecionado para a página com o historico de downloads. <br> - Acesso ao historico de downloads realizado com sucesso. <br> <b> FA.2: Limpar historico de guias </b> <br> - Usuário abre o app. <br> - Usuário seleciona o menu lateral. <br> - Usuário seleciona a opcao historico. Aciona caso de uso "Acessar historico de guias". <br> - Usuário é redirecionado para a página com o historico de guias. <br> - Usuário seleciona o botao de apagar historico. <br> - Usuário seleciona quanto apagar do historico. Acessa caso de uso "limpar historico". <br> - Usuário é redirecionado para a página com o historico de guias atualizado. <br> - Limpar historico de guias realizado com sucesso. <br> <b> FA.3: Limpar historico de downloads </b> <br> - Usuário abre o app. <br> - Usuário seleciona o menu lateral. <br> - Usuário seleciona o botao de downloads. Aciona caso de uso "acessar historico de downloads" <br> - Usuário é redirecionado para a página com o historico de downloads. <br> - Usuário seleciona o botao de apagar historico. <br> - Usuário seleciona quanto apagar do historico. Acessa caso de uso "limpar historico". <br> - Usuário é redirecionado para a página com o historico de downloads atualizado. <br> - Limpar historico de downloads realizado com sucesso. |
| **Fluxos de exceção** | - |
| **Pós-condições** |  O usuário visualiza o historico.  |
| **Data da Criação** | 20/05/2024 |
| **Rastreabilidade** | OBS05, BRS24, OBS06, OBS22 |

<div align="center">
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Leonardo0o0">Leonardo Aguiar</a>, 2024</p></font>
</div>

### Bloquear anúncios
Na tabela 4, abaixo, será disposta a especificação do caso de uso "Bloquear anúncios".

<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 4:</b> Especificação - Bloquear anúncios  </p></font>
</div>

|  | Bloquear anúncios |
| -: | :- |
| **Descrição** | O usuário bloqueia anúncios enquanto navega, o que envolve acessar as configurações de bloqueio de anúncios no navegador. |
| **Ator** | Usuário |
| **Frequência de Uso** | Média |
| **Pré-condições** | Conexão à Internet, acesso ao navegador com recurso de bloqueio de anúncios disponível. |
| **Fluxo principal** | - Usuário abre o app. <br> - Usuário acessa o menu de configurações. <br> - Usuário seleciona a opção de bloqueio de anúncios. <br> - Usuário ativa a funcionalidade de bloqueio de anúncios. <br> - Bloqueio de anúncios realizado com sucesso. |
| **Fluxos alternativos** | <b> FA.1: Personalizar bloqueio de anúncios </b> <br> - Usuário abre o app. <br> - Usuário acessa o menu de configurações. <br> - Usuário seleciona a opção de bloqueio de anúncios. <br> - Usuário seleciona configurações avançadas de bloqueio de anúncios. <br> - Usuário personaliza os tipos de anúncios que deseja bloquear. <br> - Personalização de bloqueio de anúncios realizada com sucesso. |
| **Fluxos de exceção** | <b>FE.1: Erro ao ativar o bloqueio de anúncios </b> <br> - Usuário abre o app. <br> - Usuário acessa o menu de configurações. <br> - Usuário seleciona a opção de bloqueio de anúncios. <br> - Usuário tenta ativar a funcionalidade de bloqueio de anúncios, mas ocorre um erro. <br> - Usuário recebe uma mensagem de erro e pode tentar novamente mais tarde. <br><b>FE.2: O site identifica o bloqueador e não permite o uso</b> <br> - Usuário abre o app. <br> - Usuário acessa o menu de configurações. <br> - Usuário seleciona a opção de bloqueio de anúncios. <br> - Usuário ativa a funcionalidade de bloqueio de anúncios. <br> - Usuário acessa o site "x". <br> - O site "x" identifica o uso do bloqueador de anúncios. <br> - O site "x" barra o uso do bloqueador, não permitindo que o usuário prossiga. <br> - Usuário precissa desligar o bloqueador.|
| **Pós-condições** | O usuário navega na web sem anúncios indesejados. |
| **Data da Criação** | 20/05/2024 |
| **Rastreabilidade** | OBS27, BRS08, QST02 |

<div align="center">
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>
</div>

### Mudar o Idioma
Na tabela 5, abaixo, será disposta a especificação do caso de uso "Mudar o Idioma".

<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 5:</b> Especificação - Mudar o Idioma  </p></font>
</div>

|  | Mudar o Idioma |
| -: | :- |
| **Descrição** | O usuário altera o idioma da interface do navegador, o que pode incluir a tradução de páginas web automaticamente. |
| **Ator** | Usuário |
| **Frequência de Uso** | Baixa |
| **Pré-condições** | Conexão à Internet, acesso ao navegador Firefox instalado no dispositivo do usuário, disponibilidade de idiomas suportados pelo navegador. |
| **Fluxo principal** | - Usuário abre o app. <br> - Usuário acessa o menu de configurações. <br> - Usuário seleciona a opção de configuração de idioma. <br> - Usuário escolhe o idioma desejado da lista de idiomas suportados. <br> - Usuário confirma a mudança de idioma. <br> - Mudança de idioma realizada com sucesso. |
| **Fluxos alternativos** | <b> FA.1: Traduzir páginas automaticamente </b> <br> - Usuário habilita a tradução automática de páginas. <br> - Usuário seleciona a opção para traduzir páginas automaticamente ao acessar páginas em idiomas diferentes do configurado. <br> - O caso de uso "Traduzir páginas" é acionado. <br> - Páginas em idiomas diferentes são automaticamente traduzidas para o idioma configurado. |
| **Fluxos de exceção** | <b>FE.1: Erro na mudança de idioma</b> <br> - Usuário tenta confirmar a mudança de idioma. <br> - O sistema exibe uma mensagem de erro informando que a mudança de idioma falhou. <br> - Usuário fecha o aplicativo, abre o aplicativo novamente e tenta selecionar novamente o idioma desejado ou entra em contato com a empresa para informar o problema.|
| **Pós-condições** | O navegador exibe a interface no novo idioma escolhido pelo usuário. |
| **Data da Criação** | 20/05/2024 |
| **Rastreabilidade** | OBS14 |

<div align="center">
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/kauaneiras">Kauan Eiras</a>, 2024</p></font>
</div>

### Acessar site
Na tabela 6, abaixo, será disposta a especificação do caso de uso "Acessar site".

<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 6:</b> Especificação - Acessar site  </p></font>
</div>

|  | Acessar site |
| -: | :- |
| **Descrição** | O usuário encontra e acessa um site específico na internet |
| **Ator** | Usuário |
| **Frequência de Uso** | Média |
| **Pré-condições** | Conexão à Internet |
| **Fluxo principal** | - Usuário abre o app. <br> - Usuário acessa a barra de pesquisa. <br> - Usuário digita o nome do site a ser acessado. <br> - Usuário Usuário acesa o site. |
| **Fluxos alternativos** | <b> FA.1: Usuário deseja usar a ferramenta de pesquisa por voz </b> <br> - Usuário abre o app. <br> - Usuário acessa a barra de pesquisas. <br> - Usuário seleciona a ferramenta de pesquisa por voz. <br> - Usuário fala o nome do site que quer pesquisar. <br> - Usuário clica no link do site a ser acessado. <br> - Usuário acessa o site. <br> <b> FA.2: Usuário deseja usar a sugestão personalizada de pesquisa</b>  <br> - Usuário abre o app. <br> - Usuário acessa a barra de pesquisas. <br> - Usuário escreve algumas letras do site a ser acessado. <br> - Aplicativo mostra na tela sugestões personalizadas de pesquisa. <br> - Usuário clica na seleção personalizada de pesquisa adequada. <br> - Usuário acessa o site. <br> <b> FA.3: Usuário deseja usar um atalho de site favorito para acessar o site</b>  <br> - Usuário abre o app. <br> - Usuário clica no atalho do site favorito. <br> - Usuário acessa o site. <br> <b> FA.4: Usuário deseja acessar um site acessado recentemente</b>  <br> - Usuário abre o app. <br> - Usuário clica no atalho do site acessado recentimente. <br> - Usuário acessa o site. |
| **Fluxos de exceção** | <b>FE.1: Site fora do ar ou inexistente </b><br> - Usuário abre o app. <br> - Usuário acessa a barra de pesquisa. <br> - Usuário usuário digita o nome do site a ser acessado. <br> - Site procurado pelo usuário não existe ou está fora do ar. <br> - Usuário recebe a mensagem de error 404 <br> <b>FE.2: Aplicativo não consegue acessar a internet </b><br> - Usuário abre o app. <br> - Usuário acessa a barra de pesquisa. <br> - Usuário usuário digita o nome do site a ser acessado. <br> - Aplicativo não tem acesso a internet. <br> - Usuário recebe a mensagem de erro "Sem internet|
| **Pós-condições** | O usuário consegue acesar o site desejado. |
| **Data da Criação** | 20/05/2024 |
| **Rastreabilidade** | OBS01, BRS23, OBS12, BRS15, OBS29, OBS04, ENT05, BRS24 |

<div align="center">
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/DaviPierre">Davi Pierre</a>, 2024</p></font>
</div>

## Referências bibliográficas

1. Lucidchart. Diagrama de caso de uso UML. Disponível em: <https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml>. Acesso em: 16 de maio de 2024.
2. Lucid Software Português. Tutorial de Caso de Uso UML. Disponível em: https://www.youtube.com/watch?v=ab6eDdwS3rA. Acesso em: 16 de maio de 2024.


## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 16/05/2024 | Criação da página | [Guilherme Westphall](https://github.com/west7) | [Kallyne Macedo](https://github.com/kalipassos)     |
| 1.1    | 18/05/2024 | Adição diagrama e caso de uso 1 | [Kallyne Macedo](https://github.com/kalipassos) |  [Davi Pierre](https://github.com/DaviPierre)    |
| 1.2    | 20/05/2024 | Caso de uso "Acessar historico" Tabela 3 | [Leonardo Aguiar](https://github.com/Leonardo0o0) |  [Kallyne Macedo](https://github.com/kalipassos)    |
| 1.3 | 20/05/2024 | Caso de uso "Bloquear anúncios" | [Guilherme Westphall](https://github.com/west7) | [Lucas Martins](https://github.com/martinsglucas)|
| 1.4 | 20/05/2024 | Caso de uso "Mudar o Idioma" | [Kauan Eiras](https://github.com/kauaneiras) | [Guilherme Westphall](https://github.com/west7)| 
| 1.5 | 20/05/2024 | Adiciona textos introdutórios | [Guilherme Westphall](https://github.com/west7) | [Kauan Eiras](https://github.com/kauaneiras)|
| 1.6 | 20/05/2024 | Adiciona casos de uso "Acessar site"| [Davi Pierre](https://github.com/DaviPierre)| [Kauan Eiras](https://github.com/kauaneiras) |
