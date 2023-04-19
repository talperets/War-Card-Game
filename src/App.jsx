import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import Score from "./components/Score";

function App() {
  const [page, setPage] = useState(0);
  const showPage = () => {
    switch (page) {
      case 1:
        return <Game next={setPage} />;

      case 2:
        return <Score next={setPage} />;

      default:
        return <Home next={setPage} />;
    }
  };
  return <div className="App">{showPage()}</div>;
}

export default App;
