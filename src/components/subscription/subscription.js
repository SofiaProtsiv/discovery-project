import style from "./subscription.module.scss";
import Container from "../container";
import Button from "../button";
import MapImage from "../../assets/map.png";

export default function Subscription() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.image}></div>
        <div className={style.wrapper}>
          <h3 className={style.title}>Subscribe to our news letter</h3>
          <div className={style.inputWrapper}>
            <input placeholder="Your email" className={style.input} />
            <Button buttonName="Subscribe" />
          </div>
        </div>
      </div>
    </section>
  );
}
