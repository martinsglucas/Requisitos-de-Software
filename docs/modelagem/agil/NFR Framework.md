### NFR Framework

#### Introdução

O NFR (Non-Functional Requirements) Framework, ou Framework de Requisitos Não Funcionais, é uma metodologia essencial na engenharia de software. Ele se concentra na definição e gerenciamento de requisitos que não estão diretamente ligados às funcionalidades do sistema, mas sim às suas características qualitativas, como desempenho, segurança, usabilidade e outros aspectos que afetam a experiência do usuário. Esses requisitos são cruciais para o sucesso do projeto, pois definem como o sistema deve operar em diversos cenários.

O framework utiliza o conceito de "softgoals", que são objetivos sem critérios específicos de satisfação. Softgoals representam requisitos não funcionais e podem influenciar uns aos outros [1].

Os gráficos de interdependência de softgoals, conhecidos como Softgoal Interdependency Graphs (SIGs), são usados pelo NFR Framework para capturar e representar essas interdependências e decisões de desenvolvimento. Esses gráficos documentam detalhadamente as decisões, alternativas e justificativas, permitindo uma avaliação abrangente dos requisitos [1].

Os softgoals são divididos em três categorias [2], conforme ilustrado na Figura 1:

1. **Softgoals NFR**: Representam os requisitos não funcionais.
2. **Softgoals de Operacionalização**: Soluções práticas para satisfazer os softgoals NFR.
3. **Softgoals de Afirmação**: Consideram características do domínio, como prioridades e carga de trabalho.

**Figura 1: Tipos de Softgoals**  
<img src="./NFR Framework/TiposSoftgoals.png">

Fonte: [Kauan Eiras](https://github.com/kauaneiras), Desenvolvido no [Canva](https://www.canva.com/), 2024.

#### Tipos de Refinamentos

Os refinamentos são essenciais para detalhar os softgoals, permitindo uma decomposição precisa e estruturada. Eles são divididos em quatro tipos principais [2]:

1. **Decomposição de Softgoal NFR**: Segmenta um softgoal NFR em subobjetivos mais específicos, ajudando a esclarecer e detalhar requisitos não funcionais complexos.
2. **Decomposição de Softgoal de Operacionalização**: Subdivide um softgoal de operacionalização em objetivos mais granulares, facilitando a definição de soluções práticas e específicas.
3. **Decomposição de Softgoal de Afirmação (Claims)**: Refina softgoals de afirmação em subobjetivos adicionais, permitindo a criação de justificativas robustas para decisões de projeto.
4. **Priorização**: Cria softgoals similares, mas com prioridades definidas, ajudando na determinação da importância relativa de cada objetivo.

**Figura 2: Tipos de Refinamentos**  
<img src="./NFR Framework/DecomposiçãoSoftgoal.PNG">

Fonte: CHUNG, 2000.

#### Tipos de Contribuições

As contribuições descrevem como um softgoal descendente pode impactar o softgoal ascendente. Existem várias formas de contribuição, cada uma com seu próprio impacto específico:

| Contribuição | Descrição                                                                                                | Notação |
|--------------|----------------------------------------------------------------------------------------------------------|---------|
| MAKE         | Filho com contribuição tão positiva que satisfaz o Pai                                                    | ++      |
| HELP         | Filho com contribuição positiva parcial, que sozinho não satisfaz o Pai                                  | +       |
| UNKNOWN      | Filho não afeta o Pai                                                                                     | ?       |
| HURT         | Filho com contribuição negativa parcial, que sozinho não nega o Pai                                       | -       |
| BREAK        | Filho com contribuição tão negativa que nega o Pai                                                        | --      |
| SOME +       | Filho com contribuição positiva, cuja intensidade é desconhecida                                          | SOME +  |
| SOME -       | Filho com contribuição negativa, cuja intensidade é desconhecida                                          | SOME -  |
| AND          | Pai é satisfeito se todos os filhos forem satisfeitos                                                     | AND     |
| OR           | Pai é satisfeito se um dos filhos for satisfeito                                                          | OR      |
| EQUAL        | Ambos compartilham o mesmo rótulo                                                                         | =       |

**Figura 3: Contribuições entre Softgoals**  
<img src="./NFR Framework/ContibuicaoSoftgoals.PNG">
Fonte: SERRANO, 2019.

#### Procedimento de Avaliação

O processo de avaliação dos softgoals verifica o grau de satisfação de cada requisito não funcional. Para isso, são atribuídos rótulos aos softgoals, que podem incluir "satisfeito", "parcialmente satisfeito", "não atendido", "parcialmente não atendido", "conflitante" e "indeterminado". Este procedimento é crucial para garantir que todas as interdependências no SIG sejam adequadamente avaliadas e gerenciadas [1].

**Figura 4: Rótulos da Propagação de Impactos**  
<img src="./NFR Framework/RotulosSoftgoals.PNG">
Fonte: SILVA, 2019.

A avaliação detalhada e sistemática dos softgoals, bem como a visualização de suas interdependências e contribuições, são fundamentais para a modelagem eficaz de requisitos não funcionais, garantindo que os objetivos qualitativos do sistema sejam plenamente atendidos.

## Referências bibliográficas

[1] SILVA, Reinaldo Antônio. NFR4ES: Um Catálogo de Requisitos Não-Funcionais para Sistemas Embarcados. Centro de Informática UFPE, Recife, 2019. Disponível em: https://repositorio.ufpe.br/handle/123456789/34150. Acesso em: 05/11/2023.

[2] CHUNG, L.; NIXON, B. A.; YU, E.; MYLOPOULOS, J. Non-functional requirements in software engineering. Springer Science & Business Media: [s.n.], 2000. v. 5.

[3] SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 17. 1º/2019. 7-28 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.

## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 23/05/2024 | Criação da página | [Kauan Eiras](https://github.com/kauaneiras) | [Davi Pierre](https://github.com/DaviPierre)   |
| 1.1    | 23/05/2024 | Introdução e explicação sobre os Softgoals | [Kauan Eiras](https://github.com/kauaneiras) | [Davi Pierre](https://github.com/DaviPierre)   |


*(Nota: As imagens sugeridas devem ser criadas para ilustrar cada parte conforme descrito, utilizando ferramentas como o Canva ou similares para visualização clara e eficaz.)*