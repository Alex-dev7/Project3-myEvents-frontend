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
        if (event.target.value ){
             setFormData({...formData, [event.target.name]: event.target.value})

        } else {
            setFormData({...formData, [event.target.name]: null})
        }
       
    }

    // function to handle submit (mainly to clear out form inputs)
    const handleSubmit = (event) => {
        // DO NOT PREVENT REFRESH otherwise it will override the redirect in createAction and stay on same page
        // clear form by resetting
        setFormData(initialForm)
    }

    return (<>
        <Form className='create-form' onSubmit={handleSubmit} action="/create" method="POST">
            <legend><h1>Add a New Event</h1></legend>

            <div className='first-row'>
                <label for="title">Title</label>
                <input id='title' type="input" name="title" placeholder="event title" value={formData.title} onChange={handleChange} required/>
                <label for="url">Event Url</label>
                <input id='url' type="input" name="url" placeholder="event url (optional)" value={formData.url}  onChange={handleChange}/>
            </div>
            <label for="dateTime">Date</label>
            <input id='dateTime' type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required/>

            <label for="description">Description:</label>
                <textarea name="description" rows="5" id='description'  value={formData.description} onChange={handleChange} required/>
            <input id="submitB" type="submit" value="Add New Event"/>

        </Form>
    </>)
}