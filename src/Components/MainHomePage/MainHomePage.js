import Header from './../Header/heading.js'
import Navigation from './../Navigation/Navigation.js'
import MainHome from './../MainHome/MainHome.js'
import TheLatestArticle from '../TheLatest/TheLatest.js'
import LatestArticles from './../LatestArticles/LatestArticles.js'
import './MainHomePage.css';

const MainHomePage=(props)=>{
    return (
        <>
        <Header />
        <Navigation />
        <MainHome />
        <TheLatestArticle content={props} />
        <div className="middle-part">
            <div className="div1"><LatestArticles cardContent={props} /></div>
            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4"></div>
        </div>  
        </>
       );
}

export default MainHomePage;