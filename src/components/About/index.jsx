import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import 'ldrs/zoomies'

const About = () => {
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
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                            />
                    </h1>
                    <p>I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.</p>
                    <p>I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.</p>
                    <p> If I need to define myself in one sentence that would be a knowledge-seeker, a sports fanatic, and
                        tech-obsessed!!!</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" spin></FontAwesomeIcon>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" beatFade></FontAwesomeIcon>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" fade></FontAwesomeIcon>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJs} color="#EFD81D" beat></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className='cubespinner cubespinner2' aria-hidden="true">
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" spin></FontAwesomeIcon>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" beatFade></FontAwesomeIcon>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" fade></FontAwesomeIcon>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJs} color="#EFD81D" beat></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className='cubespinner3'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} spin></FontAwesomeIcon>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJava} color="green" shake></FontAwesomeIcon>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faNodeJs} color="green" bounce></FontAwesomeIcon>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color="#f15234" beat></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className='cubespinner3 cubespinner4'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} spin></FontAwesomeIcon>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJava} color="green" shake></FontAwesomeIcon>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faNodeJs} color="green" shake></FontAwesomeIcon>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color="#f15234" beat></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader type="line-scale-pulse-out" /> */}
            <l-zoomies size={80} stroke={3} speed={1.5} color="#fdd700" bg-opacity={0.2}/>
        </>
    )
}

export default About
