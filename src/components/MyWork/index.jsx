import React, { useRef } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ieducate from '../../assets/images/ieducate.png'
import NewsApp from '../../assets/images/NewsApp.png'
import 'ldrs/zoomies'
import {motion} from "framer-motion"


const MyWork = () => {
    
    const box1Ref = useRef()
    const box2Ref = useRef()
    const box3Ref = useRef()
    const box4Ref = useRef()

    useGSAP(() => {
        gsap.fromTo(box1Ref.current, {
            x: 300,
            duration: 1.3,
            delay: 1,
            stagger: 3.5,
            opacity: 0

        }, {
            x: 0,
            duration: 1.3,
            delay: 1,
            stagger: 3.5,
            opacity: 1
        })
        gsap.fromTo(box2Ref.current, {
            x: 291,
            duration: 1.3,
            delay: 1,
            stagger: 3.5,
            opacity: 0

        }, {
            x: 0,
            duration: 1.2,
            delay: 1,
            stagger: 3.5,
            opacity: 1
        })
        gsap.fromTo(box3Ref.current, {
            x: 280,
            duration: 1.2,
            delay: 1,
            stagger: 3.5,
            opacity: 0

        }, {
            x: 0,
            duration: 1.1,
            delay: 1,
            stagger: 3.5,
            opacity: 1
        })
        gsap.fromTo(box4Ref.current, {
            x: 270,
            duration: 1.1,
            delay: 1,
            stagger: 3.5,
            opacity: 0

        }, {
            x: 0,
            duration: 1,
            delay: 1,
            stagger: 3.5,
            opacity: 1
        })
    })

    const prjLst = [
        {
            id: 1,
            imgUrl: "https://i.pinimg.com/originals/26/8c/0c/268c0cc8f5725a4b2b126f97dbdaee12.png",
            title: "Pinterest Clone",
            techStack: "Ejs, Express, Nodejs, MongoDB",
            description: "A full-stack pinterest clone where you have to register yourself or login if you are already registered. Then you can access profile, feed etc",
            ref: box1Ref
        },
        {
            id: 2,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
            title: "Insta Clone",
            techStack: "Ejs, Express, Nodejs, MongoDB",
            description: "An full stack insta clone where you have to login or signup, then you can access feeds and view or update you ownprofile",
            ref: box2Ref
        },
        {
            id: 3,
            imgUrl: ieducate,
            title: "IEducate",
            techStack: "Html, Css, JavaScript, Bootstrap",
            description: "Participated in Webathon2.0 build an E-learning website like udemy, which contains courses on in demand technical skills.",
            ref: box3Ref
        },
        {
            id: 4,
            imgUrl: NewsApp,
            title: "NewsApp",
            techStack: "React, Bootstrap, NewsAPI",
            description: "Built an React application that displays news articles fetched from news api. Includes category filtering, pagination, search by keywords functionalities. Used Redux Toolkit for state management.",
            ref: box4Ref
        },
    ]

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <motion.div
        initial={{x: "100%"}}
        animate={{x: "0%"}}
        transition={{duration: 0.5, ease: "easeOut"}}
        exit={{opacity: 1}}>
            <div className='container about-page'>
                <div className='text-zone prj-text-zone'>
                    <h1 className='prj-h1'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', '', 'W', 'o', 'r', 'k']}
                            idx={15}
                        />
                    </h1>
                    <div className="workbox">
                        {prjLst.map((lst) => {
                            return (
                                <div ref={lst.ref} key={lst.id} className='box1'>
                                    <div className="prj-img">
                                        <img src={lst.imgUrl} style={{ top: '4rem' }} alt={lst.title} />
                                    </div>
                                    <div className='title'>
                                        {lst.title}
                                    </div>
                                    <div className='tech-stack'>
                                        {lst.techStack}
                                    </div>
                                    <div className='description'>
                                        {lst.description}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <Loader type="line-scale-pulse-out" /> */}
            {/* <l-zoomies size={80} stroke={3} speed={1.5} color="#fdd700" bg-opacity={0.2}/> */}
        </motion.div>
    )
}

export default MyWork
