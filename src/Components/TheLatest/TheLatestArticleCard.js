import cardImage from "./../../Images/card.jpg"
import './TheLatestArticleCard.css';
const TheLatestArticleCard=(props)=>{
    return(
        <><div className="card">
        <div className="image">
            <img src={cardImage} alt="cardimg"/>
        </div>
        <div className="content">
            <p className="heading">{props.content.heading}</p>
            <p className="body-content">{props.content.content}</p>
        
        <div className="details">
            <p className="details-info">Travel <span className="details-info-2">/ August 21 2017</span></p>
        </div>
        </div>
    </div>
        </>
    )
}
export default TheLatestArticleCard;