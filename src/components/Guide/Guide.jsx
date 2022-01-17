import style from './Guide.module.scss'
import MyButton from '../Ui/MyButton'

const Guide =()=>{
    return(
        <div className={style.guide}>
<div className={style.title}>
<h3>NFTs Markeplace Guide</h3>
<MyButton btn={'guide'}>Full User Guidance Dtails</MyButton>
</div>
<div className={style.subguide}>
<h3> 
<img src="./images/guide_icon.svg" alt="" />
What is Cryptmax NFT Marketplace?</h3>
<div className={style.middle}>
  <img src="./images/guide_left.svg" alt="" />
  <div className={style.text}>
 <p>To list an NFT for sale, our team will first of all approve the content to make sure it’s appropriate for listing. This process usually takes 4-8 hours. Upon successful approval, your NFT will list immediately on the Marketplace as either an auction or fixed price sale, according to your preference.</p> 
 <ul>
    <li>Events: Buy premium and exclusive NFTs created by global leading artists</li>
    <li> Marketplace: Mint, purchase, and bid on NFTs from creators around the world</li>
    <li>Mystery Box: Stand a chance to win rare NFTs in a box full of surprises</li>
</ul>      
  </div>
 
</div>


</div>
        </div>
    )
}

export default Guide 