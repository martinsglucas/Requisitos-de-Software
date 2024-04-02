import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';
import { Container, Texto, Titulo, H1, P, A, TR, TD, Table, Section} from '../../assets/styles/General';

export default function Apresentacao1(){
    const { theme } = React.useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <SideBar />
      <Texto theme={theme}>
        <Titulo theme={theme}>Apresentação 1 - 01.04.2023</Titulo>

        <Section>
          <H1 theme={theme}>Introdução</H1>
          <P theme={theme}>O propósito desta página é hospedar a apresentação da Primeira Entrega em formato de vídeo. Caso não seja viável assistir ao vídeo diretamente nesta página, por favor, clique no link correspondente para acessá-lo.</P>
        </Section>

        <Section>
          <H1 theme={theme}>Vídeo da Apresentação</H1>
          <div align="center">
            <P  theme={theme} style={{textAlign: 'center'}}><A href="https://youtu.be/7r3p0htB4_w" target="blanket"><b>Vídeo 1:</b> Requisitos - Apresentação 1</A></P>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Izkc9Wx-Y24?si=rtgnsy7Hu4IfNc0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <P  theme={theme} style={{textAlign: 'center', fontSize: '3'}}><b>Fonte:</b> <A href="https://github.com/kalipassos">Kallyne Macedo</A>, 2024</P>
          </div>
        </Section>

        <Section>
          <H1 theme={theme}>Histórico de Versão</H1>
          <Table theme={theme}>
            <TR theme={theme}>
              <TD theme={theme}>Versão</TD>
              <TD theme={theme}>Data</TD>
              <TD theme={theme}>Descrição</TD>
              <TD theme={theme}>Autor</TD>
              <TD theme={theme}>Revisor</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>1.0</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Criação do documento</TD>
              <TD theme={theme}><A href="https://github.com/kauaneiras">Kauan T. Eiras</A></TD>
              <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>1.1</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Adição do link da 1ª Apresentação</TD>
              <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan T. Eiras</A></TD>
              <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>1.1</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Adição e formatação no gitpages</TD>
              <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan T. Eiras</A></TD>
              <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
            </TR>
          </Table>
        </Section>
      </Texto>
    </Container>
  );
}
