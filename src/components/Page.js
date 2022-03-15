import { Component } from "react"

export default class Page extends Component {
  constructor(props) {
    super(props)
    // binding
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.state = {
      showWarning: true,
    }
  }

  // Event Handler
  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }))
  }

  // Render
  render() {
    return (
      <div>
        <WarnningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    )
  }
}

function WarnningBanner(props) {
  if (!props.warn) {
    return null
  }

  return <div className="warning">Warnning!</div>
}
