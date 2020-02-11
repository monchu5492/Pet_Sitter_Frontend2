import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const INITIAL_STATE = {
    name: "",
    address: "",
    image: "",
    background_image: ""
  };

class SignupForm extends React.Component {
    state = INITIAL_STATE;

    handleChange = e => {
          this.setState({ [e.target.name]: e.target.value })
      };

      handleFormSubmit = e => {
        e.preventDefault();
        this.props.onAddUser(this.state);
        this.setState(INITIAL_STATE);
      };



  render() {
    return(
      <>
      <h3 className="form-title">Please sign up to create an account</h3>
      <form className="ui form" onSubmit={this.handleFormSubmit}>
      <div className="field">
        <label>First Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="First Name" />
      </div>
      <div className="field">
        <label>Address</label>
        <input type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Last Name" />
      </div>
      <div className="field">
        <label>Profile Image</label>
        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Image" />
      </div>
      <div className="field">
        <label>Background Image</label>
        <input type="text" name="background_image" value={this.state.background_image} onChange={this.handleChange} placeholder="Background Image" />
      </div>
      <button type="submit" className="ui button">Submit</button>
    </form>
    </>
    )
  }
}

export default SignupForm