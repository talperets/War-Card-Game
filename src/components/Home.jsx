import React, { useState } from "react";
import { Button } from "@mui/material";
import GameTable from "./GameTable";

export default function Home(props) {
  const [showTable, setShowTable] = useState('none')
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Ready for War?</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Your name"
      />
      <Button
        variant="contained"
        onClick={() => {
          name.length === 0
            ? alert("Please enter your name")
            : props.initGame(name);
        }}
      >
        
        Next
      </Button>
      <div>
      <Button variant="contained" onClick={()=>{
        if (showTable == 'none') {
          setShowTable('block')
        } else {
          setShowTable('none')
        }
      }}>Show Table</Button>
      </div>
      <GameTable showTable={showTable} players={props.players}/>
    </div>
  );
}
