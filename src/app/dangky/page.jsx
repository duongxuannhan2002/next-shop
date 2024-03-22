"use client"

import React, { useState } from 'react'
import styles from './dangky.module.css'
import Link from 'next/link'


const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.sign}>
                    <div className={styles.title}>Sign up</div>
                    <div className={styles.desc}>Before continue, please sign up in first !</div>
                </div>
                <div className={styles.form}>
                    <label htmlFor="fistname" className={styles.label}>First name</label>
                    <input type="text" name='fistname' id='fistname' className={styles.input} />
                </div>
                <div className={styles.form}>
                    <label htmlFor="lastname" className={styles.label}>Last name</label>
                    <input type="text" name='lastname' id='lastname' className={styles.input} />
                </div>
                <div className={styles.form}>
                    <label htmlFor="username" className={styles.label}>Phone number</label>
                    <input type="text" name='username' id='username' className={styles.input} />
                </div>
                <div className={styles.form}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" name='email' id='email' className={styles.input} />
                </div>
                <div className={styles.form}>
                    <label htmlFor="pass" className={styles.label}>Password</label>
                    <input type="password" name='pass' id='pass' className={styles.input} />
                </div>
                <button className={styles.in}>Sign up</button>
                <Link href="/dangnhap" className={styles.need}>Do you have a account ?</Link>
            </div>
        </div>
    )
}

export default page