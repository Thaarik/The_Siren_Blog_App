import './RelatedReads.css'
import image4 from './../../Images/card.jpg'
import DP from './../Blog/BlogImages/dp.png'
import {Link} from 'react-router-dom'
const RelatedReads =()=>{
    return(
        <>
        
        <div className="readCard">
        <div className="readCard-suggestion">
                    <p>Related reads</p>
        </div>
        <Link to="/blog" style={{textDecoration:'none',color:'black'}}>
            <div className="read-container">
            <div className="readCard-img">
                <img src={image4} alt="title"/>
            </div>
            <div className="read-moble-responsive">
            <div className="readCard-title">
                <p>Joshua Tree Overnight Adventure</p>
            </div>
            <div className="profile-info">
                <div className="display-profile">
                    <img src={DP} alt="display" />
                </div>
                <div className="profile-name">
                    <p className="name">Dmitry Nozhenko</p>
                    <p className="profile-date">Jan 28, 2019 · 10 min read</p>
                </div>
                </div>
                </div>
                </div>
                </Link>
        </div>
        </>
    )
}
export default RelatedReads;