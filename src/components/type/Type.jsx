"use client"

import React from 'react'
import styles from "./type.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Type = ({brand,name}) => {
    const fbrand = brand.slice(0,4)
    return (
        <div className={styles.container}>
            <div className={styles.title}>{name}</div>
            <div className={styles.prdContainer}>
                {fbrand.map((item) => (<Link href={`http://localhost:3000/sanpham/${item.id}`} className={styles.product}>
                    <div className={styles.saleoff}>
                        <span>{item.discount}</span>
                        <span>OFF</span>
                    </div>
                    <Image src={item.image} alt='' width={280} height={280} className={styles.imagePrd} />
                    <div className={styles.prdBrand}>{item.brand}</div>
                    <div className={styles.prdName}>{item.name}</div>
                    <div className={styles.price}>
                        <div className={styles.nPrice}>{item.price*(100-33)/100} ₫</div>
                        <div className={styles.pPrice}>{item.price} ₫</div>
                    </div>
                </Link>))}
            </div>
            <Link href={'http://localhost:3000/sanpham'} className={styles.more}>MORE</Link>
        </div>
    )
}

export default Type