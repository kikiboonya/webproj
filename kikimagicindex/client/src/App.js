import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Posts from "./components/Posts.js";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "First title",
      posts: []
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;