
import React from 'react'
import styles from './getproduct.module.css'
import Link from 'next/link'
import Image from 'next/image'

const GetProduct = async () => {
    const data = await fetch('http://localhost:3001/api/v1/get-shoes')

    if (!data.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const fdata = await data.json();
    return (
        <div className={styles.prdContainer}>
            {fdata.data.map((item) => (<Link href={`http://localhost:3000/sanpham/${item.id}`} className={styles.product}>
                <div className={styles.saleoff}>
                    <span>{item.discount}</span>
                    <span>OFF</span>
                </div>
                <Image src={item.image} alt='' width={280} height={280} className={styles.imagePrd} />
                <div className={styles.prdBrand}>{item.brand}</div>
                <div className={styles.prdName}>{item.name}</div>
                <div className={styles.price}>
                    <div className={styles.nPrice}>{item.price * (100 - 33) / 100} ₫</div>
                    <div className={styles.pPrice}>{item.price} ₫</div>
                </div>
            </Link>))}

        </div>
    )
}

export default GetProduct