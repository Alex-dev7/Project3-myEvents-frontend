import Timer from "./Timer"
import { Link } from "react-router-dom"


export function Event({event}){
  console.log(event)
  return(
    <div key={event._id}>
      <div>
    <ul>
      <li><Link to={`${event._id} `} >
      {event.title}
      </Link>
      </li>
      <li>{event.dateTime}</li>
    </ul>
    <h3><Timer date={event.dateTime}/></h3>
    </div>
    <Link to={`/update/${event._id} `} >
            <button>Edit &#9998;</button>
        </Link>
  </div>
  )
}