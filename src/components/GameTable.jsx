import React, { useState, useEffect } from "react";

export default function GameTable(props) {
  const [SortedArr, setSortedArr] = useState([...props.players]);
  useEffect(() => {
    setSortedArr(
      SortedArr.sort((a, b) => {
        return b.wins - a.wins;
      })
    );
  });

  return (
    <table style={{ display: props.showTable }} className="table">
      <th>Score:</th>
      {SortedArr.map((val) => {
        return (
          <tr>
            <td>{val.name}</td> <td>{val.wins}</td> <td>{val.losses}</td>
          </tr>
        );
      })}
    </table>
  );
}
