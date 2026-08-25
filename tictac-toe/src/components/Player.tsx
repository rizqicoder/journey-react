import { useState } from 'react';
type PlayerProps = {
  initialName: string,
  symbol: string,
  isActive: boolean
};
export default function Player({ initialName, symbol, isActive }: PlayerProps) {
  const [playerName, setPlayerName] = useState<string>(initialName);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  }
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let textButton = 'Edit';
  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />
    textButton = 'Save';
  }
  return <>
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{textButton}</button>
    </li>
  </>
}