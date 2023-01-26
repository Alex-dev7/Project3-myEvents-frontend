import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <header>
            <div className="nav-container">
                <nav className='navbar navbar-expand-lg navbar-dark'>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>MyEvents</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            // should be the id value of the content
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto text-center">
                                <li>
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/create" className="nav-link text-nowrap">Add New Event</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li>
                                    <Link to="#" className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header