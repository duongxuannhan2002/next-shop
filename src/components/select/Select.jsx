import React, { useEffect, useState } from 'react'
import styles from './select.module.css'
import Image from 'next/image';
import { toast } from 'react-toastify';

const Select = ({ data, select, quantity, idSize, setBuyButton }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [payment, setPayMent] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')


    const getProvinces = async () => {
        try {
            const res = await fetch('https://vapi.vnappmob.com/api/province/')
            const data = await res.json()
            setProvinces(data.results)
        } catch (err) {
            console.error('err: ', err)
        }
    }

    useEffect(() => {
        getProvinces()
    }, []);

    const handleProvinceChange = async (e) => {
        const selectedProvince = e.target.value;
        const getId = provinces.find(province => province.province_name === selectedProvince)
        setSelectedProvince(selectedProvince);

        // Fetch danh sách huyện/quận của tỉnh/thành phố đã chọn
        try {
            const res = await fetch(`https://vapi.vnappmob.com/api/province/district/${getId.province_id}`)
            const data = await res.json()
            setDistricts(data.results)
        } catch (err) {
            console.error('err: ', err)
        }
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setSelectedDistrict(selectedDistrict);
    };

    const handleAddress = (value) => {
        setAddress(value)
    }

    const handlePayMent = (e) => {
        setPayMent(e.target.value)
    }

    const handleOrder = async () => {
        if (selectedDistrict === '' || selectedProvince === '' || address === '') {
            toast.error('Vui lòng nhập địa chỉ đầy đủ')
        } else if (phoneNumber === '') {
            toast.error('Vui lòng nhập số điện thoại')
        } else if (payment === '') {
            toast.error('Vui lòng chọn phương thức thanh toán')
        } else {

            const currentime = new Date()
            const time = `${currentime.getHours()}:${currentime.getMinutes()} ${currentime.getDate()}-${currentime.getMonth()+1}-${currentime.getFullYear()}`
            console.log(time);
            const pdata = {
                id_user: localStorage.getItem('token') ? localStorage.getItem('id_user') : 0,
                order_date: time,
                address: `${address}/ ${selectedDistrict}/ ${selectedProvince}`,
                phoneNumber: phoneNumber,
                totalPrice: (quantity * data[0].price * (100 - data[0].discount) / 100).toFixed(0),
                payment: payment,
                status: 'đã đặt hàng',
                products: [
                    {
                        id_product: data[0].id,
                        id_size: idSize,
                        quantity: quantity
                    }
                ]
            }
            if (payment === 'cash') {
                try {
                    const res = await fetch('https://ttcs-delta.vercel.app/api/v1/post-order', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(pdata)
                    })
                    const resdata = await res.json()
                    toast.success(resdata.message)
                    setBuyButton(false)
                } catch (error) {
                    console.error('Error:', error)
                }
            }else{
                localStorage.setItem('createOrder',JSON.stringify(pdata))
                const res = await fetch(`https://ttcs-delta.vercel.app/api/v1/payment?amount=${pdata.totalPrice}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                const resdata = await res.json()
                window.location.href = `${resdata.data.vnpUrl}`
            }
        }
    }

    const handlePhoneNumber = (value) => {
        setPhoneNumber(value)
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.x} onClick={() => setBuyButton(false)}>X</h1>
                <h2>Thông tin mặt hàng</h2>
                {data.length > 0 && <div className={styles.info}>
                    <Image src={data[0].image} height={100} width={130} />
                    <div className={styles.detail}>
                        <h3>{data[0].name}</h3>
                        <div>Kích cỡ: <b>{select}</b></div>
                        <div>Số lượng: <b>{quantity}</b></div>
                        <div>Tổng số tiền: <b>{quantity * data[0].price * (100 - data[0].discount) / 100}đ</b></div>
                    </div>
                </div>}

                <h3>Nhập địa chỉ</h3>
                <select value={selectedProvince} onChange={handleProvinceChange} className={styles.select}>
                    <option value="">Chọn tỉnh/thành phố</option>
                    {provinces.length > 0 && provinces.map((province) => (
                        <option key={province.province_id} value={province.province_name}>{province.province_name}</option>
                    ))}
                </select>
                <select value={selectedDistrict} onChange={handleDistrictChange} className={styles.select}>
                    <option value="">Chọn huyện/quận</option>
                    {districts.length > 0 && districts.map(district => (
                        <option key={district.district_id} value={district.district_name}>{district.district_name}</option>
                    ))}
                </select>
                <input type="text"
                    placeholder='Nhập phường/xã/đường/số nhà'
                    className={styles.input}
                    value={address}
                    onChange={(e) => handleAddress(e.target.value)}
                />
                <input type="text"
                    placeholder='Nhập số điện thoại nhận hàng'
                    className={styles.input}
                    value={phoneNumber}
                    onChange={(e) => handlePhoneNumber(e.target.value)}
                />
                <select className={styles.select} value={payment} onChange={handlePayMent}>
                    <option value="">Chọn hình thức thanh toán</option>
                    <option value="cash">Thanh toán khi nhận hàng</option>
                    <option value="banking">Thanh toán bằng tài khoản ngân hàng</option>
                </select>
                <div className={styles.button} onClick={handleOrder}>Đặt hàng</div>
            </div>
        </>
    )
}

export default Select