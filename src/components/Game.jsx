import React, { useState } from "react";
import { Button } from "@mui/material";
let computerCnt = 0,
  playerCnt = 0;
export default function Game(props) {
  const [index, setIndex] = useState(0);
  const play = () => {
    if (props.computer.cards[index] > props.player.cards[index]) {
      computerCnt++;
    } else if (props.computer.cards[index] < props.player.cards[index]) {
      playerCnt++;
    }
    setIndex(index + 1);
    if (index === 25) {
      if (computerCnt > playerCnt) {
        props.player.losses++;
        props.computer.wins++;
        props.player.currentGame = "Lose";
      } else if (computerCnt < playerCnt) {
        props.player.wins++;
        props.computer.losses++;
        props.player.currentGame = "Win";
      } else{
        props.player.currentGame = "Draw";
      }
      props.next(2)
    }
  };
  return (
    <div className="deck">
      <h1>{props.computer.name}</h1>
      <div className="card">
        <h1>{props.computer.cards[index]}</h1>
      </div>
      <div className="card">
        <h1>{props.player.cards[index]}</h1>
      </div>
      <h1>{props.player.name}</h1>
      <Button variant="contained" onClick={play}>Next</Button>
    </div>
  );
}
