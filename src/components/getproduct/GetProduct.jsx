"use client"

import React, { useEffect, useState } from 'react';
import styles from './getproduct.module.css';
import Link from 'next/link';
import Image from 'next/image';
import FilterProduct from '../filterProduct/FilterProduct';

const GetProduct = () => {
    const [data, setData] = useState([]);
    const [ldata, setLdata] = useState([]);
    const [sort, setSort] = useState([])
    const [brand, setBrand] = useState([])
    const [value, setValue] = useState([])

    const fetchData = async () => {
        try {
            const res = await fetch('https://ttcs-delta.vercel.app/api/v1/get-shoes')
            const jData = await res.json();
            setData(jData.data);
            // setLdata(jData.data); // Initialize ldata with initial data
        } catch (error) {
            console.log("error fetch: ", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const handleOnClickSort = (index) => {
        if (sort.includes(index)) {
            setSort(sort.filter((sort) => sort !== index))
        } else {
            setSort([index])
        }
    }


    const handleOnClickBrand = (index) => {
        if (brand.includes(index)) {
            setBrand(brand.filter((brand) => brand !== index))
        } else {
            setBrand([...brand, index])
        }
    }


    const handleOnClickValue = (index) => {
        if (value.includes(index)) {
            setValue(value.filter((value) => value !== index))
        } else {
            setValue([index])
        }
    }

    useEffect(() => {
        let filtered = [...data];
        if (sort[0] === 0) {
            filtered.sort((a, b) => (b.price * (100 - b.discount) / 100) - (a.price * (100 - a.discount) / 100));
        } else if (sort[0] === 1) {
            filtered.sort((a, b) => (a.price * (100 - a.discount) / 100) - (b.price * (100 - b.discount) / 100));
        }

        if (brand.length > 0) {
            filtered = filtered.filter(item => brand.includes(item.brand.toLowerCase()));
        }

        setLdata(filtered);
    }, [sort, brand, value, data]);
    return (
        <>
            <FilterProduct handleOnClickSort={handleOnClickSort} handleOnClickBrand={handleOnClickBrand}
                handleOnClickValue={handleOnClickValue} sort={sort} brand={brand} value={value} />
            <div className={styles.prdContainer}>
                {ldata.length !== 0 ? ldata.map((item) => (
                    <Link href={`http://localhost:3000/sanpham/${item.id}`} className={styles.product} key={item.id}>
                        <div className={styles.saleoff}>
                            <span>{item.discount}</span>
                            <span>OFF</span>
                        </div>
                        <Image src={item.image} alt='' width={280} height={280} className={styles.imagePrd} />
                        <div className={styles.prdBrand}>{item.brand}</div>
                        <div className={styles.prdName}>{item.name}</div>
                        <div className={styles.price}>
                            <div className={styles.nPrice}>{(item.price * (100 - item.discount)) / 100} ₫</div>
                            <div className={styles.pPrice}>{item.price} ₫</div>
                        </div>
                    </Link>
                )) :
                    data.map((item) => (
                        <Link href={`http://localhost:3000/sanpham/${item.id}`} className={styles.product} key={item.id}>
                            <div className={styles.saleoff}>
                                <span>{item.discount}</span>
                                <span>OFF</span>
                            </div>
                            <Image src={item.image} alt='' width={280} height={280} className={styles.imagePrd} />
                            <div className={styles.prdBrand}>{item.brand}</div>
                            <div className={styles.prdName}>{item.name}</div>
                            <div className={styles.price}>
                                <div className={styles.nPrice}>{(item.price * (100 - item.discount)) / 100} ₫</div>
                                <div className={styles.pPrice}>{item.price} ₫</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

export default GetProduct;
