import { useState, useEffect } from 'react'
import axios from 'axios'


const useGetProducts = API => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const { data: products } = await axios.get(API)
    setProducts(products)
  }, [])

  return products
}

export default useGetProducts