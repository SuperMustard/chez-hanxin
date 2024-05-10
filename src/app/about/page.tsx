import React from 'react';
import styles from './aboutPage.module.css';
import Image from 'next/image';

function about() {
  
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h5 className={styles.motto}>One is never too old to learn.</h5>
          <h1 className={styles.title}>About</h1>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="aboutPic"  height={800} width={600} className={styles.image}></Image>
        </div>
        <div className={styles.descContainer}></div>
      </div>
    </div>
  )
}

export default about