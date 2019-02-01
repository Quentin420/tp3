import React from 'react';
import ReactDOM from 'react-dom';
import Infos from '../Components/Infos';
import './Profil.css';


class Profil extends React.Component{
	render(){
		return(
			<div className="Profil">
				<Infos infos={this.props.infos}/>
			</div>

		);
	}

}

export default Profil;