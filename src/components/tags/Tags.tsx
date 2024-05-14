import { KeyboardEventHandler, useState } from "react";
import styles from "./tags.module.css";
import CreatableSelect from "react-select/creatable";
import Select, { MultiValue } from "react-select";

type tag = {
  id: string;
  name: string;
  label: string;
};

function Tags() {
  const [selectedTags, setSelectedTags] = useState<MultiValue<tag> | null>(
    null
  );
  const TAGS: tag[] = [];
  const [tags, setTags] = useState(TAGS);

  function showResult() {
    console.log(selectedTags);
  }

  return (
    <>
      <button onClick={showResult}>Show Result</button>
    </>
  );
}

export default Tags;
