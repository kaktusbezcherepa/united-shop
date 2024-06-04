import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addCart = product => {
        setCart(prevCart => {
            const isProductInCart = prevCart.some(item => item.id === product.id);
            if(isProductInCart){
                return prevCart
            }
            return [...prevCart, product];
        });
    };
    const removeCart = productId => {
        setCart(prevCart => 
            prevCart.filter(product => product.id !== productId)
        );
    };


    const isInCart = productId => {
        return cart.some(product => product.id === productId)
    }
    
    return (
        <CartContext.Provider value={ {cart, addCart, removeCart, isInCart} }>
            {children}
        </CartContext.Provider>
    )
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

