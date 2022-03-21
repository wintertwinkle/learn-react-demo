import React, { Component } from "react"

// Theme context, default to light theme
const ThemeContext = React.createContext("light")

// Signed-in user context
const UserContext = React.createContext({
  name: "Guest",
})

class ConsumingMultipleContextsDemo extends Component {
  render() {
    const { signedInUser, theme } = this.props

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

// Layout component
function Layout() {
  return (
    <div>
      <Content />
    </div>
  )
}

// Content component
function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(user) => <ProfilePage user={user} theme={theme} />}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

function ProfilePage(props) {
  const user = props.user
  const theme = props.theme
  return (
    <div>
      <h1>ProfilePage</h1>
      <p>user: {user.name}</p>
      <p>Theme: {theme}</p>
    </div>
  )
}

export default ConsumingMultipleContextsDemo
