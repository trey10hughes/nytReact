import React, { Component } from "react";
import request from "request";
import ApiResultsContainer from './apiResultsContainer';


class SearchBox extends Component {
  // Setting the initial values of this.state
 state = {
    searchterm: "",
    articles: "",
  };

  search = searchterm => {

    var that = this;
    var resultsArray = [];

    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "30372883e9d3418786ccec672e21332b",
        'q': searchterm,
        'sort': "newest"
      }
    }, function (err, response, body) {
      body = JSON.parse(body);
      console.log(body.response.docs);
      for (var i = 0; i < body.response.docs.length; i++) {
        var arrItem = {
          web_url: body.response.docs[i].web_url,
          headline: body.response.docs[i].headline,
        }
        resultsArray.push(arrItem);
      }
      Array.isArray(resultsArray);
      // console.log(typeof body.response.docs);
      that.setState({ articles: resultsArray});

      // I absolute cannot figure out why this does not return the data as an array.
      // It always comes back as an object (despite CLEARLY showing up as an array in the console)
      // I can't map it to the apiResults component without it being an array, so I can't move forward really. 
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

    console.log(typeof this.state.articles);
  
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

        <ApiResultsContainer
          data={this.state.articles}
        />
      </div>
    );
  }
}

export default SearchBox;


