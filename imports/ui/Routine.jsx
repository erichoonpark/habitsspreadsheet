import React, { Component, PropTypes } from 'react';
import { Routines } from '../api/routines.js';
 
// Routine component - represents a single todo item
export default class Routine extends Component {
  deleteThisRoutine() {
    Routines.remove(this.props.routine._id);
  }


  render() {
    return (
      <div class="row">
      	<button className="delete" onClick={this.deleteThisRoutine.bind(this)}>
          &times;
        </button>
      	<li className="text">{this.props.routine.text}</li>
      </div>
    );
  }
}
 
Routine.propTypes = {
  // This component gets the routine to display through a React prop.
  // We can use propTypes to indicate it is required
  routine: PropTypes.object.isRequired,
};