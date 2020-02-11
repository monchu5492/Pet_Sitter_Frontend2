import React from 'react';

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


//Callbacks:
// setUser()
// getUser()
// createUser()
// logUserOut()

//render either login or signup form based on which one was clicked in the navbar


export default class LoginSignupContainer extends React.Component {
  render() {
      return(
        <>
        <LoginForm onLogInUser={this.props.onLogInUser}/>
  
        </>
      )
    }
  }

// export default LoginSignUpContainer