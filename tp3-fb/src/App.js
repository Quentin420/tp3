import React, { Component } from 'react';
import Infos from './Components/Infos';
import Profil from './Container/Profil';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profil
          infos={{
            prenom:'prenom',
            nom:'nom',
            naissance:'1990'
          }}
        />
      </div>
    );
  }
}

export default App;
