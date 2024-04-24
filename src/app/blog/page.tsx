import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

type Props = {};

export default function BlogPage({}: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
}
