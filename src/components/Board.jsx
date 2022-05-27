import React from 'react';
import Square from './Square';
// import "./Square.style.css";

const Board = ({board,handleSquareClick,winningSquare}) => {
    const renderSquare=(position)=>{
      const isWinningSquare= winningSquare.includes(position);

    return <Square  value={board[position]} onClick={()=>   handleSquareClick(position)
    }
    isWinningSquare={isWinningSquare}
      / >  
    
  }
 
 {/* console.log(board); */}

  return (
    <div className='board'>
       
<div className='board-row'>
  {renderSquare(0)}
  {renderSquare(1)}
  {renderSquare(2)}
{/* <Square  value={board[0]}  / >  
<Square value={board[1]}/>
<Square value={board[2]}/> */}
{/* <Square><p>hllo</p></Square> */}

</div>
<div className='board-row'>
{renderSquare(3)}
{renderSquare(4)}
{renderSquare(5)}


{/* <Square value={board[4]} />
<Square value={board[5]}/>
<Square value={board[6]}/> */}
</div>
<div className='board-row'>
{renderSquare(6)}
{renderSquare(7)}
{renderSquare(8)}




       {/* <Square value={board[7]}/>
       <Square value={board[8]}/>
       <Square value={board[9]}/> */}
</div>
    </div>
  )
}

export default Board