import Timer from "./Timer"
import { Link } from "react-router-dom"


export function Event({event}){
  // console.log(event)
 const date = new Date(event.dateTime).toLocaleString()
 
  return(
    <div className="items-container" key={event._id}>
      <div className='item'>
    <ul>
      <li><Link to={`${event._id} `} >
      {event.title}
      </Link>
      </li>
      <li id='fade'>{date}</li>
    </ul>
    <h3><Timer date={event.dateTime}/></h3>

    </div>
    

    <Link id='edit-link' to={`update/${event._id} `} >
              <button>Edit &#9998;</button>
    </Link>
    </div>


  </div>
  )
}