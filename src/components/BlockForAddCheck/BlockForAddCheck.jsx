import styled from "../BlockForAddCheck/BlockForAddCheck.module.css";
import { useContext, useState } from "react";
import { LevelContext } from "../../logic/LevelContext";
import uuid from "react-uuid";

function BlockForAddCheck() {
  const { fAddCheckList } = useContext(LevelContext);
  const [val, setVal] = useState("");

  const fAddCheck = () => {
    if (val) {
      const newId = uuid();
      const newCheck = {
        id: newId,
        text: val,
        status: false,
      };
      fAddCheckList(newCheck);
      setVal("");
    }
  };

  return (
    <section className={styled["box-add-check"]}>
      <input
        type="text"
        placeholder="Введите задачу:"
        value={val}
        onChange={(event) => setVal(event.target.value)}
      />
      <button onClick={fAddCheck}>
        <p>Добавить задачу</p>
      </button>
    </section>
  );
}

export default BlockForAddCheck;
