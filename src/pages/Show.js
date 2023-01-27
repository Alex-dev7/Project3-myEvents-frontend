import { useLoaderData, Form, Link } from "react-router-dom"
import Timer from "../components/Timer"

function Show(props){
    const event = useLoaderData()
    const date = new Date(event.dateTime).toLocaleString()

    return (<>
    <div className='event-timer'>
        <span>Time left:</span> 
        <Timer date={event.dateTime}/>
    </div>

            <div className="event">
                <h1>{event.title}</h1>
                <h3><a href={event.url}>Link to Event</a></h3>
                <h3>Date and Time: {date}</h3>
                <div className='description-section'>
                   <h4>Description:</h4> 
                    <p>{event.description}</p>
                </div>
                
            </div>
        <div className='show-buttons'>
        <Link to={`/update/${event._id} `} >
            <button>Edit &#9998;</button>
        </Link>
        <Form action={`/delete/${event._id}`} method="POST">
            <input type="submit" value="Delete"/>
        </Form>
        </div>

    </>)
}

export default Show