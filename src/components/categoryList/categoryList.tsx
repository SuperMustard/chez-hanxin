import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@prisma/client";

async function getData(): Promise<any> {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Cant fetch Categories!");
  }

  return res.json();
}

async function CategoryList() {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {data?.map((item: Category) => (
          <Link
            href="/"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
          >
            <Image
              src={item?.img || ""}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
