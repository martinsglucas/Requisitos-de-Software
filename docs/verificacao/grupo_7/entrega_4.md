# Verificação da entrega 4 do grupo 7

## Introdução

Este documento aborda a verificação da [Entrega 4](https://requisitos-de-software.github.io/2024.1-Meu-INSS/modelagem/Agil/backlog/), intitulada "modelagem ágil". Esta entrega inclui os artefatos de [Backlog](https://requisitos-de-software.github.io/2024.1-Meu-INSS/modelagem/Agil/backlog/), [NFR Framework](https://requisitos-de-software.github.io/2024.1-Meu-INSS/modelagem/Agil/nfr2/) e [Histórias de Usuário](https://requisitos-de-software.github.io/2024.1-Meu-INSS/modelagem/Agil/historia_de_usuario/), elaborados pelo [grupo 7](https://requisitos-de-software.github.io/2024.1-Meu-INSS/), que está trabalhando com o aplicativo: "Meu INSS".

## Metodologia

Para realizar a análise dos documentos, utilizarei uma adaptação do método de "Inspeção" criado por Fagan no final da década de 1970. No contexto desta disciplina, a Inspeção será composta por 3 das 6 etapas propostas por Fagan. São elas:

1. **Planejamento**: Consiste em avaliar os artefatos e planejar as atividades de inspeção.
2. **Preparação**: Após a análise e compreensão dos artefatos, será elaborada uma lista de critérios (checklist) que orientará a avaliação de cada página.
3. **Inspeção**: Esta etapa envolve verificar se os artefatos atendem aos critérios estabelecidos nas checklists.

## Objetos de verificação

Nos dias que foi realizada a inspeção, 3 e 4 de junho de 2024 , os artefatos avaliados estavam nas seguintes versões demonstradas na tabela 1:

<center>

**Tabela 1**: Objetos de verificação

|                          | Versão | Data       | Descrição                                               | Autor(es)     | Data de revisão | Revisor(es)   |
| ------------------------ | ------ | ---------- | ------------------------------------------------------- | ------------- | --------------- | ------------- |
| **Backlog**              | 1.3    | 28/05/2024 | Arrumando Hiperlinks e ajustes na tabela de backlog.    | Johnny Lopes  | -               | -             |
| **NFR Framework 1 e 2**  | 1.9    | 02/06/2024 | Criação do documento.                                   | Vitor Feijó   | 02/06/2024      | Bianca Castro |
| **Histórias de Usuário** | 2.2    | 30/05/2024 | Adição da validação e priorização do cliente e ajustes. | Bianca Castro | 30/05/2024      | Amanda Campos |

**Autor**: [Guilherme Westphall](https://github.com/west7)

</center>

> Observação: Haviam dois artefatos de NFR Framework, um com os cartões e outro com os grafos, considerei o mais recente para a adição na tabela 1.

## Checklists

Nesta seção, serão apresentadas a preparação dos checklists e as respectivas inspeções, onde os critérios poderão ser avaliados como "Sim", "Não" ou "Incompleto", dos artefatos listados anteriormente nas Tabelas 2, 3, 4, 5, 6 e 7.

### Backlog

=== "Preparação do checklist"

    <center>

    **Tabela 2**: Preparação do checklist do backlog

    | ID  | Descrição                                                                                 |
    | --- | ----------------------------------------------------------------------------------------- |
    | 01  | O artefato contém o histórico de versão padronizado?                                      |
    | 02  | Os autores e revisores estão identificados para cada artefato?                            |
    | 03  | O artefato possui um texto de introdução?                                                 |
    | 04  | As tabelas/imagens possuem fonte/autor?                                                   |
    | 05  | O artefato possui referências/bibliografia corretamente citadas?                          |
    | 06  | O artefato contém a metodologia/método utilizado?                                         |
    | 07  | Houve participação do cliente/persona na elicitação dos requisitos?                       |
    | 08  | A separação do backlog em temas, épicos e histórias de usuário está bem definida?         |
    | 09  | No backlog, está claro se uma história de usuário está implementada ou não no aplicativo? |
    | 10  | O backlog contém a rastreabilidade dos requisitos?                                        |
    | 11  | O backlog contém hyperlinks para os requisitos elicitados?                                |
    | 12  | No backlog estão descritas as prioridades das histórias de usuário?                       |
    
    **Autor**: [Guilherme Westphall](https://github.com/west7)

    </center>

=== "Inspeção"

    <center>

    **Tabela 3**: Inspeção do backlog

    | ID  | Descrição                                                                                 | Avaliação  |
    | --- | :---------------------------------------------------------------------------------------- | ---------- |
    | 01  | O artefato contém o histórico de versão padronizado?                                      | Sim        |
    | 02  | Os autores e revisores estão identificados para cada artefato?                            | Sim        |
    | 03  | O artefato possui um texto de introdução?                                                 | Sim        |
    | 04  | As tabelas/imagens possuem fonte/autor?                                                   | Sim        |
    | 05  | O artefato possui referências/bibliografia corretamente citadas?                          | Sim        |
    | 06  | O artefato contém a metodologia/método utilizado?                                         | Sim        |
    | 07  | Houve participação do cliente/persona na elicitação dos requisitos?                       | Incompleto |
    | 08  | A separação do backlog em temas, épicos e histórias de usuário está bem definida?         | Sim        |
    | 09  | No backlog, está claro se uma história de usuário está implementada ou não no aplicativo? | Não        |
    | 10  | O backlog contém a rastreabilidade dos requisitos?                                        | Sim        |
    | 11  | O backlog contém hyperlinks para os requisitos elicitados?                                | Sim        |
    | 12  | No backlog estão descritas as prioridades das histórias de usuário?                       | Não        |

    **Autor**: [Guilherme Westphall](https://github.com/west7)

    </center>

#### Problemas encontrados

Os principais problemas encontrados no artefato [Backlog](https://requisitos-de-software.github.io/2024.1-Meu-INSS/modelagem/Agil/backlog/), foram a ausência de uma coluna "Implementado" que indicasse se uma história de usuário já estaria ou não implementada no aplicativo, a ausência de valor na coluna de "Prioridade" e a realização de algumas técnicas de elicitação sem a participação do cliente/persona, como o brainstorm, por exemplo.

### NFR Framework

=== "Preparação do checklist"

    | ID  | Descrição                                                        |
    | --- | ---------------------------------------------------------------- |
    | 01  | O artefato contém o histórico de versão padronizado?             |
    | 02  | Os autores e revisores estão identificados para cada artefato?   |
    | 03  | O artefato possui um texto de introdução?                        |
    | 04  | As tabelas/imagens possuem fonte/autor?                          |
    | 05  | O artefato possui referências/bibliografia corretamente citadas? |
    | 06  | O artefato contém a metodologia/método utilizado?                |


=== "Inspeção"

    | ID  | Descrição | Avaliação |
    | --- | --------- | --------- |

### Histórias de usuário

=== "Preparação do checklist"

    | ID  | Descrição                                                        |
    | --- | ---------------------------------------------------------------- |
    | 01  | O artefato contém o histórico de versão padronizado?             |
    | 02  | Os autores e revisores estão identificados para cada artefato?   |
    | 03  | O artefato possui um texto de introdução?                        |
    | 04  | As tabelas/imagens possuem fonte/autor?                          |
    | 05  | O artefato possui referências/bibliografia corretamente citadas? |
    | 06  | O artefato contém a metodologia/método utilizado?                |

=== "Inspeção"

    | ID  | Descrição | Avaliação |
    | --- | --------- | --------- |

## Referência

1. MASTER2TEACH. Fagan Inspection Methodology - Benefits of Software Inspections. Disponível em: https://www.youtube.com/watch?v=v_Lz2l_XsTQ. Acesso em: 3 jun. 2024.


## Histórico de versão

| Versão | Data       | Descição          | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 03/06/2024 | Criação da página | [Guilherme Westphall](https://github.com/west7) | -       |