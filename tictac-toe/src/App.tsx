import './App.css';
import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

import type { TGameTurn } from "@/types/data.type";

function App() {
  const [gameTurns, setGameTurns] = useState<TGameTurn[]>([]);
  const [activePlayer, setActivePlayer] = useState<string>('X');
  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer(prevActivePlayer => prevActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurn => {
      let currentPlayer = 'X';
      if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  )
}

export default App
