import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className = 'explore-menu' id='explore-menu'>
        <h1>Explore oue Menu</h1>
        <p className='explore-menu-test'>Chooose from a divese menu.....</p>
        <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onclick={()=>setcategory(prev=>prev===item.menu_name)} key={index} className='explore-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        }
        )}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu