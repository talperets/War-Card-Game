import React, { useState } from "react";

import { Button } from "@mui/material";
import Card from "./Card";
import GameTable from "./GameTable";
let computerCnt = 0,
  playerCnt = 0;
export default function Game(props) {
  const [index, setIndex] = useState(0);
  const play = () => {
    if (props.computer.cards[index].number > props.player.cards[index].number) {
      computerCnt++;
    } else if (props.computer.cards[index].number < props.player.cards[index].number) {
      playerCnt++;
    }
    setIndex(index + 1);
    if (index === 25) {
      if (props.player.games == 26) {
        props.player.games = 1;
      } else {
        props.player.games++;
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
      props.savePlayers()
      props.next(2);
    }
  };
  return (
    <div className="parent">
      <div>
        <h1>{props.computer.name}</h1>
        <h2>N.{props.player.games}</h2>
        <h2>
          {props.computer.wins} - {props.computer.losses}
        </h2>
      </div>
      <div className="game-container">
        <div className="gamenum"></div>
        <div className="deck">
          <Card cardIndex={props.computer.cards[index].number } cardType={props.computer.cards[index].type}/>
          <Card cardIndex={props.player.cards[index].number} cardType={props.player.cards[index].type} />
          <h1>{props.player.name}</h1>
          <Button variant="contained" onClick={play}>
            Next
          </Button>
        </div>
        
        
      </div>
        <GameTable players={props.players} />
    </div>
  );
}
