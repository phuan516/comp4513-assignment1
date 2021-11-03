import React from "react";
import Details from "./DetailsTab";
import Characters from "./CharactersTab";
import Text from "./TextTab";

const Tabs = (props) => {

    const handleDetailsTab = () => {
        props.tabIsText("Details");
    }

    const handleCharactersTab = () => {
        props.tabIsText("Characters");
    }

    const handleTextTab = () => {
        props.tabIsText("Text");

    }

    if (props.current.filename === "") {
        return (
            <div className="Tabs">
                <ul className="nav">
                    <li className={props.tab === "Details" ? "active" : ""}>Details</li>
                </ul>
                <div className="outlet">
                   <Details current={props.current}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className="Tabs">
                <ul className="nav">
                    <li className={props.tab === "Details" ? "active" : ""} onClick={handleDetailsTab}> Details</li>
                    <li className={props.tab === "Characters" ? "active" : ""} onClick={handleCharactersTab}> Characters</li>
                    <li className={props.tab === "Text" ? "active" : ""} onClick={handleTextTab}> Text</li>
                </ul>
                <hr></hr>
                <div className="outlet">
                    { props.tab === "Details" ? <Details current={props.current}/> 
                    : props.tab === "Characters" ? <Characters current={props.current} playInfo={props.playInfo}/> 
                    : <Text current={props.current} playInfo={props.playInfo} currentAct={props.currentAct}
                    currentScene={props.currentScene} currentSpeaker={props.currentSpeaker} highlightedWord={props.highlightedWord}/>}
                </div>
            </div>
        );
    }
};

/* From https://blog.logrocket.com/how-to-build-tab-component-react/*/

export default Tabs;

