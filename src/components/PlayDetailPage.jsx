import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import FavoriteBox from "./FavoritesBox";
import Tabs from "./TabComponent/Tabs.js";
import { Link } from "react-router-dom";
import '../App.css';

const PlayDetailPage = (props) => {
  const  [playInfo, setPlayInfo ] = useState();
  const [tab, setTab] = useState("");
  const [currentAct, setCurrentAct] = useState ("ACT I");
  const [currentScene, setCurrentScene] = useState("SCENE I");
  const [currentSpeaker, setCurrentSpeaker] = useState("");
  const [highlightedWord, setHighlightedWord] = useState("");

  const tabIsText = (tab) => {
    setTab(tab);
  }

  const handleCurrentAct = (e) => {
    setCurrentAct(e.target.value);
  }

  const handleCurrentScene = (e) => {
    setCurrentScene(e.target.value);
  }

  const handleCurrentSpeaker = (e) => {
    if (e.target.value !== "" && e.target.value !== "clear") {
      setCurrentSpeaker(e.target.value);
    } else if (e.target.value === "clear") {
      setCurrentSpeaker("");
    }
  }

  const addToLike = () => {
    props.addToLike(props.current);
  };

<<<<<<< HEAD

=======
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789
  const handleHighlightedWord = (e) => {
    console.log(e.target.value);
    setHighlightedWord(e.target.value);
  }

  /*
  const check = () => {
    if (currentSpeaker === "") {
      console.log("Current speaker is empty string")
    } else {
      console.log("Current speaker isnt empty")
    }
  }

  check();
  
*/
    useEffect(() => {
      const getData = async () => {
          const url = "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=" + props.current.id;
          const response = await fetch(url);
          const data = await response.json();
          setPlayInfo(data);
<<<<<<< HEAD
          
        } catch (err) {
          console.error(err);
        }
=======
        
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789
      };
      // invoke the async function
      getData();
    
    }, []);
    
    if (tab === "Text") {
      return (
        <div className="playDetailsPage">

          <div className="detailsHeaderBar"> 
          <HeaderBar></HeaderBar>
          </div>
          
          <div className="playDetailsBox">

            <div className="detailsFavoriteList"> 
              <FavoriteBox
              plays={props.likedPlays}
              removeFromLike={props.removeFromLike}/>
            </div>
      
            <div className="playTitleBox">
              <h1 id="playTitle">{props.current.title}</h1>

              <hr></hr>
              
              <form className="textFilterBox">
                
                {/* This handles the act filter and adds current act*/}
                <select name="act" id="act" onChange={handleCurrentAct}>
                  {playInfo.acts.map( (a) => {
                    return (<option value={a.name} key={a.name}> {a.name} </option>)
                  })}
                </select> 

                  <br/>
<<<<<<< HEAD

                {/* This handles the scene filter corresponding to the act*/}
                <select name="scene" id="scene" onChange={handleCurrentScene}>
                  {playInfo.acts.map( (act) => {
                    if (act.name === currentAct) {
                      return(
                        act.scenes.map((s) => {
                          return (<option value={s.name} key={s.name}> {s.name} </option>)
                        })
                      )
                    }
                  }   
                  )}
                </select> 
              </form>
                  
                  <br/>

              <form className="playerSearch">
                  {/* This handles the word filter corresponding to the speaker*/}
                  <select name="speaker" id="speaker" onChange={handleCurrentSpeaker}>
                    <option value=""> Choose Player Here </option>
                    {playInfo.persona.map( (p) => {
                      return (<option value={p.player} key={p.player}> {p.player} </option>)
                    })}
                    <option value="clear" > CLEAR SEARCH </option>
                  </select>
                    <br/>
                  <input id="highlightedWord" type="text" name="name" onChange={handleHighlightedWord}/>
              </form>
              
              <div className="playDetailsButtons">
                <Link to="/default">
                  <button type="button"> Close </button>
                </Link>
                <button onClick={addToLike}> Like </button>
              </div>
              
            </div>
          
=======
                <input id="highlightedWord" type="text" name="name" onChange={handleHighlightedWord}/>
            </form>
            
            <Link to="/default">
              <button type="button" > Close </button>
            </Link>
            <button onClick={addToLike}> Like </button>
          </div>
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789
    

            <div className="tabsBox">
                <Tabs current={props.current} playInfo={playInfo} tab={tab} tabIsText={tabIsText} currentAct={currentAct}
                currentScene={currentScene} currentSpeaker={currentSpeaker} highlightedWord={highlightedWord}/>
            </div>
          </div>

        </div>

      )
    } else {
      return (
        <div className="playDetailsPage">

          <div className="detailsHeaderBar"> 
            <HeaderBar></HeaderBar>
          </div>

<<<<<<< HEAD
          <div className="playDetailsBox">
            <div className="detailsFavoriteList"> 
              <FavoriteBox
              plays={props.likedPlays}
              removeFromLike={props.removeFromLike}
            />
              </div>
      
            <div className="playTitleBox">
              <h1 id="playTitle">{props.current.title}</h1>
              <hr></hr>
              <div className="synopsisBox">
                {props.current.synopsis}
              </div>

              <div className="playDetailsButtons">
                <Link to="/default">
                  <button type="button"> Close </button>
                </Link>
                <button onClick={addToLike}> Like </button>
              </div>
=======
          <Link to="/default">
              <button type="button" > Close </button>
          </Link>
          <button onClick={addToLike}> Like </button>
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789

            </div>
          
          

            <div className="tabsBox">
              <Tabs current={props.current} playInfo={playInfo} tab={tab} tabIsText={tabIsText} currentAct={currentAct}
              currentScene={currentScene} currentSpeaker={currentSpeaker} highlightedWord={highlightedWord}/>
            </div>
          </div>
    
    
        </div>
      );
    }
  
};

export default PlayDetailPage;
