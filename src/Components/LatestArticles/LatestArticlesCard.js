import cardImage from './../../Images/card2.jpg'
import './LatestArticlesCard.css'
const LatestArticlesCard=(props)=>{
// console.log(props.cardContent)
    return(
        <>
          <div className="card2">
            <div className="card2image">
                <img src={cardImage} alt="cardimg"/>
            </div>
            <div className="card2content">
                <p className="card2heading">{props.content[1].heading}</p>
                <p className="card2body-content">{props.content[1].content}</p>
            
            <div className="card2details">
                <p className="card2details-info">Travel <span className="card2details-info-2">/ August 21 2017</span></p>
            </div>
            </div>
        </div>
        </>
    )
}
export default LatestArticlesCard;