import { useState } from "react"
import { Form } from "react-router-dom" 

export function CreateEvent(props){

    const initialForm = {
        title: "",
        url: "",
        dateTime: "",
        description: "",
        username: ""
    }

    const [formData, setFormData] = useState(initialForm)

    // handleChange() updates formData state with the form inputs (syncs them)
    const handleChange = (event) => {
        // update form data with change in the form
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // function to handle submit (mainly to clear out form inputs)
    const handleSubmit = (event) => {
        // prevent refresh
        event.preventDefault()
        // clear form by resetting
        setFormData(initialForm)
    }

    return (<>
        <Form onSubmit={handleSubmit} action="/create" method="POST">
            <legend><h1>Add a New Event</h1></legend>

            <input type="input" name="title" placeholder="event title" value={formData.title} onChange={handleChange} required/>

            <input type="input" name="url" placeholder="event url (optional)" value={formData.url} onChange={handleChange}/>

            <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required/>

            <textarea name="description" rows="5" placeholder="event description" value={formData.description} onChange={handleChange} required/>

            <input type="submit" value="Add New Event"/>

        </Form>
    </>)
}