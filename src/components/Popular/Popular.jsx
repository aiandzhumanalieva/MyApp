import style from './Popular.module.scss'
import MyButton from '../Ui/MyButton'
import MyExplore from '../Ui/MyExplore'
const Popular =()=>{
    return(
<div className={style.pop}>
<h3>Popular Artwork</h3>
<div className={style.subpop}>
<ul>
    <li>All Item</li>
    <li>Art</li>
    <li>Clebrities</li>
    <li>Game</li>
    <li>Music</li>
    <li>Video</li>
    <li>Crypto</li>
</ul>

<div className={style.right}>
<MyButton btn={'filter'}>Filter</MyButton>
<MyButton btn={'newest'} >Newest</MyButton>
</div>
</div>
<div className={style.blocks}>
<MyExplore myexplore={'forge'} />
<MyExplore myexplore={'nft'} />
<MyExplore myexplore={'ice'} />
<MyExplore myexplore={'musical'} /> 
<MyExplore myexplore={'forge2'} /> 
<MyExplore myexplore={'nft2'} /> 
<MyExplore myexplore={'ice2'}/>
<MyExplore myexplore={'musical2'} /> 
</div>
<div className={style.button}>
  <MyButton btn={'load'} >Load More</MyButton>  
</div>

</div>
    )
}

export default Popular