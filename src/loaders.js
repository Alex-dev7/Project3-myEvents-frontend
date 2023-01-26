// this URL is the dev branch
const URL = "https://myevents-backend-dev.onrender.com"


// loader for index route
export const eventsLoader = async () => {
    const response = await fetch(URL + "/myevents");
    const events = await response.json();

    for(let ev of events)
    {
        ev.dateTime = convertFromUTC(ev.dateTime);
        if(ev?.dateTime)
        {
            ev.dateTime = convertFromUTC(ev.dateTime);
        }
    }

    return events
}

// loader for the show route
export const eventLoader = async ({params}) => {
    const response = await fetch(URL + "/myevents/" + params.id)
    
    const event = await response.json()
    event.dateTime = convertFromUTC(event.dateTime);
    if(event?.dateTime)
    {
        event.dateTime = convertFromUTC(event.dateTime);
    }
    return event
}

function convertFromUTC(utcDateTime){
    return new Date(new Date(utcDateTime) - new Date().getTimezoneOffset() * 60000).toISOString().replace('Z', '');
}