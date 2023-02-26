import React, { useContext, useEffect, useState } from 'react'
import styles from './HeaderCartButton.module.css'
import CartIcon from './CartIcon'
import { CartContext } from '../../store/cart-context'


// interface IButtonProps {
//     onCLick(): void
// }
// : IButtonProps

function HeaderCartButton({ onCLick }) {

    const [btnAnimation, setBtnAnimation] = useState(false)

    const items = useContext(CartContext).items
    let itemsAmount = 0

    items.map((item) => itemsAmount += item.amount)

    let btnCLasses = `${styles.button} ${btnAnimation ? styles.bump : ""}`

    useEffect(() => {
        setBtnAnimation(true)
        const timer = setTimeout(() => setBtnAnimation(false), 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])



    return (
        <button onClick={onCLick} className={btnCLasses}>
            <span> <CartIcon className={styles.icon} /> </span>
            <span> Cart </span>
            <span className={styles.badge}> {itemsAmount} </span>
        </button>
    )
}

export default HeaderCartButton

