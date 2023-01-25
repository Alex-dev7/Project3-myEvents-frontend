// this URL is the dev branch
const URL = "https://myevents-backend-dev.onrender.com"



// loader for index route
export const eventsLoader = async () => {
    const response = await fetch(URL + "/myevents")
    const events = response.json()
    return events
}

// loader for the show route
export const eventLoader = async ({params}) => {
    const response = await fetch(URL + "/myevents/" + params.id)
    const event = await response.json()
    return event
}