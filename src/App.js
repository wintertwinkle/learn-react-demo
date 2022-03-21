import ConsumingMultipleContextsDemo from "./context/consuming-multiple-contexts"

export default function App() {
  const user = {
    name: "wintertwinkle",
  }
  const theme = "dark"
  return (
    <div>
      <ConsumingMultipleContextsDemo signedInUser={user} theme={theme} />
    </div>
  )
}
