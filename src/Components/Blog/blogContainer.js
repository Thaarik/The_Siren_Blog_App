import './blogContainer.css'
import DP from './BlogImages/dp.png'
import titleImage from './BlogImages/titleImage.png'
import screenshot from './BlogImages/screenshot.png'
import share from './BlogImages/share.svg'
import clap from './BlogImages/rythm.svg'
const BlogContainer =()=>{
    return(
        <>
            <div className="blog-heading">
                <p>5 Ways to animate a React app.</p>
            </div>
            <div className="profile-info">
                <div className="display-profile">
                    <img src={DP} alt="display" />
                </div>
                <div className="profile-name">
                    <p className="name">Dmitry Nozhenko</p>
                    <p className="profile-date">Jan 28, 2019 · 10 min read</p>
                </div>
                <div className="social-media">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-youtube-square"></i>
                </div>
            </div>
            <div className="blog">
                <div className="title-image">
                    <img src={titleImage} alt="title"/>
                </div>
                <div className="article">
                    <p>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</p>
                
                    <p>Let’s talk about them</p>
                </div>
                <div className="screenshot">
                    <img src={screenshot} alt="screenshot"/>
                </div>
            </div>
            <div className="tags">
                <div className="react-tag"><p>React</p></div>
                <div className="js-tag"><p>Javascript</p></div>
                <div className="animation-tag"><p>Animation</p></div>
            </div>
            <div className="clap">
                <img src={clap} alt="clap"/>
                <p>9.3K claps</p>
            </div>
            <div className="profile-info">
                <div className="display-profile">
                    <img src={DP} alt="display" />
                </div>
                <div className="profile-name">
                    <p className="written">WRITTEN BY</p>
                    <p className="name">Dmitry Nozhenko</p>
                    <p className="profile-date">Jan 28, 2019 · 10 min read</p>
                </div>
            </div>
        </>
    )
}
export default BlogContainer;