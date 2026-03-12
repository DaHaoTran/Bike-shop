"use client"
import React, { Suspense, useEffect, useState } from 'react'
import styles from './page.module.css'
import Bike from '../components/bike'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchStr = searchParams.get("str");
  const id = searchParams.get("id");
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    if (!id) return

    async function getBikesById() {
      try {
        const res = await fetch(`/api/bikes/by_types?id=${id}`);
        if (!res.ok) {
          router.push(`/pages/errors/${res.status}`);
          return
        }
        const data = await res.json();
        setBikes(data);
      } catch (error) {
        router.push(`/pages/errors/${error.status}`);
      }
    }
    getBikesById();
  }, [id])

  return (
    <div className={styles.products_container}>
      <h1 className='mx-4 mb-4 fw-bold'>
        Kết quả tìm kiếm: {searchStr && searchStr.includes('from') ? 'theo giá lọc' : searchStr}
      </h1>
      <div className='row'>
        {bikes.map((x) => (
          <div className='col-lg-4 col-md-6' key={x.id}>
            <div className='d-flex justify-content-center'><Bike bike={x} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProductsContent />
    </Suspense>
  )
}
