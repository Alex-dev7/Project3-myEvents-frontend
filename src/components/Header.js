import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header className="header">
            <div className='nav-bar'>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/create'>
                    Add New Event
                </Link>
            </div>
           <Link id='title' to='/'>MyEvents</Link>

        </header>
    )
}

export default Header