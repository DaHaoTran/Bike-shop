"use client"
import React, { useEffect, useState } from 'react'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import styles from './bike_type.module.css'
import { useRouter } from 'next/navigation'
import Error from '../pages/errors/[number]/page'

export default function BikeType({id, name}) {
  const router = useRouter();
  const [bike, setBike] = useState({});
  const [bikes, setBikes] = useState([]);

  const onTypeClick = () => {
    router.push('/products')
  }

  useEffect(() => {
    try {
      async function getBikesById(params) {
        const res = await fetch(`api/bikes`);
        if (!res.ok) {
          route.push(`/pages/errors/${res.status}`)
          return
        }
        const data = await res.json();
        setBikes(data);
      }
      getBikesById();
    } catch (error) {
      route.push(`/pages/errors/${error.status}`)
    }
  }, []);

  useEffect(() => {
    if(!id) return;
    setBike(bikes.find(x => x.typeId === id));
  }, [id, bikes])

  if(!bike || Object.keys(bike).length <= 0) return null;
  return (
    <div className={styles.type_container} onClick={x => onTypeClick()}>
        <div className={styles.type_background}></div>
        <h4 className={styles.type_name}><strong>{name}</strong></h4>
        <Image
            className={`position-relative ${styles.type_image}`}
            src={`data:image/png;base64,${bike.image}`} 
            width={350}
            height={280}
            alt='bike image' />
    </div>
  )
}
