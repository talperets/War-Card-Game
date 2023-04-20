import React from 'react'

export default function Score(props) {
  return (
    <div>
      <h1>{props.player.currentGame}</h1>
      <h2>{props.player.wins} - {props.player.losses}</h2>
      <button onClick={props.replay}>Again?</button>
    </div>
  )
}
