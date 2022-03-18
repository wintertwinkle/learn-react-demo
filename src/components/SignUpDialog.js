import { Component } from "react"
import Dialog from "./Dialog"

export default class SignUpDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  render() {
    const login = this.state.login
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me up!</button>
      </Dialog>
    )
  }

  handleChange(e) {
    this.setState({
      login: e.target.value,
    })
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`)
  }
}
