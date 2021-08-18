import MainHomePage from './Components/MainHomePage/MainHomePage.js';
import NavigatedPages from './Components/NavigatedPages/NavigatedPages.js'
// import Content from './Content.json'
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Blog from './Components/Blog/Blog.js'
class App extends Component {
  // state={
  //   content:Content
  // }
  render(){
  return(
    <>
  <BrowserRouter>      
      <Switch>
      <Route path="/blog" component={Blog} />
        <Route path="/:topic" component={NavigatedPages}/>
        <Route path="/home" component={MainHomePage}/>
        
      </Switch>
  </BrowserRouter>

    </>
  )
}
}

export default App;
