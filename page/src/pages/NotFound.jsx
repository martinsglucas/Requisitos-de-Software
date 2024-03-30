import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

import notfound from '../assets/notfound.gif';
import styled from 'styled-components';
import SideBar from '../components/sidebar/SideBar';

export default function NotFound(){
    return (
        <Row>
            <SideBar />
            <Container className="not-found">
            <Title>Estamos trabalhando nessa página</Title>
            <Image src={notfound} alt="Página não encontrada" />
            </Container>
        </Row>
    );
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
`;

const Image = styled.img`
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
`;

