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
  markdown = markdown.replaceAll(RegExp("**(.+?)**"), "");
  markdown = markdown.replaceAll(RegExp("__(.+?)__"), "");

  // Replace italicized text with plain text
  markdown = markdown.replaceAll(RegExp("_(.+?)_"), "");
  markdown = markdown.replaceAll(RegExp("*(.+?)*"), "");

  // Replace strikethrough text with plain text
  markdown = markdown.replaceAll(RegExp("~~(.+?)~~"), "");

  // Replace inline code blocks with plain text
  markdown = markdown.replaceAll(RegExp("`(.+?)`"), "");

  // Replace code blocks with plain text
  markdown = markdown.replaceAll(RegExp("```[sS]*?```", "m"), "");
  markdown = markdown.replaceAll(RegExp("```[sS]*?```", "m"), "");

  // Remove links
  markdown = markdown.replaceAll(RegExp("[(.+?)]((.+?))"), "");

  // Remove images
  markdown = markdown.replaceAll(RegExp("![(.+?)]((.+?))"), "");

  // Remove headings
  markdown = markdown.replaceAll(RegExp("^#+s+(.+?)s*$", "m"), "");
  markdown = markdown.replaceAll(RegExp("^s*=+s*$", "m"), "");
  markdown = markdown.replaceAll(RegExp("^s*-+s*$", "m"), "");

  // Remove blockquotes
  markdown = markdown.replaceAll(RegExp("^s*>s+(.+?)s*$", "m"), "");

  // Remove lists
  markdown = markdown.replaceAll(RegExp("^s*[*+-]s+(.+?)s*$", "m"), "");
  markdown = markdown.replaceAll(RegExp("^s*d+.s+(.+?)s*$", "m"), "");

  // Remove horizontal lines
  markdown = markdown.replaceAll(RegExp("^s*[-*_]{3,}s*$", "m"), "");

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
