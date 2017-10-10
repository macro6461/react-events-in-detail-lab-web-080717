// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component {
  coordinatesClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.coordinatesClick}>Coordinates</button>
    );
  }
}
