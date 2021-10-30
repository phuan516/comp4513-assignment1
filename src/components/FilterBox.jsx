import React, {useState} from "react";

const FilterBox = (props) => {


  const [filteredData, updateFilteredData] = useState([{title:'', before:'',  after:''}]);
  const [beforeCheckBox, setBeforeCheckBox] = useState(true)
  const [afterCheckBox, setAfterCheckBox] = useState(true);

  
  const handleFieldClick = (e) => {
    
    const tempArray = [...filteredData];
    tempArray[0][e.target.name] = e.target.value;
    console.log(tempArray);
    updateFilteredData(tempArray);

  }

 const handleSubmit = e => {
    if (beforeCheckBox == true) {

      filteredData[0].before = null;
    }
    if (afterCheckBox == true) {
      filteredData[0].after = false;
    }

    props.updateFilteredData(filteredData);
    e.preventDefault();
  }


  const handleCheckBoxClick = e => {

    if (e.target.name == 'before') {
      setBeforeCheckBox(prevCheck => !prevCheck);

    } else {
      setAfterCheckBox(prevCheck => !prevCheck);
    }
   
  }

  return (
    <div>
      <h1>Play Filter</h1>
      <label for="title">Title</label>
      <form onSubmit = {handleSubmit}>
      <input type="text" name="title" id="title" onChange = {handleFieldClick}></input>
      <input type="checkbox" name="before" onChange={handleCheckBoxClick} />
      <label for="before" name="before">
        Before
        <input type="text" name="before" disabled = {beforeCheckBox} onChange = {handleFieldClick}/>
      </label>
      <input type="checkbox"  name="after" onChange={handleCheckBoxClick}/>
      <label for="after">
        After
        <input type="text" name="after" disabled = {afterCheckBox} onChange = {handleFieldClick} />
      </label>
      <label for="genre">Genre</label>
      <select name="genre" id="genre" onChange = {handleFieldClick}>
        <option  defaultValue = ''></option>
        <option name = "genre" value="comedy">comedy</option>
        <option name = "genre" value="tragedy">tragedy</option>
        <option name = "genre" value="history">history</option>
      </select>
      <button type="submit">Filter</button>
      <button type="reset">Clear</button>
      </form>
    </div>
  );
};

export default FilterBox;
