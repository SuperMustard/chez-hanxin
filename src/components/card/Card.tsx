import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post, Tag } from "@prisma/client";

type prop = {
  key: string;
  post: PostDataString;
};

function removeHTMLTags(str: string): string {
  return str.replace(/<[^>]+>/gi, "");
}

function removeMarkdownTags(markdown: string): string {
  // Replace bold text with plain text
  markdown = markdown.replace(/\*\*(.+?)\*\*/g, "");

  // Replace italicized text with plain text
  markdown = markdown.replace(/_(.+?)_/g, "");

  // Replace strikethrough text with plain text
  markdown = markdown.replace(/~~(.+?)~~/g, "");

  // Remove inline code blocks
  markdown = markdown.replace(/`(.+?)`/g, "");

  // Remove code blocks
  markdown = markdown.replace(/```[\s\S]*?```/g, "");

  // Remove links
  markdown = markdown.replace(/\[(.+?)\]\((.+?)\)/g, "");

  // Remove images
  markdown = markdown.replace(/!\[(.+?)\]\((.+?)\)/g, "");

  // Remove headings
  markdown = markdown.replace(/^#+\s+(.+?)\s*$/gm, "");
  markdown = markdown.replace(/^\s*=+\s*$/gm, "");
  markdown = markdown.replace(/^\s*-+\s*$/gm, "");

  // Remove blockquotes
  markdown = markdown.replace(/^\s*>\s+(.+?)\s*$/gm, "");

  // Remove lists
  markdown = markdown.replace(/^\s*[\*\+-]\s+(.+?)\s*$/gm, "");
  markdown = markdown.replace(/^\s*\d+\.\s+(.+?)\s*$/gm, "");

  // Remove horizontal lines
  markdown = markdown.replace(/^\s*[-*_]{3,}\s*$/gm, "");

  return markdown;
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
            priority={true}
            sizes="100vh"
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -
          </span>
          <span className={styles.category}>{post.catSlug} -</span>
          <div className={styles.tags}>
            <h5>Tags: </h5>
            {post.tag.map((tag: Tag) => {
              return (
                <h5 className={styles.tag} key={tag.id}>
                  {tag.label}
                </h5>
              );
            })}
          </div>
        </div>

        <Link href={`/posts/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <p className={styles.desc}>
          {removeMarkdownTags(post.desc.substring(0, 60))}
        </p>
        <Link className={styles.link} href={`/posts/${post.slug}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
}

export default Card;
