import React from 'react';
import ReactDOM from 'react-dom';
import './Infos.css';

class Infos extends React.Component{
	/*constructor(props){
		super(props);
		this.state={
			prenom:monprenom,
			nom:monnom,
			naissance:manaissance
		};
	}*/
	render(){
		return(
			<div className="Infos">
			<p>{this.props.infos.prenom}</p>
			<p>{this.props.infos.nom}</p>
			<p>{this.props.infos.naissance}</p>
			</div>
			);
	}
}

export default Infos;