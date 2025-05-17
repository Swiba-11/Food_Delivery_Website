import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu.....</h1>
        <p className='explore-menu-text'>Whether you're looking to refine your current menu or create a new one from scratch, these 20 examples will provide you with the inspiration and insights needed to elevate your menu design and, ultimately, your restaurant's success.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) =>{
                return(
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />

    </div>
  )
}

export default ExploreMenu