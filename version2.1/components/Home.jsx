import React, { useState } from "react";
import { Button } from "@mui/material";
import GameTable from "./GameTable";

export default function Home(props) {
  const [showTable, setShowTable] = useState("none");
  const [name, setName] = useState("");

  return (
    <div className="home-container">
      <h1>Ready for War?</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Your name"
      />
      <br style={{margin: '5px'}}/>
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
        <br style={{margin: '3px'}}/>
        <Button
          variant="contained"
          onClick={() => {
            showTable === "none" ? setShowTable("block") : setShowTable("none");
          }}
        >
          {showTable == 'none'? "Show": "Hide"} Table
        </Button>
      
      <GameTable showTable={showTable} players={props.players} />
    </div>
  );
}
