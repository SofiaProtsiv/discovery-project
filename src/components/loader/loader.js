import style from "./loader.module.scss";
export default function Loader() {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
