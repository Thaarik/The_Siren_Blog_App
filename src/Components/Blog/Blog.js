import './Blog.css'
import Header from './../Header/heading.js'
import BlogContainer from './blogContainer'
import RelatedReads from './RelatedReads.js'
import clap from './BlogImages/rythm.svg'
import share from './BlogImages/share.svg'
const Blog = ()=>{
    return(
        <>
            <div className="blogHeader">
            <Header />
            </div>
           
            <div className="container">
            <div className="info">
                <div className="clap">
                    <img src={clap} alt=""/>
                    <p>9.3K</p>
                </div>
                <div className="share">
                    <img src={share} alt=""/>
                    <p>Share this article</p>
                </div>
            </div>
                <BlogContainer />
            </div>  
            <p className="more">More From The Siren</p>
            <div className="RelatedReads-container">
                <RelatedReads />
                <RelatedReads />
                <RelatedReads />
            </div>
        </>
    )
}

export default Blog;