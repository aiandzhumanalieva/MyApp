import style from './Start.module.scss'
import MyButton from '../Ui/MyButton'

const Start =()=>{
    return(
        <div className={style.start}>
<div  className={style.mystart} >

 <div className={style.mid}>
     <div className={style.text}>
 <p>SAVE YOUR TIME WITH STACKS</p>   
  <h3>Start a Crypto Collecting and Sell Your Artwork</h3>
     </div>
<div className={style.button}>
 <MyButton btn={'start'}>Create Item</MyButton>
<MyButton btn={'start2'}>Discover More</MyButton>     
</div>

 </div>
</div>

        </div>
    )
}
export default Start