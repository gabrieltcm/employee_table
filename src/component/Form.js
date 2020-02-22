import React, { Component } from "react";

class Form extends Component {
  // will run every time a change is made to an input. The event will be passed through,
  // and we'll set the state of Form to have the name (key)
  // and value of the inputs.
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // calls the function, and pass the Form state through as the character parameter defined earlier
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  // We'll need the constructor()
  // to use this, and to receive the props of the parent.
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: ""
    };

    this.state = this.initialState;
  }

  render() {
    const { name, job } = this.state;
    return (
      <form>
        {/* for becomes htmlFor, class becomes className */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit!!" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
