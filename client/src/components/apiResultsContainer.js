import React, { Component } from "react";
import ApiResults from './apiResults';


class ApiResultsContainer extends Component {

    // Setting the initial values of this.state
    state = {
    };



    // When the form is submitted, prevent the default event and alert the username and password
    handleSaveButton = event => {
        event.preventDefault();
        //save button functionality will go here
    };

    render() {

        console.log(typeof this.props.data);
        

        return (
            <div>
                This will contain the api results
            </div>
            
        );
    }
}

export default ApiResultsContainer;


