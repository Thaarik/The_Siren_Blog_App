import './LatestStories.css'

const LatestStories = (props)=>{
   
    return(
        <>
         
            <div className="stories-card">
                <div className="story-heading">
                    <p>{props.story.heading}</p>
                </div>
                <div className="story-content">
                    <p>{props.story.content}</p>
                </div>
                <div className="card2details">
                <p className="card2details-info">TECH <span className="card2details-info-2">/ TODAY AT 11:54</span></p>
            </div>

            </div>
        </>

    )
}

export default LatestStories;