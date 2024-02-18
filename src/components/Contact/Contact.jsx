import React from "react";
import { Link } from "react-router-dom";
import styles from '../About/About.module.css';

export default function Contact() {
  return (
    <div>
      <h1>This is the contact page</h1>
      <div className={styles.container}>
      <Link to="/">Click to view Main page</Link>
      <Link to="/about">Click to view our About page</Link>
      <Link to="/home">Click to view our Home page</Link>
    </div>
    </div>
  );
}
