import { useState } from "react";
import style from "./Nav.module.scss";

const Nav = () => {
  const [navBar, setNavBar] = useState([
    "Discover",
    "Artwork",
    "Best seller",
    "How it work",
  ]);
  return (
    <ul className={style.nav}>
      {navBar.map((n) => (
        <li key={n}>
          <a link="#">{n}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;