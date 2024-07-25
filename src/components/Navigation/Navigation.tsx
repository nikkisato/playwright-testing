import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          data-testid="homepage-link"
          className={styles.link}
          href="/"
        >
          Home
        </a>
      </li>
      <li>
        <a
          data-testid="feature-link"
          className={styles.link}
          href="/feature"
        >
          Feature
        </a>
      </li>
      <li>
        <a
          data-testid="contact-link"
          className={styles.link}
          href="/contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
