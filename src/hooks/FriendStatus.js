import React, { useState, useEffect } from "react"

function FriendStatus(props) {
  const [isOnLine, setIsOnLine] = useState(null)

  function handleStatusChange(status) {
    setIsOnLine(status.isOnLine)
  }

  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    return () => {
      //   ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnLine === null) {
    return "Loading..."
  }
  return isOnLine ? "Online" : "Offline"
}

export default FriendStatus
