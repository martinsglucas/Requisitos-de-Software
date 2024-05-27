# Especificação Suplementar

## Introdução

A Especificação Suplementar corresponde a um documento em linguagem natural que busca descrever os requisitos de um sistema que não foram elicitados pelos casos de uso. Este documento é complementar à modelagem de casos de uso e é crucial no processo de desenvolvimento de software, pois captura requisitos não funcionais e outros aspectos essenciais que não são facilmente definidos pela modelagem.
O objetivo principal da Especificação Suplementar é garantir que todos os requisitos do sistema sejam abrangidos, proporcionando uma visão completa e detalhada que, junto com os casos de uso, define todos os requisitos do sistema. Este documento é essencial para assegurar a qualidade do software e a satisfação do usuário.

## Metodologia

A metodologia base utilizada para a produção da especificação suplementar é a FURPS+, que aborda Funcionalidade, Usabilidade, Confiabilidade, Desempenho e Suportabilidade, além de outros aspectos. Dessa forma, o documento foi estruturado de forma a permitir que cada subtópico da Especificação Suplementar represente um aspecto da FURPS+.

## Especificação Suplementar

### Funcionalidade

Os requisitos funcionais estão especificados nos [cenários](cenarios.md) e [casos de uso](casos_de_uso/casos_de_uso.md).

### Usabilidade

Usabilidade, segundo Nielsen, é a qualidade que avalia a facilidade de uso de uma interface. Ele propõe 10 heurísticas que, quando seguidas, promovem uma melhor usabilidade, permitindo que os usuários realizem suas tarefas de forma eficiente, eficaz e satisfatória.

Na tabela 1, são apresentados os requisitos identificados em relação à usabilidade:

<center>

Tabela 1 - Requisitos de Usabilidade.

| ID |    Descrição   |
| :----: | :--------: |
| US1 | Deve ser possível visualizar em formato desktop |
| US2 | Deve disponibilizar formas de facilitar seu uso principal, como criar atalhos, sugestões personalizadas de pesquisa e pesquisa por voz. |
| US3 | Deve disponibilizar formas de se adaptar ao usuário, incluindo acessibilidade, personalizar a tela inicial do navegador, mudar o idioma e mudar entre tema claro e escuro. |
| US4 | O aplicativo deve fornecer feedback imediato após cada ação do usuário. |
| US5 | O aplicativo deve permitir que os usuários desfaçam ações sempre que possível. |

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024.

</center>

### Confiabilidade

O aspecto da confiabilidade refere-se à habilidade de um produto em executar uma função específica sob condições determinadas, por um período de tempo definido ou por uma quantidade específica de operações. As principais subcategorias que compõem a confiabilidade podem ser definidas como: disponibilidade, precisão e recuperabilidade.

Na tabela 2, são apresentados os requisitos identificados em relação à confiabilidade.

<center>
Tabela 2 - Requisitos de Confiabilidade

| ID     |    Descrição    | Subcategoria |
| :----: | :--------:     |  :--------: |
|  RC01  | O aplicativo deve estar disponível para uso 99.9% do tempo | Disponibilidade |
|  RC02  | O aplicativo deve apresentar proteção contra ataques maliciosos 24 horas por dia, 7 dias da semana | Disponibilidade |
|  RC03  | O backup dos dados deve ser realizado automaticamente | Recuperabilidade | 
|  RC04  | O aplicativo deve carregar as páginas Web com 99.9% de precisão, exibindo os elementos adequadamente | Precisão | 
|  RC05  | O aplicativo deve ser atualizado sem interromper a navegação do usuário | Disponibilidade
|  RC06  | Caso falhe ou trave, o aplicativo deve ser capaz de restaurar a sessão do usuário em menos de 1 minuto | Recuperabilidade |
|  RC07  | O navegador deve ser compatível com pelo menos 90% das páginas web | Precisão 

