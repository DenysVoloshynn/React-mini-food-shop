import React, {useContext} from 'react'
import s from './MealItem.module.css'
import MealItemForm from './MealItemForm/MealItemForm'
import { CartContext } from '../../../store/cart-context'

interface IMealProps {
    name: string,
    desc: string, 
    price: number, 
    id: string,
    amount?: number
}

function Meal ({name, desc, price, id}: IMealProps) {
    
    const cartContext = useContext(CartContext)

    function addItemHandler (amount: any) {
        const key = Date.now()
        cartContext.addItem({
            name: name,
            desc: desc,
            price: price,
            id: id,
            amount: amount,
            key: key
        })
    }

    return (
        <li className={s.meal}>
            <div>
                <h3>{name}</h3>
                <div className={s.description}> {desc} </div>
                <div className={s.price}> {price.toFixed(2)}$ </div>
            </div>
            <div>
                <MealItemForm onAddCart={addItemHandler} id={id}/>
            </div>
        </li>
    )
}

export default Meal