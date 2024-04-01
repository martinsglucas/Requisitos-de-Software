import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/sidebar/SideBar';
import { ThemeContext } from '../context/themeContext';
import { Tilt } from 'react-tilt';
import logo from "../assets/images/logo.png"
import leonardo from "../assets/images/Leonardo.jpeg";

import { Container, Texto, Titulo, H1, P, A, TR, TD, Table, Section} from '../assets/styles/General';


const HomePage = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <SideBar/>
      <Texto>
        <Titulo theme={theme}>Requisitos de Software: Mozilla Firefox</Titulo>
        <Tilt options={defaultOptions}>
          <Imagem src={logo}/>
        </Tilt>
            <Section>
            <P theme={theme}>Esta página é dedicada à documentação de todos os artefatos produzidos pelo <A href='https://github.com/Requisitos-de-Software/2024.1-Firefox'>grupo 06</A> da disciplina de <A href='https://github.com/Requisitos-de-Software'>Requisitos de Software</A> da Faculdade do Gama da Universidade de Brasília (FGA-UnB) durante o 1º semestre de 2024. O objetivo do projeto é fazer a avaliação sobre requisitos do aplicativo Firefox, na versão mobile para <A href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=pt_BR&gl=US">Android</A> e <A href="https://apps.apple.com/br/app/firefox-private-safe-browser/id989804926">iOS</A>. O app em questão, é um navegador de internet Open Source e sem fins lucrativos, que promete uma navegação eficiente e segura pela internet.</P>
            </Section>
            <Section>
              <H1 theme={theme}>Membros do Grupo</H1>
              <Membros>
              
              <Tilt options={defaultOptions}>
                <Membro href="https://github.com/DaviPierre">
                  <Avatar src="https://media.licdn.com/dms/image/D4D35AQE-dMlUvuh1Tw/profile-framedphoto-shrink_800_800/0/1684538643670?e=1712599200&v=beta&t=3EEfKjwCj7oAk9eyWmxVaUhZxroZRHytmqdl1pPep0I"/>
                  <Nome theme={theme}>Guilherme Westphall</Nome>
                </Membro>
                </Tilt>
                <Tilt options={defaultOptions}>
                <Membro href="https://github.com/west7">
                  <Avatar src="https://avatars.githubusercontent.com/u/101183849?v=4"/>
                  <Nome theme={theme}>Guilherme Westphall</Nome>
                </Membro>
                </Tilt>
                <Tilt options={defaultOptions}>
                <Membro href="https://github.com/kalipassos">
                  <Avatar src="https://media.licdn.com/dms/image/D4D03AQH6VXD0cGfrTA/profile-displayphoto-shrink_800_800/0/1680625762596?e=1717632000&v=beta&t=m2MffYI54l4dkBtnoTA-G9isHnY5iRga6RRApZYqwRI"/>
                  <Nome theme={theme}>Kallyne Macedo</Nome>
                </Membro>
                </Tilt>
                <Tilt options={defaultOptions}>
                <Membro href="https://github.com/kauaneiras">
                  <Avatar src="https://avatars.githubusercontent.com/u/43351064?v=4"/>
                  <Nome theme={theme}>Kauan T. Eiras</Nome>
                </Membro>
                </Tilt>
                <Tilt options={defaultOptions}>
                <Membro href="https://github.com/martinsglucas">
                  <Avatar src="https://avatars.githubusercontent.com/u/104236229?v=4"/>
                  <Nome theme={theme}>Lucas Martins</Nome>
                </Membro>
                </Tilt>
                <Tilt options={defaultOptions}>
                <Membro href="https://github.com/Leonardo0o0">
                  <Avatar src={leonardo}/>
                  <Nome theme={theme}>Leonardo Sobrinho</Nome>
                </Membro>
                </Tilt>
              </Membros>
            </Section>
            <Section>
              <H1 theme={theme}>Histórico de Versões</H1>
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
                  <TD theme={theme}>Criação do Pages</TD>
                  <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                  <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
                </TR>
                <TR theme={theme}>
                  <TD theme={theme}>1.0</TD>
                  <TD theme={theme}>01/04/2024</TD>
                  <TD theme={theme}>Tema claro e escuro</TD>
                  <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                  <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
                </TR>
                <TR theme={theme}>
                  <TD theme={theme}>1.0</TD>
                  <TD theme={theme}>01/04/2024</TD>
                  <TD theme={theme}>Formatação das páginas do Pages</TD>
                  <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                  <TD theme={theme}><A href='https://github.com/kalipassos'>Kallyne Macedo</A></TD>
                </TR>
              </Table>
            </Section>
      </Texto>
    </Container>
  );
};

export default HomePage;

const Imagem = styled.img`
  width: 20vw;
  padding: 40px;
`;

const Membros = styled.div`
  display: flex;
  flex-direction: row;
`;

const Membro = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Nome = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme === "light" ? "#000" : "#fff"};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
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
