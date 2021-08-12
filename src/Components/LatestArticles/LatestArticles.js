import LatestArticlesCard from './LatestArticlesCard.js'
import './LatestArticles.css';
const LatestArticles = (props)=>{
    console.log()
    return(
        <>
              <div className="title">
                <p className="two">Latest Articles</p>
                <div className="underline"></div>
            </div>
            <div className="car-container-2">
                <LatestArticlesCard cardContent={props.cardContent.content} />
                <LatestArticlesCard cardContent={props.cardContent.content} />
                <LatestArticlesCard cardContent={props.cardContent.content} />
                <LatestArticlesCard cardContent={props.cardContent.content} />
            </div>
        </>
    )
}
export default LatestArticles;