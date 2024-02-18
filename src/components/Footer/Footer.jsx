import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.footerContainer}>
        <span>&#169; Всі права захищено</span>
      </div>
    </footer>
  );
}
