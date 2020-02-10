import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FixedMenuLayout from './FixedMenuLayout'
import HomepageLayout from './HomepageLayout'
import ResponsiveContainer from './HomepageLayout'

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
      <HomepageLayout />
    </div>,
    <>
    <ResponsiveContainer handleOnLogIn={this.handleOnLogIn} /> 
    </>
  );
}
}

export default App;
