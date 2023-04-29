import React from 'react'

export default function GameTable(props) {
  return (
    
    <div style={{display: props.showTable}} className='table'>
      <h1>Score:</h1>
        {props.players.map(val=>{
            return <h3>{val.name} | {val.wins} - {val.losses}</h3>
        })}
    </div>
  )
}
