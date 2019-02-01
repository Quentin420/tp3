import React from 'react';
import ReactDOM from 'react-dom';
import './Infos.css';

class Infos extends React.Component{
	constructor(props){
		super(props);
		this.state={
			prenom:this.props.name,
			nom:this.props.nom,
			naissance:this.props.naissance,
			image: this.props.image
		};
	}
  

	render(){
		return(
			<div className="Infos">
			<img className="image" src={this.props.infos.image}/>
			<p>{this.props.infos.prenom} {this.props.infos.nom}</p>
			<p>{this.props.infos.naissance}</p>
			</div>
			);
	}
}

export default Infos;