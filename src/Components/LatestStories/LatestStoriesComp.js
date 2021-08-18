import './LatestStoriesComp.css'
import LatestStories from './LatestStories.js'
import {Link} from 'react-router-dom'
const LatestStoriesComp = (props)=>{
// console.log(props.stories)
    return(

        <>
            <div className="storiestitle">
                <p>Latest Stories</p>
                <div className="underline"></div>
            </div>
            <div className="stories-container">
            <Link to="/The_Siren_Blog_App/blog" className="top" style={{textDecoration:'none',color:'black'}} ><LatestStories story={props.stories[2]}/></Link>
                <div className="underline2"></div>
                <Link to="/The_Siren_Blog_App/blog" className="top" style={{textDecoration:'none',color:'black'}} ><LatestStories story={props.stories[2]}/></Link>
                <div className="underline2"></div>
                <Link to="/The_Siren_Blog_App/blog" className="top" style={{textDecoration:'none',color:'black'}} ><LatestStories story={props.stories[2]}/></Link>
            </div>
        </>
    )
}

export default LatestStoriesComp;