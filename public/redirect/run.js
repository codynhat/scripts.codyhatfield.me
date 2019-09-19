const urlParams = new URLSearchParams(window.location.search)
const new_uri = urlParams.get('uri')

window.location = new_uri
