import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FixedMenuLayout from './FixedMenuLayout'
import HomepageLayout from './HomepageLayout'
import NavBar from './NavBar'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { BrowserRouter as Router, Route } from "react-router-dom"
//state: isUserLogedIn: null

const ownersURL= "http://localhost:3000/owners"
const petsURL= "http://localhost:3000/pets"
const notesURL= "http://localhost:3000/notes"


class App extends React.Component {


  state={
    owners:[],
    loggedIn: false
  }

  adduser=owner=>{
     this.setState(prevState=>{
      return { owners: [...prevState.owners, owner]
        }
          
        })
    }
    

handleOnLogIn = () => {
  console.log("ello mate")
}

  render() {
  return (
    <div>
      <Router>
        <NavBar />

        <Route
        path="/"
        exact
        render={() => <HomepageLayout />}
        />

        <Route
          path="/login"
          exact
          render={() => <LoginForm />}
        />
        <Route
        path="/signup"
        exact
        render={()=> <SignupForm onAddUser={this.adduser}/>}
        />

      </Router>
    </div>
  );
}
}

export default App;
