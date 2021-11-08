import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import PlayDetailPage from "./components/PlayDetailPage";
import { HashRouter, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [like, setLike] = useState([]);
  const [currentPlay, setCurrentPlay] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [showFavorites, setShowFavorites] = useState(true); 

  useEffect(() => {
    const getData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
        const response = await fetch(url);
        const data = await response.json();

        localStorage.setItem("playData", JSON.stringify(data));
        setData(JSON.parse(localStorage.getItem("playData")));
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

  /* https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react */
  const updateIsChecked = () => {
    setIsChecked(!isChecked);
  }

  const updateFaveBox = () => {
    setShowFavorites(!showFavorites);
  }
  
  return (
    <main>
      <HashRouter basename='/'>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage}/>
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

              isChecked={isChecked}
              updateIsChecked={updateIsChecked}

              showFavorites={showFavorites}
              updateFaveBox={updateFaveBox}

            />;
            
        </Route>
      <Route path="/playDetails">
        <PlayDetailPage
          plays={data}
          likedPlays={like}
          addToLike={addLikes}
          removeFromLike={removeLikes}
          current={currentPlay}
          updateCurrent={updateCurrentPlay}
          filters={filteredData}

          isChecked={isChecked}
          updateIsChecked={updateIsChecked}

          showFavorites={showFavorites}
          updateFaveBox={updateFaveBox}
        />
      </Route>
     </ HashRouter>
    </main>
  );
}
export default App;
