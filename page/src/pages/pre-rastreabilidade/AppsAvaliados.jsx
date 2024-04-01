import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';
import { Container, Texto, Titulo, H1, H2, TR, TD, Table, UL, LI, P, A, Legenda, Section, Image } from '../../assets/styles/General';

export default function AppsAvaliados() {
    const { theme } = React.useContext(ThemeContext);
    return (
        <Container theme={theme}>
            <SideBar />
            <Texto>
            <Section>
                    <Titulo theme={theme}>Apps Avaliados</Titulo>
                    <H1 theme={theme} style={{marginTop: '20px'}}> Introdução</H1>
                    <P theme={theme}>
                        Na primeira fase do projeto cada integrante se responsabilizou por levantar um aplicativo que seria uma escolha possível para o projeto. As únicas restrições para a escolha é que deveria ser um aplicativo desktop ou celular, e os termos deveriam permitir o estudo e a engenharia reversa do aplicativo.
                    </P>
                    <H1 theme={theme} style={{marginTop: '20px'}}> Tabela 1: Aplicativos avaliados</H1>
                    <Table>
                        <TR>
                            <TD theme={theme}>Aplicativo</TD>
                            <TD theme={theme}>Membro que avaliou</TD>
                        </TR>
                        <TR>
                            <TD theme={theme}><strong>GIMP</strong></TD>
                            <TD theme={theme}>Guilherme Westphall</TD>
                        </TR>
                        <TR>
                            <TD theme={theme}><strong>CTPS Digital</strong></TD>
                            <TD theme={theme}>Kallyne Macêdo</TD>
                        </TR>
                        <TR>
                            <TD theme={theme}><strong>Tesouro Direto</strong></TD>
                            <TD theme={theme}>Lucas Martins</TD>
                        </TR>
                    </Table>
            </Section>

            <Section>
                
                    <H1 theme={theme}> GIMP</H1>
                    <P theme={theme}>
                        O GIMP, ou GNU Image Manipulation Program, é uma solução tecnológica que revoluciona a edição de imagens, proporcionando praticidade e eficiência para os usuários. Considerando a importância da qualidade visual em diversos contextos, desde a produção de conteúdo para mídias sociais até o design gráfico profissional, o GIMP oferece uma série de vantagens que o tornam a escolha ideal para muitos profissionais e entusiastas da edição de imagens. Abaixo estão algumas razões pelas quais o membro do grupo <A href="https://github.com/west7">Guilherme Westphall</A> escolheu o GIMP:

                        <UL>
                            <LI theme={theme}>Software Livre: O GIMP é um software de código aberto, desenvolvido e mantido por uma comunidade global de colaboradores, o que o torna uma opção acessível e transparente para todos os usuários. Além disso, sua natureza livre proporciona liberdade para personalização e adaptação conforme as necessidades individuais de cada usuário.</LI>
                            <LI theme={theme}>Funcionalidades Avançadas: Com o GIMP, os usuários têm acesso a uma ampla gama de ferramentas e recursos avançados de edição de imagens, incluindo camadas, máscaras, filtros e plugins, que permitem realizar edições complexas e criativas com facilidade.</LI>
                            <LI theme={theme}>Comunidade Ativa: O GIMP possui uma comunidade ativa de usuários e desenvolvedores, que oferecem suporte técnico, tutoriais, plugins e recursos adicionais, tornando a experiência de uso ainda mais enriquecedora e colaborativa.</LI>
                            <LI theme={theme}>Multiplataforma: O GIMP é compatível com diversos sistemas operacionais, incluindo Windows, macOS e Linux, garantindo flexibilidade e interoperabilidade para os usuários em diferentes ambientes de trabalho.</LI>
                            <LI theme={theme}>Atualizações Constantes: O GIMP recebe atualizações regulares, com melhorias de desempenho, correções de bugs e novos recursos, garantindo que os usuários sempre tenham acesso às últimas inovações e aprimoramentos no software.</LI>
                        </UL>
                    </P>
            </Section>

            <Section>
                
                    <H1 theme={theme}> CTPS Digital</H1>
                    <P theme={theme}>
                        O aplicativo da Carteira de Trabalho Digital (CTPS) é desenvolvido pelo governo brasileiro com o objetivo de trazer para os cidadãos às informações relativas aos seus vínculos empregatícios do presente ou passado, atuando como uma substituição da Carteira de Trabalho antes emitida fisicamente.

                        Através do uso do aplicativo, é possível ter acesso aos dados contratos de trabalho, histórico salarial, solicitação e consulta à benefícios, entre outras funcionalidades que tangem a atuação profissional de um cidadão.

                        Abaixo estão algumas razões pelas quais a participante do grupo <A href="https://github.com/kalipassos">Kallyne Macêdo</A> escolheu analisar a CTPS:

                        <UL>
                            <LI theme={theme}>Origem governamental: Por ser um app desenvolvido pelo Governo Federal, sua análise é possível no âmbito da disciplina.</LI>
                            <LI theme={theme}>Quantidade de usuários: O aplicativo da CTPS faz parte do dia a dia de uma comunidade de milhões de brasileiros, o que possibilita pesquisas, entrevistas e avaliações de uso do público geral.</LI>
                            <LI theme={theme}>Múltiplas funcionalidades: Há uma gama de funcionalidades de nível de baixa complexidade que o usuário pode explorar no sistema.</LI>
                        </UL>

                        Entretanto, em virtude da natureza majoritariamente consultiva do aplicativo, que não permite que o usuário gere alterações ou crie instâncias, ele foi descartado na escolha do aplicativo a ser trabalhado.
                    </P>
            </Section>

            <Section>
                
                    <H1 theme={theme}> Tesouro Direto</H1>
                    <P theme={theme}>
                        O aplicativo oficial do Tesouro Direto é uma ferramenta gratuita que permite investir em títulos públicos com segurança e praticidade, diretamente do seu smartphone. Desenvolvido pelo Tesouro Nacional, o app oferece aos cidadãos brasileiros a oportunidade de diversificar seus investimentos e alcançar seus objetivos financeiros com autonomia e confiança. No aplicativo, o usuário pode: fazer compra e venda de títulos, fazer simulações de investimentos, acompanhar os investimentos, consultar extratos e saldos, gerenciar a carteira, entre outras funcionalidades.

                        Abaixo estão algumas razões pelas quais o membro do grupo <A href="https://github.com/martinsglucas">Lucas Martins</A> escolheu o aplicativo do Tesouro Direto:

                        <UL>
                            <LI theme={theme}>Permissão para estudo: Por ser um app desenvolvido pelo Governo Federal, sua análise é possível no âmbito da disciplina.</LI>
                            <LI theme={theme}>Funcionalidades: O aplicativo oferece uma série de funcionalidades que podem ser exploradas e avaliadas, como compra e venda de títulos, simulações de investimentos, acompanhamento da carteira, entre outras. O aplicativo também possui perspectivas de melhorias e novas funcionalidades que podem ser sugeridas.</LI>
                        </UL>

                        Entretanto, o aplicativo não possui um grande número de usuários, o que dificulta a coleta de dados e a realização de testes com um público mais diversificado. Além disso, o aplicativo é voltado para um público específico, que já possui conhecimento sobre investimentos e títulos públicos, o que pode limitar o alcance do projeto. Por esses motivos, o aplicativo do Tesouro Direto foi descartado na escolha do aplicativo a ser trabalhado.
                    </P>
            </Section>

            <Section>
                
                    <H1 theme={theme}> Referências bibliográficas</H1>
                    <UL>
                        <LI theme={theme}><A href="https://www.gimp.org/docs/">GIMP</A></LI>
                        <LI theme={theme}><A href="www.gov.br">CTPS Digital</A></LI>
                        <LI theme={theme}><A href="https://www.tesourodireto.com.br/">Tesouro Direto</A></LI>
                    </UL>

                    <H1 theme={theme}> Histórico de versões</H1>
                    <Table>
                        <TR>
                            <TD theme={theme}>Versão</TD>
                            <TD theme={theme}>Data</TD>
                            <TD theme={theme}>Descrição</TD>
                            <TD theme={theme}>Autor</TD>
                            <TD theme={theme}>Revisor</TD>
                        </TR>
                        <TR>
                            <TD theme={theme}>1.0</TD>
                            <TD theme={theme}>01/04/2024</TD>
                            <TD theme={theme}>Criação da página de apps avaliados</TD>
                            <TD theme={theme}>Guilherme Westphall</TD>
                            <TD theme={theme}>Kallyne Macêdo</TD>
                        </TR>
                        <TR>
                            <TD theme={theme}>1.1</TD>
                            <TD theme={theme}>01/04/2024</TD>
                            <TD theme={theme}>Adição avaliação CTPS</TD>
                            <TD theme={theme}>Kallyne Macêdo</TD>
                            <TD theme={theme}>Lucas Martins</TD>
                        </TR>
                        <TR>
                            <TD theme={theme}>1.2</TD>
                            <TD theme={theme}>01/04/2024</TD>
                            <TD theme={theme}>Adição avaliação Tesouro Direto</TD>
                            <TD theme={theme}>Lucas Martins</TD>
                            <TD theme={theme}>Leonardo Sobrinho</TD>
                        </TR>
                    </Table>
            </Section>
        </Texto>
        </Container>
    );
}
