"use client"

import React from 'react'
import styles from './slideshow.module.css'
import {Zoom} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    const divStyle = {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px',
        
      }
    const slideImage = [
        'p1.jpg',
        'p2.jpg',
        'p3.jpg'
    ]
  return (
    <div className={styles.container}>
        <Zoom scale={0.5} >
            {slideImage.map((each,index) => (
                <div key={index} className=''>
                    <div style={{...divStyle ,'backgroundImage' : `url(${each})`, zIndex: -1}}></div>
                </div>
            ))}
        </Zoom>
    </div>
  )
}

export default Slideshow