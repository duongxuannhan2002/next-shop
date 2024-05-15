'use client'

import React, { useEffect, useState } from 'react'
import styles from './query-payement.module.css'
import Image from 'next/image'

const page = () => {

    let data = localStorage.getItem('createOrder')
    let order = JSON.parse(data);


    const fetchAPI = async () => {
        try {
            const res = await fetch('https://ttcs-delta.vercel.app/api/v1/post-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            const resdata = await res.json()
        } catch (error) {
            console.error('Error:', error)
        }
    }
    const urlParams = new URLSearchParams(window.location.search);
    let url = urlParams.get('vnp_ResponseCode');
    useEffect(() => {
        if (url == 0) {
            fetchAPI()
        } else {
        }
    })



    return (
        <div className={styles.container}>
            <div className={styles.detail}>
                {url == 0 ?
                    <>
                        <Image src='/success.png' height={100} width={100} />
                        <div className={styles.success}>THÀNH CÔNG</div>
                    </>
                    :
                    <>
                        <Image src='/fail.png' height={100} width={100} />
                        <div className={styles.fail}>THẤT BẠI</div>
                    </>}
                <div className={styles.info}>
                    <div>Số tiền thanh toán: <b>{order.totalPrice}đ</b></div>
                    <div>Thời gian: <b>{order.order_date}</b></div>
                </div>
            </div>
        </div>
    )
}

export default page