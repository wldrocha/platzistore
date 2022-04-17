import { useState, useEffect } from 'react'
import axios from 'axios'


const useGetProducts = API => {
  const [products, setProducts] = useState([])

  useEffect( () => {
    async function fetch() {

      const { data: products } = await axios.get(API)
      
      setProducts(products)
    }
    fetch()
  }, [])

  return products
}

export default useGetProducts