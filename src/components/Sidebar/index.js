import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Name1 from '../../assets/images/Name1.png';
import Name2 from '../../assets/images/Name2.png';
import Mazen from '../../assets/images/Mazen.png';
import MazenName from '../../assets/images/Mazen_Ibrahim.png';

const Sidebar = () => (
    <div className='nav_bar'>
        <Link className='logo' to='/' >
            <img src={Name1} alt="Logo"/>
            <img className="name" src={Name2} alt="Mazen"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassName="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="#4e4e4e" />
            </NavLink>
            <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4e4e4e" />
            </NavLink>
            <NavLink exact="true" activeclassName="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faSuitcase} color="#4e4e4e" />
            </NavLink>
            <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4e4e4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/mazen-ibrahim-35238221b">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/MazenIbrahim1/Mazen-Ibrahim">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar