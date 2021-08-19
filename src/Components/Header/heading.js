import React from 'react'
import './heading.css'
import Navigation from '../Navigation/Navigation'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { MdClear } from "react-icons/md";
import { FiMenu } from "react-icons/fi"

const Header=()=>{
    const [navbarOpen,setNavbarOpen] = useState(true)
    const handleToggle = () =>{
        setNavbarOpen(prev => !prev)
    }
   
    let header="Siren";
    let verticalheader="The";
    return(
        <>
        <div className="header">
        <div className="logo">
        <Link to="/The_Siren_Blog_App" className="blogHead" style={{textDecoration:'none',color:'black'}}>
            <div className="vertical">{verticalheader}</div>
            <div className="horizontal">{header}</div>
        </Link>
        </div>
        <div className="GetStarted">
            <div className="startbutton"><p>Get Started</p></div>
        </div>
        </div>
        <div className="head-nav">
        <div onClick={handleToggle} className="ham">
        {navbarOpen ? (<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />):(<MdClear style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />)}</div>
        </div>
        <Navigation navbar={navbarOpen}/>
        </>
    );
}

export default Header;