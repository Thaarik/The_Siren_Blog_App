import './TopPost.css'
import cardImagee from './../../Images/CARD4.jpg'
const TopPost =(props)=>{
    return(
        <> 
        <div className="card3">
        <div className="card3image">
                <img src={cardImagee} alt="cardimg"/>
            </div>
            <div className="card3-header-content">
                <div className="card3-header">
                <p>{props.content[1].heading}</p>
                </div>
            
            <div className="card2details">
                <p className="card2details-info">Travel <span className="card2details-info-2">/ August 21 2017</span></p>
            </div>
            </div>
        </div>
    </>
    )
}

export default TopPost;