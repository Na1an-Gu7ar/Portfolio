import React, { useRef } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import MyWorkCards from '../MyWorkCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MyWork = () => {
    const projectsList = [
        {
            id: 1,
            imgUrl: "https://i.pinimg.com/originals/26/8c/0c/268c0cc8f5725a4b2b126f97dbdaee12.png",
            title: "Pinterest Clone",
            techStack: "Ejs, Express, Nodejs, css",
            description: "A full-stack pinterest clone where you have to register yourself or login if you are already registered. Then you can access profile, feed etc"
        },

        {
            id: 2,
            title: "IEducate",
            techStack: "HTML, CSS, JS, Bootstrap",
            description: "Participated in Webathon2.0 build an E-learning website like udemy, which contains courses on in demand        technical skills."
        }
    ]

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const box1Ref = useRef()
    const box2Ref = useRef()
    const box3Ref = useRef()
    const box4Ref = useRef()

    useGSAP(() => {
        gsap.fromTo(box1Ref.current, {
            x: 300,
            duration: 1.5,
            delay: 0.5,
            stagger: 3.5,
            opacity: 0
            
        }, {
            x: 0,
            duration: 1.5,
            delay: 0.5,
            stagger: 3.5,
            opacity: 1
        })
        gsap.fromTo(box2Ref.current, {
            x: 390,
            duration: 1.5,
            delay: 1,
            stagger: 3.5,
            opacity: 0
            
        }, {
            x: 0,
            duration: 1.4,
            delay: 0.5,
            stagger: 3.5,
            opacity: 1
        })
        gsap.fromTo(box3Ref.current, {
            x: 380,
            duration: 1.4,
            delay: 0.5,
            stagger: 3.5,
            opacity: 0
            
        }, {
            x: 0,
            duration: 1.3,
            delay: 0.5,
            stagger: 3.5,
            opacity: 1
        })
        gsap.fromTo(box4Ref.current, {
            x: 400,
            duration: 1.3,
            delay: 0.5,
            stagger: 3.5,
            opacity: 0
            
        }, {
            x: 0,
            duration: 1.2,
            delay: 0.5,
            stagger: 3.5,
            opacity: 1
        })
    })

    return (
        <>
            <div className='container mywork-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', '', 'W', 'o', 'r', 'k']}
                            idx={15}
                        />
                    </h1>
                    <div className="workbox">
                        <div ref={box1Ref} className="box1">
                            <div className="prj-img">
                                <img src="https://i.pinimg.com/originals/26/8c/0c/268c0cc8f5725a4b2b126f97dbdaee12.png" alt="PinterestClone" />
                            </div>
                            <div className='title'>
                                <span>Title -</span> Pinterese Clone
                            </div>
                            <div className='tech-stack'>
                                <span>Stack -</span> Ejs, Express, Nodejs, MongoDB
                            </div>
                            <div className='description'>
                                <span>Description -</span> A full-stack pinterest clone where you have to register yourself or login if you are already registered. Then you can access profile, feed etc
                            </div>
                        </div>
                        <div ref={box2Ref} className="box1">
                            <div className="prj-img">
                                <img src="https://i.pinimg.com/originals/26/8c/0c/268c0cc8f5725a4b2b126f97dbdaee12.png" alt="PinterestClone" />
                            </div>
                            <div className='title'>
                                <span>Title -</span> IEducate
                            </div>
                            <div className='tech-stack'>
                                <span>Stack -</span> HTML CSS JS Bootstrap
                            </div>
                            <div className='description'>
                                <span>Description -</span> Participated in Webathon2.0 build an E-learning website like udemy, which contains courses on in demand technical skills.
                            </div>
                        </div>
                        <div ref={box3Ref} className="box1">
                            <div className="prj-img">
                                <img src="https://i.pinimg.com/originals/26/8c/0c/268c0cc8f5725a4b2b126f97dbdaee12.png" alt="PinterestClone" />
                            </div>
                            <div className='title'>
                                <span>Title -</span> IEducate
                            </div>
                            <div className='tech-stack'>
                                <span>Stack -</span> HTML CSS JS Bootstrap
                            </div>
                            <div className='description'>
                                <span>Description -</span> Participated in Webathon2.0 build an E-learning website like udemy, which contains courses on in demand technical skills.
                            </div>
                        </div>
                        <div ref={box4Ref} className="box1">
                            <div className="prj-img">
                                <img src="https://i.pinimg.com/originals/26/8c/0c/268c0cc8f5725a4b2b126f97dbdaee12.png" alt="PinterestClone" />
                            </div>
                            <div className='title'>
                                <span>Title -</span> IEducate
                            </div>
                            <div className='tech-stack'>
                                <span>Stack -</span> HTML CSS JS Bootstrap
                            </div>
                            <div className='description'>
                                <span>Description -</span> Participated in Webathon2.0 build an E-learning website like udemy, which contains courses on in demand technical skills.
                            </div>
                        </div>
                    </div>
                </div>
                <Loader type="line-scale-pulse-out" />
            </div>
        </>
    )
}

export default MyWork
