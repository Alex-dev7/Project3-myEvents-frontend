import { useLoaderData } from 'react-router-dom'
import { Event } from '../components/Event';


export function ViewEvents(props){
  const events = useLoaderData()

  return (
  <>
 
  <div className='items-container'>
    <p className='count'>| {events.length} events |</p>
    {events ? events.map(event => (
      <Event event={event}key={event._id}/>
    )) : null}
  </div>

    
  </>)
}



