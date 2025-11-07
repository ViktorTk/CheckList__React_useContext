import styled from "./App.module.css";
import { useState } from "react";
import {
  LevelContext,
  getLocalStorage,
  setLocalStorage,
} from "./logic/LevelContext";
import BlockForAddCheck from "./components/BlockForAddCheck/BlockForAddCheck";
import BlockChekListBody from "./components/BlockChekListBody/BlockChekListBody";

function App() {
  const [checkList, setCheckList] = useState(getLocalStorage());

  const fAddCheckList = (param) => {
    const copy = [...checkList, param];
    setCheckList(copy);
    setLocalStorage(copy);
  };

  const fRemoveCheck = (idx) => {
    const copy = checkList.filter((el) => {
      return el.id !== idx;
    });
    setCheckList(copy);
    setLocalStorage(copy);
  };

  const fEditStatusCheck = (idx) => {
    const copy = checkList.map((el) => {
      if (el.id === idx) {
        el.status = !el.status;
      }
      return el;
    });
    setCheckList(copy);
    setLocalStorage(copy);
  };

  const fEditTextCheck = (idx, newText) => {
    const copy = checkList.map((el) => {
      if (el.id === idx) {
        el.text = newText;
      }
      return el;
    });
    setCheckList(copy);
    setLocalStorage(copy);
  };

  return (
    <article className={styled["content-box"]}>
      <LevelContext
        value={{
          checkList,
          fAddCheckList,
          fEditTextCheck,
          fEditStatusCheck,
          fRemoveCheck,
        }}
      >
        <BlockForAddCheck />
        <BlockChekListBody />
      </LevelContext>
    </article>
  );
}

export default App;
