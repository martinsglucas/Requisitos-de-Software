# Baseline

## Introdução

Neste documento, vamos apresentar de forma detalhada os requisitos do projeto. Para isso, utilizaremos uma tabela que abrange todas as versões dos requisitos. Cada linha da tabela trará uma descrição completa, começando desde a criação inicial dos requisitos até o estágio atual do projeto. O objetivo é fornecer uma visão clara e abrangente de como os requisitos evoluíram ao longo do tempo, documentando todas as mudanças e atualizações realizadas em cada fase do desenvolvimento.

## Metodologia

A baseline de requisitos refere-se ao grupo de requisitos documentados no Software Requirements Specification (SRS). Esses requisitos são desenvolvidos ao longo das diversas etapas do processo de requisitos, incluindo elicitação, modelagem, verificação e validação. Eles servem como fundamento para o design e a implementação do software. Qualquer modificação nos requisitos estabelecidos na baseline exige justificativa e aprovação.

**Fonte**: [Referência 1](./assets/ref-1.png)<br>

## Baseline dos requisitos


<center>

**Tabela 1**: Baseline de requisitos

<table border='0.5'>
    <tr>
        <th>Requisito</th>
        <th>Versão</th>
        <th>Descrição</th>
        <th>Implementado</th>
        <th>Alta-prioridade</th>
    </tr>
    <tr>
        <td rowspan="2">R1</td>
        <td>1.1</td>
        <td>O aplicativo deve possuir uma barra de pesquisa</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O sistema deve conter uma ferramenta de pesquisa rápida</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td rowspan="1">R2</td>
        <td>1.0</td>
        <td><b>O aplicativo deve ter opção de navegação anônima</b></td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="3">R3</td>
        <td>1.2</td>
        <td><b>R3 - O aplicativo deve possuir opção de visualizar e agrupar guias</b></td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>BRS13 - Deve ser possível agrupar várias guias</td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>OBS03 - Deve possuir opção de visualizar todas as guias</td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="1">R4</td>
        <td>1.0</td>
        <td><b>O aplicativo deve possuir opção de favoritar sites</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td rowspan="2">R5</td>
        <td>1.1</td>
        <td><b>O aplicativo deve possuir histórico de navegação</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td> Deve possuir histórico de navegação </td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="2">R6</td>
        <td>1.1</td>
        <td><b>O aplicativo deve possuir histórico de downloads</b></td>
        <td rowspan="2">Sim</td>
        <td rowspan="2">Não</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve possuir histórico de downloads</td>
    </tr>
    <tr>
        <td rowspan="2">R7</td>
        <td>1.1</td>
        <td>O aplicativo deve ser possível instalar extensões de uso</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve ser possível instalar extensões de uso</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    </tr>
    <tr>
        <td rowspan="3">R8</td>
        <td>1.2</td>
        <td><b>Deve possuir opção de sincronizar e salvar dados inseridos</b></td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>Deve ser possível sincronizar senhas com outros dispositivos</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve sincronizar os dados</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
        <td rowspan="2">R9</td>
        <td>1.1</td>
        <td><b>R9 - O aplicativo deve permitir visualização dos sites em formato desktop</b></td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>OBS09 - Deve ser possível visualizar em formato desktop	</td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="1">R10</td>
        <td>1.0</td>
        <td><b>O aplicativo deve permitir a criação de atalhos na tela inicial do dispositivo</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td rowspan="1">R11</td>
        <td>1.0</td>
        <td><b>O aplicativo deve oferecer sugestões personalizadas de pesquisa</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td rowspan="3">R12</td>
        <td><b>1.2</></td>
        <td><b>O aplicativo deve permitir a personalização da tela inicial do navegador</b></td>
        <td>Sim</td>
        <td>Não</td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>Deve ser possível personalizar a tela inicial do navegador</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O sistema deve fornecer uma personalização diversa</td>
    </tr>
    <tr>
        <td rowspan="2">R13</td>
        <td>1.1</td>
        <td>O aplicativo deve suportar a mudança de idioma do sistema</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
    <td>1.0</td>
        <td>Deve ser possível mudar o idioma</td>
        <td>  Sim </td>
        <td>  Sim </td></tr>
    <tr>
        <td rowspan="2">R14</td>
        <td>1.1</td>
        <td><b>Deve ser possível alternar entre tema claro e escuro</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Temas mais agradáveis</td>
    </tr>
    <tr>
        <td rowspan="2">R15</td>
        <td>1.1</td>
        <td><b>R15 - O aplicativo deve possuir suporte para atalhos de gestos</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>OBS18 - Deve possuir atalhos de gestos</td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td rowspan="1">R16</td>
        <td>1.0</td>
        <td><b>O aplicativo deve possibilitar a troca de conta do usuário </b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td rowspan="2">R17</td>
        <td>1.1</td>
        <td><b>O aplicativo deve permitir a alteração da senha da conta do usuário</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve ser possível alterar senha</td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="2">R18</td>
        <td><b>1.1</b></td>
        <td><b>O aplicativo deve permitir ao usuário limpar seu histórico de navegação</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve ser possível limpar histórico de navegação</td>
    </tr>
    <tr>
        <td rowspan="2">R19</td>
        <td>1.1</td>
        <td><b>O aplicativo deve permitir ao usuário limpar seus dados inseridos e de navegação</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve ser possível limpar dados do usuário</td>
    </tr>
    <tr>
        <td rowspan="2">R20</td>
        <td>1.1</td>
        <td><b>O aplicativo deve ser permitir a habilitação e bloqueio de notificações</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve ser possível habilitar e bloquear notificações	</td>
    </tr>
    <tr>
        <td rowspan="3">R21</td>
        <td>1.0</td>
        <td>R21 - O aplicativo deve permitir alterar a fonte de texto em tipo e tamanho  </td>
        <td> Não </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>OBS26 - Deve ser possível alterar fonte do navegador</td>
        <td> Não </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.2</td>
        <td>OBS19 - O aplicativo deve permitir alterar a fonte de texto em tipo e tamanho</td>
        <td> Não </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td rowspan="1">R22</td>
        <td>1.0</td>
        <td><b>O aplicativo deve incluir opção de bloquear anúncios</b></td>
    </tr>
    <tr>
        <td rowspan="2">R23</td>
        <td><b>1.1</b></td>
        <td><b>O aplicativo deve incluir opção de busca interna na página</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O navegador deve incluir opção de busca na página</td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="2">R24</td>
        <td><b>1.1</b></td>
        <td><b>O aplicativo deve incluir opção de pesquisa por voz</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>A barra de pesquisa deve incluir opção de pesquisa por voz</td>
    </tr>
    <tr>
        <td rowspan="3">R25</td>
        <td>1.2</td>
        <td>O aplicativo deve possuir opção de leitura da página em voz alta</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
    <td>1.1</td>
        <td>O navegador deve possuir opção de leitura da paǵina para deficientes visuais</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
    <td>1.0</td>
        <td>Deve fornecer uma ferramenta de leitura avançada</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td rowspan="3">R26</td>
        <td>1.2</td>
        <td><b>O aplicativo deve possuir opção de controle parental de acesso das páginas</b></td>
        <td> Não </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>Deve conter uma ferramenta de controle parental</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Deve possuir opção de controle parental</td>
    </tr>
    <tr>
        <td rowspan="2">R27</td>
        <td>1.1</td>
        <td><b>R27 - O aplicativo deve oferecer opção de impressão de páginas</b></td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>OBS33 - Deve oferecer opção de impressão</td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="1">R28</td>
        <td>1.0</td>
        <td><b>O aplicativo deve conter opção de traduzir o idioma das páginas</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td rowspan="4">R29</td>
        <td>1.3</td>
        <td><b>O aplicativo deve permitir sincronização de dados pessoais com a conta do Google</b></td>
        <td> Não </td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.2</td>
        <td>O sistema deve prover sincronização com a conta google</td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>Sincronização de dados com conta Google	</td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Sincronização de dados com a conta do Google</td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="2">R30</td>
        <td><b>1.1</b></td>
        <td><b>O aplicativo deve oferecer opção de navegação através de rede privada virtual (VPN)</b></td>
        <td>Não</td>
        <td>Não</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Rede privada virtual (VPN)</td>
    </tr>
    <tr>
    <td rowspan="2">R31</td>
        <td>1.1</td>
        <td>Capacidade de usar aplicações em outros navegadores</td>
        <td>  Sim </td>
        <td>  Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O aplicativo deve simular, para desenvolvedores, suas aplicações em outros navegadores</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td rowspan="3">R32</td>
        <td>1.2</td>
        <td><b>O sistema deve ser compatível com os sistemas operacionais IOS e Android</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>O aplicativo deve ser compatível com vários sistemas operacionais</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O sistema deve ser compatível com várias plataformas</td>
    </tr>
    <tr>
        <td rowspan="2">R33</td>
        <td>1.1</td>
        <td><b>R33 - O aplicativo deve conter uma ferramenta de correção ortográfica</b></td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>BRS19 - Deve conter uma ferramenta de correção ortográfica</td>
        <td> Não </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="2">R34</td>
        <td>1.1</td>
        <td><b>O Firefox deve consumir menos de 20% de CPU durante a navegação típica e menos de 50% durante operações intensivas</b></td>
        <td>Sim</td>
        <td>Não</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O aplicativo deve ser leve </td>
    </tr>
    <tr>
        <td rowspan="3">R35</td>
        <td>1.2</td>
        <td><b>O aplicativo deve permitir acesso rápido a sites acessados recentemente</b></td>
        <td>Sim</td>
        <td>Não</td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>Acesso à sites acessados recentemente</td>
        <td>Sim</td>
        <td>Não</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Acesso rápido à sites acessados recentemente</td>
        <td>Sim</td>
        <td>Não</td>
    </tr>
    <tr>
        <td rowspan="2">R36</td>
        <td><b>1.1</b></td>
        <td><b>O aplicativo deve apresentar um design arredondado</b></td>
        <td>Não</td>
        <td>Não</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Temas mais arredondados</td>
    </tr>
    <tr>
    <td rowspan="4">R37</td>
        <td>1.3</td>
        <td>O aplicativo deve possuir modo alternativo de cores para daltônicos</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td>1.2</td>
        <td>Modo para daltônicos</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>Temas para dautônicos</td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O navegador deve incluir um modo de daltonismo </td>
        <td>  Sim </td>
        <td>  Não </td>
    </tr>
    <tr>
        <td rowspan="2">R38</td>
        <td>1.1</td>
        <td><b>O aplicativo deve apresentar uma interface minimalista</b></td>
        <td> Sim </td>
        <td> Sim </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>Retirar excesso de funções que usuários não vão utilizar</td>
    </tr>
    <tr>
        <td rowspan="3">R39</td>
        <td>1.2</td>
        <td><b>DES01 - O sistema deve apresentar tempo de resposta inferior a 1 segundo ao realizar uma pesquisa</b></td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>R39 - O aplicativo deve ser rápido</td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>BRS01 - O navegador deve responder rapidamente as pesquisas </td>
        <td> Sim </td>
        <td> Não </td>
    </tr>
    <tr>
        <td rowspan="2">R40</td>
        <td>1.1</td>
        <td><b>O Firefox deve liberar memória quando as guias são fechadas ou não utilizadas, mantendo o consumo de memória abaixo de 500 MB durante a navegação típica (até 10 guias abertas) e não ultrapassar 2 GB em uso intenso (mais de 30 guias abertas)</b></td>
        <td>Sim</td>
        <td>Não</td>
    <tr>
        <td>1.0</td>
        <td>O aplicativo deve gerir bem a memória</td>
    </tr>
    <tr>
        <td rowspan="5">R41</td>
        <td>1.4</td>
        <td><b>O aplicativo deve ser seguro</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.3</td>
        <td>O navegador deve prover uma navegação segura</td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.2</td>
        <td>O sistema deve proteger os dados do usuário durante a navegação</td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.1</td>
        <td>O navegador deve proteger contra rastreamento de dados</td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O navegador deve prover uma navegação segura</td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td rowspan="4">R42</td>
        <td><b>1.4</b></td>
        <td><b>O usuário deve conseguir acessar qualquer parte do sistema em no máximo três cliques, validado através de testes de usabilidade com aprovação de 90%</b></td>
        <td>Sim</td>
        <td>Sim</td>
    </tr>
    <tr>
        <td>1.3</td>
        <td>O aplicativo deve ser de fácil uso</td>
    </tr>
    <tr>
        <td>1.2</td>
        <td>Sistema deve ser de fácil uso</td>
    </tr>
    <tr>
        <td>1.0</td>
        <td>O sistema deve ter uma interface intuitiva</td>
    </tr>
