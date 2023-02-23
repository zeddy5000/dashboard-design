import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/Wheels rims performance - 640x164.png'
import { sideBarData } from '../../Data/Data'
import { useState } from 'react'


const Sidebar = () => {
  const [selected,setSelected]= useState(0)
  return (
    <div className='Sidebar'>
        <div className='logo'>
        <img src={Logo} alt="" className='logo-img' />
        <span className='span-main'>
            Sh<span className='span-item'>o</span>ps
        </span>
    </div>
    <div className='menu'>
       {sideBarData.map((item,index)=>{
        return(
          <div key={index} className={selected===index ? 'menu-item active':'menu-item'} onClick={()=>setSelected(index)} >
            
            <item.icon />
            <span>{item.heading}</span>
          </div>
        )
       })}
       
       </div>
    
    </div>

    
  
  )
}

export default Sidebar