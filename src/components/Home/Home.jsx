import { Link } from "react-router-dom";
import styles from "../About/About.module.css";
export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <div className={styles.container}>
        <Link to="/">Click to view Main page</Link>
        <Link to="/about">Click to view our About page</Link>
        <Link to="/contact">Click to view our Contact page</Link>
      </div>
    </div>
  );
}
