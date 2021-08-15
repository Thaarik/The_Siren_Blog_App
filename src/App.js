import MainHomePage from './Components/MainHomePage/MainHomePage.js';
import NavigatedPages from './Components/NavigatedPages/NavigatedPages.js'
// import Content from './Content.json'
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
class App extends Component {
  // state={
  //   content:Content
  // }
  render(){
  return(
    <>
  <BrowserRouter>      
      <Switch>
        <Route path="/:topic" component={NavigatedPages}/>
        <Route path="/" component={MainHomePage}/>
        
      </Switch>
  </BrowserRouter>

    </>
  )
}
}

export default App;
