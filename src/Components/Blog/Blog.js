import './Blog.css'
import Header from './../Header/heading.js'
import BlogContainer from './blogContainer'
import RelatedReads from './RelatedReads.js'
const Blog = ()=>{
    return(
        <>
            <div className="blogHeader">
            <Header />
            </div>
            <div className="container">
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