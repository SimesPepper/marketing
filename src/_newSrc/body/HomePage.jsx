import React, { useEffect, useState } from 'react';

import Nav from '../header/Nav';
import Overlay from './Overlay';
import Footer from '../footer/Footer';
import ItemChoices from './ItemChoices';

import '../index.scss';

export default ({ cart, setCart, history, location }) => {

    console.log(cart)

    const [ choices, setChoices ] = useState([

        {
            id: 1,
            price: 799,
            subClass: 'price1',
            heat: 'mild',
            description: 'For the big dreamers, who just need a little more time. . . '
        },
        {
            id: 2,
            price: 799,
            subClass: 'price2',
            heat: 'medium',
            description: 'Just the right amount of kick, while still packing all the flavor.'
        },
        {
            id: 3,
            price: 799,
            subClass: 'price3',
            heat: 'hott',
            description: 'Soo hot, it needed an extra T . . .'
        }
    ]);

    const [ chosen, setChosen ] = useState([])

    return (

        <div className="home-page">
            <Nav cart={cart} history={history} />
            <Overlay />
            <ItemChoices
                history={history}
                location={location}
                choices={choices}
                chosen={chosen}
                setChosen={setChosen}
                cart={cart}
                setCart={setCart}
            />
            <Footer />
        </div>
    )
}