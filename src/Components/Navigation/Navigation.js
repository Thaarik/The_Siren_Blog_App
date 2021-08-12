import React from 'react'
import './Navigation.css'

const Navigation=()=>{
    let home="Home";
    let Bollywood="Bollywood";
    let Technology="Technology";
    let Hollywood="Hollywood";
    let Fitness="Fitness";
    let Food="Food";

    return(
        
        <div className="navigation">
            <div className="home">{home}</div>
            <div className="Bollywood">{Bollywood}</div>
            <div className="Technology">{Technology}</div>
            <div className="Hollywood">{Hollywood}</div>
            <div className="Fitness">{Fitness}</div>
            <div className="Food">{Food}</div>
        </div>
    );
}

export default Navigation;