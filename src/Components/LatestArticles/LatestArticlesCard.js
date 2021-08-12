import cardImage from './../../Images/card2.jpg'
const LatestArticlesCard=(props)=>{
    console.log(props.cardContent[1])
    return(
        <>
          <div className="card2">
            <div className="image2">
                <img src={cardImage} alt="cardimg"/>
            </div>
            <div className="content">
                <p className="heading">{props.cardContent[1].heading}</p>
                <p className="body-content">{props.cardContent[1].content}</p>
            
            <div className="details">
                <p className="details-info">Travel <span className="details-info-2">/ August 21 2017</span></p>
            </div>
            </div>
        </div>
        </>
    )
}
export default LatestArticlesCard;