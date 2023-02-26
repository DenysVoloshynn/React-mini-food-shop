import React, { createContext, useReducer } from 'react'


const defCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {



    if (action.type === "ADD_ITEM") {

        let newItems

        const index = state.items.findIndex(item => item.id === action.item.id)
        const itemInCart = state.items[index]

        if (itemInCart) {
            const newItem = {
                ...itemInCart,
                amount: itemInCart.amount + action.item.amount
            }
            newItems = [...state.items]
            newItems[index] = newItem
        }
        else {
            newItems = [...state.items, action.item]
        }

        const totalPrice = state.totalPrice + (action.item.price * action.item.amount)

        return {
            items: newItems,
            totalPrice: totalPrice
        }
    }




    if (action.type === "REMOVE_ITEM") {

        const newItems = [...state.items]

        const index = state.items.findIndex((item) => item.id === action.item.id)
        const itemInCart = state.items[index]

        if (itemInCart.amount === 1) {
            newItems.splice(index, 1)
        }
        else {
            const newItem = {
                ...itemInCart,
                amount: itemInCart.amount - 1
            }
            newItems[index] = newItem
        }

        const totalPrice = Math.abs(state.totalPrice - action.item.price)

        return {
            items: newItems,
            totalPrice: totalPrice
        }
    }

    

    return defCartState
}




export const CartContext = createContext({
    items: [],
    totalPrice: 0,
    addItem: (item) => { },
    removeItem: (item) => { }
})



export function CartContextProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defCartState)

    function addItemHandler(item) {
        dispatchCartAction({ type: "ADD_ITEM", item: item })
    }

    function removeItemHandler(item) {
        dispatchCartAction({ type: "REMOVE_ITEM", item: item })
    }

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}