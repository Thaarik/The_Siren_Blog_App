import LatestArticlesCard from './LatestArticlesCard.js'
import './LatestArticles.css';
const LatestArticles = (props)=>{
//    console.log(props.cardContent)
  
    return(
        <>
              <div className="title">
                <p className="two">Latest Articles</p>
                <div className="underline"></div>
            </div>
            <div className="car-container-2">
                <LatestArticlesCard  content={props.cardContent} />
                <LatestArticlesCard content={props.cardContent} />
                <LatestArticlesCard content={props.cardContent} />
                <LatestArticlesCard content={props.cardContent} />
            </div>
        </>
    )
}
export default LatestArticles;