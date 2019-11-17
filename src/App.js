import React, {useState , useEffect} from "react"
import styled from "styled-components"; 
import Global from "./components/Global.component.js";
import SearchBox from "./components/SearchBox.component.js";
import CardList from "./components/card-list.component.js"



const Container = styled.div`
  text-align: center;

    h1 {
      font-family: 'Bigelow Rules';
      font-size: 72px;
      color: #0ccac4;
    }

`;

const Heading = styled.h1`
 font-family: 'Bigelow Rules', cursive;
`;


const App = () => {
  const [monsters , setMonsters] = useState([]); 
  const [searchField , setSearchField] = useState("");

  //Only after first render/execution of this FC
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((users) => {
      setMonsters(users);
    });
  }, []); 

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value); 
  };
  
  const filteredMonsters = monsters.filter((monster) => {
   return (monster.name.toLowerCase().search(searchField.toLowerCase()) !== -1);
  });
 
  return (
    <>
    <Global/>
    <Container>
        <Heading>Monsters Rolodex</Heading>
        <SearchBox handleSearchFieldChange = {handleSearchFieldChange} fieldDefaultText = "search monsters..." />
        <CardList monsters = {filteredMonsters} />
    </Container>
    </>
  );
}

export default App;
