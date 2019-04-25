import React, {Component} from 'react'

export default class DelayedButton extends Component {

  printStuff = (event) => {
    event.persist()
    setTimeout( () =>
      {this.props.onDelayedClick(event)},
      this.props.delay
    )
  }

  render(){
    return (
      <button onClick={this.printStuff}>
        Delay Me!
      </button>
    )
  }
}
