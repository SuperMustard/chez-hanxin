import { KeyboardEventHandler, useState } from "react";
import styles from "./tags.module.css";
import CreatableSelect from "react-select/creatable";
import Select, { MultiValue } from "react-select";

type tag = {
  id: string;
  name: string;
  label: string;
};

const TAGS: tag[] = [
  { id: "1", name: "React", label: "React" },
  { id: "2", name: "Angular", label: "Angular" },
  { id: "3", name: "Vue", label: "Vue" },
  { id: "4", name: "Javascript", label: "Javascript" },
  { id: "5", name: "Typescript", label: "Typescript" },
];

function Tags() {
  const [selectedTags, setSelectedTags] = useState<MultiValue<tag> | null>(
    null
  );

  const [tags, setTags] = useState(TAGS);

  function showResult() {
    console.log(selectedTags);
  }

  return (
    <>
      <div>
        <CreatableSelect
          isMulti
          options={tags}
          getOptionLabel={(TAGS) => TAGS["label"]}
          getOptionValue={(TAGS) => TAGS["name"]}
          onChange={setSelectedTags}
        />
      </div>
      <button onClick={showResult}>Show Result</button>
    </>
  );
}

export default Tags;
