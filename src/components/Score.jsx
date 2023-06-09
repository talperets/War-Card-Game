import React from "react";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
export default function Score(props) {
  const checkScore = () => {
    switch (props.player.currentGame) {
      case "Win":
        return <h1 style={{color: 'green'}}>{props.player.currentGame}</h1>;
      case "Lose":
        return <h1 style={{color: 'red'}}>{props.player.currentGame}</h1>;
      default:
        return <h1 style={{color: 'blue'}}>{props.player.currentGame}</h1>;
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={()=>props.next(0)}>
        <CloseIcon/>
      </Button>
      {checkScore()}
      <h2>
        {props.player.wins} - {props.player.losses}
      </h2>
      <Button variant="contained" onClick={props.replay}>Again?</Button>
    </div>
  );
}
