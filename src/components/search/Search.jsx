import React from 'react'
import styles from './search.module.css'

const Search = ({openSearch}) => {
    return (
        <>
            {openSearch &&
                <div className={styles.search}>
                    <input type="text" name="" id="" className={styles.searchInput} placeholder='Bạn cần tìm gì ?' />
                    <button className={styles.searchButton}>TÌM KIẾM</button>
                </div>}
        </>
    )
}

export default Search