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

A) **Decomposição de Softgoal NFR**: Segmenta um softgoal NFR em subobjetivos mais específicos, ajudando a esclarecer e detalhar requisitos não funcionais complexos.

B) **Decomposição de Softgoal de Operacionalização**: Subdivide um softgoal de operacionalização em objetivos mais granulares, facilitando a definição de soluções práticas e específicas.

C) **Decomposição de Softgoal de Afirmação (Claims)**: Refina softgoals de afirmação em subobjetivos adicionais, permitindo a criação de justificativas robustas para decisões de projeto.

D) **Priorização**: Cria softgoals similares, mas com prioridades definidas, ajudando na determinação da importância relativa de cada objetivo.

**Figura 2: Tipos de Refinamentos**  
<img src="./NFR Framework/DecomposiçãoSoftgoal.PNG">

Fonte: CHUNG, 2000.

#### Tipos de Contribuições

As contribuições descrevem como um softgoal descendente pode impactar o softgoal ascendente. Existem várias formas de contribuição, cada uma com seu próprio impacto específico:

Tabela 1: Tipos de Contribuições

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

### Metodologia

Neste documento, a metodologia adotada para a concepção do artefato foi fundamentada nos requisitos não funcionais (NFRs), que foram delineados com base no nosso documento de [especificação suplementar](https://requisitos-de-software.github.io/2024.1-Firefox/modelagem/especificacao-suplementar/). Utilizando o modelo FURPS+, definimos seis requisitos não funcionais, cada um sendo desenvolvido por um membro da equipe. 

Os NFRs foram divididos em cinco aspectos principais: Usabilidade, Confiabilidade, Desempenho, Suportabilidade, Interface e Segurança. A tabela 2 apresenta um resumo dos requisitos não funcionais definidos, a rastreabilidade, membro da equipe responsável pelo desenvolvimento do item e se aquele requisito já está implementado:

Tabela 2: Requisitos não funcionáis do Firefox
| ID    | Tipo           | Descrição                                                                                           | Rastreabilidade            | Membro    | Implementado |
|-------|----------------|-----------------------------------------------------------------------------------------------------|----------------------------|-----------|------------|
| NFR01 | Usabilidade    | O navegador deve ser intuitivo e fácil de usar, permitindo uma navegação simples acessivel e eficiente.  | BRS12, QST07, BRS21        | [Kauan Eiras](https://github.com/kauaneiras)  | Sim       | 
| NFR02 | Confiabilidade | O navegador deve ser altamente estável, minimizando travamentos e garantindo alta disponibilidade. O aplicativo deve estar disponível para uso 99.9% do tempo.     | BRS01                      | Membro 2  | Sim       |
| NFR03 | Desempenho     | O navegador deve carregar páginas e executar operações rapidamente, com um tempo máximo de resposta de 1 segundo. | BRS01, BRS02               | Membro 3  | Sim       |
| NFR04 | Suportabilidade| O navegador deve ser compatível com os principais sistemas operacionais (Windows, macOS, Linux) e dispositivos móveis. | BRS05, BRS20               | Membro 4  | Sim      |
| NFR05 | Interface      | O navegador deve ter uma interface limpa e personalizável, proporcionando uma boa experiência visual e de uso. | OBS26, OBS19, ENT06        | Membro 5  | Sim       |
| NFR06 | Segurança      | O navegador deve proteger os dados do usuário, oferecendo mecanismos robustos contra malware, phishing e outras ameaças. | OBS36, OBS37, BRS16, BRS06 | Membro 6  | Sim     |


Fonte: [Kauan Eiras](https://github.com/kauaneiras), 2024.

### Procedimento de Desenvolvimento

Cada membro da equipe foi responsável por um requisito específico, conforme detalhado na tabela acima. O processo envolveu as seguintes etapas:

1. **Análise e Elicitação de Requisitos**:
   - A partir do documento de especificação suplementar, cada membro analisou e refinou os requisitos não funcionais atribuídos a ele.

2. **Modelagem dos Requisitos com SIG**:
   - Para cada requisito, foi criado um SIG (Softgoal Interdependency Graph), que mapeou as interdependências entre os softgoals e documentou as alternativas e justificativas.
   - O SIG foi essencial para visualizar como cada softgoal impacta os outros e como os requisitos poderiam ser satisfeitos.

3. **Propagação de Impactos**:
   - Foi realizado um diagrama de propagação de impactos para entender como a implementação de cada NFR afetaria outros aspectos do sistema.
   - Este diagrama ajudou a identificar possíveis efeitos colaterais e a planejar mitigações apropriadas.

4. **Cartão de Especificação**:
   - Cada NFR foi documentado em um cartão de especificação, que incluía informações detalhadas sobre o requisito, como descrição, classificação, justificativa, origem, dependências, prioridade e possíveis conflitos.
   - Este cartão serviu como uma referência centralizada para todas as informações críticas sobre o NFR.


## Referências bibliográficas

[1] SILVA, Reinaldo Antônio. NFR4ES: Um Catálogo de Requisitos Não-Funcionais para Sistemas Embarcados. Centro de Informática UFPE, Recife, 2019. Disponível em: https://repositorio.ufpe.br/handle/123456789/34150. Acesso em: 05/11/2023.

[2] CHUNG, L.; NIXON, B. A.; YU, E.; MYLOPOULOS, J. Non-functional requirements in software engineering. Springer Science & Business Media: [s.n.], 2000. v. 5.

[3] SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 17. 1º/2019. 7-28 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.



## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 23/05/2024 | Criação da página e Introdução | [Davi Pierre](https://github.com/DaviPierre)   | [Kauan Eiras](https://github.com/kauaneiras) |
| 1.1    | 23/05/2024 | Adição das Figuras 1, 2 e 3 e ajustes na Introdução | [Kauan Eiras](https://github.com/kauaneiras) | [Davi Pierre](https://github.com/DaviPierre) |
| 1.2   | 23/05/2024 | Metodologia | [Kauan Eiras](https://github.com/kauaneiras) | [Davi Pierre](https://github.com/DaviPierre) |