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
      <Route path="/The_Siren_Blog_App/blog" component={Blog} />
        <Route path="/The_Siren_Blog_App/:topic" component={NavigatedPages}/>
        <Route path="/The_Siren_Blog_App" component={MainHomePage}/>
        
      </Switch>
  </BrowserRouter>

    </>
  )
}
}

export default App;
