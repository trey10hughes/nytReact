import React, { Component } from "react";
import API from "../utils/API";

class SearchBox extends Component {
  // Setting the initial values of this.state
  state = {
    searchterm: "",
    articles: "",
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`search term: ${this.state.searchterm}`);
    API.search(this.state.searchterm);
   
    // alert(`Search Term: ${this.state.searchterm}\nRecords: ${this.state.articles}\nStart Date: ${this.state.startdate}\nEnd Date: ${this.state.enddate}`);
    this.setState({ searchterm: "", articles: "" });
  };

  render() {
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


