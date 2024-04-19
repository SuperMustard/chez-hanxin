import React from 'react'
import Image from 'next/image'
import styles from './featured.module.css'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b >Hey, my name is Hanxin!</b> Discover my life here.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Introduce myself</h1>
          <p className={styles.postDesc}>
            This is my first post. You can find the introduction of me and my blog here.
          </p>
          <div className={styles.buttonContainer}>
          <button className={styles.button}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured