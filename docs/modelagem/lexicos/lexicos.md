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
| Site  | Objeto | Entidade virtual que representa uma coleção de [páginas web](), geralmente acessíveis através de um [navegador]() web. Cada site possui um [URL]() único que serve com um endereço na [internet](). | Os [usuários]() podem [navegar]() por um [site]() através de [links]() internos, botões e menus de navegação. Também podem [pesquisar]() por informações relevantes dentro do [site](). | [Guilherme Westphall](https://github.com/west7) |

<div align="center">
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>
</div>

## Verbo

## Estado

## Referências

1. SERRANO, Milene. Requisitos - Aula 10. Local: UnB-FGA, Gama, DF. Apresentação de Power Point. 35, color. Disponível em: [Requisitos - Aula 10](https://aprender3.unb.br/pluginfile.php/2845027/mod_resource/content/1/Aula%2010.pdf). Acesso em: 09 de maio de 2024.

## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 09/05/2024 | Criação da página | [Guilherme Westphall](https://github.com/west7) | --      |