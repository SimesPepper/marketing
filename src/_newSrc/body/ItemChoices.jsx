import React from 'react';
import { Link } from 'react-router-dom';

import './itemChoice.scss'

export default ({ choices, chosen, setChosen, cart, setCart, history, location }) => {

    console.log(location)

    const handlePurchase = item => { //only doing this because i really dont want to redo my button styles

        location.state = item
        history.push('/checkout')

    }


    return (

        <div className="item-choice" >

            <Link to="/cart">
                <div className={`cart ${ cart.length > 0? 'active': 'not' }`}>
                    <i class="fas fa-shopping-cart"></i>
                    <p>{cart.length} {cart.length > 1? 'items' : 'item'}</p>
                    <p>Total: ${cart.reduce((acc, cur) => acc += cur.price, 0) / 100 }</p>
                </div>
            </Link>

            {
                !chosen[0] ? choices.map(item => (

                    <div className="choices" onClick={ _ => setChosen([item])}>
                        <img src={require('../../img/simes_bottle_top_burned.png')} alt="bottle of pepper sauce" className="choice"/>

                        <div className="description">
                            <h1 className={item.heat} >{item.heat.toUpperCase()}</h1>
                            <h1 className={`price ${item.subClass}`} >$7.99</h1>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>

                )):
                < div className='chosen' >
                
                    <i class="fas fa-undo fa-3x" onClick={ _ => setChosen([])} />
                    
                    <div className="choices">
                        <img src={require('../../img/simes_bottle_top_burned.png')} alt="bottle of pepper sauce" className="choice"/>

                        <div className="description">
                            <h1 className={chosen[0].heat} >{chosen[0].heat.toUpperCase()}</h1>
                            <h1 className={`price ${chosen[0].subClass}`} >$7.99</h1>
                            <p>
                                {chosen[0].description}
                            </p>
                        </div>
                    </div>

                    <div className="buttons">
                        <input className="purchase" type="submit" value="PURCHASE" onClick={ _ => handlePurchase(chosen[0])} />
                        <input className="add-to-cart" type="submit" value="ADD TO CART" onClick={e => setCart([...cart, {...chosen[0], id: Date.now()}])}/>
                    </div>
                </div >

            }
            
        </div>
    )
}