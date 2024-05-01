import { ScriptProps } from "next/script";
import styles from "./menuPost.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MenuPostProp {
  withImage: boolean;
}

function MenuPost({ withImage }: MenuPostProp) {
  return (
    <>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                sizes="20vw"
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet</h4>
            <div className={styles.detail}>
              <span className={styles.username}>Hanxin</span>
              <span className={styles.date}> - 04.19.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                sizes="20vw"
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet</h4>
            <div className={styles.detail}>
              <span className={styles.username}>Hanxin</span>
              <span className={styles.date}> - 04.19.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                sizes="20vw"
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.life}`}>Life</span>
            <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet</h4>
            <div className={styles.detail}>
              <span className={styles.username}>Hanxin</span>
              <span className={styles.date}> - 04.19.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
                sizes="20vw"
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.game}`}>Game</span>
            <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet</h4>
            <div className={styles.detail}>
              <span className={styles.username}>Hanxin</span>
              <span className={styles.date}> - 04.19.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MenuPost;
