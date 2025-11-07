import styled from "./BlockChekElem.module.css";
import { useContext, useState } from "react";
import { LevelContext } from "../../../logic/LevelContext";

function BlockChekElem({ id, text, status }) {
  const { fEditTextCheck, fEditStatusCheck, fRemoveCheck } =
    useContext(LevelContext);
  const [editText, setEditText] = useState(false);
  const [val, setVal] = useState(text);

  const fConfirmOrCancelEditText = (event) => {
    if (event.key == "Enter" && val.length > 0) {
      fEditTextCheck(id, val);
      setEditText(false);
    }
    if (event.key == "Escape") {
      setVal(text);
      setEditText(false);
    }
  };

  return (
    <div className={styled["check-box"]} key={id}>
      {editText ? (
        <input
          autoFocus
          type="text"
          value={val}
          onChange={(event) => setVal(event.target.value)}
          onKeyDown={(event) => fConfirmOrCancelEditText(event)}
        />
      ) : (
        <>
          <p
            className={`${styled["text-check"]} ${
              status ? styled["status-completed"] : null
            }`}
            onClick={() => setEditText(true)}
          >
            {text}
          </p>
          <label className={styled["switch"]}>
            <input
              type="checkbox"
              checked={status}
              onChange={() => fEditStatusCheck(id)}
            />
            <span className={styled["slider"]}></span>
          </label>
          <button onClick={() => fRemoveCheck(id)}>Удалить пункт</button>
        </>
      )}
    </div>
  );
}

export default BlockChekElem;
