import React, { useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoN from '../../assets/images/logo-N.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import 'ldrs/zoomies'
import { motion, AnimatePresence } from "framer-motion"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const greetArray = ['H', 'i,']
    const selfArray = ['I', `${'m'}`]
    const nameArray = ['a', 'y', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut", type: 'spring' }}
            exit={{x: "-100%"}}
        >
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={greetArray} idx={13} />
                        {/* <span className={`${letterClass}_12`}>H</span>
                            <span className={`${letterClass} _13`}>i,</span> */}
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={selfArray} idx={14} />
                        {/* <span className={`${letterClass} _14`}>I</span>
                            <span className={`${letterClass} _15`}>'m</span> */}
                        {/* <span className='N-logo'>N</span> */}
                        <img src={LogoN} alt="nayan" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
                    </h1>
                    <h2 exit={{display: 'none'}}>FullStack Developer / Ethical Hacker</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            {/* <Loader type='line-scale-pulse-out' /> */}
            {/* <l-zoomies size={80} stroke={3} speed={1.5} color="#fdd700" bg-opacity={0.2}/> */}
        </motion.div>
    )
}

export default Home
