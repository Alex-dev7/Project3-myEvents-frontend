import React from "react"
import {GlobalCtx} from "../App"

const Signup = (props) => {
    const { gState } = React.useContext(GlobalCtx)
    const { url } = gState

    const blank = {
        username: "",
        password: "",
    }

    const [form, setForm] = React.useState(blank)

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    //Signup
    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = form
        fetch(`${url}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setForm(blank)
            props.history.push("/login")
        })
    }

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