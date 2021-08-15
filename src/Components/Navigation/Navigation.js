import React from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'

const Navigation=()=>{
    let home="Home";
    let Bollywood="Bollywood";
    let Technology="Technology";
    let Hollywood="Hollywood";
    let Fitness="Fitness";
    let Food="Food";

    return(
        <>
        <div className="navigation">
            <div ><NavLink className="home" to={{pathname:"/"}}>{home}</NavLink></div>
            <div ><NavLink className="Bollywood" to={{pathname:"/Bollywood"}}>{Bollywood}</NavLink></div>
            <div ><NavLink className="Technology" to={{pathname:"/Technology"}}>{Technology}</NavLink></div>
            <div ><NavLink className="Hollywood" to={{pathname:"/Hollywood"}}>{Hollywood}</NavLink></div>
            <div ><NavLink className="Fitness" to={{pathname:"/Fitness"}}>{Fitness}</NavLink></div>
            <div ><NavLink className="Food" to={{pathname:"/Food"}}>{Food}</NavLink></div>
        </div>
        </>
    );
}

export default Navigation;