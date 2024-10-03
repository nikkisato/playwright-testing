import styles from './page.module.css';
import Navigation from '@/components/Navigation/Navigation';
import SkipLink from '@/components/SkipLink/SkipLink';

export default function Home() {
  return (
    <main
      data-testid="main"
      id="main"
      className={styles.main}
    >
      <SkipLink />
      <h1>Homepage Page</h1>
      <Navigation />
    </main>
  );
}
