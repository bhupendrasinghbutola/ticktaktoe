import React from 'react';
import Square from './Square';
// import "./Square.style.css";

const Board = () => {
  return (
    <div className='board'>
       
<div className='board-row'>
<Square  value={1} / >  
<Square value={2}/>
<Square value={3}/>
{/* <Square><p>hllo</p></Square> */}

</div>
<div className='board-row'>
<Square value={0} />
<Square value={5}/>
<Square value={6}/>
</div>
<div className='board-row'>
       <Square value={7}/>
       <Square value={8}/>
       <Square value={9}/>
</div>
    </div>
  )
}

export default Board