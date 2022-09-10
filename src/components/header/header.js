import React from "react";
import style from "./header.module.scss";
import RightSideBar from "../rightSideBar";

export default function Header() {
  return (
    <header className={style.header}>
      <RightSideBar />
    </header>
  );
}
