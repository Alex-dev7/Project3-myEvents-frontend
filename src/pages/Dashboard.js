import React from "react"
import {GlobalCtx} from "../App"
import { Event } from '../components/Event';

const Dashboard = (props) => {
    const { gState, setGState } = React.useContext(GlobalCtx)
    const { url, token } = gState
    const [events, setEvents] = React.useState(null)


    const getEvents = async () => {
        const response = await fetch(url + "/myevents/", {
            method: "get",
            headers: {
                Authorization: "bearer" + token
            }
            
        })
        const json = await response.json()
        setEvents(json)
    }

    React.useEffect(() => {
        getEvents()

    }, [])

    const input = React.useRef(null)

    const handleClick = (event) => {
        console.log(input)
        const myEvents = input.current.value
        fetch(url + "/myevents", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
            body: JSON.stringify({myEvents})
        })
        .then(response => response.json())
        .then(data => {
            input.current.value = ""
            getEvents()
        })
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>New Note</h2>
            <input type="text" name="event" ref={input}/>
            <button onClick={handleClick}>Create Event</button>
            <h2>Events</h2>
            {<ul>
                {events ? events.map(event => (
      <Event event={event}key={event._id}/>
    )) : null}
            </ul>}
        </div>
    ) 
}

export default Dashboard