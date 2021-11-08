import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import PlayDetailPage from "./components/PlayDetailPage";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';

function App() {
  const [data, setData] = useState([]);
  const [playInfo, setPlayInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [like, setLike] = useState([]);
  const [currentPlay, setCurrentPlay] = useState([]);

  const [isDefaultPage, setIsDefaultPage] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
        const response = await fetch(url);
        const data = await response.json();

        localStorage.setItem("playData", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };

    if (localStorage.getItem("playData") == null) {
      getData();
    } else {
      setData(JSON.parse(localStorage.getItem("playData")));
    }

    // invoke the async function
  }, []);

  const addLikes = (play) => {
    let temp = [...like];
    if (!temp.find((e) => e.title === play.title)) {
      temp.push(play);
      setLike(temp);
    } else {
      console.log("already in list");
    }
  };

  const removeLikes = (play) => {
    const temp = [...like];
    const index = temp.indexOf(play);
    temp.splice(index, 1);
    setLike(temp);
  };

  const updateCurrentPlay = (clickedPlay) => {
    setCurrentPlay(clickedPlay);
    
  };

  const updatePlayInfo = (play) => {
    console.log(play);
    
    //setPlayInfo(data);

    setPlayInfo(play);
  }

  const updateIsDefaultPage = (boolean) => {

    setIsDefaultPage(boolean);
  }
  
  
  return (
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />

      <CSSTransition
        in={isDefaultPage}
        timeout={2000}
        classNames={'defaultPage-'}
      >
        <Route path="/default">
            <DefaultPage
              mainData={data}
              setFilteredData={setFilteredData}
              plays={filteredData}
              likedPlays={like}
              addToLike={addLikes}
              removeFromLike={removeLikes}
              updateCurrent={updateCurrentPlay}
              current={currentPlay}

              playInfo={playInfo}
              updatePlayInfo={updatePlayInfo}

              isDefaultPage={isDefaultPage}
              updateIsDefaultPage={updateIsDefaultPage}

            />
        </Route>
      </CSSTransition>
      <Route path="/playDetails">
        <PlayDetailPage
          plays={data}
          likedPlays={like}
          addToLike={addLikes}
          removeFromLike={removeLikes}
          current={currentPlay}
          updateCurrent={updateCurrentPlay}
          filters={filteredData}

          playInfo={playInfo}
          updatePlayInfo={updatePlayInfo}

        />
      </Route>
    </main>
  );
}
export default App;
