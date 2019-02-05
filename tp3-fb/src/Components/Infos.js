import React from 'react';
import ReactDOM from 'react-dom';
import './Infos.css';

class Infos extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
			bgcolor: this.props.bgcolor,
		};
	}

	 boxClick = (e) => {
    this.setState({
      bgcolor: "red"
    })
  }
  

	render(){
		return(
			<div className="Infos" style={{backgroundColor: this.state.bgcolor}}>
			<img className="image" src={this.props.image}/>
			<p>{this.props.prenom} {this.props.nom}</p>
			<p>{this.props.naissance}</p>
			<button className="button" onClick={this.boxClick}>Change style</button>
			</div>
			);
	}
}

export default Infos;