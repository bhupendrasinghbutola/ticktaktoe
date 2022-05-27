import React from 'react'

const StatusMessage = ({winner,current}) => {
    const noMoveLeft= current.board.every(el =>el !== null);
  return (
    // const message= winner 
    // ? `Winner is ${winner}`
    // : `Next player is ${current.isXNext ? 'X':'O'}`;
    
<h2>
    {
        winner && `Winner is ${winner}`
    }
    {
        !winner && !noMoveLeft &&  `Next player is ${current.isXNext ? 'X':'O'}`
    }
    {
        !winner && noMoveLeft && 'X and O tied'
    }
</h2>

  )
}

export default StatusMessage