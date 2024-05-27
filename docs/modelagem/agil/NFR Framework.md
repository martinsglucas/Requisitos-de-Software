# NFR Framework

## Introdução

O NFR (Non-Functional Requirements) Framework, ou Framework de Requisitos Não Funcionais, é uma metodologia essencial na engenharia de software. Ele se concentra na definição e gerenciamento de requisitos que não estão diretamente ligados às funcionalidades do sistema, mas sim às suas características qualitativas, como desempenho, segurança, usabilidade e outros aspectos que afetam a experiência do usuário. Esses requisitos são cruciais para o sucesso do projeto, pois definem como o sistema deve operar em diversos cenários.

O framework utiliza o conceito de "softgoals", que são objetivos sem critérios específicos de satisfação. Softgoals representam requisitos não funcionais e podem influenciar uns aos outros [1].

Os gráficos de interdependência de softgoals, conhecidos como Softgoal Interdependency Graphs (SIGs), são usados pelo NFR Framework para capturar e representar essas interdependências e decisões de desenvolvimento. Esses gráficos documentam detalhadamente as decisões, alternativas e justificativas, permitindo uma avaliação abrangente dos requisitos [1].

Os softgoals são divididos em três categorias [2], conforme ilustrado na Figura 1:

1. **Softgoals NFR**: Representam os requisitos não funcionais.
2. **Softgoals de Operacionalização**: Soluções práticas para satisfazer os softgoals NFR.
3. **Softgoals de Afirmação**: Consideram características do domínio, como prioridades e carga de trabalho.

<center>

**Figura 1: Tipos de Softgoals**  

![Tipos de Softgoals](./NFR%20Framework/TiposSoftgoals.png)

</center>

<div align="center"
    <font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/kauaneiras">Kauan Eiras</a>, <a href="https://www.canva.com">Canva.com</a>, 2024</p></font>
</div>

### Tipos de Refinamentos

Os refinamentos são essenciais para detalhar os softgoals, permitindo uma decomposição precisa e estruturada. Eles são divididos em quatro tipos principais [2]:

A) **Decomposição de Softgoal NFR**: Segmenta um softgoal NFR em subobjetivos mais específicos, ajudando a esclarecer e detalhar requisitos não funcionais complexos.

B) **Decomposição de Softgoal de Operacionalização**: Subdivide um softgoal de operacionalização em objetivos mais granulares, facilitando a definição de soluções práticas e específicas.

C) **Decomposição de Softgoal de Afirmação (Claims)**: Refina softgoals de afirmação em subobjetivos adicionais, permitindo a criação de justificativas robustas para decisões de projeto.

D) **Priorização**: Cria softgoals similares, mas com prioridades definidas, ajudando na determinação da importância relativa de cada objetivo.

<center>

**Figura 2: Tipos de Refinamentos**  

![Decomposição](./NFR%20Framework/DecomposiçãoSoftgoal.PNG)

Fonte: CHUNG, 2000.

</center>

### Tipos de Contribuições

As contribuições descrevem como um softgoal descendente pode impactar o softgoal ascendente. Existem várias formas de contribuição, cada uma com seu próprio impacto específico:

<center>

**Tabela 1: Tipos de Contribuições** 

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

</center>

<center>

**Figura 3: Contribuições entre Softgoals**  

![Contribuições](./NFR%20Framework/ContibuicaoSoftgoals.PNG)

Fonte: SERRANO, 2019.

</center>

### Procedimento de Avaliação

O processo de avaliação dos softgoals verifica o grau de satisfação de cada requisito não funcional. Para isso, são atribuídos rótulos aos softgoals, que podem incluir "satisfeito", "parcialmente satisfeito", "não atendido", "parcialmente não atendido", "conflitante" e "indeterminado". Este procedimento é crucial para garantir que todas as interdependências no SIG sejam adequadamente avaliadas e gerenciadas [1].

<center>

**Figura 4: Rótulos da Propagação de Impactos**  

![Rótulos](./NFR%20Framework/RotulosSoftgoals.PNG)

Fonte: SILVA, 2019.

</center>

A avaliação detalhada e sistemática dos softgoals, bem como a visualização de suas interdependências e contribuições, são fundamentais para a modelagem eficaz de requisitos não funcionais, garantindo que os objetivos qualitativos do sistema sejam plenamente atendidos.

## Metodologia

