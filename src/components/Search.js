import React from 'react';
import Results from './Results';
//include all sub-components
// import Results from './Results';

//create the Search component
class Search extends React.Component {
	constructor(){
		super();

		//set state
		this.state = {

		};
	}

	// Here we render the function
  render() {
    return (
      <div className="container">


        	<form>
			  <div className="form-group">
			    <label for="email">Topic</label>
			    <input type="string" className="form-control" id="topic"></input>
			  </div>
			  <div className="form-group">
			    <label for="">Start Year</label>
			    <input type="date" className="form-control" id="startYear"></input>
			  </div>
			  <div className="form-group">
			    <label for="">End Year</label>
			    <input type="date" className="form-control" id="endYear"></input>
			  </div>
			  <button type="submit" className="btn btn-default">Submit</button>
			</form>

      		<Results />
      		
      </div>
    );
  }
};



//export the component back for use in other files
export default Search;