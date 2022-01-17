import style from './MyExplore.module.scss'
import MyButton from '../MyButton'

const MyExplore =({myexplore})=>{
    switch(myexplore){
        case 'forge': 
        return(
        <div className={style.myexplore}>
<img src="./images/explore_main.png" alt="" />
<div className={style.title}>
    <h3>The Paradox Forge</h3>
    <MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
    <img src="./images/myexplore_small.svg" alt="" />
    <p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
    <p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
    <MyButton btn={'lightblue'}>Music</MyButton> 
</div>
        </div>
    )
    case 'nft': 
        return(
        <div className={style.myexplore}>
<img src="./images/explore_main2.png" alt="" />
<div className={style.title}>
    <h3>BSC x Cybertino NFT</h3>
    <MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
    <img src="./images/myexplore_small.svg" alt="" />
    <p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
    <p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
    <MyButton btn={'lightbluee'}>Clebrities</MyButton> 
</div>
        </div>
    )
    case 'ice': 
    return(
    <div className={style.myexplore}>
<img src="./images/explore_main3.png" alt="" />
<div className={style.title}>
<h3>Fountain Firework Ice</h3>
<MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
<img src="./images/myexplore_small.svg" alt="" />
<p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
<p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
<MyButton btn={'lightblue'}>Crypto</MyButton> 
</div>
    </div>
)
case 'musical': 
return(
<div className={style.myexplore}>
<img src="./images/explore_main4.png" alt="" />
<div className={style.title}>
<h3>Musical Sculpture</h3>
<MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
<img src="./images/myexplore_small.svg" alt="" />
<p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
<p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
<MyButton btn={'lightblue'}>Music</MyButton> 
</div>
</div>
)
case 'forge2': 
return(
<div className={style.myexplore}>
<img src="./images/explore_main5.png" alt="" />
<div className={style.title}>
<h3>The Paradox Forge</h3>
<MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
<img src="./images/myexplore_small.svg" alt="" />
<p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
<p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
<MyButton btn={'lightblue'}>Music</MyButton> 
</div>
</div>
)
case 'nft2': 
return(
<div className={style.myexplore}>
<img src="./images/explore_main6.png" alt="" />
<div className={style.title}>
<h3>BSC x Cybertino NFT</h3>
<MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
<img src="./images/myexplore_small.svg" alt="" />
<p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
<p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
<MyButton btn={'lightbluee'}>Clebrities</MyButton> 
</div>
</div>
)
case 'ice2': 
    return(
    <div className={style.myexplore}>
<img src="./images/explore_main7.png" alt="" />
<div className={style.title}>
<h3>Fountain Firework Ice</h3>
<MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
<img src="./images/myexplore_small.svg" alt="" />
<p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
<p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
<MyButton btn={'lightblue'}>Crypto</MyButton> 
</div>
    </div>
)
case 'musical2': 
return(
<div className={style.myexplore}>
<img src="./images/explore_main8.png" alt="" />
<div className={style.title}>
<h3>Musical Sculpture</h3>
<MyButton btn={'myexplore'}>2.75 ETH</MyButton> 
</div>
<div className={style.middle}>
<img src="./images/myexplore_small.svg" alt="" />
<p>10+ People place bit</p>
</div>

<div className={style.bottom}>  
<p>
<img src="./images/myexplore_icon.svg" alt="" />
Highest bit <span>0.001 ETH</span> </p>
<MyButton btn={'lightblue'}>Music</MyButton> 
</div>
</div>
)
    }
   
}

export  default MyExplore;