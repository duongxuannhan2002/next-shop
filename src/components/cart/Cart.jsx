'use client'
import React, { useContext, useEffect, useState } from 'react'
import styles from './cart.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useMyContext } from '@/context'
import Select from '../select copy/Select'

const Cart = ({ openCart, setOpenCart, setTotalItem }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState()
    const [button, setButton] = useState(false)

    const { check, setCheck } = useMyContext()
    const fetchData = async () => {
        try {
            const res = await fetch(`https://ttcs-delta.vercel.app/api/v1/get-cart?token=${localStorage?.getItem('token')}`)
            const jData = await res.json()
            setCart(jData.data)
            setTotalItem(jData.data.length)
        } catch (error) {
            console.log("error fetch: ", error);
        }
    };

    useEffect(() => {
        
        if (localStorage?.getItem('token') != null) {
            fetchData();
        }

    }, []);
    const handleQuantity = (index, value) => {
        if (isNaN(value)) {
            value = 0
        }
        const updateQuantity = [...cart]
        updateQuantity[index].quantity = value
        setCart(updateQuantity)
    }

    const handlePlus = (index) => {
        const updateQuantity = [...cart]
        updateQuantity[index].quantity++
        setCart(updateQuantity)
    }

    const handleMinus = (index) => {
        const updateQuantity = [...cart]
        updateQuantity[index].quantity--
        if (updateQuantity[index].quantity < 1) {
            alert('loi')
        } else {
            setCart(updateQuantity)
        }
    }

    const handleDel = async (id_product, id_size, size) => {
        const data = {
            id_user: localStorage?.getItem('id_user'),
            id_product: id_product,
            size: size,
            id_size: id_size
        }
        try {
            const res = await fetch('https://ttcs-delta.vercel.app/api/v1/delete-product-in-cart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            fetchData()
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        let sum = 0
        if (cart) {
            cart.forEach((value) => {
                sum = sum + value.quantity * value.price * (100 - value.discount) / 100
            })
            setTotal(sum.toFixed(0))
        }

    }, [cart])

    useEffect(() => {
        fetchData()
    }, [check])

    const handleCLickBuy = () => {
        setButton(!button)
        setOpenCart(false)
    }

    return (
        <>
            {openCart &&
                <div className={styles.cart}>
                    {localStorage?.getItem('token')&&<Link href='/order' className={styles.history} onClick={()=> setOpenCart(false)} >Đơn hàng đã đặt &gt;&gt;</Link>}
                    <div className={styles.fullItem}>
                        <div className={styles.titleContainer}>
                            <span className={styles.titleCart}>Giỏ hàng</span>
                            {localStorage?.getItem('token') ? <span className={styles.totalQuantity}>({cart.length} sản phẩm)</span> : ''}
                            <span className={styles.exit} onClick={() => setOpenCart(!openCart)}>x</span>
                        </div>
                        {localStorage?.getItem('token') ?
                            (cart ? (cart.map((item, index) =>
                                <div className={styles.productContainer} key={''}>
                                    <Image src={item.image} alt='' width={100} height={130} />

                                    <div className={styles.detail} key={index}>
                                        <p className={styles.name}>{item.name}</p>
                                        <p className={styles.price}>{(item.price * (100 - item.discount) / 100).toLocaleString()} ₫</p>
                                        <p className={styles.size}>Size: {item.size}</p>
                                        <p className={styles.x} onClick={() => handleDel(item.id_product, item.id_size, item.size)}>x</p>
                                        <div className={styles.change}>
                                            <p className={styles.plus} onClick={() => handlePlus(index)}>+</p>
                                            <p className={styles.minus} onClick={() => handleMinus(index)}>-</p>
                                        </div>
                                        <input type='text'
                                            value={cart[index].quantity}
                                            className={styles.quantity}
                                            onChange={(e) => handleQuantity(index, e.target.value)}
                                        ></input>
                                    </div>
                                </div>)) : '') :
                            <div className={styles.noThing}>
                                Vui lòng <Link className={styles.cartLink} href='/dangnhap' >đăng nhập</Link> để sử dụng giỏ hàng
                            </div>
                        }
                    </div>
                    {localStorage?.getItem('token') ? <div className={styles.bill}>
                        <div className={styles.information}>
                            <span className={styles.freeship}>Miễn phí vận chuyển</span>
                        </div>
                        <div className={styles.feeTotal}>
                            <p style={{ fontWeight: '600' }}>Tổng tiền thanh toán</p>
                            <p style={{ fontWeight: '700', fontSize: '35px' }}>{total}đ</p>
                            <div className={styles.payFee} onClick={handleCLickBuy}>ĐẶT HÀNG NGAY</div>
                        </div>
                    </div> : ''}
                </div>}
            {button ? <Select cart={cart} total={total} setButton={setButton} /> : ''}
        </>
    )
}

export default Cart