Fonte: [Kallyne Macedo](https://github.com/kalipassos), 2024
</center>

### Desempenho

Os requisitos de desempenho especificam as expectativas e limites relacionados à eficiência e capacidade de resposta de um sistema ou aplicativo. Eles são críticos para garantir que o software funcione de maneira eficaz sob várias condições de uso e carga.

Na tabela 3, são apresentados os requisitos identificados em relação ao desempenho.

<center>

Tabela 3 - Requisitos de Desempenho

| Identificador | Descrição |
| :-----------: | :-------: |
| DES01 | O sistema deve apresentar tempo de resposta inferior a 1 segundo ao realizar uma pesquisa |
| DES02 | O navegador deve ser capaz de iniciar e estar pronto para uso em menos de 3 segundos em dispositivos móveis com pelo menos 4 GB de RAM e processador quad-core de 1.8 GHz |
| DES03 | As páginas web devem começar a ser renderizadas em menos de 1 segundo e estar totalmente carregadas em menos de 3 segundos em conexões de internet de alta velocidade (pelo menos 50 Mbps) |
| DES04 | O sistema deve ser capaz de armazenar em cache páginas web visitadas para acelerar o carregamento de páginas subsequentes |
| DES05 | O Firefox deve consumir menos de 20% de CPU durante a navegação típica (definida como navegação em sites populares como redes sociais, notícias, e-commerce) e menos de 50% durante operações intensivas (definidas como execução de vídeos em alta definição, jogos online) |
| DES06 | O Firefox deve liberar memória quando as guias são fechadas ou não utilizadas, mantendo o consumo de memória abaixo de 500 MB durante a navegação típica (até 10 guias abertas) e não ultrapassar 2 GB em uso intenso (mais de 30 guias abertas) | 

Fonte: [Lucas Martins](https://github.com/martinsglucas), 2024

</center>

### Suportabilidade

A Suportabilidade de Software é a capacidade de suportar um sistema de software durante toda a sua vida útil. Isso implica satisfazer todas as necessidades ou requisitos necessários, bem como a provisão de equipamentos, infraestrutura de suporte, software adicional, instalações, mão de obra ou qualquer outro recurso necessário para manter o software operacional e capaz de cumprir sua função.

A empresa que gerencia o software possui uma [página de suporte online](https://support.mozilla.org/pt-BR/). Além disso, realiza atualizações regulares, com uma frequência de quatro semanas, além de uma atualização anual mais abrangente. As atualizações abordam novas funcionalidades e corrigem erros identificados em seus respectivos períodos. No caso do aplicativo Firefox, ele oferece suporte para sistemas operacionais iOS 13.0 e superior, e Android 5.0 e acima. 

Na tabela 4, são apresentados os requisitos identificados em relação à suportabilidade:

<center>

Tabela 4 - Requisitos de Suportabilidade.

| ID |    Descrição   |
| :----: | :--------: |
|  SUP01   | O aplicativo deve prover suporte em casos de erros de execução e bugs. |
|  SUP02   | O sistema deve ser extensível para permitir a adição de novas funcionalidades e acompanhar as mudanças. |
|  SUP03   | A documentação deve estar sempre atualizada para facilitar a contribuição, com cobertura de pelo menos 90%. |
|  SUP04   | O sistema deve ser projetado para facilitar a realização de testes durante o desenvolvimento e a manutenção. |
|  SUP05   | O sistema deve contar com rastreabilidade, incluindo mecanismos para registrar e acompanhar mudanças e correções ao longo do tempo, com controle de versão e registros de alterações.|

Fonte: [Leonardo Aguiar](https://github.com/Leonardo0o0), 2024.

</center>

### +: Restrições de Design

As restrições de design tratam das limitações e diretrizes que o projeto deve seguir. 

Na tabela 5, são apresentados os requisitos identificados em relação às restrições de design. 

<center>
Tabela 5 - Requisitos de Restrições de Design 

| ID     |    Descrição    | 
| :----: | :--------:     | 
|  RD01  | O aplicativo deve ser compatível com as diretrizes de design do sistema operacional (Android ou iOS) |
|  RD02  | O design do aplicativo deve ser responsivo e adaptável ao tamanho do dispositivo móvel |
|  RD03  | O aplicativo deve seguir diretrizes de acessibilidade da WCAG |

Fonte: [Kallyne Macedo](https://github.com/kalipassos), 2024
</center>

### +: Requisitos de Implementação

Requisitos de implementação detalham as restrições e condições para a construção, codificação e integração de um sistema ou aplicativo. Eles são orientados para o desenvolvimento técnico e influenciam a forma como o software é desenvolvido, estruturado e mantido

Na tabela 6, são apresentados os requisitos em relação à implementação.

<center>

Tabela 6 - Requisitos de Implementação

| Identificador | Descrição |
| :-----------: | :-------: |
| IMP01 | O código-fonte deve seguir os padrões de codificação definidos pela Mozilla, como aqueles especificados no Mozilla Coding Style Guide |
| IMP02 | O sistema deve ser desenvolvido de forma modular, permitindo a reutilização de componentes em diferentes partes do navegador |
| IMP03 | A documentação técnica do sistema, incluindo diagramas de arquitetura e manuais de API, deve ser mantida atualizada |
| IMP04 | Cobertura de testes deve ser mantida acima de 80%, com testes automatizados para todas as funcionalidades críticas. |
| IMP05 | O código deve ser escrito de maneira a ser portátil, facilitando a execução do navegador em diferentes sistemas operacionais |

Fonte: [Lucas Martins](https://github.com/martinsglucas), 2024

</center>

### +: Requisitos de Interface

As restrições de interface estão ligadas à comunicação do sistema com sistemas externos e buscam definir os protocolos para a ocorrência dessa comunicação.

Na tabela 7, foram listados na tabela os Requisitos Não Funcionais (RNF) relacionados a interface.

<center>
Tabela 7 - Requisitos de Interface

| ID     |    Descrição    | 
| :----: | :--------:     | 
|  RI01  | O aplicativo deve possuir uma política de gerenciamento de cookies |
|  RI02  | O aplicativo deve possuir suporte multilíngue |
|  RI03  | O aplicativo deve ser capaz de suportar codificação UTF-8 |
|  RI04  | O aplicativo deve suportar a navegação offline para páginas já carregadas previamente através do cache | 
|  RI05  | O aplicativo deve realizar transições entre Wi-Fi e rede móvel sem interromper a navegação | 

Fonte: [Kallyne Macedo](https://github.com/kalipassos), 2024

</center>

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
|  1.0   | 19/05/2024 | Introdução e Metodologia | [Kallyne Macedo](https://github.com/kalipassos) | [Lucas Martins](https://github.com/martinsglucas) |
|  1.1   | 20/05/2024 | Usabilidade, Suportabilidade e Requisitos Físicos | [Leonardo Aguiar](https://github.com/Leonardo0o0) | [Davi Pierre](https://github.com/DaviPierre) |
|  1.2   | 20/05/2024 | Desempenho e Requisitos de Implementação | [Lucas Martins](https://github.com/martinsglucas) | [Kauan T. Eiras](https://github.com/kauaneiras)
|  1.3   | 20/05/2024 | Confiabilidade, Restrições de Design e Interface | [Kallyne Macedo](https://github.com/kalipassos) | [Kauan T. Eiras](https://github.com/kauaneiras)
| 1.4 | 27/05/2024 | Melhor especificação para o Desempenho | [Lucas Martins](https://github.com/martinsglucas) |  [Leonardo Aguiar](https://github.com/Leonardo0o0)
