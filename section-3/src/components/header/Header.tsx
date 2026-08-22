import styles from './Header.module.css';

interface HeaderProps {
  desc: string;
  reactImg: string;
}

export default function Header ({desc, reactImg}: HeaderProps) { 
  return (
    <header className={styles.header}>
      <img src={reactImg} alt="Stylized atom"  />
      <h1>React Essentials</h1>
      <p>{desc} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}