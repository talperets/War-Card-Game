import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.cardIndex}</h1>
    </div>
  );
}
