import imageSea from "../../images/aboutSea.jpeg";
import Button from "../button";

import style from "./about.module.scss";

export default function About() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <img alt="main pic" src={imageSea} className={style.image} />
        <div className={style.wrapperText}>
          <h2 className={style.title}>
            Above
            <br /> the sea
          </h2>
          <p className={style.subtitle}>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          </p>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>
          <Button buttonName="Read more" />
        </div>
      </div>
    </section>
  );
}
