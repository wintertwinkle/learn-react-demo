import { render } from "react-dom"
import App from "./App"

console.log("hello react")

// JSX: a syntax extenstion to JavaScript
// JSX produces React `elements`

// const element = <h1>Hello, {formatName(user)}</h1>

render(<App />, document.getElementById("root"))
