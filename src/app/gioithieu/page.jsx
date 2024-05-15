"use client"


import Slideshow from '@/components/slideshow/Slideshow'
import React from 'react'
import styles from './gioithieu.module.css'

const Page = () => {
    return (
        <div>
            <Slideshow />
            <div className={styles.container}>
                <div className={styles.introGen}>
                    <div className={styles.ltitle}>
                        <div className={styles.line}></div>
                        <div className={styles.title}>GIỚI THIỆU CHUNG</div>
                    </div>

                    <div className={styles.desc}>
                        NSHOP hướng tới mục tiêu trở thành thương hiệu đồ da hàng đầu Việt Nam,
                        chúng tôi luôn nỗ lực không ngừng để đưa thương hiệu LaForce trở nên gần
                        gũi hơn và là thương hiệu cung cấp những sản phẩm đồ da, bao gồm: giày,
                        túi, ví, thắt lưng, dây đồng hồ, găng tay. Mang chất lượng tốt nhất, thỏa
                        mãn nhu cầu mua sắm của quý khách hàng.
                    </div>
                </div>
                <div className={styles.whychosen}>
                    <div className={styles.rtitle}>

                        <div className={styles.title}>TẠI SAO BẠN NÊN CHỌN NSHOP</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.desc}>
                        <div>Sản phẩm đồ da NSHOP được làm từ da bò thật nguyên miếng, giữ nguyên được
                            kết cấu của da nên có thể dùng được lâu dài, tuổi thọ trung bình đạt từ 3 đến 5 năm.
                        </div>

                        <div>Với thiết kế độc đáo, lịch lãm và không kém phần hiện đại, các sản phẩm của LaForce
                            phù hợp với nhiều đối tượng, tôn lên sự nam tính cho các quý ông hiện đại. Các sản
                            phẩm đều được kiểm tra kỹ lưỡng trước khi mang bán ra thị trường, mang đến những sản
                            phẩm với chất lượng tốt nhất tới quý khách hàng.
                        </div>

                        <div>Ngoài ra, với hệ thống cửa hàng rộng khắp cả nước cùng đội ngũ nhân viên bán hàng chuyên
                            nghiệp, LaForce hứa hẹn mang đến quý khách hàng dịch vụ khách hàng tốt nhất cùng chính
                            sách bảo hành, bảo trì trọn đời cho các sản phẩm da từ LaForce như lời cam kết về uy
                            tín và chất lượng của chúng tôi đến với khách hàng.
                        </div>
                    </div>
                </div>
                <div className={styles.introGen}>
                    <div className={styles.ltitle}>
                        <div className={styles.line}></div>
                        <div className={styles.title}>PHÂN KHÚC VÀ GIÁ CẢ CỦA GIÀY</div>
                    </div>
                    <div className={styles.desc}>
                        <div>
                            Hiện giá giày Nike chính hãng nhập khẩu từ Việt Nam dao động từ 2 triệu đến 10 triệu đồng tùy theo
                            loại giày, kiểu giày, thời gian bán hàng và địa chỉ bán hàng. Mức giá phổ biến nhất trên thị trường
                            Việt Nam từ 2.000.000 -5.000.000 VNĐ. Đối với người tiêu dùng Việt Nam, không khó để sở hữu những
                            đôi giày thật của thương hiệu Nike nổi tiếng thế giới.
                        </div>
                        <div>
                            Ngoài ra, Nike cũng tung ra một phiên bản giới hạn được thiết kế đặc biệt với thiết kế, chất liệu,
                            màu sắc và họa tiết độc đáo với mức giá từ 15 triệu đồng đến 20 triệu đồng, đã được rất nhiều tín
                            đồ yêu giày và các ngôi sao nổi tiếng “săn lùng” khẳng định phong cách thời trang và “độ chịu chơi” của họ.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page