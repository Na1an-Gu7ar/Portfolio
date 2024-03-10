import React, { useEffect, useRef } from 'react'
import './index.scss'
import LogoN from '../../../assets/images/logo-N.png'
import gsap from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      })

    gsap.fromTo(
      solidLogoRef.current, {
      opacity: 0,
    },
      {
        opacity: 1,
        delay: 5,
        duration: 4,
      }
    )
  }, [])

  return (
    <>
      <div className='logo-container' ref={bgRef}>
        <img ref={solidLogoRef} className='solid-logo' src={LogoN} alt="N" />
        <svg version='1.0' viewBox="105 15 340 1010" xmlns="http://www.w3.org/2000/svg">
          <g className='svg-container' fill="none">
            <path ref={outlineLogoRef} d="M59.1831 1.18188V0.681885H58.6831H46.1036H45.6036V1.18188V48.0574L13.0377 0.89777L12.8886 0.681885H12.6263H1.30811H0.808105V1.18188V71.0001V71.5001H1.30811H13.9558H14.4558V71.0001V24.2071L47.0219 71.2845L47.171 71.5001H47.4331H58.6831H59.1831V71.0001V1.18188Z" stroke="#FFD700" />
          </g>
        </svg>
      </div>
    </>

  )
}

export default Logo
