import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';
import {Container, Texto, Titulo, H1, H2, H3, TR, TD, Table, UL, LI, P, A, Legenda, Section, Image} from '../../assets/styles/General';
import escala from "../../assets/images/page/heatmap/escala.png";
import heatmap from "../../assets/images/page/heatmap/heatmap.png";

export default function Heatmap(){
    const { theme } = React.useContext(ThemeContext);
    return (
        <Container theme={theme}>
            <SideBar/>
            <Texto>
                <Titulo theme={theme}>Disponibilidade - Requisitos de Software</Titulo>
                <Section>
                    <H1 theme={theme}>Introdução</H1>
                    <P theme={theme}>Em etapas iniciais de planejamento em um projeto, é necessário mapear e avaliar o tempo disponível para trabalho entre os membros do grupo para que se possa, adequadamente, definir prazos e traçar expectativas. No contexto da disciplina de Requisitos de Software, esse mapeamento possui o objetivo de determinar possíveis horários para agendas de discussão e execução do projeto.</P>
                    <P theme={theme}>Dessa forma, para uma indicação intuitiva de faixas de horário ideais para o desenvolvimento das atividades do projeto em grupo, foi adotado o método do mapa de calor (heatmap) de disponibilidade.</P>
                </Section>
                <Section>
                    <H1 theme={theme}>Heatmap</H1>
                    <H2 theme={theme}>Legenda</H2>
                    <P theme={theme}>O mapa de calor consiste em uma representação gráfica que mostra áreas de maior ou menor acesso em um site, por exemplo, ou, no contexto de uma tabela, as células mais ou menos preenchidas. No mapa gerado por membros do grupo, a identificação é feita por cores que saem do vermelho (representativo do 0, menor número) até o verde-escuro (representativo do 6, maior número), conforme imagem:</P>
                    <Image src={escala}/>
                    <Legenda theme={theme}>Escala de um heatmap -  Fonte: <A href='https://github.com/kalipassos'>Kallyne Macedo</A></Legenda>
                    <P theme={theme}>Assim, entende-se que a célula marcada como 0 indica que não há disponibilidade de nenhum membro no horário, e a célula marcada como 6, que há disponibilidade para trabalho de todos os membros para o horário em questão.</P>
                </Section>
                <Section>
                    <H1 theme={theme}>Heatmap de disponibilidade do grupo</H1>
                    <Image src={heatmap}/>
                    <Legenda theme={theme}>Heatmap de Disponibilidade de horários-  Fonte: <A href='https://github.com/kalipassos'>Kallyne Macedo</A></Legenda>
                </Section>
                <Section>
                    <H1 theme={theme}>Conclusão</H1>
                    <P theme={theme}>Portanto, com referência no heatmap de disponibilidade dos membros do grupo exposto abaixo, é possível verificar as janelas de horário que podem ser aproveitadas, sendo estas às <spam>segundas-feiras das 16h às 21h</spam>, e às <spam>quartas-feiras, das 20h à 21h</spam>.</P>
                </Section>
                <Section>
                    <H1 theme={theme}>Histórico de Versão</H1>
                    <Table>
                        <TR theme={theme}>
                            <TD theme={theme}>Versão</TD>
                            <TD theme={theme}>Data</TD>
                            <TD theme={theme}>Descrição</TD>
                            <TD theme={theme}>Autor(es)</TD>
                            <TD theme={theme}>Revisor(es)</TD>
                        </TR>
                        <TR theme={theme}>
                            <TD theme={theme}>1.0</TD>
                            <TD theme={theme}>31/03/2024</TD>
                            <TD theme={theme}>Criação do documento</TD>
                            <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
                            <TD theme={theme}><A href='https://github.com/leonard0o0'>Leonardo Aguiar</A></TD>
                        </TR>
                    </Table>
                </Section>
            </Texto>  
        </Container>
    );
}