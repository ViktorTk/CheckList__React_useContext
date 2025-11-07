import styled from "./BlockChekListBody.module.css";
import { useContext } from "react";
import { LevelContext } from "../../logic/LevelContext";
import BlockChekElem from "./BlockChekElem/BlockChekElem";

function BlockChekListBody() {
  const { checkList } = useContext(LevelContext);

  const arrChekList = checkList.map((el) => {
    return (
      <BlockChekElem key={el.id} id={el.id} text={el.text} status={el.status} />
    );
  });

  return <section className={styled["checklist-box"]}>{arrChekList}</section>;
}

export default BlockChekListBody;
