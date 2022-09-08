import style from "./container.module.scss";

export default function Container({ children }) {
  return (
    <section className={style.section}>
      <div className={style.container}>{children}</div>
    </section>
  );
}
