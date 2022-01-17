import style from './MySeller.module.scss';
import MyButton from '../MyButton';

const MySeller=({myseller})=>{
    switch(myseller){
        case 'zeller':
      return(
        <div className={style.myseller}>
            <img className={style.main_img} src="./images/myseller.svg" alt="" />
            <h3>James Zeller</h3>
            <div className={style.icons}>
<img src="./images/myseller_icon.svg" alt="" />
<img src="./images/myseller_icon2.svg" alt="" />
<img src="./images/myseller_icon3.svg" alt="" />
            </div>
            <p price={'price'}>2.45 ETH</p>
<img className={style.line} src="./images/myseller_line.svg" alt="" />
            <MyButton btn={'add'}>Add</MyButton>  
        </div>
    ) 
    case'franklin' :
return (
    <div className={style.myseller}>
            <img className={style.main_img} src="./images/myseller2.svg" alt="" />
            <h3>Susan Franklin</h3>
            <div className={style.icons}>
<img src="./images/myseller-small2.svg" alt="" />
<img src="./images/myseller_icon2.svg" alt="" />
<img src="./images/myseller_icon3.svg" alt="" />
            </div>
            <p price={'price'}>2.25 ETH</p>
<img className={style.line} src="./images/myseller_line.svg" alt="" />
            <MyButton btn={'add'}>Add</MyButton>  
        </div>
) 
case'watson':
return (
    <div className={style.myseller}>
     <img className={style.main_img} src="./images/myseller3.svg" alt="" />
            <h3>James Watson</h3>
            <div className={style.icons}>
<img src="./images/myseller-small3.svg" alt="" />
<img src="./images/myseller_icon2.svg" alt="" />
<img src="./images/myseller_icon3.svg" alt="" />
            </div>
            <p price={'price'}>2.00 ETH</p>
<img className={style.line} src="./images/myseller_line.svg" alt="" />
            <MyButton  btn={'add'}>Add</MyButton>  
        </div>
)
case'abron':
return (
    <div className={style.myseller}>
 <img className={style.main_img} src="./images/myseller4.svg" alt="" />
            <h3>Hazel Abron</h3>
            <div className={style.icons}>
<img src="./images/myseller-small4.svg" alt="" />
<img src="./images/myseller_icon2.svg" alt="" />
<img src="./images/myseller_icon3.svg" alt="" />
            </div>
            <p price={'price'}>2.00 ETH</p>
<img className={style.line} src="./images/myseller_line.svg" alt="" />
            <MyButton btn={'add'}>Add</MyButton>  
        </div>
)
    }
    
}

export default MySeller