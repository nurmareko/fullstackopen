const Notification = ({ notificationState }) => {
  if (notificationState === null) {
    return null
  } else {
    return <div className={notificationState.type}>{notificationState.message}</div>
  }
}

export default Notification
