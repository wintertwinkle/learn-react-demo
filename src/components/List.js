// const numbers = [1, 2, 3, 4, 5]

// const listItems = numbers.map((number) => {
//   return <li>{number}</li>
// })

function ListItem(props) {
  return <li>{props.value}</li>
}

export default function List(props) {
  const items = props.items
  const listItems = items.map((item) => (
    <ListItem key={item.toString()} value={item} />
  ))
  return <ul>{listItems}</ul>
}
