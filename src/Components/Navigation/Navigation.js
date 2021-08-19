import React from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'


const Navigation=(props)=>{
    // console.log(props.navbar)
    let home="Home";
    let Bollywood="Bollywood";
    let Technology="Technology";
    let Hollywood="Hollywood";
    let Fitness="Fitness";
    let Food="Food";

   
    let setNavbarOpen =props.navbar;
    const closeMenu = () => {
            setNavbarOpen=false;
            console.log(setNavbarOpen)
      }
    
    return(
        <>
        <div className={`navigation ${setNavbarOpen ? " showMenu":""}`}>

            <NavLink className="home" to={{pathname:"/The_Siren_Blog_App"}} onClick={()=>closeMenu()}>{home}</NavLink>
            <NavLink className="Bollywood" to={{pathname:"/The_Siren_Blog_App/Bollywood"}} onClick={()=>closeMenu()}>{Bollywood}</NavLink>
            <NavLink className="Technology" to={{pathname:"/The_Siren_Blog_App/Technology"}} onClick={()=>closeMenu()}>{Technology}</NavLink>
            <NavLink className="Hollywood" to={{pathname:"/The_Siren_Blog_App/Hollywood"}} onClick={()=>closeMenu()}>{Hollywood}</NavLink>
            <NavLink className="Fitness" to={{pathname:"/The_Siren_Blog_App/Fitness"}} onClick={()=>closeMenu()}>{Fitness}</NavLink>
            <NavLink className="Food" to={{pathname:"/The_Siren_Blog_App/Food"}} onClick={()=>closeMenu()}>{Food}</NavLink>
        
        </div>
        </>
    );
}

export default Navigation;