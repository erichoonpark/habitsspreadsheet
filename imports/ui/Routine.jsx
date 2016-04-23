import React, { Component, PropTypes } from 'react';
import { Routines } from '../api/routines.js';


// Routine component - represents a single todo item
export default class Routine extends Component {
  deleteThisRoutine() {
    Routines.remove(this.props.routine._id);
  }


  render() {
    var deleteButton = {
      marginLeft:'10px'
    };

    return (

     <div class="text-centered">
     <li>
      <ul className="text">{this.props.routine.text}<i style={deleteButton} className="fa fa-remove fa-lg" onClick={this.deleteThisRoutine.bind(this)}></i></ul>
      </li>
     </div>
     );
  }
}

Routine.propTypes = {
  // This component gets the routine to display through a React prop.
  // We can use propTypes to indicate it is required
  routine: PropTypes.object.isRequired,
};