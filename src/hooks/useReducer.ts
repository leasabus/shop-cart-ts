import { number } from "prop-types"
import { ActionTypes, CartState, ProductTypes } from "../types/types"
import { useReducer } from "react"

const initialState: CartState = {
    addProducts: [],
    deleteProducts: [],
    totalPrice: 0
}

function reducer(state: CartState, action: ActionTypes) {
    const { type } = action
    //añadir productos
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                //recupera el estado y le agrega un producto disparando un payload
                ...state,
                addProducts: [...state.addProducts, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
            };
        //suma los productos

        case 'DELETE_PRODUCT':
            return {
                ...state,
                deleteProducts: [...state.deleteProducts, action.payload],
                totalPrice: state.totalPrice - action.payload.price
            };

        default:
            return state;
    }
}


export function useStore() {
    const [{ addProducts, deleteProducts, totalPrice }, dispatch] = useReducer(reducer, initialState)


    const addProductToCart = (product: ProductTypes) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product })
    }

    const deleteProductToCart = (product: ProductTypes) => {
        dispatch({ type: 'DELETE_PRODUCT', payload: product })
    }

    return {
        addProducts, addProductToCart,
        deleteProducts, deleteProductToCart,
        totalPrice,
    }

}

//aplicar el reducer