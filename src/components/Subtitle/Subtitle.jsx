import MyButton from '../Ui/MyButton/MyButton';
import style from './Subtitle.module.scss';

const Subtitle =()=>{
    return (
     <div className={style.sub_container}>
<div className={style.left}>
    <h3>CREATE, EXPLORE, COLLECT DIGITAL ART NFTs</h3>
    <h1>Discover Your Digital Art Collect NFTs</h1>
    <MyButton btn={'explore'}>Explore</MyButton>
    <div className={style.left__bottom}>
<div><h2>19k+</h2> <span>Artwork</span></div>
<div><h2>13k+</h2> <span> Auction</span></div>
<div><h2>8k+</h2> <span>Artist</span></div>
    </div>
</div>
<div className={style.right}>
    <img src="./images/subtitle.png" alt="" />
</div>
     </div>
    )
}

export default Subtitle;