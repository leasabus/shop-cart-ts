export interface ProductTypes {
    id: number,
    title: string,
    image: string,
    price: number

}

export type CartState = {
    addProducts: ProductTypes[];
    deleteProducts: ProductTypes[]
    totalPrice: number
}


export type ActionTypes =
    | { type: 'ADD_PRODUCT', payload: ProductTypes }
    | { type: 'DELETE_PRODUCT', payload: ProductTypes }

