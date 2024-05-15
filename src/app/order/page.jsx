"use client"
import React, { useEffect, useState } from 'react'
import styles from './order.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Order() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [oneOrder, setOneOrder] = useState();

  useEffect(() => {
    const fecthAPI = async () => {
      try {
        const res = await fetch(`https://ttcs-delta.vercel.app/api/v1/get-all-order?id_user=${localStorage.getItem('id_user')}`)
        const jData = await res.json();
        setData(jData.data);
      } catch (error) {
        console.error("err: ", error)
      }
    }
    fecthAPI()
  }, [])

  const handleDetail = async (id) => {
    setOpen(true)
    try {
      const res = await fetch(`https://ttcs-delta.vercel.app/api/v1/get-detail-order?id_order=${id}`)
      const jData = await res.json();
      setOneOrder(jData.data)
    } catch (error) {
      console.error("err: ", error)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Danh sách đơn hàng</h2>
      <table border="1" cellPadding="10" className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Mã đơn hàng</th>
            <th className={styles.th}>Thời gian</th>
            <th className={styles.th}>Địa chỉ</th>
            <th className={styles.th}>Số điện thoại</th>
            <th className={styles.th}>Tổng giá</th>
            <th className={styles.th}>Trạng thái</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((order) => (
            <tr key={order.id} className={styles.tr}>
              <td className={styles.td}>{order.id}</td>
              <td className={styles.td}>{order.order_date}</td>
              <td className={styles.td}>{order.address}</td>
              <td className={styles.td}>{order.phone_number}</td>
              <td className={styles.td}>{order.total_price}</td>
              <td className={styles.td}>{order.status}</td>
              <td className={`${styles.td} ${styles.detail}`} onClick={() => handleDetail(order.id)}>Xem chi tiết</td>
            </tr>
          ))}
        </tbody>
      </table>
      {open && <div className={styles.detailOrder}>
        <div className={styles.x} onClick={() => setOpen(false)}>X</div>
        {oneOrder && oneOrder.map((item) => (
          <div className={styles.info}>
            <Image src={item.image} alt='' width={100} height={130} />
            <div className={styles.detailP} key={item.id}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.size}>Size: {item.size}</p>
              <div>Số lượng: {item.quantity}</div>
            </div>
          </div>
        ))
        }

      </div>}
    </div>
  );
};

