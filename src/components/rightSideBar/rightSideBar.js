import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import style from "./rightSideBar.module.scss";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
  transition: { duration: 2 },
};
export default function RightSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <React.Fragment>
      <motion.nav
        className={style.nav}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <motion.div className={style.innerNav}>
          <ul className={style.list}>
            <li className={style.item}>
              <NavLink className={style.link} to="#">
                Home
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink className={style.link} to="#">
                Recommendation
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink className={style.link} to="#">
                Explore
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink className={style.link} to="#">
                Help
              </NavLink>
            </li>

            <li className={style.item}>
              <NavLink className={style.link} to="#">
                About Us
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className={style.button}
      >
        trppd _
      </motion.button>
    </React.Fragment>
  );
}
