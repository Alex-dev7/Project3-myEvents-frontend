import Timer from "./Timer"
import { Link } from "react-router-dom"


export function Event({event}){
  // console.log(event)
 const date = new Date(event.dateTime).toLocaleString()
 
  return(
    <div className='item' key={event._id}>
    <ul>
      <li><Link to={`${event._id} `} >
      {event.title}
      </Link>
      </li>
      <li id='fade'>{date}</li>
    </ul>
    <h3><Timer date={event.dateTime}/></h3>
  </div>
  )
}