import TopPost from './TopPost.js'
import './TopPostsComp.css'
// import toppoststyle from './TopPost.css'

const TopPostsComp=(props)=>{
    return(
        <>
        <div className="topposts">
            <p>Top Posts</p>
            <div className="underline"></div>
        </div>
        <div className="toppost-grid">
                <TopPost content={props.content}/>
                <TopPost content={props.content}/>
                <TopPost content={props.content}/>
                <TopPost content={props.content}/>
        </div>
        </>
    )
}

export default TopPostsComp;