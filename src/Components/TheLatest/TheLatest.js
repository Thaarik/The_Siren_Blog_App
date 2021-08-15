import TheLatestArticleCard from './TheLatestArticleCard.js'
import './TheLatest.css'
const TheLatestArticle=(props)=>{
    // console.log(props.content)
    return(
        <>
            <div className="title">
                <p>The Latest</p>
                <div className="underline"></div>
            </div>
            <div className="card-container" >
            <TheLatestArticleCard content={props.content[0]} />
            <TheLatestArticleCard content={props.content[0]} />
            <TheLatestArticleCard content={props.content[0]} />
            </div>
        </>
    )
}

export default TheLatestArticle;