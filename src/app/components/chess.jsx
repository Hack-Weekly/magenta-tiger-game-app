"use client";
import {useState,useEffect} from 'react'
import { Chess } from 'chess.js'
import Script from 'next/script'
import  Chessboard  from 'chessboardjsx';

function Top() {
    return (
        <center><h3>This is a chess game</h3></center>
    )
}
//Chess component
//Code from: https://github.com/Clariity/react-chessboard
function Chessy(){
    const [game, setGame] = useState(new Chess());
    useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
          (newPos) => setPosition(newPos),
          console.error
        );
    }, []);
    useEffect(()=>{
      setGame(new Chess())
    }, [])

    function makeAMove(move) {
      const gameCopy= new Chess();
      gameCopy.loadPgn(game.pgn());
      // console.log(move);
      // console.log(move.from.sourceSquare);
      move = {
        from: move.from.sourceSquare,
        to: move.from.targetSquare,
        promotion: 'q'
      };
      // console.log(move)
      var result = null;
      try{
        result = gameCopy.move(move);

      }
      catch(err)
      {
        console.log('Invalid move!!');
        result = null;
        
      }
      
      console.log(result)
      if (result ==null)
      {
        return null
      }
      setGame(gameCopy);
      return result; // null if the move was illegal, the move object if the move was legal
    }
  
    function makeRandomMove() {
      const possibleMoves = game.moves();
      if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return; // exit if the game is over
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      makeAMove(possibleMoves[randomIndex]);
    }
  
    function onDropy(sourceSquare, targetSquare) {
      const move = makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to a queen for example simplicity
      });
      console.log(move)
  
      // illegal move
      if (move === null) return false;
      // setTimeout(makeRandomMove, 200);
      return true;
    }
  
    return <Chessboard position={game.fen()} onDrop={onDropy} />;
  }

export default Chessy