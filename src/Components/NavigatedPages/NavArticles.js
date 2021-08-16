import './NavArticles.css'
import LatestArticlesCard from './../LatestArticles/LatestArticlesCard.js' 
const NavArticles=(props)=>{
    // console.log(props.content[0][1])
    return(
        <>
            <LatestArticlesCard content={props.content[0]} />
            <LatestArticlesCard content={props.content[0]} />
            <LatestArticlesCard content={props.content[0]} />
            <LatestArticlesCard content={props.content[0]} />
            <LatestArticlesCard content={props.content[0]} />
            <LatestArticlesCard content={props.content[0]} />
            <LatestArticlesCard content={props.content[0]} />
        </>
    )
}
export default NavArticles;