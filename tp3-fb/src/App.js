import React, { Component } from 'react';
import Infos from './Components/Infos';
import Publication from './Components/Publication';
import Profil from './Components/Profil';
import jeanne from './Images/jeanne.jpg';
import martine from './Images/martine.jpg';
import claude from './Images/claude.jpg';
import './App.css';

class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
       membres: [
           { id: 1, prenom: 'Jeanne', nom: 'Agacci', naissance:"1990", image:jeanne, bgcolor:'white', contenu:"Je suis Jeanne"},
           { id: 2, prenom: 'Martine', nom: 'Aubry', naissance:"500", image:martine, bgcolor:'white', contenu:"Je suis Martine"},
           { id: 3, prenom: 'Claude', nom: 'François', naissance:"1800", image:claude, bgcolor:'white', contenu:"J'étais Claude"}
         ],
      actif:1
   }
  }

  //Props : c'est l'élement qui est reçu
  //State :c'est l'élement qui est crée a l'intérieur

  renderProfil(membres){  
    return(
        <div>         
          {this.state.membres.map((membres) => (
            <Profil
             prenom={membres.prenom} 
             onClick={() => this.handleClick(membres.id)}
              />
          ))}
        </div>  
      );
  }

  renderInfos(membres){  
    let disp;

    {this.state.membres.map((membres) => {
      if(membres.id===this.state.actif){
        disp = <Infos
             prenom={membres.prenom} 
             nom={membres.nom}
             naissance={membres.naissance}
             image={membres.image}
             bgcolor={membres.bgcolor}
              />
          }})}
      
            
    return disp;
  }

  renderPublication(membres){  
    let disp;
    {this.state.membres.map((membres) => {
      if(membres.id===this.state.actif){
        disp = <Publication
             contenu={membres.contenu}
              />
          }})}        
    return disp;
  }

  handleClick(e){

    this.setState({
      actif:e
    }
    ) 

  }   

  render() {
    return (
      <div className="App">        
        {this.renderProfil(this.state.membres)}
        {this.renderInfos(this.state.membres)}
        {this.renderPublication(this.state.membres)} 
      </div>
    );
  }
}

export default App;
