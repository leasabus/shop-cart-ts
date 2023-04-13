import React from 'react'
import { ProductTypes } from '../types/types'

interface Props {
    product: string
    image: string
    price: number
    addProductToCart: (product: ProductTypes) => void
    addProducts: ProductTypes[]
}
export const ProductCard: React.FC<Props> = ({ product, image, price, addProductToCart, addProducts }) => {
    console.log(addProductToCart)
    return (
        <div className='bg-slate-600 text-white flex flex-col items-center p-4'>
            <span>{product}</span>
            <img src={image} width="100px" height="50px" className='rounded' />
            <span>${price}</span>
            <div className='flex flex-row items-center gap-2 mt-4'>
                <button className='bg-blue-500 rounded'>Ver producto</button>
                <button
                    onClick={() => addProductToCart}
                    className='bg-blue-500 rounded'>Agregar al carrito</button>


            </div>
        </div>
    )
}
