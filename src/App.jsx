import { useState } from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import Game from "./components/Game";
import Deck from "./classes/Deck";
import Player from "./classes/Player";
import Score from "./components/Score";
let computer, player, deck;
function App() {
  const [page, setPage] = useState(0);
  const initGame = (name) => {
    deck = new Deck();
    deck.initCards()
    let playerCards = [];
    let computerCards = [];
    for (let i = 0; i < 26; i++) {
      playerCards.push(deck.dealCards());
      computerCards.push(deck.dealCards());
    }
    player = new Player(name, playerCards);
    computer = new Player("Computer", computerCards);
    setPage(1)
  };
  const replay = () => {
    deck.cards = []
    deck.initCards()
    player.cards = []
    computer.cards = []
    for (let i = 0; i < 26; i++) {
      player.cards.push(deck.dealCards());
      computer.cards.push(deck.dealCards());
    }
    setPage(1)
  };
  const showPage = () => {
    switch (page) {
      case 1:
        return <Game next={setPage} player={player} computer={computer}/>;

      case 2:
        return <Score next={setPage} player={player} replay={replay}/>;

      default:
        return <Home next={setPage} initGame={initGame}/>;
    }
  };
  return <div className="App">{showPage()}</div>;
}

export default App;
