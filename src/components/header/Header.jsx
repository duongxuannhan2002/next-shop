"use client"

import { React, useEffect, useState } from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Cart from '../cart/Cart'
import Search from '../search/Search'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSearch, setOpensearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [totalItem, setTotalItem] = useState()
    const [token, setToken] = useState()
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogOut = () => {
        if (typeof window !== 'undefined') {
            localStorage?.removeItem('token')
            localStorage?.removeItem('name')
            localStorage?.removeItem('id_user')
            window.location.href = 'https://next-shop-gules.vercel.app/dangnhap'
        }
        
    }

    useEffect(()=>{
        setToken(localStorage.getItem('token'))
    },[])

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
                {token?
                    <Link href='/dangnhap' className={styles.link} onClick={handleLogOut}>ĐĂNG XUẤT</Link> :
                    <Link href='/dangnhap' className={styles.link}>ĐĂNG NHẬP</Link>
                }
            </div>
            <div className={styles.right}>
                <Image src='/shopping-cart.png' alt='' width={25} height={25} className={styles.image} onClick={() => setOpenCart(!openCart)} />
                {token && totalItem ? <div className={styles.totalItem}>{totalItem}</div> : ""}
                <Image src='/search.png' alt='' width={23} height={23} className={styles.image} onClick={() => setOpensearch(!openSearch)} />
            </div>
            <div className={styles.menu} onClick={() => setMenu(!menu) }>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={menu ? `${styles.mNavigation}` : `${styles.nNavigation}`}>
                <Link href='/' className={styles.link}>TRANG CHỦ</Link>
                <Link href='/sanpham' className={styles.link}>SẢN PHẨM</Link>
                <Link href='/gioithieu' className={styles.link}>GIỚI THIỆU</Link>
                {token?
                    <Link href='/dangnhap' className={styles.link} onClick={handleLogOut}>ĐĂNG XUẤT</Link> :
                    <Link href='/dangnhap' className={styles.link}>ĐĂNG NHẬP</Link>
                }
            </div>
            <Search openSearch={openSearch} />
            <Cart openCart={openCart} setOpenCart={setOpenCart} setTotalItem={setTotalItem} />
        </div>
    )
}

export default Header