import style from "./button.module.scss";

export default function Button({ buttonName }) {
  return <button className={style.button}>{buttonName}</button>;
}
