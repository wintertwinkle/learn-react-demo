import { Component } from "react"
import { ThemeContext } from "./theme-context"

class ThemedButton extends Component {
  render() {
    let props = this.props
    let theme = this.context
    console.log(`Context:`)
    console.log(this.context)
    return <button {...props} style={{ backgroundColor: theme.background }} />
  }
}

ThemedButton.contextType = ThemeContext

export default ThemedButton
