import UserInfo from "./UserInfo"

export default function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {/* formateDate(props.date) */}
        {props.date}
      </div>
    </div>
  )
}