Neste documento, a metodologia adotada para a concepção do artefato foi fundamentada nos requisitos não funcionais (NFRs), que foram delineados com base no nosso documento de [especificação suplementar](https://requisitos-de-software.github.io/2024.1-Firefox/modelagem/especificacao-suplementar/). Utilizando o modelo FURPS+, definimos seis requisitos não funcionais, cada um sendo desenvolvido por um membro da equipe. 

Os NFRs foram divididos em cinco aspectos principais: Usabilidade, Confiabilidade, Desempenho, Suportabilidade, Interface e Segurança. A tabela 2 apresenta um resumo dos requisitos não funcionais definidos, a rastreabilidade, membro da equipe responsável pelo desenvolvimento do item:

<center>

**Tabela 2: Requisitos não funcionáis do Firefox**

| ID    | Tipo           | Descrição                                                                                           | Rastreabilidade            | Membro    |
|-------|----------------|-----------------------------------------------------------------------------------------------------|----------------------------|-----------|
| NFR01 | Usabilidade    | O navegador deve ser intuitivo e fácil de usar, permitindo uma navegação simples acessivel e eficiente.  | BRS12, QST07, BRS21        | [Kauan Eiras](https://github.com/kauaneiras)  | 
| NFR02 | Confiabilidade | O navegador deve ser altamente estável, minimizando travamentos e garantindo alta disponibilidade. O aplicativo deve estar disponível para uso 99.9% do tempo.     | BRS01                      | Membro 2  |
| NFR03 | Desempenho     | O navegador deve carregar páginas e executar operações rapidamente, com um tempo máximo de resposta de 1 segundo. | BRS01, BRS02               | Membro 3  |
| NFR04 | Suportabilidade| O navegador deve ser compatível com os principais sistemas operacionais (Windows, macOS, Linux) e dispositivos móveis. | BRS05, BRS20               | Membro 4  | Sim      |
| NFR05 | Interface      | O navegador deve ter uma interface limpa e personalizável, proporcionando uma boa experiência visual e de uso. | OBS26, OBS19, ENT06        | Membro 5  |
| NFR06 | Segurança      | O navegador deve proteger os dados do usuário, oferecendo mecanismos robustos contra malware, phishing e outras ameaças. | OBS36, OBS37, BRS16, BRS06 | Membro 6  |


<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/kauaneiras">Kauan Eiras</a>, 2024</p></font>

</center>

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

## NFR Framework

## NFR01 - Usabilidade
De acordo com Jakob Nielsen, um dos principais teóricos da usabilidade, o termo "usabilidade" refere-se à facilidade com que os usuários podem aprender a utilizar um sistema, sua eficiência no uso, a facilidade de lembrar como usá-lo, a frequência de erros cometidos pelos usuários e a satisfação dos usuários com o sistema. Ele define os componentes principais da usabilidade como: eficácia, eficiência, aprendizado, memorização e satisfação[4]. Com a grande quantidade de pessoas analfabetas ou portadoras de alguma deficiência que utilizam a internet, outro item importante a ser incluso no NFR Framework de Usabilidade é a acessibilidade.

### Softgoal Interdependency Graph


<center>

**Figura 5: Softgoal Interdependency Grap do softgoal "Usabilidade"**

![SIG Usabilidade](./NFR%20Framework/SIG-Usabilidade.png)

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/kauaneiras">Kauan Eiras</a>, 2024</p></font>

</center>

### Propagação de Impactos
A propagação de impactos do softgoal "Usabilidade" pode ser visto na figura 6.


<center>

**Figura 6: Softgoal Interdependency Grap do softgoal "Usabilidade"**

![Propagação de Impactos](./NFR%20Framework/Usabilidade-Propagação-de-Impactos.png)

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/kauaneiras">Kauan Eiras</a>, 2024</p></font>

</center>

### Cartão de Especificação

Na tabela 3, temos o cartão de especificação do softgoal "Usabilidade".

<center>

**Tabela 3: Requisitos não funcionáis do Firefox**

| Tópico                | Informação |
|-----------------------|-----------------------------|
| **ID do NFR**         | NFR01 |
| **Classificação**     | Usabilidade |
| **Descrição**         | O requisito "Usabilidade" refere-se à capacidade do Firefox de fornecer uma experiência de navegação intuitiva e eficiente, que seja fácil de aprender, lembrar e que minimize erros, garantindo a satisfação do usuário e acessibilidade. |
| **Justificativa**     | Uma usabilidade boa é fundamental para garantir que os usuários possam navegar na web de forma eficiente e satisfatória, com ferramentas que atendam suas necessidades, aumentando a acessibilidade e reduzindo a frequência de erros. Isso resulta em uma experiência mais agradável e produtiva para todos os usuários, incluindo aqueles com deficiências. |
| **Origem do Requisito** | [Especificação suplementar](https://requisitos-de-software.github.io/2024.1-Firefox/modelagem/especificacao-suplementar/) e [requisitos elicitados](https://requisitos-de-software.github.io/2024.1-Firefox/elicitacao/tecnicas/requisitos_elicitados/).|
| **Dependências**      | Não foram identificadas restrições ou dependências específicas, mas a atualização contínua da documentação e do sistema é necessária para manter a usabilidade elevada.|
| **Prioridade**        | Alta. A usabilidade é crítica para a aceitação do navegador pelos usuários e influencia diretamente a eficácia e a satisfação no uso do sistema. |
| **Conflitos**         | Não foram identificados conflitos. |
| **História**          | 25/05/2024 |

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/kauaneiras">Kauan Eiras</a>, 2024</p></font>

</center>


## NFR02 - Confiabilidade

### Softgoal Interdependency Graph

<center>

**Figura 7: Softgoal Interdependency Grap do softgoal "Confiabilidade"**

<!-- <img src="./NFR Framework/SIG-Confiabilidade.png"> -->

![SIG Confiabilidade](./NFR%20Framework/SIG-Confiabilidade.png)


<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/DaviPierre">Davi Pierre</a>, 2024</p></font>

</center>

### Propagação de Impactos

A propagação de impactos do softgoal "Confiabilidade" pode ser visto na figura 8.

<center>

**Figura 8: Softgoal Interdependency Grap do softgoal "Confiabilidade"**

<!-- <img src="./NFR Framework/Confiabilidade-Propagação-de-Impactos.png"> -->

![Propagação de Impactos](./NFR%20Framework/Confiabilidade-Propagação-de-Impactos.png)

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/DaviPierre">Davi Pierre</a>, 2024</p></font>

</center>

### Cartão de Especificação

Na tabela 4, temos o cartão de especificação do softgoal "Confiabilidade".

<center>

**Tabela 4: Requisitos não funcionáis do Firefox**

| Tópico                | Informação |
|-----------------------|-----------------------------|
| **ID do NFR**         | NFR01 |
| **Classificação**     | Confiabilidade |
| **Descrição**         | O requisito "Confiabiidade" refere-se a capacidade do navegador Firefox de se manter consistente durante todo o processo de acesso a internet, ou seja, ser capaz de lidar com falhas pequenas, ser acessível, ser versátil e disponível a qualquer momento. |
| **Justificativa**     | Um alto nível de confiabilidade é necessário para que um navegador possa ser usado, um navegador não confiável leva a pesquisas mais demoradas, tempos de resposta mais longos e usuários insatisfeitos por uma mesma ação causar reações diferentes do aplicativo. |
| **Origem do Requisito** | [Especificação suplementar](https://requisitos-de-software.github.io/2024.1-Firefox/modelagem/especificacao-suplementar/) e [requisitos elicitados](https://requisitos-de-software.github.io/2024.1-Firefox/elicitacao/tecnicas/requisitos_elicitados/).|
| **Dependências**      | Uma boa confiabiliade depende de uma segurança geral do aplicativo e da suportabilidade versátil do mesmo. |
| **Prioridade**        | Alta. A confiabilidade é crítica para que os usuários possam ter uma experiência consistente e fluida durante o uso do aplicativo Firefox |
| **Conflitos**         | Não foram identificados conflitos. |
| **História**          | 26/05/2024 |

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/DaviPierre">Davi Pierre</a>, 2024</p></font>

</center>

## NFR03 - Desempenho

### Softgoal Interdependency Graph

### Propagação de Impactos

### Cartão de Especificação



## NFR04 - Suportabilidade

### Softgoal Interdependency Graph

### Propagação de Impactos

### Cartão de Especificação



## NFR05 - Interface

### Softgoal Interdependency Graph

<center>

**Figura 13: Softgoal Interdependency Graph do softgoal "Interface"**

![SIG Interface](./NFR%20Framework/SIG-Interface.png)

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>

</center>

### Propagação de Impactos

<center>

**Figura 14: Softgoal Interdependency Graph do softgoal "Interface"**

![SIG Interface 2](./NFR%20Framework/SIG-Interface2.png)

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>

</center>

### Cartão de Especificação

<center>

**Tabela 7: Requisitos não funcionais do Firefox**

| Tópico                | Informação |
|-----------------------|-----------------------------|
| **ID do NFR**         | NFR05 |
| **Classificação**     | Interface |
| **Descrição**         | O requisito "Interface" refere-se à capacidade do Firefox de oferecer interfaces de sistema eficientes e bem definidas que facilitem a comunicação entre diferentes componentes do navegador e com sistemas externos. Essas interfaces devem ser consistentes, seguras e permitir uma integração suave com diversas funcionalidades, incluindo suporte multilíngue, codificação UTF-8, navegação offline e transições de rede sem interrupção. |
| **Justificativa**     | Interfaces de sistema bem projetadas são essenciais para garantir que os diferentes módulos do Firefox possam interagir de maneira eficiente e segura. Isso inclui a comunicação interna entre componentes do navegador e a interação com sistemas externos, como servidores web e serviços de terceiros. Uma interface de sistema robusta aumenta a modularidade, facilita a manutenção e a atualização do navegador, e garante a consistência e a integridade dos dados. |
| **Origem do Requisito** | [Especificação suplementar](https://requisitos-de-software.github.io/2024.1-Firefox/modelagem/especificacao-suplementar/) e [requisitos elicitados](https://requisitos-de-software.github.io/2024.1-Firefox/elicitacao/tecnicas/requisitos_elicitados/).|
| **Dependências**      | A interface depende de uma implementação robusta das funcionalidades suportadas (e.g., suporte multilíngue, codificação UTF-8, navegação offline, transições de rede), além de atualizações contínuas para se manter eficiente e responsiva às necessidades dos usuários. |
| **Prioridade**        | Alta. A qualidade da interface impacta diretamente a aceitação e a satisfação do usuário com o navegador, influenciando a facilidade de uso e a eficiência das interações. |
| **Conflitos**         | Não foram identificados conflitos. |
| **História**          | 27/05/2024 |

<font size="3"><p style="text-align: center"><b>Fonte: </b><a href="https://github.com/west7">Guilherme Westphall</a>, 2024</p></font>

</center>

## NFR06 - Segurança

### Softgoal Interdependency Graph

### Propagação de Impactos

### Cartão de Especificação


## Referências bibliográficas

[1] SILVA, Reinaldo Antônio. NFR4ES: Um Catálogo de Requisitos Não-Funcionais para Sistemas Embarcados. Centro de Informática UFPE, Recife, 2019. Disponível em: https://repositorio.ufpe.br/handle/123456789/34150. Acesso em: 05/11/2023.

[2] CHUNG, L.; NIXON, B. A.; YU, E.; MYLOPOULOS, J. Non-functional requirements in software engineering. Springer Science & Business Media: [s.n.], 2000. v. 5.

[3] SERRANO, Maurício; SERRANO, Milene. Requisitos - Aula 17. 1º/2019. 7-28 slides. Material apresentado para a disciplina de Requisitos de Software no curso de Engenharia de Software da UnB, FGA.

[4] NIELSEN, Jakob. Usability Engineering. Boston: Academic Press, 1993. ISBN 0125184050, p. 24.


## Histórico de versões

| Versão | Data       | Descrição         | Autor                                           | Revisor |
| ------ | ---------- | ----------------- | ----------------------------------------------- | ------- |
| 1.0    | 23/05/2024 | Criação da página e Introdução | [Davi Pierre](https://github.com/DaviPierre)   | [Kauan Eiras](https://github.com/kauaneiras) |
| 1.1    | 23/05/2024 | Adição das Figuras 1, 2 e 3 e ajustes na Introdução | [Kauan Eiras](https://github.com/kauaneiras) | [Davi Pierre](https://github.com/DaviPierre) |
| 1.2   | 23/05/2024 | Criação da Metodologia | [Kauan Eiras](https://github.com/kauaneiras) | [Davi Pierre](https://github.com/DaviPierre) |
| 1.3   | 23/05/2024 | Desenvolvimento do NFR01 - Usabilidade | [Kauan Eiras](https://github.com/kauaneiras) | - |
| 1.4   | 26/05/2024 | Desenvolvimento parcial do NFR02 - Confiabilidade | [Davi Pierre](https://github.com/DaviPierre) | - |
| 1.5   | 26/05/2024 | Desenvolvimento completo do NFR02 - Confiabilidade | [Davi Pierre](https://github.com/DaviPierre) | - |
| 1.6  | 27/05/2024 | Desenvolvimento do NFR05 - Interface | [Guilherme Westphall](https://github.com/west7) | [Lucas Martins](https://github.com/martinsglucas) |
