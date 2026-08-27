import type { TGameTurn } from "@/types/data.type";
type LogProps = {
  turns: TGameTurn[]
};

export default function Log({ turns }: LogProps) {
  return <ol id="log">
    {turns.map((turn) => (
      <li key={`${turn.square.row}_${turn.square.col}`}>
        {turn.player} played at {turn.square.row}, {turn.square.col}
      </li>
    ))}
  </ol>
}