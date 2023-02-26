import React from 'react'
import sushiImg from '../../assets/sushi.jpg';
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


interface IHeaderProps {
    onShowCart(): void
}

function Header({ onShowCart }: IHeaderProps) {

    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Япона Кухня</h1>
                <HeaderCartButton onCLick={onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={sushiImg}/>
            </div>
        </React.Fragment>
    )
}

export default Header