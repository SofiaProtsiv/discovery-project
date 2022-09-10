import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import RightSideBar from "../rightSideBar";

export default function Header() {
  return (
    <header className={style.header}>
      <RightSideBar />
      <Link to="/photos/"></Link>
    </header>
  );
}
