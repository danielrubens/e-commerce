import React, {createContext, useContext, useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((i) => i._id === product._id);
        setTotalPrice((prev) => prev + product.price * quantity);
        setTotalQuantities((prev) => prev + quantity);
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((i) => {
                if(i._id === product._id){
                    return {...i, quantity: i.quantity + quantity}
                } 
            })
            setCartItems(updatedCartItems);
        } else{
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const incQty = () => { setQty((prev) => prev + 1) };
    const decQty = () => { setQty((prev) => {
            if(prev - 1 < 1) return 1;
            return prev - 1
            }) 
        };

    return(
        <Context.Provider
            value={{showCart, cartItems, totalPrice, totalQuantities, qty, incQty, decQty, onAdd}}>
                {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);