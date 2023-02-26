import React from 'react'
import ReactDom, { createPortal } from 'react-dom'
import s from './Modal.module.css'


interface IModalProps {
    children: React.ReactNode,
    onHideCart(): void
}



function Modal({ onHideCart, children }: IModalProps) {

    return (
        createPortal(
            <>
                <div onClick={onHideCart} className={s.backdrop}></div>
                <div className={s.modal}>
                    <div className={s.content}>
                        {children}
                    </div>
                </div>
            </>, 
            
            document.getElementById("overlays") as HTMLElement)
    )
}


export default Modal