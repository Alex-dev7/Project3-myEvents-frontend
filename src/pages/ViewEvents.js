import { useLoaderData } from 'react-router-dom'
import { Event } from '../components/Event';


export default function ViewEvents(props){
  const events = useLoaderData()

  return (
  <>
    {events.map(event => (
      <Event event={event}key={event._id}/>
    ))}
    
  </>)
}



