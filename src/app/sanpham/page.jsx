import styles from "./sanpham.module.css"
import Slideshow from '@/components/slideshow/Slideshow'
import Link from 'next/link'
import GetProduct from '@/components/getproduct/GetProduct'
import FilterProduct from '@/components/filterProduct/FilterProduct'

const Sanpham =  () => {
  return (
    <>
      <Slideshow />
      <div className={styles.container}>
        <div className={styles.title}>Tất cả sản phẩm</div>
        <div className={styles.fullpage}>
          <GetProduct/>
        </div>
      </div>
    </>

  )
}

export default Sanpham