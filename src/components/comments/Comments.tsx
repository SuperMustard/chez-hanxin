"use client";

import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { Comment, User } from "@prisma/client";

type Props = {
  postSlug: string;
};

async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

type CommentWithUser = {
  id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  postSlug: string;
  user: User;
};

export default function Comments({ postSlug }: Props) {
  const { status } = useSession();
  const APIBASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const url = `${APIBASE_URL}/api/comments?postSlug=${postSlug}`;
  const { data, mutate, isLoading } = useSWR(url, fetcher);

  const [desc, setDesc] = useState("");

  async function handleSubmit() {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    if (res.ok) {
      setDesc("");
      mutate();
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item: CommentWithUser) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.userContainer}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.commentText}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
