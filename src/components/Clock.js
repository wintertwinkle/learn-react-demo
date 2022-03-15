import React from "react"

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  // Lifecircle

  // triggered after the component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  // Methods
  tick() {
    this.setState({
      date: new Date(),
    })
  }

  // The render method will be called each time an update happens.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
