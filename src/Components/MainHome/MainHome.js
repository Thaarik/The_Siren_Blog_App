import './MainHome.css'
import image1 from './pexels-luis-del-río-15286.jpg'
import image2 from './pexels-mengliu-di-3064079.jpg'
const MainHome=(props)=>{
    return(
        <div className="grid">
            <div className="image1"><img className="grid1" src={image1} alt="main-img"/>
                
                    <p className="Title1">{props.cardContent[3].heading}</p>
                    <p className="Subtitle">Travel/August 21 2017</p>

            </div>
            <div className="image2"><img className="grid2" src={image2} alt="main-img"/>
                
                    <p className="Title2" id="one">{props.cardContent[4].heading}</p>
                    <p className="Subtitle">Travel/August 21 2017</p>
                
            </div>
            <div className="image3"><img className="grid3" src={image2} alt="main-img"/>
                
                    <p className="Title3" id="one">{props.cardContent[4].heading}</p>
                    <p className="Subtitle">Travel/August 21 2017</p>
                
            </div>
                
        </div>
    )
}

export default MainHome;