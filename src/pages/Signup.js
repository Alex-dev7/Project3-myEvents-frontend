import React from "react"
import {GlobalCtx} from "../App"

const Signup = (props) => {
    // useContext hook is used to access the global state and url from the App component
    const { gState } = React.useContext(GlobalCtx)
    const { url } = gState

    // initial form state
    const blank = {
        username: "",
        password: "",
    }

    // useState hook is used to manage the form state
    const [form, setForm] = React.useState(blank)

    // handleChange function updates the form state
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // handleSubmit function is called when the form is submitted
    // it sends a post request to the server to create a new user account
    const handleSubmit = (event) => {
        event.preventDefault() // prevent the default form submission behavior
        const {username, password} = form
        fetch(`${url}/auth/signup`, {
            method: "post", // request method is set to "post"
            headers: {
                "Content-Type": "application/json" // set the request headers
            },
            body: JSON.stringify({username, password}) // send the form data in the request body
        })
        .then(response => response.json()) // parse the response as JSON
        .then(data => {
            console.log(data) // log the server response to the console
            setForm(blank) // reset the form
            window.location.assign('/login') // redirect the user to the login page
        })
    }

    // render the form
    return (
        <div className='signup'>
           
            <form onSubmit={handleSubmit}>
            <h5>Sign Up</h5>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange} 
                    placeholder='Password'
                />
                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default Signup