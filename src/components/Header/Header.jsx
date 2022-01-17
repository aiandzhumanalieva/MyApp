import MyInput from "../Ui/MyInput/MyInput";
import Nav from "../Nav/Nav";
import style from "./Header.module.scss";
import MyButton from '../Ui/MyButton';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="#">
        <img width={50} height={40} src="images/logo.svg" alt="Logo" />
        <h1>Cryptmax</h1>
      </a>
      <Nav />
      <div className={style.right__container}>
        <MyInput placeholder="Search..." type='text' />
        <MyButton btn={'login'}>  Login </MyButton>
      </div>
    </header>
  );
};

export default Header;