
function CurrentTime() {
  let currentTime = new Date()
  return (
    <h3>Current Time In Bharat - {currentTime.toLocaleTimeString()} </h3>
  )
}

export default CurrentTime