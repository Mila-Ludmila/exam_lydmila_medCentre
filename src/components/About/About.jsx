import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <h1>This is the about page</h1>
      <div className={styles.container}>
        <Link to="/">Click to view Main page</Link>
        <Link to="/home">Click to view our Home page</Link>
        <Link to="/contact">Click to view our Contact page</Link>
      </div>
    </div>
  );
}
