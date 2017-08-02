// Include React
import React from 'react';

//create results component
class Results extends React.Component {
	constructor(){
		super();

		//set states here
			//set state
			this.state = {
				
			};
	}

	render(){
		return (
			<div className="container">

				<div className="panel panel-default">
				  <div className="panel-heading">Title</div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
			</div>
		)
	}

};

//export the component for use in other files
export default Results;