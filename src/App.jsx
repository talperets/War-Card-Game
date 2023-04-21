import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import Deck from "./classes/Deck";
import Player from "./classes/Player";
import Score from "./components/Score";

let computer, player, deck;
function App() {
  
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(0);
  const initGame = (name) => {
    deck = new Deck();
    deck.initCards();
    let playerCards = [];
    let computerCards = [];
    for (let i = 0; i < 26; i++) {
      playerCards.push(deck.dealCards());
      computerCards.push(deck.dealCards());
    }
    player = new Player(name, playerCards);
    players.forEach((val) => {
      if (val.name == player.name) {
        player = val;
      }
    });
    computer = new Player("Computer", computerCards);
    setPage(1);
  };
  const savePlayers = () => {
    let exist = false;
    players.forEach((val) => {
      if (val.name === player.name) {
        val.wins = player.wins;
        val.losses = player.losses;
        exist = true;
      }
    });
    if (!exist) {
      setPlayers([...players, player]);
    }
    setPage(0);
  };
  const replay = () => {
    deck.cards = [];
    deck.initCards();
    player.cards = [];
    computer.cards = [];
    for (let i = 0; i < 26; i++) {
      player.cards.push(deck.dealCards());
      computer.cards.push(deck.dealCards());
    }
    
    setPage(1);
  };
  const showPage = () => {
    switch (page) {
      case 1:
        return (
          <Game
            next={setPage}
            player={player}
            players={players}
            computer={computer}
          />
        );

      case 2:
        return (
          <Score
            next={setPage}
            savePlayers={savePlayers}
            player={player}
            replay={replay}
          />
        );

      default:
        return <Home next={setPage} players={players} initGame={initGame} />;
    }
  };
  return <div className="App">{showPage()}</div>;
}

export default App;
