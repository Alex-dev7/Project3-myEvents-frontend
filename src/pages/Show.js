import { useLoaderData, Form, Link } from "react-router-dom"


function Show(props){
    const event = useLoaderData()

    return (<>
        <div className="event">
        <Link to={`/update/${event._id} `} >
            <button>Edit &#9998;</button>
    </Link>
            <h1>{event.title}</h1>
            <h2><a href={event.url}>Link to Event</a></h2>
            <h3>Date and Time: {event.dateTime}</h3>
            <h4>{event.description}</h4>
        </div>
        <Form action={`/delete/${event._id}`} method="POST">
            <input type="submit" value="Delete"/>
        </Form>
    </>)
}

export default Show