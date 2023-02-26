import React, { useState, useContext } from 'react'
import s from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import { CartContext } from '../../store/cart-context'






function Cart({ onHideCart }) {

    const items = useContext(CartContext).items
    const addItem = useContext(CartContext).addItem
    const removeItem = useContext(CartContext).removeItem

    function addItemCartHandler(item) {
        const newAmount = 1
        const newItem = { ...item, amount: newAmount }
        addItem({ ...newItem })
    }

    function removeItemCartHandler(item) {
        removeItem(item)
    }



    const itemsHTML = (items.length > 0
        ? items.map(item => <CartItem name={item.name}
            id={item.id}
            key={item.key}
            price={item.price}
            desc={item.desc}
            amount={item.amount}
            onAdd={addItemCartHandler.bind(null, item)}
            onRemove={removeItemCartHandler.bind(null, item)} />)
        : <p>Вы ничего в корзину не добавили.</p>)


    const totalPrice = useContext(CartContext).totalPrice



    return (
        <Modal onHideCart={onHideCart}>
            <ul className={s["cart-items"]}>
                {itemsHTML}
            </ul>

            <div className={s.total}>
                <span>Итого</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className={s.actions}>
                <button onClick={onHideCart} className={s["button--alt"]}>Закрыть</button>
                {Boolean(items.length) && <button className={s.button}>Заказать</button>}
            </div>
        </Modal>
    )
}

export default Cart




