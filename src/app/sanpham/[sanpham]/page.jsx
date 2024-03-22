"use client"
import React from 'react'
import styles from './1sanpham.module.css'
import Slideshow from '@/components/slideshow/Slideshow'
import Image from 'next/image'

const getData = async (api) => {
    const res = await fetch(api)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const page = async ({params}) => {
    const {sanpham} = params
    const data = await getData(`http://localhost:3001/api/v1/get-1-product?id=${sanpham}`)

    const info = data

    return (
        <>
            <Slideshow />
            {info.data.map((item) => (<div className={styles.container}>
                <div className={styles.fulldetail}>
                    <Image src={item.image} alt='' width={450} height={500} />
                    <div className={styles.fullinfo}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.price}>
                            <div className={styles.nprice}>{item.price*(100-item.discount)/100}đ</div>
                            <div className={styles.pprice}>{item.price}đ</div>
                            <div className={styles.saleoff}>{item.discount}% OFF</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infotitle}>Mã sản phẩm:</div>
                            <div className={styles.desc}>{item.id}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infotitle}>Thương hiệu:</div>
                            <div className={styles.desc}>{item.brand}</div>
                        </div>
                        <div className={styles.size}>
                            <div className={styles.sizetitle}>Size</div>
                            <div className={styles.fullsize}>
                                <div className={styles.sizenumber}>41</div>
                                <div className={styles.sizenumber}>41</div>
                                <div className={styles.sizenumber}>41</div>
                                <div className={styles.sizenumber}>41</div>
                                <div className={styles.sizenumber}>41</div>
                            </div>
                        </div>
                        <div className={styles.allbuy}>
                            <input type="text" value='1' className={styles.quantity} />
                            <div className={styles.add}>THÊM VÀO GIỎ</div>
                            <div className={styles.buy}>MUA NGAY</div>
                        </div>
                    </div>
                </div>
                <div className={styles.detailcontainer}>
                    <div className={styles.detailtitle}>Mô Tả Sản Phẩm</div>
                    <div className={styles.detail}>
                        {item.describ}
                    </div>
                </div>
            </div>)) }
        </>

    )
}

export default page