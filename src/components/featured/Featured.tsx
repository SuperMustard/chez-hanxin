import React from "react";
import Image from "next/image";
import styles from "./featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <div className="relative">
          {/* <Image src='/00_bg.png'  alt="" width={0}
          height={0} layout='fill' className='absolute'/> */}
          <b>Hey, my name is Hanxin!</b> Discover my life here.
        </div>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/chez-hanxin.appspot.com/o/montreal-sunrise.webp?alt=media&token=3c9715a0-dfba-4856-ba57-71cf2e6fd00a"
            alt=""
            fill
            className={styles.image}
            sizes="100vh"
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Introduce myself</h1>
          <p className={styles.postDesc}>
            This is my first post. You can find the introduction of me and my
            blog here.
          </p>
          <div className={styles.buttonContainer}>
            <a className={styles.button} href="/posts/introduction">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
