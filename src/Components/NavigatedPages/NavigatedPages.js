import './NavigatedPages.css'
import Header from './../Header/heading.js'
// import Navigation from './../Navigation/Navigation'
import {useState} from 'react'
import contentpost from './../../Content.json'
import NavArticles from './NavArticles.js'
import TopPostsComp from '../TopPosts/TopPostsComp'
import Ad from './../Advertisement/Ad.js'
import './../Advertisement/Ad.css'


const NavigatedPages =(props)=>{
let content = useState(contentpost);
    return(
        <>
            <Header />
            
            <div className="nav-grid">
                <div className="navdiv1">
                    <div className="navHeader">
                        <p className="navHeader-p">{props.match.params.topic}</p>
                        <div className="underline"></div>
                    </div>
                    <NavArticles content={content}/>
                </div>
                <div className="navdiv2">
                    <TopPostsComp content={content[0]}/>
                </div>
                <div className="navdiv3">
                    <Ad />
                </div>
            </div>
        </>
    )
}

export default NavigatedPages;