export type TGameTurn = {
  square: {
    row: number,
    col: number
  },
  player: string
}

export type TWinningCombination = {
  row: number,
  column: number
};

export type TPlayer = {
  X: string,
  O: string
}