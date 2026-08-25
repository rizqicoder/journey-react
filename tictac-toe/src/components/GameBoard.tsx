import type { TGameTurn } from '@/types/data.type';
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

type GameBoardProps = {
  onSelectSquare: (row: number, col: number) => void,
  turns: TGameTurn[]
  // activePlayerSymbol: string
}
export default function GameBoard({ onSelectSquare, turns }: GameBoardProps) {
  const gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState<(string | null)[][]>(initialGameBoard);
  // const handleSelectSquare = (rowIndex: number, colIndex: number) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  return <>
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  </>
}