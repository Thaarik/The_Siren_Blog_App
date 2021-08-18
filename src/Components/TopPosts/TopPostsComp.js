import TopPost from './TopPost.js'
import './TopPostsComp.css'
// import toppoststyle from './TopPost.css'
import {Link} from 'react-router-dom'
const TopPostsComp=(props)=>{
    return(
        <>
        <div className="topposts">
            <p>Top Posts</p>
            <div className="underline"></div>
        </div>
        <div className="toppost-grid">
        <Link to="/The_Siren_Blog_App/blog" className="top" style={{textDecoration:'none',color:'black'}} ><TopPost content={props.content}/></Link>
        <Link to="/The_Siren_Blog_App/blog" style={{textDecoration:'none',color:'black'}} ><TopPost content={props.content}/></Link>
        <Link to="/The_Siren_Blog_App/blog" style={{textDecoration:'none',color:'black'}} ><TopPost content={props.content}/></Link>
        <Link to="/The_Siren_Blog_App/blog" style={{textDecoration:'none',color:'black'}} ><TopPost content={props.content}/></Link>
        </div>
        </>
    )
}

export default TopPostsComp;