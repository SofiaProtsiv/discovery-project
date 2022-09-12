import style from "./footer.module.scss";

import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg";

export default function Footer() {
  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <p className={style.logo}>trppd _</p>
        <span className={style.span}>&copy; 2022</span>
        <div className={style.iconWrapper}>
          <a href="https://www.instagram.com">
            <InstagramIcon alt="Instagram Icon" className={style.icon} />
          </a>
          <a href="https://www.facebook.com">
            <FacebookIcon alt="Facebook Icon" className={style.icon} />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon alt="Twitter Icon" className={style.icon} />
          </a>
        </div>
      </footer>
    </div>
  );
}
