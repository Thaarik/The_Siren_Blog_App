import Header from './../Header/heading.js'
import MainHome from './../MainHome/MainHome.js'

import LatestArticles from './../LatestArticles/LatestArticles.js'
import Ad from './../Advertisement/Ad.js'
import TopPostsComp from './../TopPosts/TopPostsComp.js'
import ArticleGallery from '../ArticleGallery/ArticleGallery.js'
import LatestStoriesComp from './../LatestStories/LatestStoriesComp.js'
import TheLatestArticle from '../TheLatest/TheLatest.js'
import './MainHomePage.css';
import axios from 'axios';
import {useState,useEffect} from 'react'

function MainHomePage(){
    const [content,setContent]=useState("");
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res =await axios.get("/api/contents")
            setContent(res.data)
        }
        fetchPosts()
    },[])
    return (
        <>
        <Header />
        {content?<MainHome cardContent={content}/>:""}
        {content?<><TheLatestArticle content={content} />
        <div className="middle-part">
            <div className="div1"><LatestArticles cardContent={content} /></div>
            <div className="div2"><Ad /></div>
            <div className="div3"><TopPostsComp content={content} /></div>
            <div className="div4"><ArticleGallery stories={content}/></div>
        </div>  
        <LatestStoriesComp stories={content} /></>:""}
        
        </>
       );
}

export default MainHomePage;