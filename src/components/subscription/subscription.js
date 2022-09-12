import style from "./subscription.module.scss";
import Button from "../button";

export default function Subscription() {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.image}></div>
        <div className={style.wrapper}>
          <h2 className={style.title}>Subscribe to our news letter</h2>
          <div className={style.inputWrapper}>
            <input placeholder="Your email" className={style.input} />
            <Button buttonName="Subscribe" />
          </div>
        </div>
      </div>
    </section>
  );
}
