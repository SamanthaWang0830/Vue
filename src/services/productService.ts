import type { Product } from "../types"

const DUMMY_PRODUCTS: Product[] = [
  { id: "1", name: 'Apple',      price: 2 },
  { id: "2", name: 'Orange',     price: 3 },
  { id: "3", name: 'Banana',     price: 1.5 },
  { id: "4", name: 'Peach', price: 6 },
  { id: "5", name: 'Mango',      price: 4 },
]

export const fetchProducts= async()=>{
    return JSON.parse(JSON.stringify(DUMMY_PRODUCTS))
}

export const fetchProductsById= async(id: string)=>{
    const found= DUMMY_PRODUCTS.find(p=> p.id===id)
    return found? JSON.parse(JSON.stringify(found)): null
}