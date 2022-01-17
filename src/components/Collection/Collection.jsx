import style from './Collection.module.scss'
import MyCollection from '../Ui/MyCollection'
const Collection =()=>{
    return(
        <div className={style.coll}>
<h3>Hot Collections</h3>
<div className={style.mycoll}>
  <MyCollection mycoll={'air'}/>  
  <MyCollection mycoll={'day'}/> 
  <MyCollection mycoll={'coll3'}/> 
</div>

        </div>
    )
}
export default Collection