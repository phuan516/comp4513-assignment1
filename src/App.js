import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import AboutPage from "./components/AboutPage";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [like, setLike] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php";
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    getData();
  }, []);

  const updateLikes = (play) => {
    let temp = [...like];
    if (!temp.find((e) => e.title === play.title)) {
      temp.push(play);
      setLike(temp);
    } else {
      console.log("already in list");
    }
  };

  return (
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/default">
        <DefaultPage plays={data} likedPlays={like} addLike={updateLikes} />
      </Route>
      <Route path="/about" exact componet={AboutPage} />
    </main>
  );
}

export default App;
