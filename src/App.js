import React, { Component } from "react";
import Table from "./component/Table";
import Form from "./component/Form";

class App extends Component {
  // Initializing an empty array
  state = {
    listOfEmployees: []
  };

  // This particular method is testing an index vs. all the indices in the array,
  // and returning all but the one that is passed through.
  removeEmployee = index => {
    const { listOfEmployees } = this.state;
    // You must use this.setState() to modify an array.
    this.setState({
      // filter does not mutate but rather creates a new array,
      // and is a preferred method for modifying arrays in JavaScript.
      listOfEmployees: listOfEmployees.filter((listOfEmployees, i) => {
        return i !== index;
      })
    });
  };

  // handles the submit action
  handleSubmit = employee => {
    this.setState({
      listOfEmployees: [...this.state.listOfEmployees, employee]
    });
  };

  render() {
    const { listOfEmployees } = this.state;

    return (
      <div className="container">
        <Table
          employeeData={listOfEmployees}
          removeEmployee={this.removeEmployee}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
