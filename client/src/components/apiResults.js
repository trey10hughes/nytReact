import React, { Component } from "react";


class ApiResults extends Component {
    // Setting the initial values of this.state
    state = {

    };



    // When the form is submitted, prevent the default event and alert the username and password
    handleSaveButton = event => {
        event.preventDefault();
        //save button functionality will go here
    };

    render() {
        return (
            <div>
                {this.props.test}
            </div>
            
        );
    }
}

export default ApiResults;


