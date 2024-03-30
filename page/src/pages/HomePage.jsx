import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import SideBar from '../components/sidebar/SideBar';
import MarkdownRenderer from '../components/renderizarMD';
import heatmap from "../../docs/planejamento/heatmap.md";

const HomePage = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        // Simulação de carregamento do arquivo Markdown
        const response = await fetch(heatmap);
        if (!response.ok) {
          throw new Error('Falha ao carregar o arquivo Markdown');
        }
        const markdown = await response.text();
        setMarkdownContent(markdown);
      } catch (error) {
        console.error('Erro ao carregar o arquivo Markdown:', error);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <Container>
      <SideBar/>
      <Align>
        <MarkdownRenderer markdown={markdownContent} />
      </Align>
    </Container>
  );
};

export default HomePage;

const Container = Styled.div`
  display: flex;
  flex-direction: row;
`;

const Align = Styled.div`
  width: 100%;
`;
