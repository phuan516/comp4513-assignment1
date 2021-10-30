import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [like, setLike] = useState([]);

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

  const updateFilteredData = (filteredData) => {
    filteredData[0].title = filteredData[0].title.toLowerCase();

    let mainData = [...data];
    let updatedFilteredData = [];
    for (let d of mainData) {
      if (
        filteredData[0].title &&
        filteredData[0].genre &&
        filteredData[0].before &&
        filteredData[0].after
      ) {
        if (
          d.title.includes(filteredData[0].title) &&
          d.genre == filteredData[0].genre &&
          parseInt(d.likelyDate) < filteredData[0].before &&
          parseInt(d.likelyDate) > filteredData[0].after
        ) {
          updatedFilteredData.push(d);
        }
      } else {
        if (
          filteredData[0].title &&
          filteredData[0].genre &&
          filteredData[0].before
        ) {
          if (
            d.title.includes(filteredData[0].title) &&
            d.genre == filteredData[0].genre &&
            parseInt(d.likelyDate) < filteredData[0].before
          ) {
            updatedFilteredData.push(d);
          }
        } else {
          if (
            filteredData[0].title &&
            filteredData[0].before &&
            filteredData[0].after
          ) {
            if (
              d.title.includes(filteredData[0].title) &&
              parseInt(d.likelyDate) < filteredData[0].before &&
              parseInt(d.likelyDate) > filteredData[0].after
            ) {
              updatedFilteredData.push(d);
            }
          } else {
            if (
              filteredData[0].title &&
              filteredData[0].after &&
              filteredData[0].genre
            ) {
              if (
                d.title.includes(filteredData[0].title) &&
                parseInt(d.likelyDate) > filteredData[0].after &&
                d.genre == filteredData[0].genre
              ) {
                updatedFilteredData.push(d);
              }
            } else {
              if (
                filteredData[0].genre &&
                filteredData[0].before &&
                filteredData[0].after
              ) {
                if (
                  d.genre == filteredData[0].genre &&
                  parseInt(d.likelyDate) < filteredData[0].before &&
                  parseInt(d.likelyDate) > filteredData[0].after
                ) {
                  updatedFilteredData.push(d);
                }
              } else {
                if (filteredData[0].title && filteredData[0].genre) {
                  if (
                    d.title.includes(filteredData[0].title) &&
                    d.genre == filteredData[0].genre
                  ) {
                    updatedFilteredData.push(d);
                  }
                } else {
                  if (filteredData[0].title && filteredData[0].after) {
                    if (
                      d.title.includes(filteredData[0].title) &&
                      parseInt(d.likelyDate) > filteredData[0].after
                    ) {
                      updatedFilteredData.push(d);
                    }
                  } else {
                    if (filteredData[0].title && filteredData[0].before) {
                      if (
                        d.title.includes(filteredData[0].title) &&
                        parseInt(d.likelyDate) < filteredData[0].before
                      ) {
                        updatedFilteredData.push(d);
                      }
                    } else {
                      if (filteredData[0].genre && filteredData[0].before) {
                        if (
                          d.genre == filteredData[0].genre &&
                          parseInt(d.likelyDate) < filteredData[0].before
                        ) {
                          updatedFilteredData.push(d);
                        }
                      } else {
                        if (filteredData[0].genre && filteredData[0].after) {
                          if (
                            d.genre == filteredData[0].genre &&
                            parseInt(d.likelyDate) > filteredData[0].after
                          ) {
                            updatedFilteredData.push(d);
                          }
                        } else {
                          if (filteredData[0].before && filteredData[0].after) {
                            if (
                              parseInt(d.likelyDate) < filteredData[0].before &&
                              parseInt(d.likelyDate) > filteredData[0].after
                            ) {
                              updatedFilteredData.push(d);
                            }
                          } else {
                            if (filteredData[0].genre) {
                              if (d.genre == filteredData[0].genre) {
                                updatedFilteredData.push(d);
                              }
                            } else {
                              if (filteredData[0].title) {
                                if (d.title.includes(filteredData[0].title)) {
                                  updatedFilteredData.push(d);
                                }
                              } else {
                                if (filteredData[0].before) {
                                  if (
                                    parseInt(d.likelyDate) <
                                    filteredData[0].before
                                  ) {
                                    updatedFilteredData.push(d);
                                  }
                                } else {
                                  if (filteredData[0].after) {
                                    if (
                                      parseInt(d.likelyDate) >
                                      filteredData[0].after
                                    ) {
                                      updatedFilteredData.push(d);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //If the filtered data (play filter) is empty (i.e. user presses filter with no fields set), populate all data.

    if (
      !filteredData[0]["title"] &&
      !filteredData[0]["before"] &&
      !filteredData[0]["after"] &&
      !filteredData[0]["genre"]
    ) {
      updatedFilteredData = mainData;
    }

    setFilteredData(updatedFilteredData);
  };

  const removeLikes = (play) => {
    const temp = [...like];
    const index = temp.indexOf(play);
    temp.splice(index, 1);
    setLike(temp);
  };

  //If filtered data s not yet set, assign regular data to it.

  return (
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/default">
        <DefaultPage
          updateFilteredData={updateFilteredData}
          plays={filteredData}
          likedPlays={like}
          addToLike={addLikes}
          removeFromLike={removeLikes}
        />
      </Route>
    </main>
  );
}

export default App;