import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
//include components
import Saved from './components/Saved';
import Search from './components/Search';
 

class App extends Component {
  constructor(){
  	super()
  	this.state = {
  		savedArticles: [{ title: "test", date: "test", url: "url" }]
  	}
  }

  render() {
    return (
    	<div className="app">
	      <div className="jumbotron text-center">
	        <h1>React App</h1>
	        
	        <p>lets kill it</p>
	        <p>{JSON.stringify(this.state.savedArticles)}</p>
	      </div>
	      		<Route exact path="/" component={Search} />
				<Route exact path="/saved" component={Saved} />
			
	    </div>
    );
  }
}

export default App;
