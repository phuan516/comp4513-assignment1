import React, { useEffect, useState } from "react";
import HeaderBar from "./HeaderBar";
import FavoriteBox from "./FavoritesBox";
import Tabs from "./TabComponent/Tabs";
import { Link } from "react-router-dom";
import "../App.css";

const PlayDetailPage = (props) => {
  const [tab, setTab] = useState("Details");
  const [currentAct, setCurrentAct] = useState("ACT I");
  const [currentScene, setCurrentScene] = useState("SCENE I");
  const [currentSpeaker, setCurrentSpeaker] = useState("");
  const [highlightedWord, setHighlightedWord] = useState("");


  const tabIsText = (tab) => {
    setTab(tab);
  };

  const handleCurrentAct = (e) => {
    console.log(e.target.value);
    setCurrentAct(e.target.value);
  };

  const handleCurrentScene = (e) => {
    console.log(e.target.value);
    setCurrentScene(e.target.value);
  };

  const handleCurrentSpeaker = (e) => {
    if (e.target.value !== "" && e.target.value !== "clear") {
      console.log(e.target.value);
      setCurrentSpeaker(e.target.value);
    } else if (e.target.value === "clear") {
      setCurrentSpeaker("");
      console.log("Search is cleared -->" + e.target.value);
    }
  };

  const addToLike = () => {
    props.addToLike(props.current);
  };

  const handleHighlightedWord = (e) => {
    console.log(e.target.value);
    setHighlightedWord(e.target.value);
  };


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
    const getInfo = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=" +
          props.current.id;
        const response = await fetch(url);
        const data = await response.json();

        //setPlayInfo(data);

        localStorage.setItem("playInfo", JSON.stringify(data));
        props.updatePlayInfo(JSON.parse(localStorage.getItem("playInfo")));

      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    getInfo();
    
  }, []);

  if (tab === "Text") {
    return (
      <div className="playDetailsPage">
        <div id="detailsHeaderBar">
          <HeaderBar></HeaderBar>
        </div>

        <div id="playDetailsBox">
          <div id="detailsFavoriteList">
            <FavoriteBox
              plays={props.likedPlays}
              removeFromLike={props.removeFromLike}
              updateCurrent={props.updateCurrent}
              updatePlayInfo={props.updatePlayInfo}
            />
          </div>

          <div id="playTitleBox">
            <div id="checkAndTitle"> 
              <div id="checkBoxDiv"> <input type="checkbox" class="checkboxFave" /> </div>
              <h1 id="playTitle">{props.current.title}</h1>
            </div>
            

            <hr></hr>
          <div id="formBox">
            <form id="textFilterBox">
              {/* This handles the act filter and adds current act*/}

              <select name="act" id="act" onChange={handleCurrentAct}>
                {props.playInfo.acts.map((a) => {
                  return (
                    <option value={a.name} key={a.name}>
                      {" "}
                      {a.name}{" "}
                    </option>
                  );
                })}
              </select>

              {/* This handles the scene filter corresponding to the act*/}
              <select name="scene" id="scene" onChange={handleCurrentScene}>
                {props.playInfo.acts.map((act) => {
                  if (act.name === currentAct) {
                    return act.scenes.map((s) => {
                      return (
                        <option value={s.name} key={s.name}>
                          {" "}
                          {s.name}{" "}
                        </option>
                      );
                    });
                  }
                })}
              </select>
            </form>

            <form className="playerSearch">
              {/* This handles the word filter corresponding to the speaker*/}
              <select
                name="speaker"
                id="speaker"
                onChange={handleCurrentSpeaker}
              >
                <option value=""> Choose Player Here </option>
                {props.playInfo.persona.map((p) => {
                  return (
                    <option value={p.player} key={p.player}>
                      {" "}
                      {p.player}{" "}
                    </option>
                  );
                })}
                <option value="clear"> CLEAR SEARCH </option>
              </select>
              <br />
              <input
                id="highlightedWord"
                type="text"
                name="name"
                onChange={handleHighlightedWord}
              />
            </form>
            </div>
            <div id="textPlayDetailsButtons">
              <Link to={{pathname: "/default", state: {filters: props.filters}}} >
                <button type="button" id="closeButton"> Close </button>
              </Link>
              <button onClick={addToLike} id="likeButton"> ❤ </button>
            </div>
          
          </div>

          <div id="tabsBox">
            <Tabs
              current={props.current}
              playInfo={props.playInfo}
              tab={tab}
              tabIsText={tabIsText}
              currentAct={currentAct}
              currentScene={currentScene}
              currentSpeaker={currentSpeaker}
              highlightedWord={highlightedWord}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playDetailsPage">
        <div id="detailsHeaderBar">
          <HeaderBar></HeaderBar>
        </div>

        <div id="playDetailsBox">
          <div id="detailsFavoriteList">
            <FavoriteBox
              plays={props.likedPlays}
              removeFromLike={props.removeFromLike}
              updateCurrent={props.updateCurrent}
              updatePlayInfo={props.updatePlayInfo}
            />
          </div>

          <div id="playTitleBox">
            <div id="checkAndTitle"> 
              <div id="checkBoxDiv"> <input type="checkbox" class="checkboxFave" /> </div>
              <h1 id="playTitle">{props.current.title}</h1>
            </div>
            <hr></hr>
            <div id="playSummaryBox">
              <div id="synopsisBox">{props.current.synopsis}</div>

              <div id="playDetailsButtons">
                <Link to={{pathname: "/default", state: {filters: props.filters}}} >
                  <button type="button" id="closeButton"> Close </button>
                </Link>
                <button onClick={addToLike} id="likeButton"> ❤ </button>
              </div>
            </div>
          </div>

          <div id="tabsBox">
            <Tabs
              current={props.current}
              playInfo={props.playInfo}
              tab={tab}
              tabIsText={tabIsText}
              currentAct={currentAct}
              currentScene={currentScene}
              currentSpeaker={currentSpeaker}
              highlightedWord={highlightedWord}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PlayDetailPage;
