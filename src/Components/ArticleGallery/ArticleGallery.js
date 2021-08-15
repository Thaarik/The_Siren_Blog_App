import './Article.css'
import galleryImage from './../../Images/card2.jpg'
const ArticleGallery=()=>{
    return(
        <>
        <div className="gallery">
            <img src={galleryImage} alt="gallery" />
            <p className="imagetitle">Title of vertical gallery</p>
            <p className="imagesubtitle">Travel / August 21 2017</p>
        </div>

        </>
    )
}

export default ArticleGallery;