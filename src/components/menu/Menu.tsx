import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";

function Menu() {
  return (
    <div className={styles.container}>
      <h3>Most Popular</h3>
      <MenuPost withImage={true}></MenuPost>

      {/* <div  className={styles.tagContainer}>
        <h3>Tags</h3>
        <div className={styles.tags}>
          <Link href="/" className={styles.tag}>
            React
          </Link>
          <Link href="/" className={styles.tag}>
            Language
          </Link>
          <Link href="/" className={styles.tag}>
            SQL
          </Link>
          <Link href="/" className={styles.tag}>
            React
          </Link>
          <Link href="/" className={styles.tag}>
            React
          </Link>
          <Link href="/" className={styles.tag}>
            React
          </Link>
          <Link href="/" className={styles.tag}>
            React
          </Link>
          <Link href="/" className={styles.tag}>
            React
          </Link>
          <Link href="/" className={styles.tag}>
            React
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Menu;
