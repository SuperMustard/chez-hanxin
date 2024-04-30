import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";

type prop = {
  key: string;
  post: Post;
};

function Card({ post }: prop) {
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image src={post.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <p className={styles.desc}>{post.desc.substring(0, 60)}</p>
        <Link className={styles.link} href={`/posts/${post.slug}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
}

export default Card;
