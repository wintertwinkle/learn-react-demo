import { Component } from "react"
import Greeting from "./Greeting"

export default class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      isLoggedIn: false,
    }
  }
  // event handler
  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    )
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}
