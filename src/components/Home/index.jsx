import React, { useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoN from '../../assets/images/logo-N.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import 'ldrs/zoomies'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'y', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        {/* <span className='N-logo'>N</span> */}
                        <img src={LogoN} alt="nayan" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
                    </h1>
                    <h2>FullStack Developer / Ethical Hacker</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            {/* <Loader type='line-scale-pulse-out' /> */}
            <l-zoomies size={80} stroke={3} speed={1.5} color="#fdd700" bg-opacity={0.2}/>
        </>
    )
}

export default Home
