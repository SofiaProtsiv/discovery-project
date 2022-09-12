import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import RightSideBar from "../rightSideBar";

export default function Header() {
  return (
    <header className={style.header}>
      <RightSideBar />
      <div className={style.wrapper}>
        <Link to="/photos/" className={style.link}>
          My Collection
        </Link>
        <p className={style.userName}>Sofia Protsiv</p>
        <span className={style.avatar}></span>
      </div>
    </header>
  );
}
