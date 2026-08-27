import type { TGameTurn } from '@/types/data.type';


type GameBoardProps = {
  onSelectSquare: (row: number, col: number) => void,
  boards: (string | null)[][]
  // activePlayerSymbol: string
}
export default function GameBoard({ onSelectSquare, boards }: GameBoardProps) {

  return <>
    <ol id='game-board'>
      {boards.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  </>
}