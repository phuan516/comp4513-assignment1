import React, { useState } from "react";
import Details from "./DetailsTab";
import Characters from "./CharactersTab";
import Text from "./TextTab";

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState("Details");

    /*
    const onClickChange = (e) => {
        var tab = e.target.innerHTML;
        setActiveTab(tab);
    }
    */

    const handleDetailsTab = () => {
        setActiveTab("Details");
        props.tabIsText("Details");
    }

    const handleCharactersTab = () => {
        setActiveTab("Characters");
        props.tabIsText("Characters");
    }

    const handleTextTab = () => {
        setActiveTab("Text");
        props.tabIsText("Text");

    }
    

    if (props.current.filename === "") {
        return (
            <div className="Tabs">
                <ul className="nav">
                    <li className={activeTab === "Details" ? "active" : ""}>Details</li>
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
                    <li className={activeTab === "Details" ? "active" : ""} onClick={handleDetailsTab}> Details</li>
                    <li className={activeTab === "Characters" ? "active" : ""} onClick={handleCharactersTab}> Characters</li>
                    <li className={activeTab === "Text" ? "active" : ""} onClick={handleTextTab}> Text</li>
                </ul>

                <div className="outlet">
                    { activeTab === "Details" ? <Details current={props.current}/> : activeTab === "Characters" ? <Characters current={props.current} playInfo={props.playInfo}/> : 
                    activeTab === "Text" ? <Text current={props.current} playInfo={props.playInfo} currentAct={props.currentAct}
                    currentScene={props.currentScene} currentSpeaker={props.currentSpeaker} highlightedWord={props.highlightedWord}/> : "" }
                </div>
            </div>
        );
    }
};

/* From https://blog.logrocket.com/how-to-build-tab-component-react/*/

export default Tabs;

