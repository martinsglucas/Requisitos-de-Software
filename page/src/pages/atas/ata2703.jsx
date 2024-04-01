import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';
import { Container, Texto, Titulo, H1, H2, TR, TD, Table, UL, LI, P, A, Legenda, Section, Image} from '../../assets/styles/General';

export default function AtaDeReuniao2703() {
    const { theme } = React.useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <SideBar />
      <Texto theme={theme}>
        <Titulo theme={theme}>Ata da reunião 1</Titulo>
        <H1 theme={theme}>1. Identificação</H1>
        <Table theme={theme}>
            <TR theme={theme}>
              <TD theme={theme}>Data</TD>
              <TD theme={theme}>Hora de início</TD>
              <TD theme={theme}>Hora de Término</TD>
              <TD theme={theme}>Local</TD>
              <TD theme={theme}>Redator</TD>
              <TD theme={theme}>Projeto</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>27-03-2024</TD>
              <TD theme={theme}>20:10</TD>
              <TD theme={theme}>20:45</TD>
              <TD theme={theme}>Microsoft Teams</TD>
              <TD theme={theme}>Leonardo Sobrinho de Aguiar</TD>
              <TD theme={theme}>Projeto de REQ</TD>
            </TR>
        </Table>

        <Table theme={theme}>
            <TR theme={theme}>
              <TD theme={theme}>Convocados</TD>
              <TD theme={theme}>Presente</TD>
              <TD theme={theme}>Área/Empresa</TD>
              <TD theme={theme}>E-mail</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>1. Davi Gonçalves Akegawa Pierre</TD>
              <TD theme={theme}>✅</TD>
              <TD theme={theme}>Discente</TD>
              <TD theme={theme}>E-mail: <A href="mailto:zafirosafira@gmail.com">zafirosafira@gmail.com</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>2. Guilherme Westphall</TD>
              <TD theme={theme}>✅</TD>
              <TD theme={theme}>Discente</TD>
              <TD theme={theme}>E-mail: <A href="mailto:guilhermewestphall@gmail.com">guilhermewestphall@gmail.com</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>3. Kallyne Macedo Passos</TD>
              <TD theme={theme}>✅</TD>
              <TD theme={theme}>Discente</TD>
              <TD theme={theme}>E-mail: <A href="mailto:kallyne.passos@aluno.unb.br">kallyne.passos@aluno.unb.br</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>4. Kauan de Torres Eiras</TD>
              <TD theme={theme}>✅</TD>
              <TD theme={theme}>Discente</TD>
              <TD theme={theme}>E-mail: <A href="mailto:232014727@aluno.unb.br">232014727@aluno.unb.br</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>5. Leonardo Sobrinho de Aguiar</TD>
              <TD theme={theme}>✅</TD>
              <TD theme={theme}>Discente</TD>
              <TD theme={theme}>E-mail: <A href="mailto:leonardosobrinhoa@hotmail.com">leonardosobrinhoa@hotmail.com</A></TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>6. Lucas Martins Gabriel</TD>
              <TD theme={theme}>✅</TD>
              <TD theme={theme}>Discente</TD>
              <TD theme={theme}>E-mail: <A href="mailto:lucasmartinsgabriel@gmail.com">lucasmartinsgabriel@gmail.com</A></TD>
            </TR>
        </Table>

        <H1 theme={theme}>2. Pauta</H1>

        <Table theme={theme}>
          <TR theme={theme}>
            <TD theme={theme}>N°</TD>
            <TD theme={theme}>Descrição</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>1</TD>
            <TD theme={theme}>Acordo de horário das reuniões</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>2</TD>
            <TD theme={theme}>Distribuição de tarefas</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>3</TD>
            <TD theme={theme}>Aplicativo que seria o foco do projeto</TD>
          </TR>
        </Table>

        <H1 theme={theme}>3. Pendências Anteriores</H1>

        <Table theme={theme}>
          <TR theme={theme}>
            <TD theme={theme}>N°</TD>
            <TD theme={theme}>Pendência</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>1</TD>
            <TD theme={theme}>Não haviam pendências a serem tratadas</TD>
          </TR>
        </Table>

        {/* ### **4. Assuntos Tratados** */}
        <H1 theme={theme}>4. Assuntos Tratados</H1>

        <Table theme={theme}>
          <TR theme={theme}>
            <TD theme={theme}>N°</TD>
            <TD theme={theme}>Descrição</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>1</TD>
            <TD theme={theme}>Ficou acordado que as reuniões serão às segundas-feiras às 18h e em quartas às 20h, quando necessário</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>2</TD>
            <TD theme={theme}>Foram distribuídas demandas para os membros</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>3</TD>
            <TD theme={theme}>Foi discutido sobre qual aplicativo seria utilizado como foco do projeto</TD>
          </TR>
        </Table>

        <H1 theme={theme}>5. Compromissos</H1>

        <Table theme={theme}>
          <TR theme={theme}>
            <TD theme={theme}>N°</TD>
            <TD theme={theme}>Compromisso</TD>
            <TD theme={theme}>Responsável</TD>
            <TD theme={theme}>Data</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>1</TD>
            <TD theme={theme}>Responsável pela ata</TD>
            <TD theme={theme}>Leonardo</TD>
            <TD theme={theme}>01/04/2024</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>2</TD>
            <TD theme={theme}>Ferramentas</TD>
            <TD theme={theme}>Guilherme</TD>
            <TD theme={theme}>01/04/2024</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>3</TD>
            <TD theme={theme}>Rich Picture</TD>
            <TD theme={theme}>Lucas</TD>
            <TD theme={theme}>01/04/2024</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>4</TD>
            <TD theme={theme}>Cronograma V0</TD>
            <TD theme={theme}>Davi, Kallyne e Leonardo</TD>
            <TD theme={theme}>01/04/2024</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>5</TD>
            <TD theme={theme}>Avaliação de Aplicativos</TD>
            <TD theme={theme}>Todos</TD>
            <TD theme={theme}>01/04/2024</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>6</TD>
            <TD theme={theme}>criar página do git pages</TD>
            <TD theme={theme}>Kauan</TD>
            <TD theme={theme}>01/04/2024</TD>
          </TR>
        </Table>

        <H1 theme={theme}>6. Link da gravação</H1>

        <P theme={theme}> Figura 01 - Vídeo da reunião 01</P>

        <center><iframe src="https://unbbr.sharepoint.com/sites/Requisitos-G6/_layouts/15/embed.aspx?UniqueId=6fe71a42-61e7-4b70-b4e0-13b1a74b9394&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Planejamento 27.03-20240327_201543-Gravação de Reunião.mp4"></iframe></center>

        ## Histórico de Versão 

        <Table theme={theme}>
          <TR theme={theme}>
            <TD theme={theme}>Versão</TD>
            <TD theme={theme}>Data</TD>
            <TD theme={theme}>Descrição</TD>
            <TD theme={theme}>Responsáveis</TD>
            <TD theme={theme}>Revisor</TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>1.0</TD>
            <TD theme={theme}>01/04/2024</TD>
            <TD theme={theme}>Adicionando a ata no git pages</TD>
            <TD theme={theme}><A href="https://github.com/Leonardo0o0">Leonardo</A></TD>
            <TD theme={theme}><A href="https://github.com/kalipassos">Kallyne</A></TD>
          </TR>
          <TR theme={theme}>
            <TD theme={theme}>1.1</TD>
            <TD theme={theme}>01/04/2024</TD>
            <TD theme={theme}>Revisão e adição link da reunião</TD>
            <TD theme={theme}><A href="https://github.com/kalipassos">Kallyne</A></TD>
            <TD theme={theme}><A href="https://github.com/Leonardo0o0">Leonardo</A></TD>
          </TR>
        </Table>
      </Texto>
    </Container>
  );
}
