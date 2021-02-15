import { apiMessageSender } from './api/apiMessageSender.js';
import { getPageQueryParameters } from './queryParameters.js'

const setHeading = async () => {
    let json = await apiMessageSender.get("/")
    console.log(json)
    document.getElementById('heading').innerHTML = json.message
}

window.onload = setHeading

console.log(`Query parameters: ${JSON.stringify(getPageQueryParameters())}`)