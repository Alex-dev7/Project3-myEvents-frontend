import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin} from 'react-icons/fa'

function Footer(props) {

    return (
        <footer className='footer'>
            <div className='github-section'>
                <GoMarkGithub size={25}/>
                <span> GitHub Repo</span>
                <a href="https://github.com/Alex-dev7/Project3-myEvents-frontend" target="_blank" rel="noreferrer">frontend</a>
                <a href="https://github.com/cinduhrz/Project3-myEvents-backend" target="_blank" rel="noreferrer">backend</a>
            </div>
            <div><p>Copyright © 2023 MyEvents</p></div>
            <div className='by-section'>
                <FaLinkedin size={25}/>
                <i>Creted By:</i>

            </div>
        </footer>
    )
}

export default Footer