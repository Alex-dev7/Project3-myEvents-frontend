import { useState } from "react"
import { Form } from "react-router-dom" 

export function CreateEvent(props){

    const [formData, setFormData] = useState("")

    // handleChange() updates formData state with the form inputs (syncs them)
    const handleChange = (event) => {
        //update form data w change in the form
        setFormData({...formData, [event.target.name]: event.target.valu})
    }

    // function to handle submit (mainly to clear out form inputs)
    const handleSubmit = (event) => {
        // prevent refresh
        event.preventDefault()
        // clear form by resetting
        setFormData({
            title: "",
            url: "",
            dateTime: "",
            description: "",
            username: ""
        })
    }

    return (<>
        <Form onSubmit={handleSubmit} action="/create" method="POST">
            <legend><h1>Add a New Event</h1></legend>

            <input type="text" name="title" placeholder="event title" value={formData.title} onChange={handleChange}/>

            <input type="text" name="url" placeholder="event url" value={formData.url} onChange={handleChange}/>

            <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange}/>

            <textarea name="description" rows="5" placeholder="event description" value={formData.description} onChange={handleChange}/>

            <input type="submit" value="Add New Event"/>

        </Form>
    </>)
}