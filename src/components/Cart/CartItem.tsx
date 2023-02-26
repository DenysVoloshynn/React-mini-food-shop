import React from 'react'
import classes from "./CartItem.module.css";

interface ICartItemProps {
  name: string,
  id: string,
  amount: number,
  price: number,
  desc: string,
  onAdd(): void,
  onRemove(): void,
}

function CartItem({ name, price, amount, onAdd, onRemove }: ICartItemProps) {


  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );

}


export default CartItem