const URL = "http://localhost:4000"

// loader for index route
export const eventsLoader = async () => {
    const response = await fetch(URL + "/myevents")
    const events = response.json()
    return events
}