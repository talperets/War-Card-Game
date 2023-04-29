import React, { useState, useEffect } from "react";

export default function Card(props) {
  const [color, setColor] = useState("card");
  useEffect(() => {
    if (props.cardType == 1 || props.cardType == 3) {
      setColor("crimson");
    } else if (props.cardType == 2) {
      setColor("greenyellow");
    } else {
      setColor("lightsteelblue");
    }
  }, [props.cardType]);
  const cardIcons = () => {
    switch (props.cardIndex) {
      case 13:
        return <img src="src/icons/chess-king-solid.svg" alt="" />;
      case 12:
        return <img src="src/icons/chess-queen-solid.svg" alt="" />;
      case 11:
        return <h1>J</h1>;
      case 1:
        return <h1>A</h1>;
      default:
        return <h1>{props.cardIndex}</h1>;
    }
  };
  const typeIcons = () => {
    switch (props.cardType) {
      case 0:
        return <img width="30px" src="src/icons/clover-solid.svg" alt="" />;
      case 1:
        return <img width="30px" src="src/icons/heart-solid.svg" alt="" />;
      case 2:
        return <img width="30px" src="src/icons/leaf-solid.svg" alt="" />;
      case 3:
        return <img width="30px" src="src/icons/diamond-solid.svg" alt="" />;
    }
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      {typeIcons()}
      {cardIcons()}
    </div>
  );
}
