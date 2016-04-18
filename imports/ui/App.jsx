import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Routines } from '../api/routines.js';

import Routine from './Routine.jsx'

class App extends Component {
	renderRoutines(){
		return this.props.routines.map((routine) => (
      		<Routine key={routine._id} routine={routine} />
    	));
	}

	render() {
		return (
			<div>
				<AccountsUIWrapper />
				<ul>
          			{this.renderRoutines()}
        		</ul>
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