import React, { useState } from "react";
import { Button } from "@mui/material";

export default function Home(props) {
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
    </div>
  );
}
