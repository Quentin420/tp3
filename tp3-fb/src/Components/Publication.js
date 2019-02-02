import React from 'react';
import ReactDOM from 'react-dom';
import './Publication.css';

class Publication extends React.Component{
	constructor(props){
		super(props);
		this.state={
			contenu:this.props.contenu,
		};
	}
	render(){
		return(
			<div className="Publication">
			<p>{this.state.contenu}</p>
			</div>
			);
	}
}

export default Publication;