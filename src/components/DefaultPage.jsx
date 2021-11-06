import React from "react";
import HeaderBar from "./HeaderBar";
import FavoriteBox from "./FavoritesBox";
import FilterBox from "./FilterBox";
import ListBox from "./ListBox";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


const DefaultPage = (props) => {

  //check if matches are found from filter.
  const [matchesFound, setMatchesFound] = useState(true);
  const location = useLocation();
  const {title} = location.state;
  const updateFilteredData = (filter) => {   
  let updatedFilteredData = [];
  
  if (Object.keys(filter).length === 0) {

      updatedFilteredData = [...props.mainData];
  
  } else {
  
    //Must convert to lower case to obtain all possible matches for title, before initiating filter.
    if(filter.title) {
        filter.title = filter.title.toLowerCase();
    }

    //Loop through main data, and contrast with each filter possibility, to render all possible matches.
    //Checks if each "filter" state object property is set, and then it can verify whether it constains a match.
    props.mainData.forEach(d => {

    if (filter.title && filter.genre && filter.before && filter.after) {
        if (d.title.toLowerCase().includes(filter.title) && d.genre === filter.genre && d.likelyDate < filter.before && d.likelyDate > filter.after) {
            updatedFilteredData.push(d);
          }
        } else {
          if (filter.title && filter.genre && filter.before) {
            if (d.title.toLowerCase().includes(filter.title) && d.genre === filter.genre && d.likelyDate < filter.before) {
              updatedFilteredData.push(d);
            }
          } else {
            if (filter.title && filter.before && filter.after) {
              if (d.title.toLowerCase().includes(filter.title) && d.likelyDate < filter.before && d.likelyDate > filter.after) {
                updatedFilteredData.push(d);
              }
            } else {
              if (filter.title && filter.after && filter.genre) {
                if (d.title.toLowerCase().includes(filter.title) && d.likelyDate > filter.after && d.genre === filter.genre) {
                  updatedFilteredData.push(d);
                }
              } else {
                if (filter.genre && filter.before && filter.after) {
                  if (d.genre === filter.genre && d.likelyDate < filter.before && d.likelyDate > filter.after) {
                    updatedFilteredData.push(d);
                  }
                } else {
                  if (filter.title && filter.genre) {
                    if (d.title.toLowerCase().includes(filter.title) && d.genre === filter.genre) {
                      updatedFilteredData.push(d);
                    }
                  } else {
                    if (filter.title && filter.after) {
                      if (d.title.toLowerCase().includes(filter.title) && d.likelyDate > filter.after) {
                        updatedFilteredData.push(d);
                      }
                    } else {
                      if (filter.title && filter.before) {
                        if (d.title.toLowerCase().includes(filter.title) && d.likelyDate < filter.before) {
                          updatedFilteredData.push(d);
                        }
                      } else {
                        if (filter.genre && filter.before) {
                          if (d.genre === filter.genre && d.likelyDate < filter.before) {
                              updatedFilteredData.push(d);
                          }
                        } else {
                          if (filter.genre && filter.after) {
                            if (d.genre === filter.genre && d.likelyDate > filter.after) {
                                updatedFilteredData.push(d);
                            }
                          } else {
                            if (filter.before && filter.after) {
                              if (d.likelyDate < filter.before && d.likelyDate > filter.after) {
                                  updatedFilteredData.push(d);
                              }
                            } else {
                              if (filter.genre) {
                                if (d.genre === filter.genre) {
                                    updatedFilteredData.push(d);
                                }
                              } else {
                                if (filter.title) {
                                  if (d.title.toLowerCase().includes(filter.title)) {
                                      updatedFilteredData.push(d);
                                  }
                                } else {
                                  if (filter.before) {                                  
                                    if (d.likelyDate < filter.before) {
                                        updatedFilteredData.push(d);
                                    }
                                  } else {
                                    if (filter.after) {
                                      if (d.likelyDate > filter.after) {
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
      });
    }  

      if (updatedFilteredData.length === 0) {

        setMatchesFound(false);
      } else {
        setMatchesFound(true);
      }

      props.setFilteredData(updatedFilteredData);
    };
  
  
  return (
    <div>
      <HeaderBar />
      <FavoriteBox
        plays={props.likedPlays}
        removeFromLike={props.removeFromLike}
      />
      <FilterBox updateFilteredData={updateFilteredData} title = {title} matchesFound = {matchesFound}/>
      <ListBox plays={props.plays} addToLike={props.addToLike} removeFromLike={props.removeFromLike} updateCurrent={props.updateCurrent}/>
    </div>
  );
};

export default DefaultPage;