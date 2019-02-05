import React from 'react';
import ReactDOM from 'react-dom';
import './Publication.css';

class Publication extends React.Component{
	
	render(){
		return(
			<div className="Publication">
			<p>{this.props.contenu}</p>
			</div>
			);
	}
}

export default Publication;