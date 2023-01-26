import { Link } from 'react-router-dom'

function Header(props) {

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
            </div>
           <Link id='title' to='/'>MyEvents</Link>

        </header>
    )
}

export default Header