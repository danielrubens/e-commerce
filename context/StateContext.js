import React, {createContext, useContext, useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

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


    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((i) => i._id !== product._id);
        setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity)
        setTotalQuantities((prev) => prev - foundProduct.quantity)
        setCartItems(newCartItems)
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        const index = cartItems.findIndex((product) => product._id === id)
        const newCartItems = cartItems.filter((i) => i._id !== id);
        if(value === 'inc'){
            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}])
            setTotalPrice((prev) => prev + foundProduct.price);
            setTotalQuantities(prev => prev + 1)
        }else if(value === 'dec'){
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}])
                setTotalPrice((prev) => prev - foundProduct.price);
                setTotalQuantities(prev => prev - 1)
            }
        }
    }

    const incQty = () => { setQty((prev) => prev + 1) };
    const decQty = () => { setQty((prev) => {
            if(prev - 1 < 1) return 1;
            return prev - 1
            }) 
        };

    return(
        <Context.Provider
            value={{showCart, setShowCart, cartItems, totalPrice, totalQuantities, qty, 
            incQty, decQty, onAdd, toggleCartItemQuantity, onRemove, setCartItems, setTotalPrice, setTotalQuantities}}>
                {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);