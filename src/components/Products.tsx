import React from 'react'
import { products } from '../services/data'
import { ProductCard } from './ProductCard'
import { useStore } from '../hooks/useReducer'
import { ProductTypes } from '../types/types'




export const Products = () => {
    const { addProductToCart, addProducts } = useStore()

    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-2xl'>Mis productos</h1>
            <div
                className='grid grid-cols-3 font-bold gap-4'>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            addProductToCart={() => addProductToCart(product)}
                            product={product.title}
                            image={product.image}
                            price={product.price}
                            addProducts={addProducts} />
                    ))
                }

            </div>
        </div>
    )
}
