import HomePage from "./components/HomePage";
import DefaultPage from "./components/DefaultPage";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/default" exact component={DefaultPage} />
    </main>
  );
}

export default App;
