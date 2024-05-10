"use client";

import React, { useEffect, useRef } from "react";
import styles from "./aboutPage.module.css";
import Image from "next/image";

function addParallelOffset(
  mouseX: number,
  mouseY: number,
  divObject: HTMLDivElement,
  xModify: number,
  yModify: number
) {
  if (divObject) {
    let newX = -mouseX * (xModify * 0.6);
    let newY = -mouseY * (yModify * 0.5);
    divObject.style.transform = `translate(${newX}vw,${newY}vh)`;
  }
}

function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = wrapperRef.current;
    const titleContainer = titleRef.current;
    const imageContainer = imageRef.current;
    const descContainer = descRef.current;
    function handlemouseMoveEvent(e: MouseEvent) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const mouseX = (e.clientX - vw / 2) / vw;
      const mouseY = (e.clientY - vh / 2) / vh;
      if (scene) {
        scene.style.transform = `translate(${-mouseX * 2}vw,${-mouseY * 10}vh)`;
      }

      if (titleContainer) {
        addParallelOffset(mouseX, mouseY, titleContainer, 6, -5);
      }

      if (imageContainer) {
        addParallelOffset(mouseX, mouseY, imageContainer, -5, 6);
      }

      if (descContainer) {
        addParallelOffset(mouseX, mouseY, descContainer, -10, -2);
      }
    }

    document.addEventListener("mousemove", handlemouseMoveEvent);

    return () => {
      document.removeEventListener("mousemove", handlemouseMoveEvent);
    };
  }, [wrapperRef.current, titleRef.current, imageRef.current, descRef.current]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.titleContainer} ref={titleRef}>
          <h5 className={styles.motto}>One is never too old to learn.</h5>
          <h1 className={styles.title}>About</h1>
        </div>
        <div className={styles.imageContainer} ref={imageRef}>
          <div className={styles.imageWrapper}>
            <Image
              src="/p1.jpeg"
              alt="aboutPic"
              fill
              sizes="80vw"
              className={styles.image}
            ></Image>
          </div>
        </div>
        <div className={styles.descContainer} ref={descRef}>
          <h4 className={styles.desc}>
            My name is Hanxin. I used to focus on computer graphics and game
            development. Now, I want to become a web developer. My tech stack
            will be ReactJS/NextJS for the front end and .Net for the back end.
            I use both SQL and NoSQL databases for my mini-projects. I am
            looking for a full-time job.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
