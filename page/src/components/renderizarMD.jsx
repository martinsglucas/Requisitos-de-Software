import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

export default function MarkdownRenderer({ filePath }) {
  const [post, setPost] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const module = await import(filePath);
        const response = await fetch(module.default);
        const text = await response.text();
        setPost(text);
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
      }
    };

    fetchData();
  }, [filePath]);

  return (
    <>
      <StyledMarkdown>{post}</StyledMarkdown>
    </>
  );
};

const StyledMarkdown = styled(Markdown)`
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

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: center;
    border: 1px solid #000;
  }

  th {
    font-size: 1.3rem;
    font-weight: 600;
    border-bottom: 1px solid #000; 
  }

  td {
    border-bottom: 1px solid #000; 
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
`;