import style from './Artwork.module.scss';
import MyButton from '../Ui/MyButton';
const Artwork =()=>{
    return(
    <div className={style.artwork}>
<img src="./images/artwork.png" alt="" />
<img src="./images/artwork2.png" alt="" />
<img src="./images/artwork3.png" alt="" />
<div className={style.right}>
    <h3>Latest Artwork Frash Collection From Artist</h3>
     <MyButton btn={'none'}>View Item</MyButton> 
</div>
    </div>
    )
}
export default Artwork