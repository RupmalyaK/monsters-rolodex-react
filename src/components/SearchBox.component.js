import React from "react"; 
import styled from "styled-components"; 

const SearchBoxContainer = styled.input`
-webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;
const SearchBox = (props) => {
    const {handleSearchFieldChange , fieldDefaultText} = props;  
    return (
        <SearchBoxContainer type="search" placeholder={fieldDefaultText} onChange={handleSearchFieldChange}/>
    );
}


export default SearchBox; 
