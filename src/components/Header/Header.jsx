import MyInput from "../MyInput/MyInput";
import Nav from "../Nav/Nav";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <a href="#">
        <img width={50} height={40} src="images/logo.svg" alt="Logo" />
        <h1>Cryptmax</h1>
      </a>
      <Nav />
      <div>
        <MyInput placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;