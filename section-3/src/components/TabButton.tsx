interface TabButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

export default function TabButton({children, onSelect, isSelected}: TabButtonProps) {  
  return <>
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  </>
}