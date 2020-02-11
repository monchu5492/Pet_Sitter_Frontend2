import React from 'react';
import './App.css';
import HomepageLayout from './HomepageLayout'
import NavBar from './NavBar'
import LoginSignupContainer from  './LoginSignUpContainer'
import MyProfile from './MyProfile'
import SignupForm from './SignupForm'
import { BrowserRouter as Router, Route } from "react-router-dom"

const ownersURL = "http://localhost:3000/owners"
const petsURL = "http://localhost:3000/pets"
const notesURL = "http://localhost:3000/notes"





//Fetch in here

//function setUser()

//function getUser()

//function createUser()

////function logOutUser()



class App extends React.Component {
  State = { 
    owners: [],
    isLoggedIn: false,
    user: {}
  }
  
  componentDidMount() {
    this.getAllOwners()
  }

  getAllOwners = () => {
    fetch(ownersURL)
    .then(res => res.json())
    .then(owner => this.setState({ owners: owner}))
  }

  

  onLogInUser = (username) => {
    
    console.log(username)
    this.getAllOwners(username)
    // this.setState(prevState => {
    //   return { o}
    // })

    let ownersfiltered = this.state.owners.filter(owner => owner.name == username)

    this.setState({isLoggedIn: true, user: ownersfiltered})
  }



  addUser = owner => {
    this.setState(prevState => {
      return {
        owners: [...prevState.owners, owner]
      }
    }, () => this.postOwner(owner))
  }

  postOwner = (owner) => {
    fetch(ownersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(owner)
    }).then(res => res.json())
      .then(data => console.log(data))
      //send to owner profile 
  }




  handleOnLogIn = () => {
    console.log("ello mate")
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />{

          <Route
            path="/"
            exact
            render={() => <HomepageLayout />}
          />}
                {
           <Route
          path="/login"
          exact
          render={() => 
          <LoginSignupContainer onLogInUser={this.onLogInUser}/>}
          />}
        
            {
        <Route
        path="/signup"
        exact
        render={()=> <SignupForm onAddUser={this.addUser}/>}
        />}
        
            {
        <Route
          path="/signup"
          exact
          render={() => 
          <LoginSignupContainer />}
          />}
        

          {
        <Route
        path="/profile"
        exact
        render={() => <MyProfile />}
        />
          }
      

        </Router>
      </div>
    );
  }
}

export default App;
