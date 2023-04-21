import React from 'react'

export default function GameTable(props) {
  return (
    <div style={{display: props.showTable}} className='table'>
        {props.players.map(val=>{
            return <h3 className='item'>{val.name} | {val.wins} - {val.losses}</h3>
        })}
    </div>
  )
}
