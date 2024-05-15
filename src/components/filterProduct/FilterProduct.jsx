"use client"


import React, { useState } from 'react'
import styles from './filterproduct.module.css'



const FilterProduct = ({handleOnClickSort, handleOnClickBrand, handleOnClickValue, sort, brand, value}) => {
    return (
      <>
        <div className={styles.filter}>
            <div className={styles.sort}>
              <div className={styles.sorttitle}>Sắp xếp</div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${sort.includes(0) ? styles.newO : ''}`}
                  onClick={() => handleOnClickSort(0)}
                ></div>
                <div className={styles.descsort}>Giá giảm dần</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${sort.includes(1) ? styles.newO : ''}`}
                  onClick={() => handleOnClickSort(1)}
                ></div>
                <div className={styles.descsort}>Giá tăng dần</div>
              </div>
            </div>
            <div className={styles.sort}>
              <div className={styles.sorttitle}>Thương hiệu</div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${brand.includes('adidas') ? styles.newO : ''}`}
                  onClick={() => handleOnClickBrand('adidas')}
                ></div>
                <div className={styles.descsort}>Adidas</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${brand.includes('nike') ? styles.newO : ''}`}
                  onClick={() => handleOnClickBrand('nike')}
                ></div>
                <div className={styles.descsort}>Nike</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${brand.includes('vans') ? styles.newO : ''}`}
                  onClick={() => handleOnClickBrand('vans')}
                ></div>
                <div className={styles.descsort}>Vans</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${brand.includes('puma') ? styles.newO : ''}`}
                  onClick={() => handleOnClickBrand('puma')}
                ></div>
                <div className={styles.descsort}>Puma</div>
              </div>
            </div>
            <div className={styles.sort}>
              <div className={styles.sorttitle}>Mức giá</div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${value.includes(6) ? styles.newO : ''}`}
                  onClick={() => handleOnClickValue(6)}
                ></div>
                <div className={styles.descsort}>Giá dưới 500.000đ</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${value.includes(7) ? styles.newO : ''}`}
                  onClick={() => handleOnClickValue(7)}
                ></div>
                <div className={styles.descsort}>500.000đ - 1.000.000đ</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${value.includes(8) ? styles.newO : ''}`}
                  onClick={() => handleOnClickValue(8)}
                ></div>
                <div className={styles.descsort}>1.000.000đ - 2.000.000đ</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${value.includes(9) ? styles.newO : ''}`}
                  onClick={() => handleOnClickValue(9)}
                ></div>
                <div className={styles.descsort}>Giá trên 2.000.000đ</div>
              </div>
            </div>
          </div>
          </>
    )
}

export default FilterProduct