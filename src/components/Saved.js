import React from 'react';

//create the Saved component
class Saved extends React.Component {
	constructor(){
		super();

		//set state
		this.state = {

		};
	}

	render(){
		return (
			<div className="container">
				
				<div className="panel panel-default">
				  <div className="panel-heading">Saved Articles</div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
			</div>
		)
	}

};

export default Saved;