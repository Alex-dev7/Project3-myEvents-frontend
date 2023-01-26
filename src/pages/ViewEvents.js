import { useLoaderData } from 'react-router-dom'
import { Event } from '../components/Event';


export function ViewEvents(props){
  const events = useLoaderData()

  return (
  <>
  <div className='items-container'>
    {events.map(event => (
      <Event event={event}key={event._id}/>
    ))}
  </div>

    
  </>)
}



