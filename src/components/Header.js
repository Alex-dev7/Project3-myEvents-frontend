import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header>
            <div className="nav-container">
                <nav className='navbar navbar-expand-lg navbar-dark'>
                    <Link class="navbar-brand" to='/'>MyEvents</Link>
                    <Link to='/about'>
                        About
                    </Link>
                    <Link to='/create'>
                        Add New Event
                     </Link>
                </nav>
            </div>

        </header>
    )
}

export default Header


        // <header>
        //     <div className="nav-container">
        //         <nav className='nav-bar'>
        //             <Link to='/about'>
        //                 About
        //             </Link>
        //             <Link to='/create'>
        //                 Add New Event
        //             </Link>
        //         </nav>
        //         <Link id='title' to='/'>MyEvents</Link>
        //     </div>

        // </header>