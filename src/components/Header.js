import { Link } from 'react-router-dom'
import React from 'react'
import { GlobalCtx } from '../App'

function Header(props) {

    const {gState, setGState} = React.useContext(GlobalCtx)

    const logout = ( 
        <Link to="/login">
            <span 
                onClick={() => {
                    window.localStorage.removeItem("token")
                    setGState({...gState, token: null})
            }}>Logout </span>
        </Link>
    )

    return (
        <header >
            <div className='nav-bar'>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/create'>
                    Add New Event
                </Link>
                <Link to="/signup">
                    Signup
                </Link>
                <Link to="/login">
                    Login
                </Link>
                {gState.token ? logout : null}

            </div>
           <Link id='title' to='/'>MyEvents</Link>

        </header>
    )
}

export default Header