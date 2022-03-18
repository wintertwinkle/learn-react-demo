const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
}

export default function TemperatureInput(props) {
  const temperature = props.temperature
  const scale = props.scale
  const handleChange = function (e) {
    props.onTemperatureChange(e.target.value)
  }
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  )
}

// export default class TemperatureInput extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       temperature: "",
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(e) {
//     this.setState({
//       temperature: e.target.value,
//     })
//   }

//   render() {
//     const temperature = this.state.temperature
//     const scale = this.props.scale
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handleChange} />
//         <BoilingVerdict celsius={parseFloat(temperature)} />
//       </fieldset>
//     )
//   }
// }
