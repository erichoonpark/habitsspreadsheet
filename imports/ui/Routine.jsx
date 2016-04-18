import React, { Component, PropTypes } from 'react';
 
// Routine component - represents a single todo item
export default class Routine extends Component {
  render() {
    return (
      <li>{this.props.routine.text}</li>
    );
  }
}
 
Routine.propTypes = {
  // This component gets the routine to display through a React prop.
  // We can use propTypes to indicate it is required
  routine: PropTypes.object.isRequired,
};