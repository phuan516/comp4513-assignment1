import React from "react";

const CharactersTab = (props) => {
    
    const personas = props.playInfo.persona;

  return (
    <div className="CharactersTab">
        {personas.map((p, index) => {
          return <p key={index}> Character &emsp; {p.player} </p>
        })}
      
    </div>
  );
};
export default CharactersTab;