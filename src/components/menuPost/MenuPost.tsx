import { ScriptProps } from "next/script";
import styles from "./menuPost.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

async function getData(): Promise<any> {
  const url: string = `${process.env.APIBASE_URL}/api/mostviewed`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Cant fetch mostviewed!");
  }

  return res.json();
}

async function MenuPost() {
  const data = await getData();

  if (!data) {
    return <></>;
  }

  return (
    <>
      <div className={styles.items}>
        {data?.map((item: PostWithUser) => (
          <Link
            href={`/posts/${item.slug}`}
            className={styles.item}
            key={item.id}
          >
            {item.img && (
              <div className={styles.imageContainer}>
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className={styles.image}
                  sizes="20vw"
                ></Image>
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[item.catSlug]}`}>
                {item.catSlug}
              </span>
              <h4 className={styles.postTitle}>{item.title}</h4>
              <div className={styles.detail}>
                <span className={styles.username}>{item.user.name}</span>
                <span className={styles.date}>
                  {" "}
                  - {item?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MenuPost;
