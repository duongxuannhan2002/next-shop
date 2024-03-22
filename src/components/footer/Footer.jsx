import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.benfenit}>
        <div className={styles.material}>
          <Image src='/security.png' alt='' width={70} height={70} className={`${styles.imgBenfenit} ${styles.none}`} />
          <div className={styles.descBenfenit}>Chất liệu chất lượng</div>
        </div>
        <div className={styles.material}>
          <Image src='/updated.png' alt='' width={70} height={70} className={styles.imgBenfenit} />
          <div className={styles.descBenfenit}>Bảo trì trọn đời</div>
        </div>
        <div className={styles.material}>
          <Image src='/free-delivery.png' alt='' width={70} height={70} className={styles.imgBenfenit} />
          <div className={styles.descBenfenit}>Miễn phí <br /> giao hàng toàn quốc</div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.contact}>
            <div className={styles.logowithname}>
              <Image src='/logo.jpg' alt='' width={40} height={40} />
              <div className={styles.name}>SHOP</div>
            </div>
            <div style={{ color: 'gray' }}>Hotline:</div>
            <div style={{ fontWeight: '600', fontSize: '25px', color: 'white', paddingTop: '10px' }}>1900 2023</div>
          </div>
          <div className={styles.infoGener}>
            <div className={styles.title}>Thông tin chung</div>
            <ul className={styles.list}>
              <li>Điều kiện giao dịch chung</li>
              <li>Hệ thống cửa hàng</li>
              <li>Đăng ký đại lý</li>
              <li>Chính sách bảo hành</li>
              <li>Quy định đổi trả sản phẩm</li>
              <li>Chính sách bảo mật</li>
              <li>Tin tức doanh nghiệp</li>
            </ul>
          </div>
          <div className={styles.help}>
            <div className={styles.title}>Hướng dẫn mua hàng</div>
            <ul className={styles.list} style={{ gridTemplateColumns: '1fr' }}>
              <li>Vận chuyển và giao nhận</li>
              <li>Phương thức thanh toán</li>
            </ul>
          </div>
          <div className={styles.connect}>
            <div className={styles.title}>Kết nối với chúng tôi</div>
            <ul className={styles.list} style={{ gridTemplateColumns: '1fr' }}>
              <li className={styles.anyInfo}>
                <Image src='/facebook.png' alt='' width={20} height={20} />
                Facebook
              </li>
              <li className={styles.anyInfo}>
                <Image src='/twitter.png' alt='' width={20} height={20} />
                Twitter
              </li>
              <li className={styles.anyInfo}>
                <Image src='/youtube.png' alt='' width={20} height={20} />
                Youtube
              </li>
              <li className={styles.anyInfo}>
                <Image src='/instagram.png' alt='' width={20} height={20} />
                Instagram
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.fcontact}>
          <div className={styles.nocopy}>
            <Image src='/bocongthuong.png' alt='' width={180} height={50} />
            @2023 All rights reserved NHAN
          </div>
          <div className={styles.address}>
            <div>CÔNG TY TNHH NHAN VIỆT NAM</div>
            <div>Địa chỉ: Số 129 Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Thành Phố Hà Nội, Việt Nam</div>
            <div>Mã số doanh nghiệp: 0106156656</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer