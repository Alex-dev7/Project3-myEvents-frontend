import { useState } from "react"
import { Form, useLoaderData } from "react-router-dom"




export function Update(props) {

 console.log(useLoaderData())
  const event = useLoaderData()

    return (
        <>
           <div className="update-container">
           <a href="/"><button>Back</button></a>
                 <h3>Update {event.title}</h3>
                 <Form  action={`/update/${event._id}`} method="post">
                        <input type="input" name="title" defaultValue={event.title}/>
                        <input type="input" name="url" defaultValue={event.url}/>
                        <input type="datetime-local" name="dateTime" defaultValue={event.dateTime} />
                        <textarea name="description" >{event.description}</textarea>
                        <input type="submit" value="Update" />
                 </Form>
           </div>
        </>
    )
  }



