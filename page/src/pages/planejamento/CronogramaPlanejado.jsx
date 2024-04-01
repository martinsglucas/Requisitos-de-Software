import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';

import { Container, Texto, Titulo, H1, H2, TR, TD, Table, UL, LI, P, A, Legenda, Section, Image } from '../../assets/styles/General';


export default function CronogramaPlanejado() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <SideBar />
      <Texto>
        <Titulo theme={theme}>Cronograma Planejado</Titulo>
        <Section>
          <H1 theme={theme}>Introdução</H1>
          <P theme={theme}>Os cronogramas planejado e executado objetivam a organização da realização de tarefas e da criação de artefatos necessários para o desenvolvimento do projeto, assim como o acompanhamento do andamento das tarefas, através da disponibilização de tabelas. O artefato presente segue as datas definidas no plano de ensino letivo da disciplina Requisitos de Software, no semestre 2024.1, e está sujeito a mudanças conforme o decorrer do semestre.</P>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma geral do projeto</H1>
          <P theme={theme}>Na Tabela 1, tem-se o cronograma planejado para todas as etapas de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Etapa</TD>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Descrição</TD>
              <TD theme={theme}>Entrega</TD>
              <TD theme={theme}>Apresentação</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>1</TD>
              <TD theme={theme}>Elicitação de Requisitos</TD>
              <TD theme={theme}>Equipe, Definição do App, Planejamento e RichPicture</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>02/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>2</TD>
              <TD theme={theme}>Elicitação de Requisitos</TD>
              <TD theme={theme}>Perfil dos usuários, técnicas de elicitação e de priorização</TD>
              <TD theme={theme}>17/04/2024</TD>
              <TD theme={theme}>18/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>3</TD>
              <TD theme={theme}>Modelagem de Requisitos I</TD>
              <TD theme={theme}>Cenários, Léxico, Use Case, Especificação Suplementar</TD>
              <TD theme={theme}>06/05/2024</TD>
              <TD theme={theme}>07/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>4</TD>
              <TD theme={theme}>Modelagem de Requisitos II</TD>
              <TD theme={theme}>Ágil (Histórias de Usuário, Backlogs, NFR Framework)</TD>
              <TD theme={theme}>13/05/2024</TD>
              <TD theme={theme}>14/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>5.1</TD>
              <TD theme={theme}>Verificação e Validação I</TD>
              <TD theme={theme}>V&V de Grupo + 1</TD>
              <TD theme={theme}>22/05/2024</TD>
              <TD theme={theme}>23/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>6</TD>
              <TD theme={theme}>Pós Rastreabilidade</TD>
              <TD theme={theme}>Gerência II</TD>
              <TD theme={theme}>03/06/2024</TD>
              <TD theme={theme}>04/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>5.2</TD>
              <TD theme={theme}>Verificação e Validação II</TD>
              <TD theme={theme}>V & V do Grupo</TD>
              <TD theme={theme}>17/06/2024</TD>
              <TD theme={theme}>18/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>7</TD>
              <TD theme={theme}>Entrega Final</TD>
              <TD theme={theme}>Finalização do projeto</TD>
              <TD theme={theme}>24/06/2024</TD>
              <TD theme={theme}>25/06/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 1</H1>
          <P theme={theme}>Na Tabela 2, tem-se o cronograma planejado para a primeira etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Data de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Escolha do app a ser trabalhado</TD>
              <TD theme={theme}>27/03/2024</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Heatmap dos membros</TD>
              <TD theme={theme}>20/03/2024</TD>
              <TD theme={theme}>22/03/2024</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Análises de aplicativos para o trabalho</TD>
              <TD theme={theme}>20/03/2024</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Introduzir o aplicativo selecionado</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>29/03/2024</TD>
              <TD theme={theme}>Kauan</TD>
              <TD theme={theme}>Davi</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição do Cronograma</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Davi</TD>
              <TD theme={theme}>Guilherme, Kauan, Lucas</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Configuração GitPages</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>29/03/2024</TD>
              <TD theme={theme}>Kauan</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Confecção ata das reuniões</TD>
              <TD theme={theme}>29/03/2024</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>Leonardo</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição de ferramentas</TD>
              <TD theme={theme}>27/03/2024</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>Guilherme</TD>
              <TD theme={theme}>Lucas</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Confecção a RichPicture do aplicativo</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>Lucas</TD>
              <TD theme={theme}>---</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correção após a Entrega 1</TD>
              <TD theme={theme}>02/04/2024</TD>
              <TD theme={theme}>05/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>06/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravação da apresentação</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>01/04/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma executado entrega 1</H1>
          <P theme={theme}>Na Tabela 3, tem-se o cronograma executado para a primeira etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Data de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Escolha do app a ser trabalhado</TD>
              <TD theme={theme}>27/03/2024</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>29/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Heatmap dos membros</TD>
              <TD theme={theme}>20/03/2024</TD>
              <TD theme={theme}>22/03/2024</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>28/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Análises de aplicativos para o trabalho</TD>
              <TD theme={theme}>20/03/2024</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>01/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Introduzir o aplicativo selecionado</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>29/03/2024</TD>
              <TD theme={theme}>Kauan</TD>
              <TD theme={theme}>Davi</TD>
              <TD theme={theme}>30/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição do Cronograma</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Davi</TD>
              <TD theme={theme}>Guilherme, Kauan, Lucas</TD>
              <TD theme={theme}>01/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Configuração GitPages</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>30/03/2024</TD>
              <TD theme={theme}>Kauan</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Confecção ata das reuniões</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>Leonardo</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição de ferramentas</TD>
              <TD theme={theme}>30/03/2024</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>Guilherme</TD>
              <TD theme={theme}>Lucas</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Confecção a RichPicture do aplicativo</TD>
              <TD theme={theme}>28/03/2024</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>Lucas</TD>
              <TD theme={theme}>---</TD>
              <TD theme={theme}>31/03/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravação da apresentação</TD>
              <TD theme={theme}>31/03/2024</TD>
              <TD theme={theme}>01/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>01/04/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 2</H1>
          <P theme={theme}>Na Tabela 4, tem-se o cronograma planejado para a segunda etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Data de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 1</TD>
              <TD theme={theme}>02/04/2024</TD>
              <TD theme={theme}>05/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição do perfil do usuário</TD>
              <TD theme={theme}>02/04/2024</TD>
              <TD theme={theme}>05/04/2024</TD>
              <TD theme={theme}>Leonardo, Lucas</TD>
              <TD theme={theme}>Kallyne, Guilherme, Kauan, Davi</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Levantamento e definição de técnicas de elicitação</TD>
              <TD theme={theme}>04/04/2024</TD>
              <TD theme={theme}>08/04/2024</TD>
              <TD theme={theme}>Kallyne, Kauan</TD>
              <TD theme={theme}>Leonardo, Guilherme, Lucas, Davi</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Levantamento e definição de técnicas de priorização</TD>
              <TD theme={theme}>04/04/2024</TD>
              <TD theme={theme}>08/04/2024</TD>
              <TD theme={theme}>Davi e Guilherme</TD>
              <TD theme={theme}>Kallyne, Leonardo, Kauan, Lucas</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição e criação de personas</TD>
              <TD theme={theme}>08/04/2024</TD>
              <TD theme={theme}>12/04/2024</TD>
              <TD theme={theme}>Leonardo e Kallyne</TD>
              <TD theme={theme}>Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Aplicação das técnicas de elicitação escolhidas</TD>
              <TD theme={theme}>08/04/2024</TD>
              <TD theme={theme}>12/04/2024</TD>
              <TD theme={theme}>Guilherme e Kauan</TD>
              <TD theme={theme}>Leonardo, Guilherme, Lucas, Davi</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Aplicação das técnicas de priorização escolhidas</TD>
              <TD theme={theme}>08/04/2024</TD>
              <TD theme={theme}>12/04/2024</TD>
              <TD theme={theme}>Davi e Lucas</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Ajustes finais da entrega 2</TD>
              <TD theme={theme}>12/04/2024</TD>
              <TD theme={theme}>16/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>13/04/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 3</H1>
          <P theme={theme}>Na Tabela 5, tem-se o cronograma planejado para a terceira etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Periodo de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 2</TD>
              <TD theme={theme}>18/04/2024</TD>
              <TD theme={theme}>22/04/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>02/05/2024 - 05/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição de cenários</TD>
              <TD theme={theme}>22/04/2024</TD>
              <TD theme={theme}>27/04/2024</TD>
              <TD theme={theme}>Leomardo, Lucas, Kauan</TD>
              <TD theme={theme}>Kallyne, Davi, Guilherme</TD>
              <TD theme={theme}>02/05/2024 - 05/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definição de casos de uso (use case)</TD>
              <TD theme={theme}>22/04/2024</TD>
              <TD theme={theme}>27/04/2024</TD>
              <TD theme={theme}>Kallyne, Davi, Guilherme</TD>
              <TD theme={theme}>Leomardo, Lucas, Kauan</TD>
              <TD theme={theme}>02/05/2024 - 05/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Especificação de léxico</TD>
              <TD theme={theme}>27/04/2024</TD>
              <TD theme={theme}>02/05/2024</TD>
              <TD theme={theme}>Kauan, Gulherme, Davi</TD>
              <TD theme={theme}>Leonardo, Kallyne, Lucas</TD>
              <TD theme={theme}>02/05/2024 - 05/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Especificação suplementar</TD>
              <TD theme={theme}>27/04/2024</TD>
              <TD theme={theme}>02/05/2024</TD>
              <TD theme={theme}>Leonardo, Kallyne, Lucas</TD>
              <TD theme={theme}>Kauan, Gulherme, Davi</TD>
              <TD theme={theme}>02/05/2024 - 05/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Realizar a ata das reuniões</TD>
              <TD theme={theme}>02/05/2024</TD>
              <TD theme={theme}>05/05/2024</TD>
              <TD theme={theme}>Guilherme, Kallyne</TD>
              <TD theme={theme}>Davi, Lucas</TD>
              <TD theme={theme}>02/05/2024 - 05/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravar a apresentação</TD>
              <TD theme={theme}>06/05/2024</TD>
              <TD theme={theme}>06/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>06/05/2024 - 06/05/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 4</H1>
          <P theme={theme}>Na Tabela 6, tem-se o cronograma planejado para a quarta etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Periodo de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 3</TD>
              <TD theme={theme}>07/05/2024</TD>
              <TD theme={theme}>08/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>10/05/2024 - 12/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definicao das historias de usuario</TD>
              <TD theme={theme}>07/05/2024</TD>
              <TD theme={theme}>10/05/2024</TD>
              <TD theme={theme}>Leonardo, Davi</TD>
              <TD theme={theme}>Lucas, Kauan</TD>
              <TD theme={theme}>10/05/2024 - 12/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Definicao do Backlog do produto</TD>
              <TD theme={theme}>07/05/2024</TD>
              <TD theme={theme}>10/05/2024</TD>
              <TD theme={theme}>Kallyne, Guilherme</TD>
              <TD theme={theme}>Leonardo, Davi</TD>
              <TD theme={theme}>10/05/2024 - 12/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>NFR Framework</TD>
              <TD theme={theme}>07/05/2024</TD>
              <TD theme={theme}>10/05/2024</TD>
              <TD theme={theme}>Lucas, Kauan</TD>
              <TD theme={theme}>Kallyne, Guilherme</TD>
              <TD theme={theme}>10/05/2024 - 12/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Realizar a ata das reuniões</TD>
              <TD theme={theme}>10/05/2024</TD>
              <TD theme={theme}>12/05/2024</TD>
              <TD theme={theme}>Leonardo, Lucas</TD>
              <TD theme={theme}>Guilherme, Kauan</TD>
              <TD theme={theme}>10/05/2024 - 12/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravar a apresentação</TD>
              <TD theme={theme}>13/05/2024</TD>
              <TD theme={theme}>13/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>13/05/2024 - 13/05/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 5.2</H1>
          <P theme={theme}>Na Tabela 8, tem-se o cronograma planejado para a quinta etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Periodo de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 5.1</TD>
              <TD theme={theme}>22/05/2024</TD>
              <TD theme={theme}>23/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>24/05/2024 - 25/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Análise de Requisitos: Verificação dos Artefatos Grupo 07</TD>
              <TD theme={theme}>23/05/2024</TD>
              <TD theme={theme}>24/05/2024</TD>
              <TD theme={theme}>Leonardo, Davi, Kallyne</TD>
              <TD theme={theme}>Guilherme, Lucas, Kauan</TD>
              <TD theme={theme}>24/05/2024 - 25/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Análise de Requisitos: Validação Grupo 07</TD>
              <TD theme={theme}>23/05/2024</TD>
              <TD theme={theme}>24/05/2024</TD>
              <TD theme={theme}>Guilherme, Lucas, Kauan</TD>
              <TD theme={theme}>Leonardo, Davi, Kallyne</TD>
              <TD theme={theme}>24/05/2024 - 25/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Realizar a ata das reuniões</TD>
              <TD theme={theme}>24/05/2024</TD>
              <TD theme={theme}>25/05/2024</TD>
              <TD theme={theme}>Davi</TD>
              <TD theme={theme}>Kallyne</TD>
              <TD theme={theme}>24/05/2024 - 25/05/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravar a apresentação</TD>
              <TD theme={theme}>25/05/2024</TD>
              <TD theme={theme}>25/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>25/05/2024 - 25/05/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 6</H1>
          <P theme={theme}>Na Tabela 9, tem-se o cronograma planejado para a sexta etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Periodo de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 5.2</TD>
              <TD theme={theme}>26/05/2024</TD>
              <TD theme={theme}>27/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>29/05/2024 - 02/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Pós-Rastreabilidade - Gerência</TD>
              <TD theme={theme}>26/05/2024</TD>
              <TD theme={theme}>29/05/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>29/05/2024 - 02/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Realizar a ata das reuniões</TD>
              <TD theme={theme}>29/05/2024</TD>
              <TD theme={theme}>02/06/2024</TD>
              <TD theme={theme}>Kauan</TD>
              <TD theme={theme}>Guilherme</TD>
              <TD theme={theme}>29/05/2024 - 02/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravar a apresentação</TD>
              <TD theme={theme}>03/06/2024</TD>
              <TD theme={theme}>03/06/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>03/06/2024 - 03/06/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado entrega 7</H1>
          <P theme={theme}>Na Tabela 10, tem-se o cronograma planejado para a sétima etapa de entrega.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Data de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 6</TD>
              <TD theme={theme}>07/06/2024</TD>
              <TD theme={theme}>09/06/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>13/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Análise de Requisitos: Verificação dos Artefatos</TD>
              <TD theme={theme}>09/06/2024</TD>
              <TD theme={theme}>13/06/2024</TD>
              <TD theme={theme}>Guilherme, Lucas, Kauan</TD>
              <TD theme={theme}>Kallyne, Leonardo, Davi</TD>
              <TD theme={theme}>13/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Análise de Requisitos: Validação</TD>
              <TD theme={theme}>09/06/2024</TD>
              <TD theme={theme}>13/06/2024</TD>
              <TD theme={theme}>Leonardo, Davi, Kallyne</TD>
              <TD theme={theme}>Guilherme, Kauan, Lucas</TD>
              <TD theme={theme}>13/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Ajustes finais da entrega 5.2</TD>
              <TD theme={theme}>12/06/2024</TD>
              <TD theme={theme}>16/06/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>13/06/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Cronograma planejado Entrega Final</H1>
          <P theme={theme}>Na Tabela 11, tem-se o cronograma planejado para a etapa de Entrega Final.</P>
          <Table>
            <TR theme={theme}>
              <TD theme={theme}>Atividade</TD>
              <TD theme={theme}>Início</TD>
              <TD theme={theme}>Fim</TD>
              <TD theme={theme}>Responsáveis</TD>
              <TD theme={theme}>Revisores</TD>
              <TD theme={theme}>Periodo de Revisão</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Correções pós entrega 7</TD>
              <TD theme={theme}>14/06/2024</TD>
              <TD theme={theme}>16/06/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>19/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Pós-Rastreabilidade - Gerência</TD>
              <TD theme={theme}>14/06/2024</TD>
              <TD theme={theme}>19/06/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>19/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Realizar a ata das reuniões</TD>
              <TD theme={theme}>19/06/2024</TD>
              <TD theme={theme}>21/06/2024</TD>
              <TD theme={theme}>Kauan</TD>
              <TD theme={theme}>Guilherme</TD>
              <TD theme={theme}>19/06/2024</TD>
            </TR>
            <TR theme={theme}>
              <TD theme={theme}>Gravar a apresentação</TD>
              <TD theme={theme}>22/06/2024</TD>
              <TD theme={theme}>22/06/2024</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>Kallyne, Leonardo, Guilherme, Kauan, Lucas, Davi</TD>
              <TD theme={theme}>22/06/2024</TD>
            </TR>
          </Table>
        </Section>
        <Section>
          <H1 theme={theme}>Histórico de versões</H1>
          <Table>
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
              <TD theme={theme}>Criação da página de cronograma</TD>
              <TD theme={theme}>Davi Pierre, Kallyne Macêdo e Leonardo Aguiar</TD>
              <TD theme={theme}>Lucas Martins</TD>
            </TR>
          </Table>
        </Section>
        </Texto>
    </Container>
  )
};
