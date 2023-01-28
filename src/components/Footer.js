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

                <i>Created By: </i>
                
                <div className='name-links'>
                    <a href='https://github.com/cinduhrz' target='_blank' rel="noreferrer">Cindy Wong  </a>
                    <a href='https://github.com/kayfernander2022' target='_blank' rel="noreferrer">Karen Fernander</a>
                    <a href='https://github.com/SonsOfMagnetism' target='_blank' rel="noreferrer">Rene Santiago</a>
                    <a href='https://github.com/Alex-dev7' target='_blank' rel="noreferrer">Alexei Rusu</a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer