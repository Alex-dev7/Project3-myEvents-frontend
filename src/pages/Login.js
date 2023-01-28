import React from "react"
import {GlobalCtx} from "../App"

// Importing the GlobalCtx context from the parent component (App.js)
// This context is used to store and update the global state of the application

const Login = (props) => {
    // Destructuring the global state and the setter function from the GlobalCtx context
    const { gState, setGState } = React.useContext(GlobalCtx)
    // Destructuring the url property from the global state, this will be used in the fetch call
    const { url } = gState

    // Setting an initial state for the form to be empty
    const blank = {
        username: "",
        password: "",
    }

    // Using the useState hook to create a state variable for the form and a setter function
    const [form, setForm] = React.useState(blank)

    // Function for handling changes to the form inputs
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // Function for handling form submission
    const handleSubmit = (event) => {
        // Preventing the default form submission behavior
        event.preventDefault()
        // Destructuring the username and password from the form state
        const {username, password} = form
        // Making a post request to the server using fetch with the username and password in the body
        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        // Parsing the response as json
        .then(response => response.json())
        .then(data => {
            // Logging the data from the response
            console.log(data)
            // Saving the token from the response in local storage
            window.localStorage.setItem("token", JSON.stringify(data))
            // Updating the global state with the token
            setGState({...gState, token: data.token})
            // Clearing the form state
            setForm(blank)
            // Navigating to the home page
            window.location.assign('/')
        })
    }

    // Rendering the form with the inputs and submit button
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
            <h5>Log In</h5>
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
                <input type="submit" value="Login" />
            </form>
        </div>
    ) 
}

export default Login
