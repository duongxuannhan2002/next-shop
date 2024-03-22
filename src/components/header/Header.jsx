"use client"

import { React, useEffect, useState } from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSearch, setOpensearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
            <Link className={styles.logoContainer} href='/'>
                <Image src="/logo.jpg" alt='' width={70} height={70} className={styles.logo} />
                <span className={styles.desc}>SHOP</span>
            </Link>
            <div className={styles.navigation}>
                <Link href='/' className={styles.link}>TRANG CHỦ</Link>
                <Link href='/sanpham' className={styles.link}>SẢN PHẨM</Link>
                <Link href='/gioithieu' className={styles.link}>GIỚI THIỆU</Link>
                <Link href='/dangnhap' className={styles.link}>ĐĂNG NHẬP</Link>
            </div>
            <div className={styles.right}>
                <Image src='/shopping-cart.png' alt='' width={25} height={25} className={styles.image} onClick={() => setOpenCart(!openCart)} />
                <Image src='/search.png' alt='' width={23} height={23} className={styles.image} onClick={() => setOpensearch(!openSearch)} />
            </div>
            {openSearch &&
                <div className={styles.search}>
                    <input type="text" name="" id="" className={styles.searchInput} placeholder='Bạn cần tìm gì ?' />
                    <button className={styles.searchButton}>TÌM KIẾM</button>
                </div>}
            {openCart &&
                <div className={styles.cart}>
                    <div className={styles.fullItem}>
                        <div className={styles.titleContainer}>
                            <span className={styles.titleCart}>Giỏ hàng</span>
                            <span className={styles.totalQuantity}>(2 sản phẩm)</span>
                            <span className={styles.exit} onClick={() => setOpenCart(!openCart)}>x</span>
                        </div>
                        <div className={styles.productContainer}>
                            <Image src="/product.jpg" alt='' width={100} height={130} />
                            <div className={styles.detail}>
                                <p className={styles.name}>Giày da nam Penny Loafer trẻ trung cao cấp</p>
                                <p className={styles.price}>1,750,000 ₫</p>
                                <p className={styles.size}>Size: 40</p>
                                <p className={styles.x}>x</p>
                                <p className={styles.quantity}>1</p>
                            </div>
                        </div>
                        <div className={styles.productContainer}>
                            <Image src="/product.jpg" alt='' width={100} height={130} />
                            <div className={styles.detail}>
                                <p className={styles.name}>Giày da nam Penny Loafer trẻ trung cao cấp</p>
                                <p className={styles.price}>1,750,000 ₫</p>
                                <p className={styles.size}>Size: 40</p>
                                <p className={styles.x}>x</p>
                                <p className={styles.quantity}>1</p>
                            </div>
                        </div>
                        <div className={styles.productContainer}>
                            <Image src="/product.jpg" alt='' width={100} height={130} />
                            <div className={styles.detail}>
                                <p className={styles.name}>Giày da nam Penny Loafer trẻ trung cao cấp</p>
                                <p className={styles.price}>1,750,000 ₫</p>
                                <p className={styles.size}>Size: 40</p>
                                <p className={styles.x}>x</p>
                                <p className={styles.quantity}>1</p>
                            </div>
                        </div>
                        <div className={styles.productContainer}>
                            <Image src="/product.jpg" width={100} height={130} />
                            <div className={styles.detail}>
                                <p className={styles.name}>Giày da nam Penny Loafer trẻ trung cao cấp</p>
                                <p className={styles.price}>1,750,000 ₫</p>
                                <p className={styles.size}>Size: 40</p>
                                <p className={styles.x}>x</p>
                                <p className={styles.quantity}>1</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bill}>
                        <div className={styles.information}>
                            <p>Giá trị sản phẩm</p>
                            <p>3,740,000 ₫</p>
                            <span className={styles.freeship}>Miễn phí vận chuyển</span>
                        </div>
                        <div className={styles.feeTotal}>
                            <p style={{ fontWeight: '600' }}>Tổng tiền thanh toán</p>
                            <p style={{ fontWeight: '700', fontSize: '35px' }}>3,740,000 ₫</p>
                            <div className={styles.payFee}>THANH TOÁN NGAY</div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Header