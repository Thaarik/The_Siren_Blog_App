import React from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import { MdClear } from "react-icons/md";
import { FiMenu } from "react-icons/fi"
const Navigation=()=>{
    let home="Home";
    let Bollywood="Bollywood";
    let Technology="Technology";
    let Hollywood="Hollywood";
    let Fitness="Fitness";
    let Food="Food";
    const [navbarOpen,setNavbarOpen] = useState(true)
    const handleToggle = () =>{
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
      }
    return(
        <>
       <div onClick={handleToggle} className="ham">
        {navbarOpen ? (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />):(<MdClear style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)}</div>
        <div className={`navigation ${navbarOpen ? " showMenu":""}`}>
            <div ><NavLink className="home" to={{pathname:"/"}} onClick={()=>closeMenu()}>{home}</NavLink></div>
            <div ><NavLink className="Bollywood" to={{pathname:"/Bollywood"}} onClick={()=>closeMenu()} exact>{Bollywood}</NavLink></div>
            <div ><NavLink className="Technology" to={{pathname:"/Technology"}} onClick={()=>closeMenu()}>{Technology}</NavLink></div>
            <div ><NavLink className="Hollywood" to={{pathname:"/Hollywood"}} onClick={()=>closeMenu()}>{Hollywood}</NavLink></div>
            <div ><NavLink className="Fitness" to={{pathname:"/Fitness"}} onClick={()=>closeMenu()}>{Fitness}</NavLink></div>
            <div ><NavLink className="Food" to={{pathname:"/Food"}} onClick={()=>closeMenu()}>{Food}</NavLink></div>
        
        </div>
        </>
    );
}

export default Navigation;