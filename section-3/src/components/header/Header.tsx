import styles from './Header.module.css';
import { reactDescription } from '@/types/data';
import reactImg from '@/assets/react-core-concepts.png'


function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const desc = reactDescription[getRandomInt(reactDescription.length)];
  return (
    <header className={styles.header}>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{desc} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}