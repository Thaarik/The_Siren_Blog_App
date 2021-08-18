import React from 'react'
import './heading.css'
import {Link} from 'react-router-dom'
const Header=()=>{
    let header="Siren";
    let verticalheader="The";
    return(
        <>
        <Link to="/The_Siren_Blog_App" className="blogHead" style={{textDecoration:'none',color:'black'}}><div className="header">
            <div className="vertical">{verticalheader}</div>
            <div className="horizontal">{header}</div>
        </div></Link>
        <div className="GetStarted">
            <div className="startbutton"><p>Get Started</p></div>
        </div>
            </>
    );
}

export default Header;