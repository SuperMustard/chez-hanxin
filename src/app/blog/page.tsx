import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function BlogPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page || "1");
  const cat = searchParams.cat || "";
  const tag = searchParams.tag || "";
  const tagName = searchParams.tagName || "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {cat}
        {tagName} Blog
      </h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} tag={tag}></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
}
