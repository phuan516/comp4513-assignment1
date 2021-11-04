import React from "react";

const CharactersTab = (props) => {
  const personas = props.playInfo.persona;

  return (
    <div className="CharactersTab">
      {personas.map((p, index) => {
        return (
          <div className="allPlayers">
            <p key={index} className="position">
              Position: {p.position}
            </p>
            <p key={p.player} className="player">
              {" "}
              {p.player}{" "}
            </p>
            <p key={p.desc} className="desc">
              {" "}
              {p.desc}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default CharactersTab;
