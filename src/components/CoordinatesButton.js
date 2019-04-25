import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  getCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>
        Click Me!
      </button>
    )
  }
}
