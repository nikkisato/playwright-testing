import styles from '../page.module.css';
import Navigation from '../../components/Navigation/Navigation';
import SkipLink from '../..//components/SkipLink/SkipLink';

export default function Contact() {
  return (
    <main
      data-testid="main"
      id="main"
      className={styles.main}
    >
      <SkipLink />
      <h1>Contact Page</h1>
      <Navigation />
    </main>
  );
}
