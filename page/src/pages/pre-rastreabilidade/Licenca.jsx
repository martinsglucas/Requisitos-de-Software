import React from "react";
import { ThemeContext } from "../../context/themeContext";
import SideBar from "../../components/sidebar/SideBar";
import { Container, Texto, Titulo, H1, H2, H3, TR, TD, Table, UL, LI, P, A, Section } from "../../assets/styles/General";

export default function Licenca() {
    const { theme } = React.useContext(ThemeContext);

    return (
        <Container theme={theme}>
          <SideBar />
          <Texto>
            <Titulo theme={theme}>Licença Pública da Mozilla</Titulo>
            <Section>
              <H2 theme={theme}>Sobre a Licença</H2>
              <P theme={theme} style={{marginBottom: '20px'}}>
                A Mozilla é a guardiã da <A href="/pt-BR/MPL/2.0/">Licença Pública da Mozilla</A> ("MPL"), uma licença de <A href="http://www.opensource.org/licenses/MPL-2.0">código aberto</A>/<A href="http://www.gnu.org/licenses/license-list.html#MPL-2.0">software livre</A>.
              </P>
              <P theme={theme} style={{marginBottom: '20px'}}>
                A versão atual da licença é MPL 2.0 (<A href="/pt-BR/MPL/2.0/">html</A> | <A href="https://www.mozilla.org/media/MPL/2.0/index.f75d2927d3c1.txt">texto simples</A>). Se você quiser usar ou distribuir código licenciado sob a MPL 2.0 e tiver dúvidas sobre isso, pode querer ler o <A href="/pt-BR/MPL/2.0/FAQ/">FAQ</A>.
              </P>
              <H3 theme={theme}>Processo de Revisão da MPL 2.0</H3>
              <P theme={theme} style={{marginBottom: '20px'}}>
                O lançamento da MPL 2.0 foi resultado de um processo de dois anos que revisou a <A href="/pt-BR/MPL/1.1/">MPL 1.1</A>. Um <A href="/pt-BR/MPL/2.0/Revision-FAQ/">FAQ de Revisão</A> documenta este processo e explica as mudanças mais significativas feitas.
              </P>
              <H2 theme={theme}>Documentos Históricos</H2>
              <P theme={theme} style={{marginBottom: '20px'}}>
                Vários <A href="/pt-BR/MPL/historical/">documentos históricos</A> relacionados às Licenças Públicas da Mozilla e Netscape estão disponíveis, incluindo versões obsoletas da licença, como a MPL 1.1.
              </P>
            </Section>
  
            <Section>
              <H2 theme={theme}>Informações sobre Licenciamento da Mozilla</H2>
              <P theme={theme} style={{marginBottom: '20px'}}>
                O Projeto Mozilla é apenas um dos muitos usuários da MPL, mas como muitas pessoas vêm a esta página procurando informações sobre as políticas e práticas de licenciamento de código aberto da Mozilla, fornecemos as informações abaixo como referência.
              </P>
              <H3 theme={theme}>Licenciando Novo Código-fonte Corretamente</H3>
              <P theme={theme} style={{marginBottom: '20px'}}>
                Qualquer novo código verificado nos repositórios de código-fonte da Mozilla precisa estar em conformidade com a <A href="/pt-BR/MPL/license-policy/">política de licenciamento de código-fonte da Mozilla</A>. Por favor, use o <A href="/pt-BR/MPL/headers/">texto de cabeçalho apropriado</A> no início de cada arquivo.
              </P>
              <H3 theme={theme}>Licenças para Código-fonte Existente</H3>
              <P theme={theme} style={{marginBottom: '20px'}}>
                A maioria dos projetos de software da Mozilla usa a MPL, mas alguns têm termos diferentes. Informações detalhadas sobre o licenciamento de código existente podem ser encontradas inspecionando os cabeçalhos de licença ou visitando a página de informações de licença no software relevante da Mozilla.
              </P>
              <P theme={theme} style={{marginBottom: '20px'}}>
                Para informações sobre como outras coisas são licenciadas, incluindo as marcas registradas e sites da Mozilla, consulte nossa <A href="/pt-BR/foundation/licensing/">página de informações de licenciamento geral</A>.
              </P>
            </Section>
  
            <Section>
              <H2 theme={theme}>Dúvidas?</H2>
              <P theme={theme} style={{marginBottom: '20px'}}>
                Se, após ler tudo acima cuidadosamente (especialmente o <A href="/pt-BR/MPL/2.0/FAQ/">FAQ</A>), você tiver uma dúvida adicional sobre a MPL ou os termos de licenciamento do código do projeto Mozilla, envie-a para <A href="mailto:licensing@mozilla.org">licensing@mozilla.org</A>.
              </P>
            </Section>
            <Table>
              <H1 theme={theme}>Histórico de Versões</H1>
              <TR theme={theme}>
                <TD theme={theme}>Versão</TD>
                <TD theme={theme}>Data</TD>
                <TD theme={theme}>Descrição</TD>
                <TD theme={theme}>Autor(es)</TD>
                <TD theme={theme}>Revisor(es)</TD>
              </TR>
              <TR theme={theme}>
                <TD theme={theme}>1.0</TD>
                <TD theme={theme}>01/04/2024</TD>
                <TD theme={theme}>Criação da página da licença</TD>
                <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                <TD theme={theme}><A href="https://github.com/martinsglucas">Lucas Martins</A></TD>
              </TR><TR theme={theme}>
                <TD theme={theme}>1.0</TD>
                <TD theme={theme}>01/04/2024</TD>
                <TD theme={theme}>Tradução da licença</TD>
                <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                <TD theme={theme}><A href="https://github.com/martinsglucas">Lucas Martins</A></TD>
              </TR>
            </Table>
          </Texto>
      </Container>
    );
  }