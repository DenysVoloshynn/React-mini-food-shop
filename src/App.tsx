import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import {CartContextProvider} from './store/cart-context'


function App() {

  const [cartIs, setCartIs] = useState(false)

  const showCart = () => setCartIs(true) 
  const hideCart = () => setCartIs(false) 




  return (
    <CartContextProvider>
      { cartIs && <Cart onHideCart={hideCart} /> }
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}



export default App;

