import React from "react";
import Details from "./DetailsTab";
import Characters from "./CharactersTab";
import Text from "./TextTab";

const Tabs = (props) => {
<<<<<<< HEAD
=======
    const [activeTab, setActiveTab] = useState("Details");

    /*
    const onClickChange = (tab) => {
        console.log(tab);
        setActiveTab(tab);
        props.tabIsText(tab);
    }
    */
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789

    
    const handleTextTab = () => {
        setActiveTab("Text");
        props.tabIsText("Text");
        console.log(activeTab);
    }

    const handleDetailsTab = () => {
        props.tabIsText("Details");
        console.log(activeTab);
    }

    const handleCharactersTab = () => {
        props.tabIsText("Characters");
        console.log(activeTab);
    }

<<<<<<< HEAD
    const handleTextTab = () => {
        props.tabIsText("Text");

    }
=======
    function outlet () {
        if (activeTab === "Details") {
            <Details current={props.current}/>
        } else if (activeTab === "Characters") {
            <Characters current={props.current} playInfo={props.playInfo}/>
        } else if (activeTab === "Text") {
            <Text current={props.current} playInfo={props.playInfo} currentAct={props.currentAct}
            currentScene={props.currentScene} currentSpeaker={props.currentSpeaker} highlightedWord={props.highlightedWord}/>
        }
    }
    
     console.log(activeTab);
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789

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
<<<<<<< HEAD
                    { props.tab === "Details" ? <Details current={props.current}/> 
                    : props.tab === "Characters" ? <Characters current={props.current} playInfo={props.playInfo}/> 
                    : <Text current={props.current} playInfo={props.playInfo} currentAct={props.currentAct}
                    currentScene={props.currentScene} currentSpeaker={props.currentSpeaker} highlightedWord={props.highlightedWord}/>}
=======
                    { activeTab === "Details" ? <Details current={props.current}/> :
                    activeTab === "Characters" ? <Characters current={props.current} playInfo={props.playInfo}/>:
                    <Text current={props.current} playInfo={props.playInfo} currentAct={props.currentAct}
            currentScene={props.currentScene} currentSpeaker={props.currentSpeaker} highlightedWord={props.highlightedWord}/>
                    }
>>>>>>> 54bbd8f6d344da9f50c33f561c0f9930be386789
                </div>
            </div>
        );
    }
};

/* From https://blog.logrocket.com/how-to-build-tab-component-react/*/

export default Tabs;

