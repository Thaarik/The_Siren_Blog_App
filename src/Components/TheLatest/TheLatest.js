import TheLatestArticleCard from './TheLatestArticleCard.js'
import './TheLatest.css'
import {Link} from 'react-router-dom'
const TheLatestArticle=(props)=>{
    // console.log(props.content)
    return(
        <>
            <div className="title">
                <p>The Latest</p>
                <div className="underline"></div>
            </div>
            <Link to="/The_Siren_Blog_App/blog" style={{textDecoration:'none',color:'black'}}>
            <div className="card-container" >
            <TheLatestArticleCard content={props.content[0]} />
            <TheLatestArticleCard content={props.content[0]} />
            <TheLatestArticleCard content={props.content[0]} />
            </div>
            </Link>
        </>
    )
}

export default TheLatestArticle;