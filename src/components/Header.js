import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header >
            <div className='nav-bar'>
                <Link to='/about'>
                    About
                </Link>
            </div>
           <Link id='title' to='/view'>MyEvents</Link>

        </header>
    )
}

export default Header