import React, { useState } from "react";
import { Button } from "@mui/material";
import Card from "./Card";
let computerCnt = 0,
  playerCnt = 0;
export default function Game(props) {
  const [index, setIndex] = useState(0);
  const [winColor, setWinColor] = useState([])
  const play = () => {
    if (props.computer.cards[index].number > props.player.cards[index].number) {
      setWinColor(['green', ''])
      computerCnt++;
      
    } else if (props.computer.cards[index].number < props.player.cards[index].number) {
      setWinColor(['', 'green'])
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
      computerCnt = 0
      playerCnt = 0
      props.next(2);
    }
  };
  return (
    <div className="parent">
      
        <h2>{props.computer.name}  N.{props.player.games}</h2>
        <h2 style={{color: winColor[0]}}>
          {computerCnt}
        </h2>
      
      <div className="game-container">
        <div className="deck">
          <Card cardIndex={props.computer.cards[index].number } cardType={props.computer.cards[index].type}/>
          <Card cardIndex={props.player.cards[index].number} cardType={props.player.cards[index].type} />
          <h2>{props.player.name}</h2>
          <h2 style={{color: winColor[1]}}>{playerCnt}</h2>
          <Button variant="contained" onClick={play}>
            Next
          </Button>
        </div>
        
        
      </div>
    </div>
  );
}
