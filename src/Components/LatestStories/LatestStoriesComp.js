import './LatestStoriesComp.css'
import LatestStories from './LatestStories.js'
const LatestStoriesComp = (props)=>{
// console.log(props.stories)
    return(

        <>
            <div className="storiestitle">
                <p>Latest Stories</p>
                <div className="underline"></div>
            </div>
            <div className="stories-container">
                <LatestStories story={props.stories[2]}/>
                <div className="underline2"></div>
                <LatestStories story={props.stories[2]}/>
                <div className="underline2"></div>
                <LatestStories story={props.stories[2]}/>
            </div>
        </>
    )
}

export default LatestStoriesComp;