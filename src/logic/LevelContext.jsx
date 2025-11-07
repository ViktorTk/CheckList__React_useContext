import { createContext } from "react";

export const LevelContext = createContext();

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("checkData")) || [];
}

export function setLocalStorage(data) {
  const textData = JSON.stringify(data);
  localStorage.setItem("checkData", textData);
}
