import React from "react";

const TextTab = (props) => {

  if (props.currentSpeaker !== "") {
    return (
      <div className="TextTab">
        <div>{props.playInfo.title}</div>
        <div> {props.currentAct}</div>
        <br/>
        <div> {props.currentScene}</div> 
        <hr></hr>
        <div id="speakerSpeeches"> 
          {props.playInfo.acts.map((a) => {
            if (a.name === props.currentAct) {
              return (
                a.scenes.map((s) => {
                  if (s.name === props.currentScene) 
                    return (
                      s.speeches.map((speeches, index) => {
                        if (speeches.speaker === props.currentSpeaker) {
                          return (
                            <p key={index}>{speeches.speaker} <br/> {speeches.lines} </p>
                          )
                        }
                      })
                    )
                })
              )
            }
          })}
        </div>
    </div>
    )
  } else {
    return (
      <div className="TextTab">
        <div>{props.playInfo.title}</div>
        <div> {props.currentAct}</div>
        <br/>
        <div> {props.currentScene}</div> 
        <hr></hr>
        <div id="sceneSpeeches"> 
          {props.playInfo.acts.map((a) => {
            if (a.name === props.currentAct) {
              return (
                a.scenes.map((s, index) => {
                  if (s.name === props.currentScene)
                  return (
                    <div id="actSceneSpeeches" key={index}>
                      <p>{s.title} <br/> {s.stageDirection}</p>
                    </div>
                  )
                })
              )
            }
          })}
        </div>
        
      </div>
    );
  }
};
export default TextTab;