import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import { Routines } from '../api/routines.js';


class App extends Component {
	render() {
		return (
			<AccountsUIWrapper />
		)
	}
}

export default createContainer(() => {
  return {};
}, App);