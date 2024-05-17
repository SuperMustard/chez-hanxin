import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPost from "../menuPost/MenuPost";
import { Tag } from "@prisma/client";

async function getTags(): Promise<any> {
  const url: string = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/tags`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  return res.json();
}

type tag = {
  id: string;
  name: string;
  label: string;
};

async function Menu() {
  let tags: tag[] = [];
  await getTags().then((data) => {
    let tagArray: tag[] = data?.map((tag: Tag) => {
      let newTag: tag = {
        id: tag.id,
        name: tag.name,
        label: tag.label,
      };

      return newTag;
    });

    tags = tagArray;
  });

  return (
    <div className={styles.container}>
      <h3>Most Popular</h3>
      <MenuPost></MenuPost>

      <div className={styles.tagContainer}>
        <h3>Tags</h3>
        <div className={styles.tags}>
          {tags.map((tag) => {
            return (
              <Link
                href={`/blog?cat=&tag=${tag.id}&tagName=${tag.label}`}
                className={styles.tag}
                key={tag.name}
              >
                {tag.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
