# Léxicos

## Introdução

Na engenharia de requisitos, léxicos são documentos que contêm um conjunto de palavras e vocabulário específico relacionado ao domínio do sistema que está sendo desenvolvido. Eles servem como referência para garantir que todos os membros do time tenham uma compreensão comum e consistente dos termos utilizados no projeto, além do que ajudam a definir a linguagem utilizada para a definição dos requisitos do software.

## Metodologia

Neste artefato iremos identificar os léxicos referentes ao navegador Firefox. Teremos como base os [requisitos elicitados na entrega 2](/docs/elicitacao/tecnicas/requisitos_elicitados.md) e a utilização do aplicativo. A seguir, na tabela 1, temos um modelo de como será feita a definição dos léxicos.

<div align="center">
    <font size="3"><p style="text-align: center"><b>Tabela 1:</b>  Template para os léxicos</p></font>
</div>

| Termo                    | Tipo                | Noção                                                           | Impacto                                                     | Autor                              |
| ------------------------ | ------------------- | --------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------- |
| Nome associado ao léxico | Objeto/Verbo/Estado | Significado do símbolo, com descrição quase que de "dicionário" | Descrição do efeito/uso/decorrência do símbolo na aplicação | Indivíduo que realizou a descrição |

<div align="center">
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>
</div>

Existem 3 tipos de léxicos que são os seguintes: Objeto, verbo e estado. Na tabela 2 estão listadas as regras por tipo de como devem ser definidos os léxicos.

<div align="center">
    <font size="3"><p style="text-align: center"><b>Tabela 2:</b>  Regras por tipo</p></font>
</div>

| Tipo   | Noção                                                              | Impacto                                                                                                   |
| ------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Objeto | Definir o objeto e listar outros objetos com os quais se relaciona | Ações que podem ser aplicadas ao objeto                                                                   |
| Verbo  | Quem realiza, quando acontece e quais procedimentos são envolvidos | Quais são os reflexos da ação no ambiente (outras ações que podem/devem ocorrer) e os estados decorrentes |
| Estado | Significado e quais ações levaram até esse estado                  | Identificar outros estados e ações que devem ocorrer a partir deste                                       |

<div align="center">
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>
</div>

## Objetos

Os léxicos do tipo objeto são uma abordagem na engenharia de requisitos que se concentra na identificação e descrição detalhada dos objetos relevantes dentro do domínio do problema ou do sistema em desenvolvimento. Nesse contexto, um "objeto" pode se referir a qualquer entidade, conceito ou componente significativo no domínio do sistema. Na tabela 3, a seguir, é possível encontrar os léxicos deste tipo.

<div align="center">
    <font size="3"><p style="text-align: center"><b>Tabela 3:</b>  Léxicos do tipo Objeto</p></font>
</div>

