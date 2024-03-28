import React from 'react'
import './index.scss'
import LogoN from '../../../assets/images/logo-N.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNeos } from '@fortawesome/free-brands-svg-icons'
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
      <div className='logo-container'>
        <FontAwesomeIcon icon={faNeos} className='neos-icon' />
      </div>
    </>

  )
}

export default Logo
