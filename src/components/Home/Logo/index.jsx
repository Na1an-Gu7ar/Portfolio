import React from 'react'
import './index.scss'
import LogoN from '../../../assets/images/logo-N.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNeos } from '@fortawesome/free-brands-svg-icons'
import {motion} from "framer-motion"
// import gsap from 'gsap-trial'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     solidLogoRef.current, {
  //     opacity: 0,
  //   },
  //     {
  //       opacity: 1,
  //       delay: 5,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return (
    <>
      <motion.div className='logo-container'
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      exit={{ rotate: "360deg", zoom: 2.5, opacity: 0, x: "-30%" }}
      >
        <FontAwesomeIcon icon={faNeos} className='neos-icon' />
      </motion.div>
    </>

  )
}

export default Logo
