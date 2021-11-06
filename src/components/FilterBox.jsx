import React, { useState, useEffect } from "react";


const FilterBox = (props) => {
  const [filter, updateFilter] = useState({});
  const [beforeCheck, setBeforeCheck] = useState({status: true})
  const [afterCheck, setAfterCheck] = useState({status: true});

useEffect (() => {

  //if title is set from search container, apply the filter upon first render of page.
  if (props.title) {
    updateFilter({title: props.title})
    props.updateFilteredData({title: props.title});
  } else {
    props.updateFilteredData({});
  }
}, []
);
  //handles all field changes.
  const handleFieldClick = (e) => {

    const tempStateObj = {...filter};

    //if a field becomes empty, remove it from state.
    if (e.target.value === '' ) {
        delete tempStateObj[e.target.name];
    } else {
    //undergo necessary state updates.
    tempStateObj[e.target.name] = e.target.value;

    //If it is for the before or after fields, must update the before and after states as these are distinct
    //due to their checkbox functionality/processing.

     if (e.target.name === 'before') {
        setBeforeCheck({status: false, value: e.target.value })
     }

      if (e.target.name === 'after') {
       setAfterCheck({status: false, value: e.target.value  })
     }
    
    }
 
    //update filter state.
    updateFilter(tempStateObj);

  }

  //process the form submission up when "filter" clicked.
 const handleSubmit = e => {
    props.updateFilteredData(filter);
    e.preventDefault(); 
  }

  //Checkbox functionality, of enabling and disabling values entered processed.
  const handleCheckBoxClick = e => {
  
    const tempStateObj = {...filter};

    if (e.target.name === 'before' && beforeCheck.status === false) {
      setBeforeCheck({status: true, value: beforeCheck.value});
      delete tempStateObj['before'];
      
    } else  {
      if (e.target.name === 'before' &&  beforeCheck.status === true) {
        setBeforeCheck({status: false, value: beforeCheck.value});
        tempStateObj.before = beforeCheck.value;
 
    } else {
      if (e.target.name === 'after' &&  afterCheck.status === false) { 
        setAfterCheck({status: true, value: afterCheck.value});
        delete tempStateObj['after'];
    
    } else {

    if (e.target.name === 'after' &&  afterCheck.status === true) {
      
      setAfterCheck({status: false, value: afterCheck.value});
      tempStateObj.after =  afterCheck.value;

        }
      }
    }
  }

    updateFilter(tempStateObj);
   
  }

  //upon reset of form fields - all state must be emptied.
  const resetFilter = e => {
    updateFilter({});
    setBeforeCheck({status: true});
    setAfterCheck({status: true});
  }
  

    return (
    <div id="filterBox">
      <h1 id="filterTitle">Play Filter</h1>
      <hr/>
      <label htmlFor="title">Title</label>
      <form onSubmit = {handleSubmit}>
      <input type="text" name="title" id="title" onChange = {handleFieldClick}></input>
      <input type="checkbox" name="before" onChange={handleCheckBoxClick} />
      <label htmlFor="before" name="before">
        Before
        <input type="text" name="before" disabled = {beforeCheck.status} onChange = {handleFieldClick}/>
      </label>
      <input type="checkbox"  name="after" onChange={handleCheckBoxClick}/>
      <label htmlFor="after">
        After
        <input type="text" name="after" disabled = {afterCheck.status} onChange = {handleFieldClick} />
      </label>
      <label htmlFor="genre">Genre</label>
      <select name="genre" id="genre" onChange = {handleFieldClick}>
        <option  defaultValue = ''></option>
        <option name = "genre" value="comedy">comedy</option>
        <option name = "genre" value="tragedy">tragedy</option>
        <option name = "genre" value="history">history</option>
      </select>
      <button type="submit">Filter</button>
      <button type="reset" onClick={resetFilter}>Clear</button>
      </form>
  </div>
    
    );
    
};

export default FilterBox;