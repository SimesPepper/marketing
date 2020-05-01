import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from '../footer/Footer';
import Header from '../header/Nav';

import './cart.scss'

export default ({ cart, setCart, history, location }) => {

    const [ filteredCart, setFilteredCart ] = useState() // unassigned now but, will be an array
    const [ current, setCurrent ] = useState()
    const [ subTotal, setSubTotal ] = useState(0)

    const cache = {} // { 'mild':  1 } 

    useEffect(() => { // i can loop through cart and see/set the quantity based on number of times i see that same flavor.

        cart.forEach( item => cache[item.heat] ? cache[item.heat]++ : cache[item.heat] = 1 )

    }, [cart])

    useEffect(() => {

        setFilteredCart(Object.keys(cache).map(key => ({
            heat: key,
            price: cache[key] * 7.99 ,
            quantity: cache[key]
        })))

    }, [cart])

    useEffect(() => {

        if (cart.length < 1){

            history.push('/')
        }

    }, [cart])

    useEffect(() => {

        setSubTotal(cart.reduce((acc, cur) => acc += cur.price, 0 ) / 100)

    }, [cart])

    useEffect(() => {
        
        location.state = filteredCart

    }, [filteredCart])

    

    const addToCartQuantity = (item) => {

        const filteredItem  = cart.filter(cartItem => cartItem.heat === item.heat) // this is an array
        const newItem = {...filteredItem[0]}

        setCart([...cart, newItem ])
    }

    const removeFromCartQuantity = (item) => { // This was a challenge... 
        // Id property is being created at itemChoices.js, upon adding item to cart (line: 55, onClick) 
        const theItem = cart.find(cartItem => cartItem.heat == item.heat )// find the first instance of an item having the same "heat", as the one created from the cache
        setCart([...cart.filter(item => item !== theItem)]) // "theItem" comes with an id, since it's the whole object. Just filter and exclude it.
    }

    const clearQuantity = (item) => {

        setCart([...cart.filter( cartItems => cartItems.heat !== item.heat )])
    }

 

   console.log(cart)
   console.log(cache)
    return (

        <div className="cart-page">
            <Header />

            {
                filteredCart && filteredCart.map(item => (

                    <div className="cart-item">
                        <div className="remove">
                            <i class="fas fa-minus-circle" onClick={e => clearQuantity(item)} />
                            <img src={require('../../img/simes_bottle_burned.png')} alt={`bottle of si'me's pepper sauce, ${item.heat}`} />
                            <p> {item.heat} </p>
                        </div>

                        <p className="quantity">
                            Quantity: {item.quantity}
                            <i class="fas fa-plus" onClick={ e => addToCartQuantity(item) } />
                            <i class="fas fa-minus" onClick={ e => removeFromCartQuantity(item) } />
                        </p>

                        <p className="item-total">Item total: ${item.price}</p>
                    </div>
                ))
            }
            <Link to={{pathname:'/checkout', state:{cart: filteredCart, total: subTotal}}}><p className="sub-total" >Checkout: ${subTotal}</p></Link>
            
            <Footer />
        </div>
    )

}