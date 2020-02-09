import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FixedMenuLayout from './FixedMenuLayout'
import HomepageLayout from './HomepageLayout'


//state: isUserLogedIn: null

const ownersURL= "http://localhost:3000/owners"
const petsURL= "http://localhost:3000/pets"
const notesURL= "http://localhost:3000/notes"


class App extends React.Component {
  render() {
  return (
    <div>
      <HomepageLayout />
    </div>
  );
}
}

export default App;
