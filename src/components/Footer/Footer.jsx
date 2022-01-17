import style from './Footer.module.scss'
import MyButton from '../Ui/MyButton'
const Footer =()=>{
    return(
        <div className={style.footer}>
<div className={style.foot}>
<div className={style.main}>
<a href="#">
        <img width={50} height={40} src="images/logo.svg" alt="Logo" />
        <h2>Cryptmax</h2>
      </a>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
<div className={style.img}>
<img src="./images/footer1.svg" alt="" />
<img src="./images/footer2.svg" alt="" />
<img src="./images/footer3.svg" alt="" />
<img src="./images/footer4.svg" alt="" />
</div> </div>
<div className={style.center}>
<h3>Cryptmax</h3>
<ul>
    <li>Discover </li>
    <li>Artwork </li>
    <li>Explore</li>
    <li>How it work</li>
</ul>
</div>
<div className={style.center}>
<h3>Community</h3>
<ul>
  

    <li>FAQ </li>
    <li>Help Center </li>
    <li>Create item</li>
    <li>Give as a freedback</li>
</ul>
</div>
<div className={style.forth}>
<h3>Join Newsletter</h3>
<p>Subscribe our newsletter to get more free design course and resource</p>
<MyButton btn={'guide'}>Enter your email</MyButton>
</div>
</div>
<div className={style.bottom}>
<img src="./images/footer_bottom.svg" alt="" />
<p>Copyright © 2021 Cryptmax. All rights reserved</p>
</div>

 


 </div>
    )
}

export default Footer