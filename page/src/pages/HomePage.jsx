import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import SideBar from '../components/sidebar/SideBar';
import MarkdownRenderer from '../components/renderizarMD';

import heatmap from "../../docs/planejamento/heatmap.md";

const HomePage = () => {
  return (
    <Container>
      <SideBar/>
      <Align>
        <MarkdownRenderer filePath={heatmap} />
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
