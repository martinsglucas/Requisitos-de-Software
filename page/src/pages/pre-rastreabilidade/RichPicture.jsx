import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';
import {Container, Texto, Titulo, H1, H2, H3, TR, TD, Table, UL, LI, P, A, Legenda, Section, Image} from '../../assets/styles/General';

export default function RichPicture(){
    const { theme } = React.useContext(ThemeContext);
    return (
        <Container>
        <SideBar />
        <Texto>
            <Titulo as="h1">Rich Picture</Titulo>
            
            <Section>
            <H2>Introdução</H2>
            <P>
                O rich picture<sup>[1]</sup> é uma representação visual que ajuda a equipe a compreender um produto de software. Capta os principais relacionamentos conceituais entre as principais entidades conceituais de um sistema. O mais relevante é que o rich picture identifica as questões ou preocupações dos stakeholders, ajudando, assim, a concentrar a atenção nos problemas ou nas potenciais soluções de design.
            </P>
            </Section>

            <Section>
            <H2>Metodologia e Ferramentas</H2>
            <P>
                Analisamos o Firefox a fim de conseguir elencar as principais funcionalidades do aplicativo. O software Microsoft Whiteboard foi usado para criar o Rich Picture.
            </P>
            </Section>

            <Section>
            <H2>Rich Picture</H2>
            <Image src="https://github.com/Requisitos-de-Software/2024.1-Firefox/blob/main/imagens/RichPicture.png?raw=true" />
            <P style={{ textAlign: 'center', fontSize: '14px' }}>Figura 1: Rich Picture</P>
            </Section>

            <Section id="Referências">
            <H2>Referências</H2>
            <P>
                [1] BENYON, David. Interação humano-computador. Tradução de Heloísa Coimbra de Souza. 2a. ed. São Paulo: Person Prentice Hall, 2011. Disponível em: <A href="https://aprender3.unb.br/pluginfile.php/2844961/mod_resource/content/1/RichPicture.pdf">https://aprender3.unb.br/pluginfile.php/2844961/mod_resource/content/1/RichPicture.pdf</A>. Acesso em 01 abr. 2024.
            </P>
            </Section>

            <Section>
            <H2>Histórico de Versões</H2>
            <Table>
                <TR>
                <TD>Versão</TD>
                <TD>Data</TD>
                <TD>Descrição</TD>
                <TD>Autor</TD>
                <TD>Revisor</TD>
                </TR>
                <TR>
                <TD>1.0</TD>
                <TD>01/04/2024</TD>
                <TD>Primeira versão do Rich Picture</TD>
                <TD><A href="https://github.com/martinsglucas">Lucas Martins</A></TD>
                </TR>
            </Table>
            </Section>
        </Texto>
        </Container>
  );
};
