import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import 'leaflet/dist/leaflet.css'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'ldrs/zoomies'
import {motion} from "framer-motion"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_sphm5kk',
                'template_03seido',
                refForm.current,
                'QjhDCj8JDpZFN2EGD'
            )
            .then(
                () => {
                    alert("Message sent")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send")
                }
            )
    }

    const myIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/9131/9131546.png",
        iconSize: [38, 38]
    })
    return (
        <motion.div
        initial={{x: "100%"}}
        animate={{x: "0%"}}
        transition={{duration: 0.5, ease: "easeOut"}}
        exit={{opacity: 1}}>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or large projects, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                {/* <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li> */}
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Nayan Gujar,
                    <br />
                    Pune, India,
                    <br />
                    Paud Rd, Madhav Baug, Lokmanya Colony <br />
                    Kothrud <br />
                    <span>gujarnayan8@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[18.5090360115654, 73.80504442795883]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            style="opacity: 1; color: #0072ff;"
                        />
                        <Marker position={[18.5090360115654, 73.80504442795883]} icon={myIcon}>
                            <Popup>
                                I live here, come over for a plate of misal :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            {/* <Loader type='line-scale-pulse-out' /> */}
            {/* <l-zoomies size={80} stroke={3} speed={1.5} color="#fdd700" bg-opacity={0.2}/> */}
        </motion.div>
    )
}

export default Contact
