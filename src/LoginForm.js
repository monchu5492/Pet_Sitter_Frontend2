import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class LoginForm extends React.Component {
  render() {
    return(
      <>
      <h3 class="form-title">Please Login to view your account</h3>
      <form class="ui form">
      <div class="field">
        <label>Username</label>
        <input placeholder="First Name" />
      </div>
      <button type="submit" class="ui button">Submit</button>
    </form>
    </>
    )
  }
}

export default LoginForm