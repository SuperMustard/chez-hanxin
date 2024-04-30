import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { Post } from "@prisma/client";

async function getData(slug: string): Promise<any> {
  const url: string = `${process.env.APIBASE_URL}/api/posts/${slug}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Cant fetch post!");
  }

  return res.json();
}

type searchParams = {
  slug: string;
};

export default async function Page({ params }: { params: searchParams }) {
  const { slug } = params;

  const data: Post = await getData(slug);
  const desc = data?.desc || "";
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data?.user?.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>21.04.2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.postContainer}>
          {data?.img && (
            <div className={styles.imageContainer}>
              <Image src={data?.img} alt="" fill className={styles.image} />
            </div>
          )}
          <div
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
          <div className={styles.commentContainer}>
            <Comments></Comments>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
