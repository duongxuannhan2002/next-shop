"use client"
import React, { useEffect, useState } from 'react'
import styles from './dangnhap.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dangnhap() {
    const router = useRouter();
    const [isActive, setActive] = useState(false)
    const [eyeActive, setEyeActive] = useState(false)
    const [passType, setPassType] = useState('password')
    const [userName, setUserName] = useState('')
    const [password, setPassWord] = useState('')

    const handleClick = () => {
        setActive(!isActive)
    }
    const handleEyeClick = () => {
        setEyeActive(!eyeActive)
        setPassType(eyeActive ? 'password' : 'text')
    }

    const handleUsername = (e) => {
        setUserName(e.target.value)
    }

    const handlePassWord = (e) => {
        setPassWord(e.target.value)
    }

    const handleLogin = async () => {
        const data = {
            phoneNumber: userName,
            pass: password
        }
        try {
            const response = await fetch('https://ttcs-delta.vercel.app/api/v1/post-to-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json()

            if (responseData.message) {
                toast.error(responseData.message)
            } else {
                localStorage?.setItem('token', responseData.token)
                localStorage?.setItem('name', responseData.data.name)
                localStorage?.setItem('id_user', responseData.data.id)
                window.location.href='https://next-shop-gules.vercel.app'
            }
        } catch (error) {
            console.error('Error:', error)
        }
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
                    <input type="text" name='username' id='username' className={styles.input} onChange={handleUsername} />
                </div>
                <div className={styles.form}>
                    <div className={styles.eye}>
                        <Image src='/eye.png' alt='' width={25} height={25} className={styles.ieye} onClick={handleEyeClick} />
                        <div className={`${eyeActive ? '' : styles.line}`} ></div>
                    </div>
                    <label htmlFor="pass" className={styles.label}>Password</label>
                    <input type={passType} name='pass' id='pass' className={styles.input} onChange={handlePassWord} />
                </div>
                <div className={styles.fullrmb}>
                    <div className={`${styles.click} ${isActive ? styles.active : ''}`} onClick={handleClick}></div>
                    <div className={styles.rmb}>Remember Me</div>
                </div>
                <button className={styles.in} onClick={handleLogin}>Login</button>
                <Link href="/dangky" className={styles.need}>Do you need a account ?</Link>
                <ToastContainer />
            </div>
        </div>
    )
}


