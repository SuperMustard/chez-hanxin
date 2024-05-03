import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";

type PostDataString = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string | null;
  views: number;
  catSlug: string;
  userEmail: string;
};

type prop = {
  key: string;
  post: PostDataString;
};

function removeHTMLTags(str: string): string {
  return str.replace(/<[^>]+>/gi, "");
}

function Card({ post }: prop) {
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt=""
            fill
            className={styles.image}
            sizes="100vw"
          />
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
        <p className={styles.desc}>
          {removeHTMLTags(post.desc.substring(0, 60))}
        </p>
        <Link className={styles.link} href={`/posts/${post.slug}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
}

export default Card;
