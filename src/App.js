import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FixedMenuLayout from './FixedMenuLayout'
import HomepageLayout from './HomepageLayout'
import NavBar from './NavBar'
import LoginForm from './LoginForm'
import { BrowserRouter as Router, Route } from "react-router-dom"
//state: isUserLogedIn: null

const ownersURL= "http://localhost:3000/owners"
const petsURL= "http://localhost:3000/pets"
const notesURL= "http://localhost:3000/notes"


class App extends React.Component {

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

      </Router>
    </div>
  );
}
}

export default App;
