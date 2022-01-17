import MyExplore from '../Ui/MyExplore'
import style from './Explore.module.scss'

const Explore = () =>{
    return(
        <div className={style.explore}>
          <div className={style.explore_title}>
          <h3>Explore</h3>
          <div>
  <img src="./images/explore_arrow.svg" alt="" />
<img src="./images/explore_arrowblue.svg" alt="" />            
          </div>

          </div>
          <div className={style.myexplore}>
 <MyExplore myexplore={'forge'}/>
<MyExplore myexplore={'nft'}/>
<MyExplore myexplore={'ice'}/>
<MyExplore myexplore={'musical'}/>             
          </div>

        </div>
    )
}
export default Explore