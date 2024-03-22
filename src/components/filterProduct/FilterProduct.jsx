
import React, { useState } from 'react'
import styles from './filterproduct.module.css'
import GetProduct from '../getproduct/GetProduct'



const FilterProduct = () => {
    const [clickIndex, setClickIndex] = useState([])
    const handleOnClick = (index) => {
        if (clickIndex.includes(index)) {
            setClickIndex(clickIndex.filter((clickIndex) => clickIndex !== index))
        } else {
            setClickIndex([...clickIndex, index])
        }
    }
    return (
      <>
        <div className={styles.filter}>
            <div className={styles.sort}>
              <div className={styles.sorttitle}>Sắp xếp</div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(0) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(0)}
                ></div>
                <div className={styles.descsort}>Giá giảm dần</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(1) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(1)}
                ></div>
                <div className={styles.descsort}>Giá tăng dần</div>
              </div>
            </div>
            <div className={styles.sort}>
              <div className={styles.sorttitle}>Thương hiệu</div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(2) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(2)}
                ></div>
                <div className={styles.descsort}>Adidas</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(3) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(3)}
                ></div>
                <div className={styles.descsort}>Nike</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(4) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(4)}
                ></div>
                <div className={styles.descsort}>Ananas</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(5) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(5)}
                ></div>
                <div className={styles.descsort}>Puma</div>
              </div>
            </div>
            <div className={styles.sort}>
              <div className={styles.sorttitle}>Mức giá</div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(6) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(6)}
                ></div>
                <div className={styles.descsort}>Giá dưới 500.000đ</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(7) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(7)}
                ></div>
                <div className={styles.descsort}>500.000đ - 1.000.000đ</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(8) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(8)}
                ></div>
                <div className={styles.descsort}>1.000.000đ - 2.000.000đ</div>
              </div>
              <div className={styles.include}>
                <div
                  className={`${styles.o} ${clickIndex.includes(9) ? styles.newO : ''}`}
                  onClick={() => handleOnClick(9)}
                ></div>
                <div className={styles.descsort}>Giá trên 2.000.000đ</div>
              </div>
            </div>
          </div>
          <GetProduct/>
          </>
    )
}

export default FilterProduct