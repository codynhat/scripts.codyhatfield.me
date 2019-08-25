const urlParams = new URLSearchParams(window.location.search)
const message_id = urlParams.get('message_id')

window.location = "message://"+message_id
