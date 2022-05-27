import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";
const New_Game=[{board:Array(9).fill(null),isXNext:true}];

const App=() =>{
    const [history,setHistory] = useState(New_Game);
//   const[isXNext,setIsXNext]=useState(false);
const [currentMove,setCurrentMove]= useState(0);
const current =history[currentMove];
console.log('history',history);

  const {winner,winningSquare}= calculateWinner(current.board);
//   console.log(winner);
// const message= winner 
// ? `Winner is ${winner}`
// : `Next player is ${current.isXNext ? 'X':'O'}`;
  
//   console.log('board rerender');
  const handleSquareClick=(position)=>{
     if(current.board[position] || winner){
       return;
     }



    setHistory((prev)=>{
        const last= prev[prev.length-1];
      const newBoard= last.board.map((square,pos)=>{
        if(pos === position){
          return last.isXNext ?'X':'O';
        }
        return square;


      })
      return prev.concat({board:newBoard,isXNext:!last.isXNext})

    })
// setIsXNext((prev)=> !prev);
setCurrentMove(prev=>prev +1);
  }
const moveTo =(move)=>{
  setCurrentMove(move);

}
const onNewGame = ()=>{
  setHistory(New_Game)
  setCurrentMove(0)
}

return (
<div className="app">
    <h1>Tick Tack Toe</h1>
    {/* <h2>{message}</h2> */}
    <StatusMessage winner={winner} current={current} />
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare} />
    <button type="button"onClick={onNewGame}>Start new Game</button>
    <History history={history}  moveTo={moveTo} currentmove={currentMove} />
   </div>
   
   
);
};



export default App;
