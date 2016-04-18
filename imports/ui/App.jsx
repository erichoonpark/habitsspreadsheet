import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Routines } from '../api/routines.js';
import Routine from './Routine.jsx'

class App extends Component {
	handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Routines.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }


	renderRoutines(){
		return this.props.routines.map((routine) => (
      		<Routine key={routine._id} routine={routine} />
    	));
	}

	render() {
		return (
			<div>
				<AccountsUIWrapper />
				<h1>Routines:</h1>
				<ul>
          			{this.renderRoutines()}
        		</ul>
        		<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new routines"
            />
          </form>
        	</div>
		)
	}
}

App.propTypes = {
  routines: PropTypes.array.isRequired,
};


export default createContainer(() => {
  return {
  	routines: Routines.find({}).fetch(),
  };
}, App);