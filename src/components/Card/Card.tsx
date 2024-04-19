import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Card() {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>04/19/2024 - </span>
                <span className={styles.category}>LIFE</span>
            </div>
            <Link href="/">
                <h3>Lorem ipsum dolor sit amet, consectetuer</h3>
            </Link>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ... 
            </p>
            <Link className={styles.link} href="/">Read More...</Link>
          </div>
    </div>  
  )
}

export default Card