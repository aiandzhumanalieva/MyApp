import style from'./MyInput.module.scss'
const MyInput = ({placeholder, type}) => {
console.log(placeholder,type);
    return (
      <div className={style.inp_container}>
      <input placeholder={placeholder} type={'type'} />
        <img width={12.69} height={13} src="images/search.svg" alt="Img input" />
      </div>
    );
  };
  
  export default MyInput;