import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/*
const DivStyled = styled.div`
background-color:#B31E1E;
border-radius: 10px;
height: 110px;
position:absolute;
left:50%;
top:75%;
transform: translate(-50%,-50%);
padding: 15px;
`;

const Label = styled.label`
font-weight: bold;
font-size: 25px;
margin-right: 15%;
margin-left: 10%;

`;

const Button = styled.button`
color: white;
border-radius: 5px;
margin: 10px;
font-weight: bold;
background-color: #2C297C;

`;


const Input = styled.input`

height: 20px;
border-radius: 5px;
`;
*/

const SearchContainer = (props) => {
  const handleInputChange = e => {
    updateTitle(e.target.value);
  }

  const [title, updateTitle] = useState();
  return (
    <div id="searchContainer">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" onChange={handleInputChange}></input>
    
      <div id="homeButtons">
      <Link to={{pathname:"/default", state: {title: title }}}>
        <button type="button">Show matching Plays</button>
      </Link>
      <Link to={{pathname:"/default", state: {title: '' }}}>
        <button type="button">Show All Plays</button>
      </Link>
      </div>
    </div>
  );
};

/*
<DivStyled>
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" onChange={handleInputChange}></Input>
    
      <p>
      <Link to={{pathname:"/default", state: {title: title }}}>
        <Button type="button">Show matching Plays</Button>
      </Link>
      <Link to={{pathname:"/default", state: {title: '' }}}>
        <Button type="button">Show All Plays</Button>
      </Link>
      </p>
    </DivStyled> */
export default SearchContainer;