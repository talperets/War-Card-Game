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
        return <h2>King</h2>;
      case 12:
        return <h2>Queen</h2>;
      case 11:
        return <h2>Jack</h2>;
      case 1:
        return <h2>Ace</h2>;
      default:
        return <h2>{props.cardIndex}</h2>;
    }
  };
  const typeIcons = () => {
    switch (props.cardType) {
      case 0:
        return <h2>Clover</h2>;
      case 1:
        return <h2>Heart</h2>;
      case 2:
        return <h2>Leaf</h2>;
      case 3:
        return <h2>Diamond</h2>;
    }
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      {typeIcons()}
      {cardIcons()}
    </div>
  );
}
