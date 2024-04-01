import styled from "styled-components";
import cover from "../assets/images/cover.png";
import logo from "../assets/images/logo.png";
import { Tilt } from 'react-tilt'
import { NavLink } from "react-router-dom";


export default function Capa() {
    return (
        <Container> 
             <Tilt options={defaultOptions}><Title>Requisitos Mozilla Firefox</Title></Tilt>
             <Tilt options={defaultOptions}><Click>Clique na logo para acessar o projeto</Click></Tilt>
             <NavLink to={"/2024.1-Firefox/inicio"}><Tilt options={defaultOptions}><Image src={logo}/></Tilt></NavLink>
        </Container>
    );
}

const Container = styled.div`
    background-image: url(${cover});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
`;

const Image = styled.img`
    width: 25vw;
    height: auto;
`;

const Title = styled.h1`
    font-size: 4rem;
    color: #fff;
    font-weight: 700;
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
`;

const Click = styled.p`
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif
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