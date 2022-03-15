import Avatar from "./Avatar"

export default function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  )
}
