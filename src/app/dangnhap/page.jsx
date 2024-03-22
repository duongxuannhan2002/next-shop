"use client"

import React, { useState } from 'react'
import styles from './dangnhap.module.css'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    const [isActive, setActive] = useState(false)
    const [eyeActive, setEyeActive] = useState(false)
    const handleClick = () => {
        setActive(!isActive)
    }
    const handleEyeClick = () => {
        setEyeActive(!eyeActive)
    }
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.sign}>
                    <div className={styles.title}>Login</div>
                    <div className={styles.desc}>Before continue, please login in first !</div>
                </div>
                <div className={styles.form}>
                    <label htmlFor="username" className={styles.label}>Phone number</label>
                    <input type="text" name='username' id='username' className={styles.input} />
                </div>
                <div className={styles.form}>
                    <div className={styles.eye}>
                        <Image src='/eye.png' alt='' width={25} height={25} className={styles.ieye} onClick={handleEyeClick}/>
                        <div className={`${eyeActive ? styles.line : ''}`} ></div>
                    </div>
                    <label htmlFor="pass" className={styles.label}>Password</label>
                    <input type="password" name='pass' id='pass' className={styles.input} />
                </div>
                <div className={styles.fullrmb}>
                    <div className={`${styles.click} ${isActive ? styles.active : ''}`} onClick={handleClick}></div>
                    <div className={styles.rmb}>Remember Me</div>
                </div>
                <button className={styles.in}>Login</button>
                <Link href="/dangky" className={styles.need}>Do you need a account ?</Link>
            </div>
        </div>
    )
}

export default page