import React, { useState } from "react";

import { Button } from "@mui/material";
import Card from "./Card";
import GameTable from "./GameTable";
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
      if (props.player.games == 26) {
        props.player.games = 1
      } else{
        props.player.games++
      }
      if (computerCnt > playerCnt) {
        props.player.losses++;
        props.computer.wins++;
        props.player.currentGame = "Lose";
      } else if (computerCnt < playerCnt) {
        props.player.wins++;
        props.computer.losses++;
        props.player.currentGame = "Win";
      } else {
        props.player.currentGame = "Draw";
      }
      props.next(2);
    }
  };
  return (
    <div className="parent">
      <div className="title">
      <h1>{props.computer.name}</h1>
      <h1>Score:</h1>
      </div>
      <div className="game-container">
      <div className="gamenum">
      
        <div style={{left: '470px', position: 'absolute', bottom: '350px'}}>
        <h2 >N.{props.player.games}</h2>
        <h2>{props.computer.wins} - {props.computer.losses}</h2>
        </div>
      </div>
      <div className="deck">
        
        <Card cardIndex={props.computer.cards[index]} />
        <Card cardIndex={props.player.cards[index]} />
        <h1>{props.player.name}</h1>
        <Button variant="contained" onClick={play}>
          Next
        </Button>
      </div>
      <div style={{right: '440px', position: 'absolute', bottom: '400px'}}>

      <GameTable players={props.players} />
      </div>
    </div>
    </div>
  );
}
