import { Component } from "react"
import { ThemeContext, themes } from "./theme-context"
import ThemedButton from "./themed-button"
import ThemeTogglerButton from "./theme-toggler-button"

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  )
}

class Demo extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <div>
        <p>ThemedButton</p>
        {/* The ThemedButton button inside the ThemeProvider
        uses the theme from state while the one outside uses
        the default dark theme */}
        <ThemeContext.Provider value={this.state.theme}>
          {/* Toolbar contains a ThemedButton */}
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>outside ThemeContext</ThemedButton>
        </div>
        <hr />
        <p>ThemedTogglerButton</p>
        {/* The entire state is passed to the provider */}
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default Demo
