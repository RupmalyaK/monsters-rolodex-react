import React from "react"; 
import styled from "styled-components";
import Card from "./card.component.js";

const CardListStyle = styled.div`
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;

const CardList = (props) => {
    const {monsters} = props;

    return(
        <div>
            <CardListStyle>{monsters.map((monster) => { 
              return(<Card key = {monster.id} monster = {monster}/>);  
            } )}</CardListStyle>
        </div>
    );
}

export default CardList; 