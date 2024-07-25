import styles from './page.module.css';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Homepage Page</h1>
      <Navigation />
    </main>
  );
}
