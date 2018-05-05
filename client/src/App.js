import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import ApiResults from "./components/apiResults";
import SavedArticles from "./components/savedArticles";

class App extends Component {

  state = {
    testTitle: "NYT React Search App",
    testProps1: "This is the ApiResults component",
    testProps2: "This is the SavedArticles component"
  }

  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="nyt.jpg" className="App-logo" alt="NYT" />
          <h2>{this.state.testTitle}</h2>
        </div>
        <Search />  
        <ApiResults
            test = {this.state.testProps1}
         />
        <SavedArticles 
            test = {this.state.testProps2}
        />

        {
          /* example of mapping properly
          const expenses = this.state.sessionExpenseInfo.expenses.map((data, i) =>
        <Expense key={i}
          expense={data.expense}
          total={data.total}
          amount={data.myPortion}
          owedTo={data.id} />
         ) */}
      </div>
    );
  }
}

export default App;
