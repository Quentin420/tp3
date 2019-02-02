import React from 'react';
import ReactDOM from 'react-dom';
import Infos from '../Components/Infos';
import Publication from '../Components/Publication';
import './Profil.css';


class Profil extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			prenom: this.props.prenom
		}
		
	}

	render(){
		return(
			<button>{this.state.prenom}</button>
			)
	}

}

export default Profil;