import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import SavedArticles from "./components/savedArticles";

class App extends Component {

  state = {
    testTitle: "NYT React Search App",
    testProps: "This is the SavedArticles component"
  }

  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="nyt.jpg" className="App-logo" alt="NYT" />
          <h2>{this.state.testTitle}</h2>
        </div>
        <Search />  
        <SavedArticles 
            test = {this.state.testProps}
        />
      </div>
    );
  }
}

export default App;
