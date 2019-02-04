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
           { id: 1, prenom: 'Jeanne', nom: 'Agacci', naissance:"1990", image:jeanne, bgcolor:'white', contenu:"Une publication J"},
           { id: 2, prenom: 'Martine', nom: 'Aubry', naissance:"500", image:martine, bgcolor:'white', contenu:"Une publication M"},
           { id: 3, prenom: 'Claude', nom: 'François', naissance:"1800", image:claude, bgcolor:'white', contenu:"Une publication C"}
         ],
      actif:[{id:1, prenom: "Jeanne", nom: 'Agacci', naissance:"1990", image:jeanne, bgcolor:'white', contenu:"Une publication J"}]
   }
  }

  renderProfil(membres){  
    return(
        <div>         
          {this.state.membres.map((membres) => (
            <Profil
             prenom={membres.prenom} 
              />
          ))}
        </div>  
      );
  }

  /**renderProfil(actif){  
    return(
        <div>         
          {this.state.actif.map((actif) => (
            <Profil
             prenom={actif.prenom} 
              />
          ))}
        </div>  
      );
  }*/

  renderInfos(membres){  
    return(
        <div>
          {this.state.membres.map((membres) => (
            <Infos
             prenom={membres.prenom} 
             nom={membres.nom}
             naissance={membres.naissance}
             image={membres.image}
             bgcolor={membres.bgcolor}
              />
          ))}
        </div>  
      );
  }

  /**renderInfos(actif){  
    return(
        <div>
          {this.state.actif.map((actif) => (
            <Infos
             prenom={actif.prenom} 
             nom={actif.nom}
             naissance={actif.naissance}
             image={actif.image}
             bgcolor={actif.bgcolor}
              />
          ))}
        </div>  
      );
  }*/

  renderPublication(membres){  
    return(
        <div>
          {this.state.membres.map((membres) => (
            <Publication
             contenu={membres.contenu} 
              />
          ))}
        </div>  
      );
  }

  /**renderPublication(actif){  
    return(
        <div>
          {this.state.actif.map((actif) => (
            <Publication
             contenu={actif.contenu} 
              />
          ))}
        </div>  
      );
  }*/

  handleClick(e,f,g,h,i,j){
    this.setState({
      actif:{prenom:e,nom:f,naissance:g,image:h,bgcolor:i,contenu:j}
    })   
  }
   

  render() {
    return (
      <div className="App">
        <button  onClick={()=>{this.handleClick("Jeanne","Agacci","1990",jeanne,"white","Une publication J")}}>Jeanne</button>
        <button  onClick={()=>{this.handleClick("Martine","Aubry","500",martine,"white","Une publication M")}}>Martine</button>
        <button  onClick={()=>{this.handleClick("Claude","François","1800",claude,"white","Une publication C")}}>Claude</button>
        <p>{this.state.actif.nom}{this.state.actif.prenom}</p>
        {this.renderProfil(this.state.membres)}
        {this.renderInfos(this.state.membres)}
        {this.renderPublication(this.state.membres)} 
      </div>
    );
  }
}

export default App;
