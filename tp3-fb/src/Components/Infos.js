import React from 'react';
import ReactDOM from 'react-dom';
import './Infos.css';

class Infos extends React.Component{
	constructor(props){
		super(props);
		this.state={
			prenom:this.props.prenom,
			nom:this.props.nom,
			naissance:this.props.naissance,
			image: this.props.image,
			bgcolor: this.props.bgcolor,
		};
	}

	 boxClick = (e) => {
    this.setState({
      bgcolor: "green"
    })
  }
  

	render(){
		return(
			<div className="Infos" style={{backgroundColor: this.state.bgcolor}}>
			
			<img className="image" src={this.state.image}/>
			<p>{this.state.prenom} {this.state.nom}</p>
			<p>{this.state.naissance}</p>
			<button className="button" onClick={this.boxClick}>Change style</button>
			</div>
			);
	}
}

export default Infos;