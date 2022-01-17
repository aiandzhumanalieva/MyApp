import style from "./MyButton.module.scss";


const MyButton = ({ children, btn})  => {
  switch (btn) {
    case 'login' :
      return( <button className={style.my__btn} >
         <img width={11.93} height={13} src="images/login.svg" alt="LogIn" />
          <span>{children}</span>
      </button>
      )
 case 'explore':
   return (<button className={style.explore} >
    <span>{children}</span>
           <img width={25} src="images/arrow.svg" alt="LogIn" />
       
 </button>)
 case 'add':
  return (<button className={style.add} >
   <img width={13} height={13} src="images/add.svg" alt="LogIn" />     
     <span>{children}</span> 
</button>)
case 'none':
  return (<button className={style.item} >     
     <span>{children}</span> 
</button>)
case 'today':
  return (<button className={style.today} >     
     <span>{children}</span> 
     <img src="./images/arrow_down.svg" alt="" />
</button>)
case 'myexplore':
  return (<button className={style.myexplore} >     
     <span>{children}</span> 
</button>)
case 'lightblue':
  return (<button className={style.lightblue} >     
     <span>{children}</span> 
</button>)

case 'guide':
  return (<button className={style.guide} >     
     <span>{children}</span> 
     <img src="./images/guide_arrow.svg" alt="" />
</button>)
case 'filter':
  return (<button className={style.filter} >      
     <img width={14} height={14} src="./images/popular_button1.svg" alt="" />
     <span>{children}</span> 
</button>)
case 'newest':
  return (<button className={style.newest} >      
     <img src="./images/popular_button2.svg" alt="" />
     <span>{children}</span> 
</button>)
case 'load':
  return (<button className={style.load} >      
     <img src="./images/popular_button3.svg" alt="" />
     <span>{children}</span> 
</button>)
case 'lightbluee':
  return (<button className={style.lightbluee} >     
     <span>{children}</span> 
</button>)

case 'start':
  return (<button className={style.load} >     
     <span>{children}</span> 
</button>)
case 'start2':
  return (<button className={style.start} >     
     <span>{children}</span> 
</button>)
default:
  return <></>
  }
  
};

export default MyButton;


// return (
  //   <button className={style.my__btn} >
  //     {arrow ? (
  //       <>
  //         <span>{children}</span>
  //         <img width={25} src="images/arrow.svg" alt="LogIn" />
  //       </>
  //     ) : (
  //       <>
  //        
  //       </>
  //     )
  //     }

  //   </button>
  // );