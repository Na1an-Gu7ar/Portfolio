import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'

const MyWork = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', '', 'W', 'o', 'r', 'k']}
                            idx={15}
                        />
                    </h1>
                    <div className="workbox">
                        <div className="box1">
                            
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default MyWork