</table>


**Autor**: [Davi Pierre](https://github.com/DaviPierre), [Guilherme Westphall](https://github.com/west7), [Kallyne Macedo](https://github.com/kalipassos), [Leonardo Aguiar](https://github.com/Leonardo0o0), [Kauan Eiras](https://github.com/kauaneiras), [Lucas Martins](https://github.com/martinsglucas).

</center>

## Referências

SAYÃO, Miriam; LEITE, Julio Cesar. Monografias em Ciência da Computação n° 20/05. Acesso em 16 de junho de 2024.


## Histórico de versões

| Versão | Data       | Descrição                                             | Autor                                                                                                                                                                                                                                                                                              | Revisor                                         |
|--------|------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| 1.0    | 13/06/2024 | Criação da página                                     | [Guilherme Westphall](https://github.com/west7)                                                                                                                                                                                                                                                    | [Davi Pierre](https://github.com/DaviPierre)    |
| 1.1    | 15/06/2024 | Cria tabela 1                                         | [Guilherme Westphall](https://github.com/west7)                                                                                                                                                                                                                                                    | [Davi Pierre](https://github.com/DaviPierre)    |
| 1.2    | 16/06/2024 | Adiciona o texto de introdução e da metodologia       | [Davi Pierre](https://github.com/DaviPierre)                                                                                                                                                                                                                                                       | [Kauan Eiras](https://github.com/kauaneiras)    |
| 1.3    | 16/06/2024 | Adiciona os requisitos 1 - 7 - 13 - 19 - 25 - 31 - 37 | [Davi Pierre](https://github.com/DaviPierre)                                                                                                                                                                                                                                                       | [Kauan Eiras](https://github.com/kauaneiras)    |
| 1.4    | 16/06/2024 | Adiciona mais requisitos                              | [Davi Pierre](https://github.com/DaviPierre), [Guilherme Westphall](https://github.com/west7), [Kallyne Macedo](https://github.com/kalipassos), [Leonardo Aguiar](https://github.com/Leonardo0o0), [Lucas Martins](https://github.com/martinsglucas)                                               | [Kallyne Macedo](https://github.com/kalipassos) |
| 1.5    | 19/06/2024 | Atualiza requisitos da baseline                       | [Davi Pierre](https://github.com/DaviPierre), [Guilherme Westphall](https://github.com/west7), [Kallyne Macedo](https://github.com/kalipassos), [Leonardo Aguiar](https://github.com/Leonardo0o0), [Kauan Eiras](https://github.com/kauaneiras), [Lucas Martins](https://github.com/martinsglucas) | [Davi Pierre](https://github.com/DaviPierre)    |