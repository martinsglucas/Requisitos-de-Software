import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const MarkdownRenderer = ({ markdown }) => {
  return (
    <StyledMarkdown>
      <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </StyledMarkdown>
  );
};

export default MarkdownRenderer;

const StyledMarkdown = styled.div`
  width: 100%;
  text-align: justify;
  padding: 5% 20%;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;

  }

  p {
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;