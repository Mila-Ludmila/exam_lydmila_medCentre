import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul className="d-flex gap-3">
        <li key="main">
          <Link to="/">Main</Link>
        </li>
        <li key="home">
          <Link to="/home">Home</Link>
        </li>
        <li key="about">
          <Link to="/about">About</Link>
        </li>
        <li key="contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
