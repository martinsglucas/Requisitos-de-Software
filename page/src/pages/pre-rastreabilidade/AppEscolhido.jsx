import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';
import { Tilt } from 'react-tilt';
import logo from "../../assets/images/firefox.webp";
import comparacao from "../../assets/images/page/comparacaofirefox.png"

import { Container, Texto, Titulo, H1, H2, TR, TD, Table, UL, LI, P, A, Legenda, Section, Image} from '../../assets/styles/General';


const AppEscolhido = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <SideBar/>
      <Texto>
        <Titulo theme={theme}>Aplicativo Escolhido: Mozilla Firefox</Titulo>
        <Tilt options={defaultOptions}>
          <Imagem src={logo}/>
        </Tilt>
            <Section>
                <H1>Introdução</H1>
                <P theme={theme}>O Firefox é um navegador web gratuito e de código aberto desenvolvido pela Mozilla Foundation. É uma ótima alternativa aos navegadores mais populares, como Chrome e Safari. O Firefox pode oferecer algumas vantagens em relação outros navegadores como Navegação rápida e eficiente, Segurança e privacidade, Personalização, entre outras vantagens. O site da da <A href="https://www.mozilla.org/pt-BR/firefox/browsers/compare/">Mozilla</A> mostra uma comparação entre o Firefox e outros navegadores populares:</P>
                <Image src={comparacao}/>
                <Legenda theme={theme}><A href="https://www.mozilla.org/pt-BR/firefox/browsers/compare/">Figura 1:</A> Comparação do Firefox com outros navegadores</Legenda>
            </Section>
            <Section>
                <H1 theme={theme}>Critérios para escolha</H1>
                <UL>
                  <LI theme={theme}>Aplicativo não ter sido trabalhado na disciplina.</LI>
                  <LI theme={theme}>Facilidade de contato com o público-alvo.</LI>
                  <LI theme={theme}>Complexidade do aplicativo.</LI>
                  <LI theme={theme}>Disponibilidade de informações</LI>
                  <LI theme={theme}>Código OpenSource</LI>
                </UL>
            </Section>
            <Section>
                <H1 theme={theme}>Motivação de escolha</H1>
                <UL>
                  <LI theme={theme}>Público-alvo amplo e de fácil acesso: há muitas pessoas utilizam ou já utilizaram o Firefox.</LI>
                  <LI theme={theme}>Aplicativo de complexidade média: apresenta requisitos funcionais e não funcionais que seram trabalhados na disciplina.</LI>
                  <LI theme={theme}>Disponibilidade de informações: as informações do Firefox são abertas para todos</LI>
                  <LI theme={theme}>Código OpenSource: O Firefox é licenciado sob a Mozilla Public License 2.0 (MPL-2.0), uma licença livre e de código aberto que permite que qualquer pessoa use, modifique e distribua o software</LI>
                </UL>
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
                <TD theme={theme}>31/03/2024</TD>
                <TD theme={theme}>Criação do documento</TD>
                <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                <TD theme={theme}>-</TD>
              </TR>
            </Table>
      </Texto>
    </Container>
  );
};

export default AppEscolhido;

const Imagem = styled.img`
  width: 20vw;
  padding: 40px;
`;

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
