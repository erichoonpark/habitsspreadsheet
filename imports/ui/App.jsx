import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
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
			owner: Meteor.userId(), //id of logged in userID
			username: Meteor.user().username //username of logged in user

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

		var inputFormStyle = {
			width: '100%',
			color: 'black',
		};

		return (
			<div>
				<div> <AccountsUIWrapper /></div>
				<div>
					<h1>Routines:</h1>
				</div>
				{ this.props.currentUser ?
					<div>
						<div>
							{this.renderRoutines()}
						</div>
						<form className="new-routine" onSubmit={this.handleSubmit.bind(this)} >
							<input
								style={inputFormStyle}
								type="text"
								ref="textInput"
								placeholder="Type to add new routines"
								/>
						</form></div> : ""
					}
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
			currentUser: Meteor.user(),
		};
	}, App);
