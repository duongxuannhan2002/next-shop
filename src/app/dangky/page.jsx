"use client"

import React, { use, useEffect, useState } from 'react'
import styles from './dangky.module.css'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
    const [fistName,setFistName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^0\d{9}$/;
        return regex.test(phoneNumber);
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handlePhoneNumber = (e) => {
            setPhoneNumber(e.target.value)
    }

    const handleEmail = (e) => {
            setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSignUp = async () => {
        if(validateEmail(email)&&validatePhoneNumber(phoneNumber)&&pass.length>5){
            let data = {
                name: lastName + ' ' + fistName ,
                email: email,
                phoneNumber: phoneNumber,
                pass: pass
            }

            // console.log(data);
            try {
                let res = await fetch('https://ttcs-delta.vercel.app/api/v1/post-user',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                let resData = await res.json()
                if(resData.error){
                    toast.error(resData.error)
                }else{
                    toast.success('Thành công')
                    window.location.href = 'http://localhost:3000/dangnhap'
                }
                console.log(resData);
            } catch (error) {
                console.error('Error: ',error)
            }
        }else{
            toast.error('Thông tin chưa hợp lệ')
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.sign}>
                    <div className={styles.title}>Sign up</div>
                    <div className={styles.desc}>Before continue, please sign up in first !</div>
                </div>
                <div className={styles.form}>
                    <label htmlFor="fistname" className={styles.label}>First name</label>
                    <input type="text" name='fistname' id='fistname' className={styles.input} onChange={(e) => setFistName(e.target.value)}/>
                </div>
                <div className={styles.form}>
                    <label htmlFor="lastname" className={styles.label}>Last name</label>
                    <input type="text" name='lastname' id='lastname' className={styles.input} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className={styles.form}>
                    <label htmlFor="username" className={styles.label}>Phone number</label>
                    <input type="text" name='username' id='username' className={styles.input} onChange={handlePhoneNumber}/>
                    {!validatePhoneNumber(phoneNumber) && <div className={styles.err}>Vui lòng nhập đúng định dạng số điện thoại (ví dụ: 0987654321)</div>}
                </div>
                <div className={styles.form}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" name='email' id='email' className={styles.input} onChange={handleEmail}/>
                    {!validateEmail(email)&&<div className={styles.err}>Vui lòng nhập đúng định dạng email (ví dụ: abc@xyz.com)</div>}
                </div>
                <div className={styles.form}>
                    <label htmlFor="pass" className={styles.label}>Password</label>
                    <input type="password" name='pass' id='pass' className={styles.input} onChange={handlePass}/>
                    {pass.length<6 && <div className={styles.err}>Mật khẩu phải &gt;=6 kí tự</div>}
                </div>
                <button className={styles.in} onClick={handleSignUp}>Sign up</button>
                <Link href="/dangnhap" className={styles.need}>Do you have a account ?</Link>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default page