import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { Post, Tag, User } from "@prisma/client";
import Markdown from "react-markdown";
import { CodeBlock, Pre } from "@/components/codeBlock/CodeBlock";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";

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

  const data: PostWithUser = await getData(slug);
  const desc = data?.desc || "";
  const options = { code: CodeBlock, pre: Pre };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.tags}>
            <h5>Tags: </h5>
            {data.tag.map((tag: Tag) => {
              return (
                <h5 className={styles.tag} key={tag.id}>
                  {tag.label}
                </h5>
              );
            })}
          </div>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data?.user?.image}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.postContainer}>
          {data?.img && (
            <div className={styles.imageContainer}>
              <Image
                src={data?.img}
                alt=""
                fill
                className={styles.image}
                sizes="100vw"
              />
            </div>
          )}
          <div
            className={styles.post}
            //dangerouslySetInnerHTML={{ __html: desc }}
          >
            <Markdown
              className="prose prose-p:leading-tight min-w-full pt-5"
              components={options}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeSanitize,
                [
                  rehypeExternalLinks,
                  { content: { type: "text", value: "🔗" } },
                ],
              ]}
            >
              {desc}
            </Markdown>
          </div>
          <div className={styles.commentContainer}>
            <Comments postSlug={slug}></Comments>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
