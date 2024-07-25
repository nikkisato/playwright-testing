import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          className={styles.link}
          href="/"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href="/feature"
        >
          Feature
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href="/contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
