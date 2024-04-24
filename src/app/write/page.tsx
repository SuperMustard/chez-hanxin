"use client";
import styles from "./write.module.css";
import React, { useMemo, useState } from "react";
import Image from "next/image";
//import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

type Props = {};

export default function Page({}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        //onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        //onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">coding</option>
        <option value="fashion">travel</option>
        <option value="food">life</option>
        <option value="culture">game</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              //onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}
