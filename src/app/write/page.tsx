"use client";
import styles from "./write.module.css";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
//import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utilities/firebase";
import { MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import { Tag } from "@prisma/client";

type Props = {};

type tag = {
  name: string;
  label: string;
};

export default function Page({}: Props) {
  const { status, data } = useSession();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState<string>("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [tag, setTag] = useState("");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [selectedTags, setSelectedTags] = useState<MultiValue<tag> | null>(
    null
  );

  const [tags, setTags] = useState<tag[]>([]);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if (!file) {
        return;
      }
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  useEffect(() => {
    async function getTags(): Promise<any> {
      const url: string = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/tags`;
      const res = await fetch(url, {
        cache: "no-store",
      });
      if (!res.ok) {
        setTags([]);
        throw new Error("Cant fetch post!");
      }

      return res.json();
    }
    getTags().then((data) => {
      let tagArray: tag[] = data?.map((tag: Tag) => {
        let newTag: tag = {
          name: tag.name,
          label: tag.label,
        };

        return newTag;
      });

      setTags(tagArray);
    });
  }, []);

  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated" && data.user.role === "User") {
    return <div className={styles.loading}>You need to be a Admin!</div>;
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  async function handleSubmit() {
    const convertTags: tag[] =
      selectedTags?.map((tag) => {
        let temp: tag = { name: tag.label, label: tag.label };
        return temp;
      }) || []!;
    console.log(convertTags);
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "life",
        tag: convertTags,
      }),
    });

    if (!res.ok) {
      console.log("Error! Can't post!");
    }
  }

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <h4>Category: </h4>
        <select
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="coding">coding</option>
          <option value="travel">travel</option>
          <option value="game">game</option>
          <option value="life">life</option>
        </select>
      </div>
      <div>
        <h4>Tags: </h4>
        <div className={styles.tags}>
          <CreatableSelect
            isMulti
            options={tags}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.name}
            onChange={setSelectedTags}
          />
        </div>
      </div>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
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
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
}
