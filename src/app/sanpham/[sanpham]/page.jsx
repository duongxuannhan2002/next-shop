"use client"
import React, { useEffect, useState } from 'react'
import styles from './1sanpham.module.css'
import Slideshow from '@/components/slideshow/Slideshow'
import Image from 'next/image'
import Select from '@/components/select/Select'
import { useMyContext } from '@/context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = ({ params }) => {
    const { sanpham } = params
    const [data, setData] = useState([])
    const [select, setSelect] = useState([])
    const [remain, setRemain] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [idSize, setIdSize] = useState()
    const [buyButton, setBuyButton] = useState(false)
    const {check, updateCheck} = useMyContext();


    const getProduct = async () => {
        try {
            const res = await fetch(`https://ttcs-delta.vercel.app/api/v1/get-1-product?id=${sanpham}`)
            const jData = await res.json()
            setData(jData.data)
        } catch (error) {
            console.log("error fetch: ", error);
        }
    }

    useEffect(() => {
            getProduct()
    },[]);

    const handleOnClick = async (size) => {
        if (select.includes(size)) {
            setSelect(select.filter((select) => select !== size))
        } else {
            setSelect([size])
            setQuantity(1)
            try {
                const res = await fetch(`https://ttcs-delta.vercel.app/api/v1/get-quantity?id=${sanpham}&size=${size}`)
                const jData = await res.json()
                setRemain(jData.data[0].quantity)
                setIdSize(jData.data[0].id_size)
            } catch (error) {
                console.log("error fetch: ", error);
            }
        }
    }

    const handleQuantity = (e) => {
        if (select.length == 0) {
            toast.error('Vui lòng chọn size trước')
            e.target.value = 1} else
            if (isNaN(e.target.value)) {
                e.target.value = 1
            } else
                if (e.target.value > remain) {
                    e.target.value = remain
                    toast.error('Không thể chọn quá số lượng còn lại')
                    setQuantity(e.target.value)
                } else
                    setQuantity(e.target.value)
    }

    const handleOnfocus = () => {
        if (select.length == 0) {
            toast.error('Vui lòng chọn size trước')
        }
    }

    const handleOnAdd = async () => {
        if (select.length > 0) {
            if (localStorage.getItem('token')) {
                const data = {
                    token: localStorage.getItem('token'),
                    id_product: sanpham,
                    size: select[0],
                    id_size: idSize,
                    quantity: quantity
                }
                try {
                    const res = await fetch('https://ttcs-delta.vercel.app/api/v1/post-product-to-cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    const resData = await res.json()
                    console.log(resData);
                    if(resData.messErr){
                        toast.error(resData.messErr)
                    }else if (resData.messSuc){
                        toast.success(resData.messSuc)
                    }
                } catch (error) {
                    console.error('Error:', error)
                }
            }

        }else{
            toast.error('Vui lòng chọn size')
        }
        console.log('trc',check);
        updateCheck()
        console.log('sau',check);
    }

    const handleBuy = () => {
        if (select.length > 0){
            setBuyButton(!buyButton)
        }
        else {
            toast.error('Vui lòng chọn size')
        }
    }

    return (
        <>
            <Slideshow />
            {data&&data.map((item) => (<div className={styles.container}>
                <div className={styles.fulldetail}>
                    <Image src={item.image} alt='' width={450} height={500} />
                    <div className={styles.fullinfo}>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.price}>
                            <div className={styles.nprice}>{item.price * (100 - item.discount) / 100}đ</div>
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
                                {item.size.split(',').map(size => (
                                    <div className={`${styles.sizenumber} ${select.includes(size) ? styles.sizenumberN : ''}`}
                                        onClick={() => handleOnClick(size)}
                                    >{size}</div>
                                ))}
                            </div>
                            {select.length !== 0 ? <div className={styles.remain}>Số lượng còn lại: <b>{remain}</b></div> : ''}
                        </div>

                        <div className={styles.allbuy}>
                            <input type="text"
                                value={quantity}
                                className={styles.quantity}
                                onChange={(e) => handleQuantity(e)}
                                onFocus={() => handleOnfocus}
                            />
                            <div className={styles.add}
                                onClick={() => handleOnAdd()}
                            >THÊM VÀO GIỎ</div>
                            <div className={styles.buy} onClick={handleBuy}>MUA NGAY</div>

                        </div>
                    </div>
                </div>
                <div className={styles.detailcontainer}>
                    <div className={styles.detailtitle}>Mô Tả Sản Phẩm</div>
                    <div className={styles.detail}>
                        {item.describ}
                    </div>
                </div>
            </div>))}
            <ToastContainer/>
            {buyButton ? <Select data={data} select={select} quantity={quantity} idSize={idSize} setBuyButton={setBuyButton}/> : ''}
        </>

    )
}

export default page