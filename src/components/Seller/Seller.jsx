import MySeller from '../Ui/MySeller';
import style from './Seller.module.scss'
import MyButton from '../Ui/MyButton'


const Seller=()=>{
    return(
        <div className={style.seller}>
            <div className={style.title}>
            <h3>Best Seller 
                <img src="./images/sellerh3.svg" alt="" />
            </h3>
           <MyButton btn={'today'}>Today</MyButton>
                </div>
<div className={style.myseller}>
<MySeller myseller={'zeller'}/>
<MySeller myseller={'franklin'}/>
<MySeller myseller={'watson'}/>
<MySeller myseller={'abron'}/>
</div>
            
            
        </div>
    )
}

export default Seller;