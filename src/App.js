import React from 'react';
import logo from './logo.svg';
import './App.css';

//state: isUserLogedIn: null

const ownersURL= "http://localhost:3000/owners"
const petsURL= "http://localhost:3000/pets"
const notesURL= "http://localhost:3000/notes"


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
