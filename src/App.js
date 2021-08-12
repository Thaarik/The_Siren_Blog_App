import MainHomePage from './Components/MainHomePage/MainHomePage.js';
import Content from './Content.json'
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state={
    content:Content
  }
  render(){
  return(
    <>
      <MainHomePage content={this.state.content}/>
    </>
  )
}
}

export default App;
