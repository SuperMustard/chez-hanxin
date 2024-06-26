import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import { Post } from "@prisma/client";
import Card from "../card/Card";

async function getData(page: number, cat: string, tag: string): Promise<any> {
  const url: string = `${process.env.APIBASE_URL}/api/posts?page=${page}&cat=${cat}&tag=${tag}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Cant fetch Categories!");
  }

  return res.json();
}

type prop = {
  page: number;
  cat: string;
  tag: string;
};

async function CardList({ page, cat, tag }: prop) {
  const { posts, count } = await getData(page, cat, tag);

  const hasPrev = parseInt(process.env.POST_PER_PAGE || "4") * (page - 1) > 0;
  const hasNext =
    parseInt(process.env.POST_PER_PAGE || "4") * (page - 1) +
      parseInt(process.env.POST_PER_PAGE || "4") <
    count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.post}>
        {posts?.map((item: PostDataString) => (
          <Card post={item} key={item.id}></Card>
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}></Pagination>
    </div>
  );
}

export default CardList;
