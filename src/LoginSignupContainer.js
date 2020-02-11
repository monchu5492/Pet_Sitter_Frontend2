import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import LoginForm from './LoginForm'
//import SignupForm from './SignupForm'


//Callbacks:
// setUser()
// getUser()
// createUser()
// logUserOut()

//render either login or signup form based on which one was clicked in the navbar

class LoginSignupContainer extends React.Component{
    render() {
      return(
        <>
        <LoginForm onLogInUser={this.props.onLogInUser}/>
       
        </>
      )
    }
=======
=======
>>>>>>> Stashed changes
// import { Button, Form } from 'semantic-ui-react'
const itinitial_state = {
  user_name: ""
}
class LoginSignUpContainer extends React.Component {
  state = itinitial_state
  render() {
    return(
      
    )
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }
}

export default LoginSignUpContainer