| Termo | Tipo   | Noção                                                                                                                                                                                              | Impacto                                                                                                                                                                                 | Autor                                           |
| ----- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| <a id="site">Site</a>  | Objeto | Entidade virtual que representa uma coleção de <a href="#pw">páginas web</a>, geralmente acessíveis através de um <a href="#navegador">navegador web</a>. Cada site possui um <a href="#url">URL</a> único que serve com um endereço na <a href="#internet">internet</a>. | Os <a href="#usuario">usuários</a> podem <a href="#navegar">navegar</a> por um <a href="#site">site</a> através de <a href="#link">links</a> internos, botões e menus de navegação. Também podem <a href="#busca">pesquisar</a> por informações relevantes dentro do <a href="#site">site</a>. | [Guilherme Westphall](https://github.com/west7) |
| <a id="pw">Página web</a> | Objeto |  Uma <a href="#pw">página web</a> é uma única página digital composta por conteúdo, como texto, imagens, vídeos e elementos interativos, que é acessível por meio de um <a href="#navegador">navegador</a> da web. Geralmente, uma <a href="#pw">página web</a> é identificada por um <a href="#url">URL</a> único e pode conter informações sobre um tópico específico, serviço, produto ou qualquer outro conteúdo relevante para os <a href="#usuario">usuários</a> da <a href="#internet">internet</a>. | Os <a href="#usuario">usuários</a> visualizam o conteúdo da página que pode ser texto, imagens, vídeos, entre outros e interagem com elementos da página.| [Guilherme Westphall](https://github.com/west7) |
| <a id="url">URL</a> | Objeto | Um <a href="#url">URL</a> (Uniform Resource Locator) é uma sequência de caracteres que especifica o endereço único de um recurso na <a href="#internet">internet</a>, como uma <a href="#pw">página web</a>, uma imagem, um arquivo de áudio, entre outros. Ele fornece a localização precisa do recurso na rede e é utilizado pelos <a href="navegador">navegadores</a> da web para acessar e exibir o conteúdo desejado. | Os <a href="#url">URLs</a> podem ser compartilhadas entre os <a href="#usuario">usuários</a> para acessar recursos específicos, podem ser digitados/colados/sugeridos na barra de pesquisa de um <a href="#navegador">navegador</a> e usados em <a href="#link">links</a>. | [Guilherme Westphall](https://github.com/west7) |
| <a id="link">Link</a> | Objeto | Um <a href="#link">link</a> é um elemento presente em <a href="#pw">página web</a> que permite aos <a href="#usuario">usuários</a> navegar entre diferentes recursos na <a href="#internet">internet</a>, como outras <a href="#pw">páginas web</a>, documentos, imagens, vídeos, entre outros. Ele é representado por texto, imagem ou outro elemento visual clicável que, quando ativado, direciona o <a href="#usuario">usuário</a> para o destino associado. | <a href="#link">Links</a> podems ser <a href="#click">clicados</a> e são usados para otimizar os mecanismos de <a href="#busca">busca</a>, redirecionando os <a href="#usuario">usuários</a> para outros recursos. | [Guilherme Westphall](https://github.com/west7)|
|<a id="usuario">Usuário</a>| Objeto  | Um usuário é qualquer pessoa que interage com o <a href="#site">site </a> para alcançar um objetivo específico, e sua experiência e feedback são fundamentais para o desenvolvimento e melhoria contínua desses sistemas e produtos. | Os  <a href="#usuario">usuários</a> fornecem feedback para melhorar a usabilidade, influenciando o desempenho e ajudando a identificar vulnerabilidades de segurança. Eles geram conteúdo, moldam a personalização e direcionam a evolução do  <a href="#site">site</a>. Além disso, suas interações influenciam estratégias de marketing, crescimento e monetização, orientando o desenvolvimento contínuo e a adaptação do  <a href="#site">site</a> ao mercado.| [Davi Pierre](https://github.com/DaviPierre) |
|<a id="internet">Internet</a>| Objeto | A <a href="#internet">internet</a> é uma rede global de computadores que permite a comunicação e o compartilhamento de informações em escala mundial, transformando a sociedade e promovendo a conectividade global. | A <a href="#internet">internet</a> transformou <a href="#site">sites</a> em ferramentas essenciais para comunicação, comércio e interação. Ela amplia o alcance, oferece visibilidade global, facilita o acesso a informações e serviços, e permite interações em tempo real. | [Davi Pierre](https://github.com/DaviPierre) |
|<a id="navegador">Navegador</a>| Objeto | Um <a href="#navegador">navegador</a> é um aplicativo usado para acessar e visualizar <a href="#pw">páginas web</a>. Ele interpreta o código HTML, CSS e JavaScript das <a href="#pw">páginas</a> para exibir conteúdo visualmente atraente aos <a href="#usuario">usuários</a>. Além disso, permite <a href="#navegar">navegar</a> entre diferentes <a href="#site">sites</a>, gerenciar favoritos e oferece recursos como abas e modo de navegação privada. | O <a href="#navegador">navegador</a> afeta a experiência do <a href="#usuario">usuário</a>, a acessibilidade e o desempenho do <a href="#site">site</a>. Compatibilidade, segurança e recursos adicionais influenciam a usabilidade e a eficácia do <a href="#site">site</a>, podendo afetar o alcance e a satisfação dos <a href="#usuario">usuários</a>. | [Davi Pierre](https://github.com/DaviPierre) |
| <a id="trafego">Trafego</a> | Objeto | <a href="#trafego">Tráfego</a> é a quantidade de dados transmitidos entre um <a href="#servidor">servidor</a> e os <a href="#usuarios">usuários</a> que acessam um <a href="#site">site</a> ou aplicação online. É uma medida do volume de visitantes, <a href="#pw">páginas</a> visualizadas e interações, crucial para entender o desempenho e a popularidade de um <a href="#site">site</a>. | O <a href="#trafego">trafego</a> afeta a visibilidade, desempenho e rentabilidade de um <a href="#site">site</a>. Altos volumes podem sobrecarregar <a href="#servidores">servidores</a>, impactar a velocidade de carregamento e gerar custos adicionais. No entanto, <a href="#trafego">tráfego</a> qualificado pode impulsionar a popularidade, aumentar a receita e melhorar o ranking nos mecanismos de <a href="#busca">busca</a>. | [Davi Pierre](https://github.com/DaviPierre) |
|<a id="servidor">Servidor</a>| Objeto | Um <a href="#servidor">servidor</a> é um computador ou software que hospeda e disponibiliza <a href="#pw">páginas da web</a> para acesso via <a href="#internet">internet</a>. Ele recebe solicitações de clientes (<a href="#navegador">navegadores</a>) e envia as <a href="#pw">páginas</a> correspondentes, geralmente utilizando o protocolo HTTP. | Um <a href="#servidor">servidor</a> influencia diretamente a disponibilidade, desempenho e segurança de um <a href="#site">site</a>. Sua configuração, capacidade de lidar com tráfego e tempo de resposta afetam a experiência do <a href="#usuario">usuário</a>, a eficácia do <a href="#site">site</a> e sua visibilidade na <a href="#internet">internet</a>. | [Davi Pierre](https://github.com/DaviPierre) |

<div align="center">
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, <a href="https://github.com/DaviPìerre">Davi Pierre</a>, 2024</p></font>
</div>

## Verbo
Os léxicos do tipo verbo representam uma abordagem na engenharia de requisitos que se foca nas ações realizadas pelos usuários ou sistemas dentro do contexto de um problema ou sistema em desenvolvimento. Nesse contexto, um "verbo" refere-se a uma operação, atividade ou procedimento que pode ser executado para alcançar um determinado objetivo ou realizar uma tarefa específica. Estão listados na tabela 4 abaixo.

<div align="center">
    <font size="3"><p style="text-align: center"><b>Tabela 4:</b> Léxicos do tipo Verbo</p></font>
</div>

| Termo | Tipo   | Noção                                                                                                                                                                                              | Impacto                                                                                                                                                                                 | Autor                                           |
| ----- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| <a id="navegar">Navegar</a> | Verbo | Ação realizada pelos <a href="#usuario">usuários</a> através de, principalmente, <a href="#navegador">navegadores</a> com o objetivo de explorar e interagir com diferentes partes do sistema. Esta ação ocorre quando os <a href="#usuario">usuários</a> buscam informações específicas, <a href="#navegar">navegam</a> por menus, <a href="#click">clicam</a> em <a href="#link">links</a> ou executam outras operações de <a href="#busca">busca</a> e interação. | Ao <a id="navegar">navegar</a> na <a href="#internet">internet</a>, os  <a href="#usuario">usuários</a> são expostos à diversas informações que podem levá-los a encontrar a informação que desejam ou não, levando a uma nova <a href="#busca">pesquisa</a> caso não encontrem ou levando ao <a href="#encerramento">encerramento</a> da aplicação em caso positivo. | [Guilherme Westphall](https://github.com/west7) |
| <a id="busca">Pesquisar/Buscar</a>| Verbo | <a href="#buscar">Buscar/pesquisar</a> é o processo de procurar informações ou recursos específicos usando um mecanismo de busca. Os usuários inserem palavras-chave ou frases para encontrar conteúdo relevante em <a href="#pw">páginas da web</a>, ajudando a obter respostas, descobrir produtos, serviços ou se informar sobre determinados tópicos. | A <a id="busca">busca/pesquisa</a> direciona o <a id="trafego">trafego</a> qualificado para um <a id="site">site</a>, aumentando a visibilidade e a relevância. <a id="site">Sites</a> otimizados para mecanismos de busca (SEO) podem atrair mais <a id="usuarios">usuários</a>, melhorar a classificação nos resultados e aumentar a taxa de conversão. | [Davi Pierre](https://github.com/DaviPierre) |
| <a id="click">Clicar</a>| Verbo | <a href="#click">Clicar</a> é a ação de pressionar o botão do mouse ou tocar na tela de um dispositivo para selecionar ou interagir com um elemento, como um <a href="#link">link</a>, botão ou imagem, direcionando o <a href="#usuario">usuário</a> para outra <a href="#pw">página da web</a>, recurso ou ação específica. | <a href="#click">Clicar</a> em <a href="#link">links</a> ou botões direciona os <a href="#usuario">usuários</a> para diferentes áreas de um <a href="#site">site</a>, influenciando a <a href="#navegar">navegação</a>, a interação e a conversão. Um design intuitivo e call-to-actions eficazes podem aumentar o engajamento, a permanência no <a href="#site">site</a> e a taxa de conversão. | [Davi Pierre](https://github.com/DaviPierre) |


<div align="center"
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, <a href="https://github.com/DaviPierre">Davi Pierre</a>,2024</p></font>
</div>

## Estado

Os léxicos do tipo Estado representam diferentes estados que um sistema pode assumir ao longo do tempo ou em resposta a determinadas condições ou eventos. Nesse contexto, um "estado" refere-se a uma condição ou situação específica em que o sistema se encontra em um determinado momento, refletindo diferentes configurações, modos de operação ou contextos de uso. Podem ser encontrados na tabela 5.


<div align="center">
    <font size="3"><p style="text-align: center"><b>Tabela 5:</b> Léxicos do tipo Estado</p></font>
</div>

| Termo | Tipo   | Noção                                                                                                                                                                                              | Impacto                                                                                                                                                                                 | Autor                                           |
| ----- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|<a id="encerramento">Encerramento do sistema</a>| Estado | Noção | Impacto | Autor |


<div align="center"
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>
</div>

## Referências

1. SERRANO, Milene. Requisitos - Aula 10. Local: UnB-FGA, Gama, DF. Apresentação de Power Point. 35, color. Disponível em: [Requisitos - Aula 10](https://aprender3.unb.br/pluginfile.php/2845027/mod_resource/content/1/Aula%2010.pdf). Acesso em: 09 de maio de 2024.

## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 09/05/2024 | Criação da página | [Guilherme Westphall](https://github.com/west7) | --      |
| 1.1 | 14/05/2024 | Adição Tabelas 4 e 5 | [Guilherme Westphall](https://github.com/west7) | -- |
| !.2 | 17/05/2024 | Finaliozação da tabela 3 e tabela 4| [Davi Pierre](https://github.com/DaviPierre) | -- |

