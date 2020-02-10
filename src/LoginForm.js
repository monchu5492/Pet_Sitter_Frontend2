import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends React.Component {
  render() {
    return(
      <form class="ui form">
      <div class="field">
        <label>First Name</label>
        <input placeholder="First Name" />
      </div>
      <div class="field">
        <label>Address</label>
        <input placeholder="Last Name" />
      </div>
      <button type="submit" class="ui button">Submit</button>
    </form>
    )
  }
}

export default LoginForm