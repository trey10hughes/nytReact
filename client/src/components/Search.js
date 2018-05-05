import React, { Component } from "react";
import request from "request";
import ApiResults from './apiResults';
import API from "../utils/API";

class SearchBox extends Component {
  // Setting the initial values of this.state
  state = {
    searchterm: "",
    articles: "",
  };

  search = searchterm => {
    return request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "30372883e9d3418786ccec672e21332b",
        'q': searchterm,
        'sort': "newest"
      }
    }, function (err, response, body) {
      body = JSON.parse(body);
      console.log(body);
  })
}

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`search term: ${this.state.searchterm}`);
    this.search(this.state.searchterm);
   
    // alert(`Search Term: ${this.state.searchterm}\nRecords: ${this.state.articles}\nStart Date: ${this.state.startdate}\nEnd Date: ${this.state.enddate}`);
    this.setState({ searchterm: "", articles: "" });
  };

  render() {

    {
          /* example of mapping properly
          const expenses = this.state.sessionExpenseInfo.expenses.map((data, i) =>
        <Expense key={i}
          expense={data.expense}
          total={data.total}
          amount={data.myPortion}
          owedTo={data.id} />
         ) */}

    // const results = this.state.

    return (
      <div className="container-fluid d-flex justify-content-between m-1">
      <form className="form-inline">
      <div className="form-group m-1">
        <input
          type="text"
          placeholder="Enter a Search Term"
          name="searchterm"
          value={this.state.searchterm}
          onChange={this.handleInputChange}
        />  
      </div>
      


       
        
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default SearchBox;


