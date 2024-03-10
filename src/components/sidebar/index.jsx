import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/images/logo-N.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to='/' onClick={() => setShowNav(false)} style={{ textDecoration: 'none' }}>
                    <img className='solid-logo-img' src={LogoN} alt='logo' />
                    <img className='sub-logo' src={LogoSubtitle} alt='nayan' />
                </Link>
                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                    <FontAwesomeIcon icon={faClose} color='#ffd700' size='3x' className='close-icon' />
                    <ul>
                        <li>
                            <a target="_blank" className='linkedin-icon' rel='noreferrer' href="https://www.linkedin.com/in/nayan-gujar-990417232/">
                                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" className='git-icon' rel='noreferrer' href="https://github.com/Na1an-Gu7ar">
                                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                            </a>
                        </li>
                    </ul>
                </nav>

                <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x' className='hamburger-icon' />
            </div>
        </>
    )
}

export default Sidebar