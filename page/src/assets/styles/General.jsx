import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme === "light" ? "#f5f5f5" : "#272727"};
  width: 100vw;
  height: 100%;
`;

const Texto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 15vw;
`;

const Titulo = styled.div`

  font-size: 4rem;
  color: ${props => props.theme === "light" ? "#000" : "#fff"};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-align: start;
  width: 100%;
`;

const H1= styled.div`
    font-size: 2rem;
    color: ${props => props.theme === "light" ? "#000" : "#fff"};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align: start;
    width: 100%;
    margin-bottom: 20px;
`;

const Section = styled.section`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const H2 = styled.h2`
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    font-size: 1.5rem;
    font-family: sans-serif;
    text-align: justify;
`

const UL = styled.ul`
    list-style: none;
    padding: 0;
    margin-left: 4vw;

`;

const LI = styled.li` 
    width: 100%;
    text-align: start;
    list-style-type: disc;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    color: ${props => props.theme === "light" ? "#000" : "#fff"};
`;

const P = styled.p`
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    font-size: 1.5rem;
    font-family: sans-serif;
    text-align: justify;
`;

const Legenda = styled.p`
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    font-size: 1.2rem;
    font-family: sans-serif;
    text-align: justify;
    font-style: italic;
    margin-bottom: 20px;
`

const A = styled.a`
    color: #F14B32;
    text-decoration: none;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TR = styled.tr`
    font-size: 1.3rem;
    font-weight: 300;
    border-bottom: 1px solid ${props => props.theme === "light" ? "#000" : "#fff"};
    padding: 8px;
    text-align: center;
    border: 1px solid ${props => props.theme === "light" ? "#000" : "#fff"};
`;

const TD = styled.th`
    padding: 8px;
    text-align: center;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    border: 1px solid ${props => props.theme === "light" ? "#000" : "#fff"};
    border-bottom: 1px solid ${props => props.theme === "light" ? "#000" : "#fff"};
`;

export {Titulo, Texto, Container, H1, H2, UL, LI, P, A, Legenda, Section, TR, TD, Table};