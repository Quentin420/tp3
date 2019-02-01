import React, { Component } from 'react';
import Infos from './Components/Infos';
import Publication from './Components/Publication';
import Profil from './Container/Profil';
import jeanne from './Images/jeanne.jpg';
import './App.css';

class App extends Component {
  /**constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }*/

   

  render() {
    return (
      <div className="App">
      <button onClick={this.updateJeanne}>Jeanne</button>
      <button onClick={this.updateMartine}>Martine</button>
      <button onClick={this.updateClaude}>Claude</button>
        <Profil
          infos={{
            image:jeanne,
            prenom:'prenom',
            nom:'nom',
            naissance:'1990'
          }}
          publication={{contenu:'Voici une publication'}}
        />
      </div>
    );
  }
}

export default App;
