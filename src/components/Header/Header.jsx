import { FaMedrt } from "react-icons/fa";
import { IconContext } from "react-icons";
import Theme from "../Theme/Theme";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className={styles.wrap}>
      <Nav />

      <div className={styles.containerHeader}>
        <h1 className={styles.headerTitle}>MEDICAL HELP</h1>
        <IconContext.Provider value={{ className: styles.headerIcon }}>
          <FaMedrt />
        </IconContext.Provider>
        <div>
          <span>Професійна допомога</span>
        </div>
        <Theme theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
