import React from "react"; 
import styled from "styled-components"; 

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
       
    &:hover {
            transform: scale(1.05);
        }
`;



const Card = (props) => {
    const {monster} = props;
    return (
        <CardStyle>
            <img alt="monster" src= {"https://robohash.org/" + monster.id + "?size=180x180"}/>
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{monster.email}</p>

        </CardStyle>
    );
}

export default Card; 