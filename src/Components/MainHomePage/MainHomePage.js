import Header from './../Header/heading.js'
import Navigation from './../Navigation/Navigation.js'
import MainHome from './../MainHome/MainHome.js'
import TheLatestArticle from '../TheLatest/TheLatest.js'
import LatestArticles from './../LatestArticles/LatestArticles.js'
import Ad from './../Advertisement/Ad.js'
import TopPostsComp from './../TopPosts/TopPostsComp.js'
import ArticleGallery from '../ArticleGallery/ArticleGallery.js'
import LatestStoriesComp from './../LatestStories/LatestStoriesComp.js'
import './MainHomePage.css';
import Content from './../../Content.json'
import { Component } from 'react'
class MainHomePage extends Component{
    state={
        content:Content
      }
    render(){
    return (
        <>
        <div className="main-head">
             <Header />
            <Navigation />
        </div>
        <MainHome />
        <TheLatestArticle content={this.state.content} />
        <div className="middle-part">
            <div className="div1"><LatestArticles cardContent={this.state.content} /></div>
            <div className="div2"><Ad /></div>
            <div className="div3"><TopPostsComp content={this.state.content} /></div>
            <div className="div4"><ArticleGallery stories={this.state.content}/></div>
        </div>  
        <LatestStoriesComp stories={this.state.content} />
        </>
       );
    }
}

export default MainHomePage;