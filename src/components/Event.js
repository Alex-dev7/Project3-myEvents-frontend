
import { Link } from "react-router-dom"


export function Event({event}){
  console.log(event)
  return(
    <div key={event._id}>
    <ul>
      <li><Link to={`${event._id} `} >
      {event.title}
      </Link>
      </li>
      <li><a href={event.url} target="_blank" rel="noreferrer">{event.url}</a></li>
      <li>{event.dateTime}</li>
      <li>{event.description}</li>
    </ul>
  </div>
  )
}