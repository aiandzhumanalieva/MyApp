import style from './MyCollection.module.scss'

const MyCollection =({mycoll})=>{
switch(mycoll){
    case 'air':
        return(
        <div className={style.mycoll}>
            <img src="./images/mycoll1.png" alt="" />
            <h3>Walking On Air</h3>
        <p> <img src="./images/mycoll_small.svg" alt="" />
     <span>By </span>James Zeller</p>
        </div>
    )
    case 'day':
        return(
        <div className={style.mycoll}>
            <img src="./images/mycoll2.png" alt="" />
            <h3>Sunny Day Collection</h3>
        <p> <img src="./images/mycoll_small.svg" alt="" />
     <span>By </span>James Zeller</p>
        </div>
    )
    case 'coll3':
        return(
        <div className={style.mycoll}>
            <img src="./images/mycoll3.png" alt="" />
            <h3>Roaring & Persistent Illusion</h3>
        <p> <img src="./images/mycoll_small.svg" alt="" />
     <span>By </span>James Zeller</p>
        </div>
    )
}
    
}

export default MyCollection