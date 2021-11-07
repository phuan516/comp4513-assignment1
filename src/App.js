import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import AboutPage from "./components/AboutPage";
import PlayDetailPage from "./components/PlayDetailPage";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [like, setLike] = useState([]);
  const [currentPlay, setCurrentPlay] = useState([]);
  
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
  }
  let mainData = [...JSON.parse(localStorage.getItem("playData"))];
  return (
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/default">
        <DefaultPage
          mainData={mainData}
          setFilteredData={setFilteredData}
          plays={filteredData}
          likedPlays={like}
          addToLike={addLikes}
          removeFromLike={removeLikes}
          updateCurrent={updateCurrentPlay}
          
        />
      </Route>
      <Route path="/about" exact component={AboutPage} />
      <Route path="/playDetails">
        <PlayDetailPage 
          plays={data}
          likedPlays={like}
          addToLike={addLikes}
          removeFromLike={removeLikes}
          current={currentPlay}
          filters = {filteredData}
        />
      </Route>
    </main>
  );
}
export default App;