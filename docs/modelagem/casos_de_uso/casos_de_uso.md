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


<div align="center">
<font size="3"><p style="text-align: center"><b>Tabela 3:</b> Especificação - Acessar historico  </p></font>
</div>

|  | Acessar historico |
| -: | :- |
| **Descrição** | O usuário acessa o historico, o que envolve acessar o menu lateral e selecionar a opcao de historico. |
| **Ator** | Usuário |
| **Frequência de Uso** | Media |
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


## Referências bibliográficas

1. Lucidchart. Diagrama de caso de uso UML. Disponível em: <https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml>. Acesso em: 16 de maio de 2024.
2. Lucid Software Português. Tutorial de Caso de Uso UML. Disponível em: https://www.youtube.com/watch?v=ab6eDdwS3rA. Acesso em: 16 de maio de 2024.


## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 16/05/2024 | Criação da página | [Guilherme Westphall](https://github.com/west7) | [Kallyne Macedo](https://github.com/kalipassos)     |
| 1.1    | 18/05/2024 | Adição diagrama e caso de uso 1 | [Kallyne Macedo](https://github.com/kalipassos) |  [Davi Pierre](https://github.com/DaviPierre)    |
| 1.2    | 20/05/2024 | Caso de uso "Acessar historico" Tabela 3 | [Leonardo Aguiar](https://github.com/Leonardo0o0) |  [Kallyne Macedo](https://github.com/kalipassos)    |
