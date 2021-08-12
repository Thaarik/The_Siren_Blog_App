import React from 'react'
import './heading.css'

const Header=()=>{
    let header="Siren";
    let verticalheader="The";
    return(
        
        <div className="header">
            <div className="vertical">{verticalheader}</div>
            <div className="horizontal">{header}</div>
        </div>
    );
}

export default Header;